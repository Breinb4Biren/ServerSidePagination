import express from 'express';
import dotenv from 'dotenv';
// import {itemsRoutes} from './src/items/routes';
import router from './src/items/routes.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get("/", (req, res) => {
    res.send('Hello World');
});

app.use("/api/v1/items", router);

app.listen(port, () => console.log(`Server running on port ${port}`));
