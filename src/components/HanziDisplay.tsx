import "./HanziDisplay.css"
import type {VocabType} from "../App.tsx";
import {useState} from "react";

function HanziDisplay({ vocab }: { vocab: VocabType }) {
    const [ showHanzi, setShowHanzi ] = useState<boolean>(false);

    return (
        <div className="display-container">
            <div>
                <button onClick={() => setShowHanzi(!showHanzi)} className="show-hide-btn">{ showHanzi ? "Hide" : "Show" }</button>
                <div className={`hanzi ${showHanzi ? 'show' : 'hidden'}`}><span>{ vocab.hanzi }</span></div>
                <div className="pinyin">{ vocab.pinyin }</div>
                <div className="english">{ vocab.english }</div>
            </div>
        </div>
    )
}

export default HanziDisplay;