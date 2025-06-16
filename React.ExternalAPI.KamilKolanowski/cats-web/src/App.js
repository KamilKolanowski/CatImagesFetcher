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

function CatGallery({ limit = 16 }) {
    const [reload, setReload] = useState(0);
    const catImages = useCatImages(limit, reload);

    return (
        <>
            <button className="button" onClick={() => setReload(prev => prev + 1)}>Refresh Cats</button>
            <div className="Gallery">
                {catImages.map(catImage =>
                    <div className="catImageWrapper" key={catImage.id}>
                        <a href={catImage.url} target="_blank" rel="noopener noreferrer">
                            <img
                                className="catImg"
                                src={catImage.url}
                                alt={catImage.id}
                                width={catImage.width}
                                height={catImage.height}
                            />
                        </a>
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
    return (
        <div className="App">
            <Header />
            <CatGallery limit={LIMIT} />
            <Footer />
        </div>
    );
}