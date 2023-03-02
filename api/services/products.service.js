import { productModel } from '../models/Products.js';
import GenericQueries from './genericQueries.js'

export default class ProductService extends GenericQueries {
    constructor(dao) {
        super(dao, productModel);
    }

    getAll = async () => {
        if (!this.dao.models[this.model]) throw new Error(`Entity ${entity} not found or defined`)
        let results = await this.dao.models[this.model].find().sort({name:'asc'});
        return results.map(result => result.toObject())
    }
}