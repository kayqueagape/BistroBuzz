import e from "express";
import dbfiles from "./db/database.js";

const app = e();

//middleware
app.use(e.json());


const startServer = async () => {
  await dbfiles(); 
};

startServer();

export default app;