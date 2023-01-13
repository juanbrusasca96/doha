import Product from '../models//Product.js'
import GenericQueries from './genericQueries.js'

export default class ProducService extends GenericQueries {
    constructor(dao) {
        super(dao, Product.model);
    }
}