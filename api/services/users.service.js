import { userModel } from "../models/Users.js";
import GenericQueries from "./genericQueries.js";

export default class UserService extends GenericQueries {
    constructor(dao) {
        super(dao, userModel)
    }
}