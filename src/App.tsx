import {useEffect, useState} from "react";
import HanziDisplay from "./components/HanziDisplay.tsx";
import data from "./assets/data.ts";
import './App.css'

export type VocabType = {
    hanzi: string,
    pinyin: string,
    english: string
}

function App() {
    const [ currentVocab, setCurrentVocab ] = useState<VocabType>({ hanzi: "", pinyin: "", english: "" });
    const [ started, setStarted ] = useState(false)
    const vocab = data.hsk1

    const randomHanzi = () => {
        const randomIndex = Math.floor(Math.random() * vocab.length);

        return vocab[randomIndex];
    }

    useEffect(() => {
        setCurrentVocab(randomHanzi())

        const handleKeyDown = () => {
            setCurrentVocab(randomHanzi());
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div style={{ height: "100%" }}>
            <h1>HSK 1 Vocab</h1>

            {
                started ?
                    <>
                        <HanziDisplay vocab={currentVocab}/>
                        <button onClick={() => setCurrentVocab(randomHanzi())}>Randomize</button>
                    </>
                    :
                    <button onClick={() => setStarted(true)}>Start</button>
            }
        </div>
    )
}

export default App
