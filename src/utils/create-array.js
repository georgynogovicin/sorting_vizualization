const randomIntfromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const createArray = (arrLength) => {
    const arr = [];

    for (let i = 0; i < arrLength; i++) {
        arr.push(randomIntfromInterval(30, 600))
    }

    return arr;
}