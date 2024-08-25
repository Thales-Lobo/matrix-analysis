// src/utils/complex.ts

export class Complex {
    real: number;
    imaginary: number;

    constructor(real: number = 0, imaginary: number = 0) {
        this.real = real;
        this.imaginary = imaginary;
    }

    static fromString(input: string): Complex {
        input = input.trim();

        // Handle pure real numbers
        if (/^-?\d*\.?\d+$/.test(input)) {
            return new Complex(parseFloat(input), 0);
        }

        // Handle pure imaginary numbers
        if (/^-?\d*\.?\d*[ij]$/.test(input)) {
            const imaginaryPart = parseFloat(input.replace(/[ij]/, ''));
            return new Complex(0, imaginaryPart);
        }

        // Handle full complex numbers with flexible spacing around + or -
        const regex = /^([-+]?\d*\.?\d*)\s*([-+])\s*(\d*\.?\d*)[ij]$/;
        const match = input.match(regex);

        if (!match) {
            throw new Error(`Invalid complex number format. 
            Expected formats include:
            - a + bi (e.g., 3 + 4i)
            - a - bi (e.g., 5 - 6i)
            - a (pure real number, e.g., 7)
            - bi (pure imaginary number, e.g., 8i)

            Received: "${input}"

            Make sure there are no extra characters or spacing issues. 
            Example of valid input: "3 + 4i", "5 - 6i", "7", "8i"`);
        }

        const realPart = match[1] ? parseFloat(match[1]) : 0;
        const sign = match[2];
        const imaginaryPart = match[3] ? parseFloat(match[3]) * (sign === "-" ? -1 : 1) : 0;

        return new Complex(realPart, imaginaryPart);
    }

    toString(): string {
        const sign = this.imaginary >= 0 ? "+" : "-";
        return `${this.real} ${sign} ${Math.abs(this.imaginary)}i`;
    }

    add(other: Complex): Complex {
        return new Complex(this.real + other.real, this.imaginary + other.imaginary);
    }

    subtract(other: Complex): Complex {
        return new Complex(this.real - other.real, this.imaginary - other.imaginary);
    }

    multiply(other: Complex): Complex {
        const real = this.real * other.real - this.imaginary * other.imaginary;
        const imaginary = this.real * other.imaginary + this.imaginary * other.real;
        return new Complex(real, imaginary);
    }

    divide(other: Complex): Complex {
        const denominator = other.real ** 2 + other.imaginary ** 2;
        const real = (this.real * other.real + this.imaginary * other.imaginary) / denominator;
        const imaginary = (this.imaginary * other.real - this.real * other.imaginary) / denominator;
        return new Complex(real, imaginary);
    }
}
