import Dao from '../models/Dao.js';
import ProducService from './products.service.js';
import config from '../config/config.js';

const dao = new Dao(config.mongo);

export const productService = new ProducService(dao);