const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        status: 200,
        message: "List Users"
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        status: 200,
        message: "Store User"
    });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        status: 200,
        message: "Get User By ID = " + id
    });
});

router.patch('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        status: 200,
        message: "Update User By ID = " + id
    });
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        status: 200,
        message: "Delete User By ID = " + id
    });
});

module.exports = router;