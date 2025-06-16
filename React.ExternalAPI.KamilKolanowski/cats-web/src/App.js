import './App.css';
import { useState } from 'react';

const catImages =  // functionToGetImagesUrlsFromApi();
    [
        {"id":"oe","url":"https://cdn2.thecatapi.com/images/oe.jpg","width":358,"height":600},
        {"id":"17o","url":"https://cdn2.thecatapi.com/images/17o.jpg","width":500,"height":333},
        {"id":"19r","url":"https://cdn2.thecatapi.com/images/19r.gif","width":240,"height":169},
        {"id":"7vi","url":"https://cdn2.thecatapi.com/images/7vi.gif","width":200,"height":158},
        {"id":"boe","url":"https://cdn2.thecatapi.com/images/boe.jpg","width":640,"height":427},
        {"id":"d4j","url":"https://cdn2.thecatapi.com/images/d4j.gif","width":489,"height":400},
        {"id":"d7p","url":"https://cdn2.thecatapi.com/images/d7p.jpg","width":612,"height":612},
        {"id":"d8t","url":"https://cdn2.thecatapi.com/images/d8t.jpg","width":2448,"height":3264},
        {"id":"MTcyMTg2Ng","url":"https://cdn2.thecatapi.com/images/MTcyMTg2Ng.jpg","width":467,"height":700},
        {"id":"FZpeiLi4n","url":"https://cdn2.thecatapi.com/images/FZpeiLi4n.jpg","width":1260,"height":840},
        {"id":"FTd8l4EXq","url":"https://cdn2.thecatapi.com/images/FTd8l4EXq.jpg","width":2880,"height":1800},
        {"id":"MTYzNTg1Ng","url":"https://cdn2.thecatapi.com/images/MTYzNTg1Ng.jpg","width":720,"height":960},
    ]


const catImagesUrls = catImages.map(catImages =>
    <div className="catImageWrapper" key={catImages.id}>
        <a href={catImages.url} target="_blank" rel="noopener noreferrer">
            <img className="catImg" src={catImages.url} alt={catImages.id}/>
        </a>
    </div>
)

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
    return (
        <div className="App">
            <Header />
            <div className="Gallery">
                {catImagesUrls}
            </div>
            <Footer />
        </div>
    );
}
