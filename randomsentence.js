// randomsentence.js
// This file contains the React component for the random sentence generator,
// and also handles its own mounting to the DOM.

// React and ReactDOM are assumed to be globally available because they are loaded
// via CDN scripts in index.html BEFORE this script.
// Therefore, we do NOT use 'import React, { useState } from 'react';' here.

const WORDS = [
    "the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog",
    "a", "bright", "sunny", "day", "makes", "everyone", "happy", "smile",
    "coding", "is", "fun", "and", "challenging", "always", "learn", "new", "things",
    "mountains", "rivers", "forests", "nature", "is", "beautiful", "explore", "discover",
    "music", "fills", "the", "air", "with", "joy", "rhythm", "melody", "sound",
    "books", "stories", "knowledge", "imagination", "travel", "through", "words", "pages",
    "coffee", "tea", "water", "drinks", "refreshing", "energy", "morning", "evening",
    "friends", "family", "love", "laughter", "together", "moments", "cherish", "memories",
    "stars", "galaxy", "universe", "space", "mystery", "wonder", "explore", "beyond",
    "future", "innovation", "technology", "progress", "build", "create", "design", "evolve"
];

// Main App component for the Random Sentence Generator
const App = () => {
    // State to hold the generated sentence, using React.useState directly
    const [sentence, setSentence] = React.useState('');

    /**
     * Generates a random integer within a specified range.
     * @param {number} min - The minimum value (inclusive).
     * @param {number} max - The maximum value (inclusive).
     * @returns {number} A random integer.
     */
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    /**
     * Selects a random element from an array.
     * @param {Array} arr - The array to select from.
     * @returns {*} A random element from the array.
     */
    const getRandomElement = (arr) => {
        return arr[getRandomInt(0, arr.length - 1)];
    };

    /**
     * Generates a random sentence of a specified length.
     * @param {number} length - The desired length of the sentence in words.
     */
    const generateSentence = () => {
        const sentenceLength = 7; // Fixed sentence length as requested
        const newWords = [];
        for (let i = 0; i < sentenceLength; i++) {
            newWords.push(getRandomElement(WORDS));
        }
        // Capitalize the first word and add a period at the end
        let generated = newWords.join(' ');
        generated = generated.charAt(0).toUpperCase() + generated.slice(1);
        generated += '.';
        setSentence(generated);
    };

    // The return statement uses JSX, which Babel will transpile.
    return (
        <div className="p-8 rounded-xl shadow-2xl bg-white w-full max-w-lg text-center border-4 border-blue-300">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    Random Sentence Generator
                </span>
            </h1>
            <p className="text-gray-600 mb-8">
                Click the button to generate a new 7-word random sentence!
            </p>
            <button
                onClick={generateSentence}
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:-translate-y-0.5"
            >
                Generate Sentence
            </button>
            {sentence && (
                <div className="mt-8 p-6 bg-blue-50 text-blue-900 rounded-lg shadow-inner text-lg font-medium break-words">
                    {sentence}
                </div>
            )}
            {!sentence && (
                <div className="mt-8 p-6 bg-gray-50 text-gray-500 rounded-lg shadow-inner italic">
                    Your random sentence will appear here.
                </div>
            )}
        </div>
    );
};

// --- Mounting Logic ---
// This part runs after the App component is defined and Babel has processed it.
// It directly mounts the App component to the 'root' div in index.html.
const container = document.getElementById('root');
// Check if container exists before creating root to prevent errors if DOM isn't ready
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(React.createElement(App)); // Use React.createElement directly
    console.log("Random Sentence Generator app mounted successfully from randomsentence.js!");
} else {
    console.error("Could not find root element to mount React app.");
}
