// src/utils/complex.ts

export class Complex {
    real: number;
    imaginary: number;

    constructor(real: number, imaginary: number) {
        this.real = real;
        this.imaginary = imaginary;
    }

    static fromString(input: string): Complex {
        const regex = /([-+]?\d*\.?\d+)\s*([-+])\s*(\d*\.?\d+)[ij]/;
        const match = input.match(regex);

        if (!match) {
            throw new Error("Invalid complex number format.");
        }

        const realPart = parseFloat(match[1]);
        const sign = match[2];
        const imaginaryPart = parseFloat(match[3]) * (sign === "-" ? -1 : 1);

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
