const router = require("express").Router();
const db = require("../models");

router.get("/recipes", (req, res) => {
    console.log(req.query.q);
    // Use a regular expression to search titles for req.query.q
    // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
    db.Recipe.find({
        title: { $regex: new RegExp(req.query.q, 'i')}
    })
        .then(recipes => { console.log(recipes); res.json(recipes) })
        .catch(err => res.status(422).end());
});

module.exports = router;
