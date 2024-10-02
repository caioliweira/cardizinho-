import conn from "../config/conn.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

export const registerPalestrante = async (request, response) => {
    const { nome, expertise } = request.body;
    //validação
    if (!nome) {
        response.status(400).json({ message: "O nome é obrigatório" });
        return;
    };
    if (!expertise) {
        response.status(400).json({ message: "A especialização é obrigatório" });
        return;
    };
    //criar o palestrante
    const id = uuidv4();
    const insertSql = /*sql*/` INSERT INTO palestrantes(??, ??, ??) VALUES (?, ?, ?)`;
    const insertSqlData = [
        "palestrante_id",
        "nome",
        "expertise",
        id,
        nome,
        expertise];

    conn.query(insertSql, insertSqlData, (err) => {
        if (err) {
            console.error(err);
            response.status(500).json({ Err: "Erro ao cadastrar usuário" });
            return;
        };

        response.status(201).json({ message: "Usuário cadastrado" });
    });
};

export const getPalestrante = (request, response) => {
    const checkSql = /*sql*/ `SELECT * FROM palestrantes`

    conn.query(checkSql, (err, data) => {
        if(err){
            console.error(err)
            response.status(500).json({Err: "Erro ao buscar palestrantes"})
            return
        }

        if(data.length === 0){
            response.status(404).json({message: "Não consegui encontrar os palestrantes"})
            return
        }

        const palestrantes = data

        response.status(200).json(palestrantes)
    })
};