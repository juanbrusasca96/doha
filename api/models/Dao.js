import mongoose, { mongo } from 'mongoose'
import productSchema, { productModel } from './Products.js'
import tableSchema, { tableModel } from './Tables.js';
import userSchema, { userModel } from './Users.js';

export default class Dao {
    constructor(config) {
        this.mongoose = mongoose.connect(config.url, { useNewUrlParser: true, useUnifiedTopology: true }).catch(error => {
            console.error(error);
            process.exit();
        })
        this.models = {
            [productModel]: mongoose.model(productModel, productSchema),
            [userModel]: mongoose.model(userModel, userSchema),
            [tableModel]: mongoose.model(tableModel, tableSchema),
        }
    }

    findOne = async (options, entity) => {
        if (!this.models[entity]) throw new Error(`Entity ${entity} not found or defined`)
        let result = await this.models[entity].findOne(options);
        return result ? result.toObject() : null;
    }

    getAll = async (options, entity) => {
        if (!this.models[entity]) throw new Error(`Entity ${entity} not found or defined`)
        let results = await this.models[entity].find(options);
        return results.map(result => result.toObject())
    }

    insert = async (document, entity) => {
        if (!this.models[entity]) throw new Error(`Entity ${entity} not found or defined`)
        try {
            let instance = new this.models[entity](document);
            let result = await instance.save();
            return result ? result.toObject : null;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    update = async (document, entity) => {
        if (!this.models[entity]) throw new Error(`Entity ${entity} not found or defined`)
        let id = document._id;
        delete document._id;
        let result = await this.models[entity].findByIdAndUpdate(id, { $set: document }, { new: true })
        return result.toObject();
    }

    delete = async (id, entity) => {
        if (!this.models[entity]) throw new Error(`Entity ${entity} not found or defined`)
        let result = await this.models[entity].findByIdAndDelete(id);
        return result ? result.toObject() : null;
    }

    exists = async (entity, options) => {
        if (!this.models[entity]) throw new Error(`Entity ${entity} not found or defined`)
        return this.models[entity].exists(options);
    }
}