import { productService } from "../services/services"

const getAllProducts = async (req, res) => {
    let products = await productService.getAll();
}

const getProductById = async (req, res) => {
    let id = req.params.pid;
    try {
        let product = await productService.getBy({ _id: id })
        if (!product) res.status(400).send({ status: "error", error: "Not found" })
        res.send({ status: "success", payload: product })
    } catch (error) {
        console.log(error);
    }
}

const saveProduct = async (req, res) => {
    let { name, purchasePrice, recommendedReatilPrice, price, image, stock, limitStock, category } = req.body;
    if (!name || !price || !image || !stock || !category) return res.status(400).send({ status: "error", error: "Imcomplete values" });
    await productService.save({
        name,
        purchasePrice,
        recommendedReatilPrice,
        price,
        image,
        stock,
        limitStock,
        category
    })
    res.send({ status: "success", message: "Product added" })
}

const updateProduct = async (req, res) => {
    let { pid } = req.params;
    let content = req.body;
    let product = await productService.getBy({ _id: pid })
    if (!product) res.status(404).send({ status: "error", error: "Not found" })
    await productService.update(pid, content)
    res.send({ status: "success", message: "Product updated" })
}

const deleteProduct = async (req, res) => {
    let { pid } = req.params;
    let product = await productService.getBy({ _id: pid })
    if (!product) return res.status(404).send({ status: "error", error: "Not found" })
    await productService.delete(pid)
    res.send({ status: "success", message: "Product deleted" })
}

export default {
    getAllProducts,
    getProductById,
    saveProduct,
    updateProduct,
    deleteProduct
}