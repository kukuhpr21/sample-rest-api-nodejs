const productsService = require('../services/products.service');
const response = require('../helpers/response');

const all = async (req, res, next) => {
    const result = await productsService.all();
    response.client(res, result.status, result.message, result.data);
}
const findById = async (req, res, next) => {
    const result = await productsService.findById(req);
    response.client(res, result.status, result.message, result.data);
}
const save = async (req, res, next) => {
    const result = await productsService.save(req);
    response.client(res, result.status, result.message, result.data);
}
const update = async (req, res, next) => {
    const result = await productsService.update(req);
    response.client(res, result.status, result.message, result.data);
}
const remove = async (req, res, next) => {
    const result = await productsService.remove(req);
    response.client(res, result.status, result.message, result.data);
}

module.exports = {
    all,
    findById,
    save,
    update,
    remove
}
