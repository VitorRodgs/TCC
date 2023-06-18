import  express  from "express";

import {
    getAllForm,
    createForm,
    getFormById,
    updateForm,
    deleteForm
} from "../controllers/Forms.js"

const router = express.Router();

router.get('/', getAllForm);
router.get('/:id', getFormById);
router.post('/', createForm);
router.patch('/:id', updateForm);
router.delete('/:id', deleteForm);

export default router;