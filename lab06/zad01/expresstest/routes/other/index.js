const express = require("express");
const router = express.Router();

// do routera możemy dodać „middleware”
router.use((_req, _res, next) => {
    console.log("To ja, mydlłer!");
    next();
});

// dodatkowa (prosta) obsługa parametrów żądania
router.param("id", (req, _res, next, id) => {
    console.log("Obsługa id – wywoływana co najwyżej raz w cyklu „żądanie-odpowiedź”");
    req.bond = (id === "007");
    next();
});

router.get("/users/:id", (req, res, next) => {
    res.send((req.bond ? "Bond, James Bond…" : "Jakiś „zwykły Kowalski”…"));
    next();
});

router.get("/users/:id", (req, res) => {
    res.end("Identyfikator: " + req.params.id);
});

// Parametr opisany wyrażeniem regularnym
router.get(/\/products\/([^/]+)\/?$/, (req, res, _next) => {
    res.send(`Żądany produkt: „${req.params[0]}”`);
});

router.get(/\/test([a-z1-9]*)$/, (req, res, _next) => {
    res.send(`Dopasowany element: „${req.params[0]}”`);
});


// Nazwany parametr
router.get("/services/:serviceId", (req, res, _next) => {
    res.send(`Żądana usługa: „${req.params.serviceId}”`);
});

// Nazwany parametr opisany wyrażeniem regularnym
router.get("/items/:itemId(\\d+)", (req, res, _next) => {
    res.send(`Żądany element: „${req.params.itemId}”`);
});

// UWAGA: niestety w takich wyr.reg. „*” oznacza „cokolwiek”!!!
router.get("/a/:arg([a-z9]*$)", (req, res, _next) => {
    res.send(`Dopasowany element: „${req.params.arg}”`);
});

// wynika to z zastosowanego narzędzia TXT ==> REXP
// zamiast „*” należy użyć „obejścia” – „{0,}”
router.get("/b/:arg([a-z9]{0,}$)", (req, res, _next) => {
    res.send(`Dopasowany element: „${req.params.arg}”`);
});

module.exports = router;
