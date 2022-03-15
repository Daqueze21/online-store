const uuid = require('uuid')
const path = require('path');
const { Products, ProductInfo } = require('../models/models');
const ApiError = require('../errors/ApiError');

class ProductsController {
  async create(req, res, next) {
    
    try {
      let { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = `${uuid.v4()}.jpg`;
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const product = await Products.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) =>
          ProductInfo.create({
            title: i.title,
            description: i.description,
            productsId: product.id,
          })
        );
      }

        
        
        return res.json(product)
    } catch (e) {
        next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    let { brandId, typeId, limit, page } = req.query;
    page = page || 1
    limit = limit || 9
    let offset = page * limit - limit
    let products;
    if (!brandId && !typeId) {
      products = await Products.findAndCountAll({ limit, offset });
    }
    if (brandId && !typeId) {
      products = await Products.findAndCountAll({
        where: { brandId },
        limit,
        offset,
      });
    }
    if (!brandId && typeId) {
      products = await Products.findAndCountAll({
        where: { typeId },
        limit,
        offset,
      });
    }
    if (brandId && typeId) {
        products = await Products.findAndCountAll({
          where: { typeId, brandId },
          limit,
          offset,
        });
    }
    return res.json(products);
  }

  async getOne(req, res) {
    const {id} = req.params
    const product = await Products.findOne({
      where: { id },
      include: [{ model: ProductInfo, as: 'info' }],
    });
    return res.json(product);
  }
}

module.exports = new ProductsController();
