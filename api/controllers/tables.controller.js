import { tableService } from "../services/services.js";


const getAllTables = async (req, res) => {
    let tables = await tableService.getAll();
}

const getTableById = async (req, res) => {
    let id = req.params.pid;
    try {
        let table = await tableService.getBy({ _id: id })
        if (!table) res.status(400).send({ status: "error", error: "Not found" })
        res.send({ status: "success", payload: table })
    } catch (error) {
        console.log(error);
    }
}

const saveTable = async (req, res) => {
    let { total, date, name, idProducts, active } = req.body;
    if (!total || !date || !name || !idProducts || !active) return res.status(400).send({ status: "error", error: "Imcomplete values" });
    await tableService.save({
        total, 
        date, 
        name, 
        idProducts, 
        active
    })
    res.send({ status: "success", message: "Table added" })
}

const updateTable = async (req, res) => {
    let { pid } = req.params;
    let content = req.body;
    let table = await tableService.getBy({ _id: pid })
    if (!table) res.status(404).send({ status: "error", error: "Not found" })
    await tableService.update(pid, content)
    res.send({ status: "success", message: "Table updated" })
}

const deleteTable = async (req, res) => {
    let { pid } = req.params;
    let table = await tableService.getBy({ _id: pid })
    if (!table) return res.status(404).send({ status: "error", error: "Not found" })
    await tableService.delete(pid)
    res.send({ status: "success", message: "Table deleted" })
}

export default {
    getAllTables,
    getTableById,
    saveTable,
    updateTable,
    deleteTable
}