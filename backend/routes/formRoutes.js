import  express  from "express";

import {
    getAllForm,
    createForm,
    getFormById,
    updateForm,
    deleteForm
} from "../controllers/Forms.js"

const router = express.Router();

router.get('/forms2', getAllForm);
router.get('/forms/:id', getFormById);
router.post('/forms2', createForm);
router.patch('/forms/:id', updateForm);
router.delete('/forms/:id', deleteForm);
export default router;