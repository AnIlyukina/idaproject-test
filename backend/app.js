const express = require('express');

const mongoose = require('mongoose');

const errorHandler = require('./middlewares/errorHandler');

const { productRoutes } = require('./routes/product')

const { PORT = 3000 } =  process.env;

const cors = require("cors");

const app = express()

const corsOptions ={
   origin:'*', 
   credentials:true,
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.use(express.json());

app.use(productRoutes);

app.use(errorHandler);

async function main() {
    await mongoose.connect('mongodb://localhost:27017/idaproject', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    await app.listen(PORT);
    console.log(`сервер запущен на ${PORT}`);
}

main();
