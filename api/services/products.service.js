import { productModel } from '../models/Products.js';
import GenericQueries from './genericQueries.js'

export default class ProductService extends GenericQueries {
    constructor(dao) {
        super(dao, productModel);
    }

    getAll = async (sort, color) => {
        if (!this.dao.models[this.model]) throw new Error(`Entity ${entity} not found or defined`)
        let results = await this.dao.models[this.model].find(color ? { color } : {}).sort(sort ? { [sort]: 'asc' } : { name: 'asc' });
        return results.map(result => result.toObject())
    }
}