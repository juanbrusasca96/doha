import Dao from '../models/Dao.js';
import ProductService from './products.service.js';
import config from '../config/config.js';
import UserService from './users.service.js';

const dao = new Dao(config.mongo);

export const productService = new ProductService(dao);
export const userService = new UserService(dao);