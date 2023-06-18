import  express  from "express";

import {
    getAllUser,
    createUser,
    getUserById,
    updateUser,
    deleteUser
} from "../controllers/Forms.js"

const router = express.Router();

router.get('/', getAllUser);
router.get('/:id', getUserById);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;