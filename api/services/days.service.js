import { dayModel } from "../models/Days.js";
import GenericQueries from "./genericQueries.js";

export default class DayService extends GenericQueries {
    constructor(dao) {
        super(dao, dayModel);
    }

    getActive = async () => {
        if (!this.dao.models[this.model]) throw new Error(`Entity ${entity} not found or defined`)
        let result = await this.dao.models[this.model].findOne({ active: true });
        return result ? result.toObject() : null;
    }
}