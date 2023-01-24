import  express  from "express";

import {
    getAllCampos,
    createCampo,
    getCampoById,
    updateCampo,
    deleteCampo
} from "../controllers/Forms.js"

const router = express.Router();

router.get('/', getAllCampos);
router.get('/:id', getCampoById);
router.post('/', createCampo);
router.patch('/:id', updateCampo);
router.delete('/:id', deleteCampo);

export default router;