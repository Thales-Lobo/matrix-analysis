// src/App.tsx

import React, { useState } from 'react';
import MatrixInput from './components/MatrixInput';
import MatrixOperations from './components/MatrixOperations';
import { Complex } from './utils/complex';

const App: React.FC = () => {
    const [matrixA, setMatrixA] = useState<Complex[][]>([]);
    const [matrixB, setMatrixB] = useState<Complex[][]>([]);

    return (
        <div>
            <h1>Matrix Operations with Complex Numbers</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <MatrixInput matrixName="Matrix A" setMatrix={setMatrixA} />
                <MatrixInput matrixName="Matrix B" setMatrix={setMatrixB} />
            </div>
            <MatrixOperations matrixA={matrixA} matrixB={matrixB} />
        </div>
    );
};

export default App;
