// src/components/MatrixOperations.tsx

import React, { useState } from 'react';
import { Complex } from '../utils/complex';
import { addMatrices, subtractMatrices, multiplyMatrices } from '../utils/matrixOperations';

interface MatrixOperationsProps {
    matrixA: Complex[][];
    matrixB: Complex[][];
}

const MatrixOperations: React.FC<MatrixOperationsProps> = ({ matrixA, matrixB }) => {
    const [resultMatrix, setResultMatrix] = useState<Complex[][] | null>(null);

    const handleAddition = () => {
        if (matrixA.length > 0 && matrixB.length > 0) {
            setResultMatrix(addMatrices(matrixA, matrixB));
            console.log("Matrix A:", matrixA);
            console.log("Matrix B:", matrixB);
            console.log("Result Matrix:", resultMatrix);
        }
    };

    const handleSubtraction = () => {
        if (matrixA.length > 0 && matrixB.length > 0) {
            setResultMatrix(subtractMatrices(matrixA, matrixB));
            console.log("Matrix A:", matrixA);
            console.log("Matrix B:", matrixB);
            console.log("Result Matrix:", resultMatrix);
        }
    };

    const handleMultiplication = () => {
        if (matrixA.length > 0 && matrixB.length > 0) {
            setResultMatrix(multiplyMatrices(matrixA, matrixB));
            console.log("Matrix A:", matrixA);
            console.log("Matrix B:", matrixB);
            console.log("Result Matrix:", resultMatrix);
        }
    };

    return (
        <div>
            <div>
                <button onClick={handleAddition}>Add</button>
                <button onClick={handleSubtraction}>Subtract</button>
                <button onClick={handleMultiplication}>Multiply</button>
            </div>
            <div>
                <h2>Result Matrix</h2>
                {resultMatrix && resultMatrix.map((row, i) => (
                    <div key={i}>
                        {row.map((val, j) => (
                            <span key={j}>{val.toString()} </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MatrixOperations;
