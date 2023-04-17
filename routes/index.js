const express = require('express');
const router = express.Router();

//define routes
router.get('/',(req,res)=> {
    res.render('index.html');
})

module.exports = router;