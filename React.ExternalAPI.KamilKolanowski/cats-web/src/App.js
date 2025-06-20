import React, { useState, useEffect } from 'react';
import './App.css';

function useCatImages(limit = 16, reload = 0) {
    const [catImages, setCatImages] = useState([]);

    useEffect(() => {
        async function fetchCats() {
            try {
                const resp = await fetch(`http://localhost:5220/api/cats?limit=${limit}`);
                const data = await resp.json();
                setCatImages(data);
            } catch {
                setCatImages([]);
            }
        }
        fetchCats();
    }, [limit, reload]);
    return catImages;
}

function CatGallery({ limit = 16, onImageClick }) {
    const [reload, setReload] = useState(0);
    const catImages = useCatImages(limit, reload);
    const [loadedIds, setLoadedIds] = useState(new Set());
    const [timeoutExpired, setTimeoutExpired] = useState(false);

    useEffect(() => {
        setLoadedIds(new Set());
        setTimeoutExpired(false);

        const timer = setTimeout(() => setTimeoutExpired(true), 10000);
        return () => clearTimeout(timer);
    }, [catImages]);

    const handleImageLoad = (id) => {
        setLoadedIds(prev => new Set([...prev, id]));
    };

    const allLoaded = catImages.length > 0 && loadedIds.size >= catImages.length;

    useEffect(() => {
        console.log('Loaded images:', loadedIds.size, '/', catImages.length);
    }, [loadedIds, catImages]);

    return (
        <>
            <button className="button" onClick={() => setReload(prev => prev + 1)}>Refresh Cats</button>
            <div className="spinner-container">
                {(!allLoaded && !timeoutExpired && catImages.length > 0) && <div className="loader"></div>}
            </div>
            <div className="Gallery">
                {catImages.map((catImage, index) => {
                    return (
                        <div className="catImageWrapper" key={catImage.url}>
                            <img
                                className="catImg"
                                src={`${catImage.url}?t=${reload}`}
                                alt={`Cat ${index}`}
                                onClick={() => onImageClick(index, catImages)}
                                onLoad={() => handleImageLoad(catImage.url)}
                                onError={() => handleImageLoad(catImage.url)}
                                style={{ display: 'block' }}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
}

function Header() {
    return (
        <h1 className="header">Welcome to the world of Cats!</h1>
    );
}

function Footer() {
    return (
        <div className="footer">
            <footer>Designed by Kamil Kolanowski © 2025</footer>
        </div>
    );
}

export default function App() {
    const LIMIT = 16;
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleImageClick = (index, imageList) => {
        setImages(imageList);
        setCurrentIndex(index);
    };

    const closeModal = () => setCurrentIndex(null);
    const showPrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    const showNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);

    return (
        <div className="App">
            <Header />
            <CatGallery limit={LIMIT} onImageClick={handleImageClick} />
            {currentIndex !== null && (
                <div className="modal" onClick={closeModal}>
                    <button className="nav left" onClick={(e) => { e.stopPropagation(); showPrev(); }}>&larr;</button>
                    <img className="modal-img" src={images[currentIndex].url} alt="Full size" onClick={(e) => e.stopPropagation()} />
                    <button className="nav right" onClick={(e) => { e.stopPropagation(); showNext(); }}>&rarr;</button>
                </div>
            )}
            <Footer />
        </div>
    );
}