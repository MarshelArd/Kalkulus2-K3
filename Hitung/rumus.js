

export function dotProduct(vector1, vector2) {
    let dotProduct = 0;
    for (let i = 0; i < vector1.length; i++) {
        dotProduct += vector1[i] * vector2[i];
    }

    return dotProduct;
}

// Function to calculate the magnitude of a vector
export function magnitude(vector) {
    let sumOfSquares = 0;
    for (let i = 0; i < vector.length; i++) {
        sumOfSquares += vector[i] * vector[i];
    }
    let panjangVektor = Math.sqrt(sumOfSquares);

    return panjangVektor.toFixed(3);
}

// Function to calculate the angle between two vectors in degrees
export function angleBetweenVectors(vector1, vector2) {
    const dot = dotProduct(vector1, vector2);
    const mag1 = magnitude(vector1);
    const mag2 = magnitude(vector2);

    const cosAngle = dot / (mag1 * mag2);
    const angleInRadians = Math.acos(cosAngle);

    // Convert radians to degrees
    const angleInDegrees = (angleInRadians * 180) / Math.PI;

    return angleInDegrees.toFixed(3);
}

export function kosinusA(vector1) {
    let panjangVektor = magnitude(vector1);

    return `${vector1[0]}/${panjangVektor}`
}

export function kosinusB(vector1) {
    let panjangVektor = magnitude(vector1);

    return `${vector1[1]}/${panjangVektor}`
}
export function kosinusC(vector1) {
    let panjangVektor = magnitude(vector1);

    return `${vector1[2]}/${panjangVektor}`
}