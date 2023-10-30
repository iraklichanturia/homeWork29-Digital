// equation = 3x^2 + 2x – 5 = 0;
// let x1, x2;

const a = 3;
const b = 2;
const c = -5;

const discriminant = b * b - 4 * a * c;

if (discriminant > 0) {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log("equation solutions is");
    console.log("x1 =", x1);
    console.log("x2 =", x2);
} else if (discriminant === 0) {
    const x1 = -b / (2 * a);
    console.log("equation solution x1 is " + x1);
} else {
    console.log("Does not have real solution");
}


