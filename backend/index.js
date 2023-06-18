import express from "express";
import db from "./config/database.js";
import campoRoutes from "./routes/campoRoutes.js";
import formRoutes from "./routes/formRoutes.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import cors from "cors";

const app = express();

try {
    await db.authenticate();
    console.log('Banco de Dados Conectado!');
} catch(error) {
    console.error('Connection error:', error);
}

app.use(cors());
app.use(express.json());
app.use('/campos', campoRoutes);
app.use('/formularios', formRoutes);
app.use('/usuarios', usuarioRoutes);

app.get("/", function(req, res){
    res.send("Ta Funcionando");
});

app.get("/", function(req, res){
    res.send("Ta Funcionando");
});

app.listen(8081, () => console.log('Servidor rodando na porta 8081'));
