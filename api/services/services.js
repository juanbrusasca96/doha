import Dao from '../models/Dao.js';
import ProductService from './products.service.js';
import config from '../config/config.js';
import UserService from './users.service.js';
import TableService from './table.service.js';
import PurchaseService from './purchases.service.js';
import DayService from './days.service.js';

const dao = new Dao(config.mongo);

export const productService = new ProductService(dao);
export const userService = new UserService(dao);
export const tableService = new TableService(dao);
export const purchaseService = new PurchaseService(dao);
export const dayService = new DayService(dao);