import { dayService } from "../services/services.js";

const getAllDays = async (req, res) => {
    let days = await dayService.getAll();
    res.send({ status: "success", payload: days })
}

const getActiveDay = async (req, res) => {
    let day = await dayService.getActive();
    res.send({ status: "success", payload: day })
}

const getDayById = async (req, res) => {
    let id = req.params.pid;
    try {
        let day = await dayService.getBy({ _id: id })
        if (!day) res.status(400).send({ status: "error", error: "Not found" })
        res.send({ status: "success", payload: day })
    } catch (error) {
        console.log(error);
    }
}

const saveDay = async (req, res) => {
    let { total, date, initialAmount, transferAmount, mercadoPagoAmount, cashAmount, active } = req.body;
    if (!date) return res.status(400).send({ status: "error", error: "Imcomplete values" });
    let response = await dayService.save({
        total,
        date,
        initialAmount,
        transferAmount,
        mercadoPagoAmount,
        cashAmount,
        active
    })
    res.send({ status: "success", message: "Day added", payload: response })
}

const updateDay = async (req, res) => {
    let { pid } = req.params;
    let content = req.body;
    let day = await dayService.getBy({ _id: pid })
    if (!day) res.status(404).send({ status: "error", error: "Not found" })
    let response = await dayService.update(pid, content)
    res.send({ status: "success", message: "Day updated", payload: response })
}

const deleteDay = async (req, res) => {
    let { pid } = req.params;
    let day = await dayService.getBy({ _id: pid })
    if (!day) return res.status(404).send({ status: "error", error: "Not found" })
    await dayService.delete(pid)
    res.send({ status: "success", message: "Day deleted" })
}

export default {
    getAllDays,
    getDayById,
    saveDay,
    updateDay,
    deleteDay, 
    getActiveDay
}