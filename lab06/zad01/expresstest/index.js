const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const api = require("./routes/api/");
const other = require("./routes/other/");

// obsługujemy dane typu application/json
app.use(express.json());
// oraz dane typu application/x-www-form-urlencoded
// express.urlencoded „pod maską” wykorzystuje body-parser
app.use(express.urlencoded({ extended: true }));

app.use("/api", api);
app.use("/other", other);

// na koniec wyłapujemy nieobsłużone żądania – np.
app.use((_req, res, _next) => {
    res.status(404).json({
        code: 123,
        message: "Błąd: no tego to akurat tu się zrobić nie da…"
    });
});

app.listen(port, () => {
    console.log(`Express działa na porcie ${port}`);
});
