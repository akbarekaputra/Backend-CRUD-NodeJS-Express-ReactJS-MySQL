import express from "express";
import { getUsers, getUsersById, addUsers, editUsers, deleteUsers } from "../controllers/UserController.js";

const router = express.Router();

router.get(`/users`, getUsers);
router.get(`/users/:id`, getUsersById);
router.post(`/users/add`, addUsers);
router.patch(`/users/edit/:id`, editUsers);
router.delete(`/users/delete/:id`, deleteUsers);

export default router;