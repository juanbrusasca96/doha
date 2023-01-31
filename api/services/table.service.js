import { tableModel } from "../models/Tables.js";
import GenericQueries from "./genericQueries.js";

export default class TableService extends GenericQueries{
    constructor(dao){
        super(dao, tableModel)
    }
}