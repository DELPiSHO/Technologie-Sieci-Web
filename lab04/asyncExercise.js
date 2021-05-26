const fakeRequest = (url, cb) => {
    const responses = {
        "file1": "The first text",
        "file2": "The middle text",
        "file3": "The last text"
    };
    const randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

    console.log("Pobieram: " + url);

    setTimeout(() => {
        cb(responses[url]);
    }, randomDelay);
}

const output = (text) => {
    console.log(text);
}

// zmodyfikuj poniższą definicję wykorzystując pojęcie „domknięcia” (por. wykład)
const getFile = (function () {
    const responses = {};
    return (file) => {
        fakeRequest(file, (text) => {
        // Uzupełnij tutaj
        });
    };
})();

// żądania
getFile("file1");
getFile("file2");
getFile("file3");
