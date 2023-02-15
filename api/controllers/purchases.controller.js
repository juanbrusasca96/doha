import { purchaseService } from "../services/services.js";

const getAllPurchases = async (req, res) => {
    let purchases = await purchaseService.getAll();
    res.send({ status: "success", payload: purchases })
}

const getPurchaseById = async (req, res) => {
    let id = req.params.pid;
    try {
        let purchase = await purchaseService.getBy({ _id: id })
        if (!purchase) res.status(400).send({ status: "error", error: "Not found" })
        res.send({ status: "success", payload: purchase })
    } catch (error) {
        console.log(error);
    }
}

const savePurchase = async (req, res) => {
    let { total, date, idProducts } = req.body;
    if (!total || !date || !idProducts) return res.status(400).send({ status: "error", error: "Imcomplete values" });
    await purchaseService.save({
        total, 
        date,  
        idProducts
    })
    res.send({ status: "success", message: "Purchase added" })
}

const updatePurchase = async (req, res) => {
    let { pid } = req.params;
    let content = req.body;
    let purchase = await purchaseService.getBy({ _id: pid })
    if (!purchase) res.status(404).send({ status: "error", error: "Not found" })
    await purchaseService.update(pid, content)
    res.send({ status: "success", message: "Purchase updated" })
}

const deletePurchase = async (req, res) => {
    let { pid } = req.params;
    let purchase = await purchaseService.getBy({ _id: pid })
    if (!purchase) return res.status(404).send({ status: "error", error: "Not found" })
    await purchaseService.delete(pid)
    res.send({ status: "success", message: "Purchase deleted" })
}

export default {
    getAllPurchases,
    getPurchaseById,
    savePurchase,
    updatePurchase,
    deletePurchase
}