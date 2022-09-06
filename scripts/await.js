// Top-level await
const jokeResponse = await fetch('https://api.chucknorris.io/jokes/random');

const message = () => {
    return jokeResponse.value;
};

export default message;