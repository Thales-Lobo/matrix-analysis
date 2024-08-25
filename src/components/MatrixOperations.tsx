// src/components/MatrixOperations.tsx

import React, { useState } from 'react';
import { Complex } from '../utils/complex';
import { addMatrices, subtractMatrices, multiplyMatrices } from '../utils/matrixOperations';

interface MatrixOperationsProps {
    matrixA: Complex[][];
    matrixB: Complex[][];
}

const MatrixOperations: React.FC<MatrixOperationsProps> = ({ matrixA, matrixB }) => {
    const [resultMatrix, setResultMatrix] = useState<Complex[][]>([]);

    const handleAddition = () => {
        setResultMatrix(addMatrices(matrixA, matrixB));
    };

    const handleSubtraction = () => {
        setResultMatrix(subtractMatrices(matrixA, matrixB));
    };

    const handleMultiplication = () => {
        setResultMatrix(multiplyMatrices(matrixA, matrixB));
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
                {resultMatrix.length > 0 && resultMatrix.map((row, i) => (
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
