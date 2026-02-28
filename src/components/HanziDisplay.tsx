import "./HanziDisplay.css"
import type {VocabType} from "../App.tsx";
import {useEffect, useState} from "react";

function HanziDisplay({ vocab }: { vocab: VocabType }) {
    const [ showHanzi, setShowHanzi ] = useState<boolean>(false);

    useEffect(() => {    
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key.toLowerCase() === "x") {
                setShowHanzi(prev => !prev);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    useEffect(() => {
        setShowHanzi(false)
    }, [vocab])
    

    return (
        <div className="display-container">
            <div>
                <button onClick={() => setShowHanzi(!showHanzi)} className="show-hide-btn">{ showHanzi ? "Hide" : "Show" } (x)</button>
                <div className={`hanzi ${showHanzi ? 'show' : 'hidden'}`}><span>{ vocab.hanzi }</span></div>
                <div className="pinyin">{ vocab.pinyin }</div>
                <div className="english">{ vocab.english }</div>
            </div>
        </div>
    )
}

export default HanziDisplay;