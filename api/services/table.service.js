import { tableModel } from "../models/Table.js";
import GenericQueries from "./genericQueries.js";

export default class TableService extends GenericQueries{
    constructor(dao){
        super(dao, tableModel)
    }
}