import dotenv from 'dotenv'
import app from "./src/app.js";
import DB from './src/db/db.js';


dotenv.config()
DB();


app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});