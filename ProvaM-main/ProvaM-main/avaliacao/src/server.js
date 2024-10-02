import express from "express";
import cors from "cors";

const PORT =  8080;
const app = express();
//modelos
import "./models/palestranteModel.js"
import "./models/participanteModel.js"
//rotas
import eventoRouter from "./routes/eventoRouter.js"

app.use(cors());
app.use(express.json());


app.use("/eventos", eventoRouter)

app.use((request, response) => {
    response.status(404).json({message: "Rota não encontrada"});
});
app.listen(PORT, ()=>{
console.log(`Server running http:\\localhost:${PORT}`)
})