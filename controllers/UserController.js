import User from "../models/UserModel.js";

export const getUsers = async(req, res) => {
    try {
        const respone = await User.findAll();
        res.status(200).json(respone);
    } catch (error) {
        console.log(error.message);
    }
};

export const getUsersById = async(req, res) => {
    try {
        const respone = await User.findOne({
            where: { id: req.params.id }
        });
        res.status(200).json(respone);
    } catch (error) {
        console.log(error.message);
    }
};

export const addUsers = async(req, res) => {
    try {
        await User.create(req.body);
        res.status(201).json({ message: 'User Created' });
    } catch (error) {
        console.log(error.message);
    }
};

export const editUsers = async(req, res) => {
    try {
        await User.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).json({ message: `User Updated` });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteUsers = async(req, res) => {
    try {
        await User.destroy({
            where: { id: req.params.id }
        });
        res.status(200).json({ message: `User Deleted` });
    } catch (error) {
        console.log(error.message);
    }
};