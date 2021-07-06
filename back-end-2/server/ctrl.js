const houses = require("./db.json")
let houseID = 4;

module.exports = {
    getAllHouses: (req, res) => {
        res.status(200).send(houses)
    },

    deleteHouse: (req, res) => {
        const { id } = req.params;
        console.log(id);

        const index = houses.findIndex(house => {
            return house.id === +id;
        });
        if (id === -1) {
            res.status(400).send({error: 'Try entering an acutal ID'})
        } else {
            houses.splice(index, 1)
            res.status(200).send(houses);
        }

        },
    

    createHouse: (req,res) => {
        console.log(req.body)

        const { address, price, imageURL } = req.body;
        const newHouse = { id: houseID, address, price, imageURL };

        console.log(newHouse)
        houses.push(newHouse)
        houseID++;
        res.status(200).send(houses);
    },

    updateHouse: (req, res) => {
        const { id } = req.params;
        const { type } = req.body;
        console.log(id, type)
        const index = houses.findIndex(house => {
            return house.id === +id;
        });
        if (index !== -1 && type === 'plus'){
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (index !== -1 && type === 'minus' && houses[index].price > 9999){
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else {
            res.status(400).send({error: "That didn't work. How did you mess that up???"})
        }
    },
    }

