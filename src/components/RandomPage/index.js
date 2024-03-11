import React, { useState, useEffect } from 'react';
import fs from 'fs'; // Node.js file system module
import path from 'path';

function RandomDocLink() {
    const [randomFile, setRandomFile] = useState(null);

    useEffect(() => {
        const docsDirectory = path.join(__dirname, '..', 'docs'); // Path to your docs folder

        fs.readdir(docsDirectory, (err, files) => {
            if (err) {
                console.error('Error reading docs directory:', err);
            } else {
                const randomIndex = Math.floor(Math.random() * files.length);
                const selectedFile = files[randomIndex];
                setRandomFile(`/docs/${selectedFile}`); // Assuming files are directly in the 'docs' folder
            }
        });
    }, []);

    return (
        <div>
            {randomFile ? (
                <a href={randomFile}>Explore a Random Article</a>
            ) : (
                <p>Loading a random file...</p>
            )}
        </div>
    );
}

export default RandomDocLink;
