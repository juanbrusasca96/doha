import { dayModel } from "../models/Days.js";
import GenericQueries from "./genericQueries.js";

export default class DayService extends GenericQueries {
    constructor(dao) {
        super(dao, dayModel);
    }
}