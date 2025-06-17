import './App.css';
import { useState, useEffect } from 'react';

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

    return (
        <>
            <button className="button" onClick={() => setReload(prev => prev + 1)}>Refresh Cats</button>
            <div className="Gallery">
                {catImages.map((catImage, index) =>
                    <div className="catImageWrapper" key={catImage.id}>
                        <img
                            className="catImg"
                            src={catImage.url}
                            alt={catImage.id}
                            onClick={() => onImageClick(index, catImages)}
                        />
                    </div>
                )}
            </div>
        </>
    );
}

function Header() {
    return (
        <h1 className="header">Welcome to the world of Cats!</h1>
    )
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
