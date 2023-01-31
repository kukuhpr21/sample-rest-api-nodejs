const productModel = require('../models/products.model');

function all() {
    return productModel.findAll();
}

function findById(id) {
    return productModel.findOne({
        where: {
            id: id
        }
    });
}

function save(name) {
    return productModel.create({ name: name });
}

function update(id, name) {
    return productModel.update({ name: name }, {
        where: {
          id: id
        }
    });
}

function remove(id) {
    return productModel.destroy({
        where: {
          id: id
        }
    });
}

module.exports = {
    all,
    findById,
    save,
    update,
    remove
}