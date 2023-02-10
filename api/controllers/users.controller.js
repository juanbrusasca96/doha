import { userService } from "../services/services.js"

const getAllUsers = async (req, res) => {
    let users = await userService.getAll();
    res.send({ status: "success", payload: users })
}

const getUserById = async (req, res) => {
    let id = req.params.pid;
    try {
        let user = await userService.getBy({ _id: id })
        if (!user) res.status(400).send({ status: "error", error: "Not found" })
        res.send({ status: "success", payload: user })
    } catch (error) {
        console.log(error);
    }
}

const saveUser = async (req, res) => {
    let { userName, password, imageURL } = req.body;
    if (!userName || !password) return res.status(400).send({ status: "error", error: "Imcomplete values" });
    await userService.save({
        userName,
        password,
        imageURL
    })
    res.send({ status: "success", message: "User added" })
}

const updateUser = async (req, res) => {
    let { pid } = req.params;
    let content = req.body;
    let user = await userService.getBy({ _id: pid })
    if (!user) res.status(404).send({ status: "error", error: "Not found" })
    await userService.update(pid, content)
    res.send({ status: "success", message: "User updated" })
}

const deleteUser = async (req, res) => {
    let { pid } = req.params;
    let user = await userService.getBy({ _id: pid })
    if (!user) return res.status(404).send({ status: "error", error: "Not found" })
    await userService.delete(pid)
    res.send({ status: "success", message: "User deleted" })
}

export default {
    getAllUsers,
    getUserById,
    saveUser,
    updateUser,
    deleteUser
}