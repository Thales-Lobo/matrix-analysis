// src/components/MatrixInput.tsx

import React, { useState } from 'react';
import { Complex } from '../utils/complex';

interface MatrixInputProps {
    matrixName: string;
    setMatrix: (matrix: Complex[][]) => void;
}

const MatrixInput: React.FC<MatrixInputProps> = ({ matrixName, setMatrix }) => {
    const [rows, setRows] = useState<number>(2);
    const [cols, setCols] = useState<number>(2);

    const handleMatrixChange = (i: number, j: number, value: string) => {
        const newMatrix = Array(rows).fill(null).map((_, r) =>
            Array(cols).fill(null).map((_, c) =>
                r === i && c === j ? Complex.fromString(value) : new Complex(0, 0)
            )
        );
        setMatrix(newMatrix);
    };

    return (
        <div>
            <h2>{matrixName}</h2>
            <div>
                <label>
                    Rows:
                    <input type="number" value={rows} onChange={(e) => setRows(parseInt(e.target.value))} />
                </label>
                <label>
                    Cols:
                    <input type="number" value={cols} onChange={(e) => setCols(parseInt(e.target.value))} />
                </label>
            </div>
            <div>
                {Array(rows).fill(null).map((_, i) => (
                    <div key={i}>
                        {Array(cols).fill(null).map((_, j) => (
                            <input
                                key={j}
                                type="text"
                                placeholder="a +bi"
                                onChange={(e) => handleMatrixChange(i, j, e.target.value)}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MatrixInput;
