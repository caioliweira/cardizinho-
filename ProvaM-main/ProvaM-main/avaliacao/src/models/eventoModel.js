import conn from "../config/conn.js                       ";

//VOU FAZER DEPOIS POIS NÃO SEI AINDA O QUAIS COLUNAS PRECISAM COMPOR
//const tabelaEvento = /*sql*/`
//    CREATE TABLE IF NOT EXISTS eventos(
//        evento_id VARCHAR(60) PRIMARY KEY,
//        nome VARCHAR(255) NOT NULL,
//       //palestrante ,
//        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
//)`;

// conn.query(tabelaEvento, (err) => {
//     if(err){
//         console.error(err);
//         return;
//     };
//     console.log("Tabela [eventos] criada com sucesso");
// });