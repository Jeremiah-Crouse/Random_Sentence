// randomsentence.js
// This file contains the React component for the random sentence generator.

// Import React and its hooks (useState, useEffect) from the global React object.
import React, { useState } from 'react';

// A simple list of words for generating random sentences.
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
    // State to hold the generated sentence
    const [sentence, setSentence] = useState('');

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

    return React.createElement(
        'div',
        { className: 'p-8 rounded-xl shadow-2xl bg-white w-full max-w-lg text-center border-4 border-blue-300' },
        React.createElement(
            'h1',
            { className: 'text-4xl font-extrabold text-gray-900 mb-6' },
            React.createElement(
                'span',
                { className: 'bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600' },
                'Random Sentence Generator'
            )
        ),
        React.createElement(
            'p',
            { className: 'text-gray-600 mb-8' },
            'Click the button to generate a new 7-word random sentence!'
        ),
        React.createElement(
            'button',
            {
                onClick: generateSentence,
                className: 'w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:-translate-y-0.5'
            },
            'Generate Sentence'
        ),
        sentence && React.createElement(
            'div',
            { className: 'mt-8 p-6 bg-blue-50 text-blue-900 rounded-lg shadow-inner text-lg font-medium break-words' },
            sentence
        ),
        !sentence && React.createElement(
            'div',
            { className: 'mt-8 p-6 bg-gray-50 text-gray-500 rounded-lg shadow-inner italic' },
            'Your random sentence will appear here.'
        )
    );
};

// Export the App component as default so it can be imported by index.html
export default App;
