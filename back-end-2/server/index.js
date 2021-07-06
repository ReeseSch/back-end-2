const express = require('express');
const cors = require('cors');
const ctrl = require('./ctrl')

const app = express()

app.use(express.json());
app.use(cors());

const port = 4004

app.get('/api/houses', ctrl.getAllHouses);
app.delete("/api/houses/:id", ctrl.deleteHouse);
app.put("/api/houses/:id", ctrl.updateHouse);
app.post("/api/houses", ctrl.createHouse);




app.listen(port, () => {console.log(`Server running on ${port}! :)`)})