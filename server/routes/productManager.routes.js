const productManager = require('../controllers/productManager.controller');
module.exports = function(app){
    app.get('/api', productManager.index);
    app.post('/api/product',productManager.createProduct)
}