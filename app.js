
import e from "express";
import "dotenv/config";
import "./db.js";
import explorer_router from "./src/routes/explorer_route.js";
import species_router from "./src/routes/species_route.js";
import expedition_router from "./src/routes/expedition_route.js";

const app = e();
const PORT = process.env.PORT;
app.use(e.json());



app.use(e.json());


app.use("/explorer", explorer_router);
app.use("/species", species_router);
app.use("/expedition", expedition_router);


app.listen(7000, () => console.log("Servidor rodando"));