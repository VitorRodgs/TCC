import Campo from "../models/campoModel.js";
import Form from "../models/formModel.js";

export const getAllCampos = async(req, res) => {
    try{
        const campos = await Campo.findAll();
        res.json(campos);
    } catch(error) {
        res.json({message: error.message});
    }
}

export const getCampoById = async (req, res) => {
    try {
        const campo = await Campo.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(campo[0]);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const createCampo = async (req, res) => {
    try{
        await Campo.create(req.body);
        res.json({
            "message": "Campo Criado"
        });
    } catch (error){
        res.json({message: error.message});
    }
}

export const updateCampo = async (req, res) => {
    try {
        await Campo.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Campo Atualizado"
        });
    } catch (error) {
        res.json({message: error.message});
    }
}

export const deleteCampo = async (req, res) => {
    try{
        await Campo.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Campo Deletado"
        });
    } catch(error) {
        res.json({message: error.message});
    }
}


export const getAllForm = async(req, res) => {
    try{
        const forms = await Form.findAll();
        res.json(forms);
    } catch(error) {
        res.json({message: error.message});
    }
}

export const getFormById = async (req, res) => {
    try {
        const forms = await Form.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(forms[0]);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const createForm = async (req, res) => {
    try{
        await Form.create(req.body);
        res.json({
            "message": "Form Criado"
        });
    } catch (error){
        res.json({message: error.message});
    }
}

export const updateForm = async (req, res) => {
    try {
        await Form.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Form Atualizado"
        });
    } catch (error) {
        res.json({message: error.message});
    }
}

export const deleteForm = async (req, res) => {
    try{
        await Form.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Form Deletado"
        });
    } catch(error) {
        res.json({message: error.message});
    }
}