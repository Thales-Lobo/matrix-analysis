 // src/utils/matrixOperations.ts

 import { Complex } from './complex';

 export const addMatrices = (A: Complex[][], B: Complex[][]): Complex[][] => {
     return A.map((row, i) =>
         row.map((val, j) => val.add(B[i][j]))
     );
 };
 
 export const subtractMatrices = (A: Complex[][], B: Complex[][]): Complex[][] => {
     return A.map((row, i) =>
         row.map((val, j) => val.subtract(B[i][j]))
     );
 };
 
 export const multiplyMatrices = (A: Complex[][], B: Complex[][]): Complex[][] => {
     const result: Complex[][] = Array(A.length).fill(null).map(() =>
         Array(B[0].length).fill(new Complex(0, 0))
     );
 
     for (let i = 0; i < A.length; i++) {
         for (let j = 0; j < B[0].length; j++) {
             for (let k = 0; k < B.length; k++) {
                 result[i][j] = result[i][j].add(A[i][k].multiply(B[k][j]));
             }
         }
     }
 
     return result;
 };
 