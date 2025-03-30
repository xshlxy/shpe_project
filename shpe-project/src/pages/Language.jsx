import { useState, useEffect } from "react";
import { fetchFlashcards } from "../client";

const Language = () => {
    const [flashcards, setFlashcards] = useState([]);

    useEffect(() => {
        fetchFlashcards().then((data) => 
            setFlashcards(data));
    }, []);

    return (
        <>
            <h1>Flashcard</h1>
            <div>
                {flashcards.map((flashcard) => (
                    <div key={flashcard.id}>
                        <h2>{flashcard.english_word}</h2>
                        <p>{flashcard.spanish_word}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Language;