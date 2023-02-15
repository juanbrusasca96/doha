import { purchaseModel } from "../models/Purchases.js";
import GenericQueries from "./genericQueries.js";

export default class PurchaseService extends GenericQueries {
    constructor(dao) {
        super(dao, purchaseModel);
    }
}