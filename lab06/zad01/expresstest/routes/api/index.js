const express = require("express");
const router = express.Router();

router.route("/:id")
    .post((req, res) => {
        // dostęp do danych żądania dla metody POST
        req.body.task = "UPDATE";
        req.body.id = req.params.id;
        res.json(req.body);
    })
    .delete((req, res) => {
        let id = req.params.id;
        res.json({
            "task": "DELETE",
            id
        });
    });
router.route("/:id/:el")
    .post((req, res) => {
        // dostęp do danych żądania dla metody POST
        req.body.task = "STRANGE";
        req.body.id = req.params.id;
        req.body.el = req.params.el;
        res.json(req.body);
    })



module.exports = router;
