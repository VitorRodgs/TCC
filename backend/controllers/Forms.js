import Campo from "../models/formModel.js";

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