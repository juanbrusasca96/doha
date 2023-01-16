import { productModel } from '../models/Products.js';
import GenericQueries from './genericQueries.js'

export default class ProducService extends GenericQueries {
    constructor(dao) {
        super(dao, productModel);
    }
}