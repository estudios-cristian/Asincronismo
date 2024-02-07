const promise = new Promise((resolve, reject) => {
    resolve('Hello World');
});

const cows = 15;
const countCows = new Promise((resolve, reject) => {
    if (cows > 10) {
        resolve('We have more than 10 cows');
    } else {
        reject('We have less than 10 cows');
    }
});

const message = countCows
    .then((message) => {
        console.log(message);
    })
    .catch((message) => {
        console.log(message);
    });
