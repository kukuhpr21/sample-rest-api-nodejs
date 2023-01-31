const productsRepository = require('../repositories/products.repository');
const response = require('../helpers/response');

async function all() {
    try {
        const products = await productsRepository.all();

        if (products.length > 0) {
            return response.layer(true, 200, "product already exist", products);
        } else {
            return response.layer(false, 404, "product not exist");
        }
    } catch(error) {
        return response.layer(false, 500, "internal server error", { error: error.message });
    }
}

async function findById(req) {
    try {
        const product = await productsRepository.findById(req.params.id);

        if (product) {
            return response.layer(true, 200, "product already exist", product);
        } else {
            return response.layer(false, 404, "product not found");
        }
    } catch(error) {
        return response.layer(false, 500, "internal server error", { error: error.message });
    }
}

async function save(req) {
    try {
        const product = await productsRepository.save(req.body.name);

        if (product) {
            return response.layer(true, 201, "success create product", product);
        } else {
            return response.layer(false, 404, "failed create product");
        }
    } catch(error) {
        return response.layer(false, 500, "internal server error", { error: error.message });
    }
}

async function update(req) {
    try {
        let product = await productsRepository.findById(req.params.id);

        if (product) {
            
            product = await productsRepository.update(req.params.id, req.body.name);

            if (product == 0) {
                return response.layer(false, 200, "no data changes");
            } else if (product == 1) { 
                return response.layer(true, 200, "success update product");
            } else {
                return response.layer(false, 404, "failed update product");
            }
        } else {
            return response.layer(false, 404, "product not found");
        }
    } catch(error) {
        return response.layer(false, 500, "internal server error", { error: error.message });
    }
}

async function remove(req) {
    try {
        let product = await productsRepository.findById(req.params.id);
        
        if (product) {

            product = await productsRepository.remove(req.params.id);
    
            if (product) {
                return response.layer(true, 200, "success remove product");
            } else {
                return response.layer(false, 404, "product not found");
            }
        } else {
            return response.layer(false, 404, "product not found");
        }
    } catch(error) {
        return response.layer(false, 500, "internal server error", { error: error.message });
    }
}

module.exports = {
    all,
    findById,
    save,
    update,
    remove
}