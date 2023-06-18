import  express  from "express";

import {
    getAllCampos,
    createCampo,
    getCampoById,
    updateCampo,
    deleteCampo,
    getAllForm,
    createForm,
    getFormById,
    updateForm,
    deleteForm
} from "../controllers/Forms.js"

const router = express.Router();

router.get('/campos', getAllCampos);
router.get('/campos/:id', getCampoById);
router.post('/campos', createCampo);
router.patch('/campos/:id', updateCampo);
router.delete('/campos/:id', deleteCampo);
router.get('/forms', getAllForm);
router.get('/forms/:id', getFormById);
router.post('/forms', createForm);
router.patch('/forms/:id', updateForm);
router.delete('/forms/:id', deleteForm);
export default router;