const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

var cors = require('cors')
app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "http://localhost:5174",
            "https://foods-hub-resturent.netlify.app"
            
        ],
        credentials: true,
    })
);
app.use(express.json())
// console.log(process.env.DB_USER)
// console.log(process.env.DB_PASS)

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.o9b6e9v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });


        const featuredFoodsCollection = client.db("assignment11DB").collection("featuredFoods");
        const AllFoodsCollection = client.db("assignment11DB").collection("allFoods");

        // get featured foods to show homepage
        app.get('/featuredfoods', async (req, res) => {

            const result = await featuredFoodsCollection.find().toArray();
            res.send(result)

        })
        
        app.get('/featuredfoods/:id', async (req, res) => {

            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await featuredFoodsCollection.findOne(query);
            res.send(result)

            // complete
        })

        // Add foods items on database use post Method
        // Add foods items on database use post Method

        app.post('/foods', async (req, res) => {
            const newFood = req.body;
            console.log(newFood)

            const result = await AllFoodsCollection.insertOne(newFood);
            res.send(result)


        })

        // get all foods items

        app.get('/foods', async (req, res) => {
            const foods = await AllFoodsCollection.find().toArray();
            res.send(foods)
        })

        // delete a item

        app.delete('/foods/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id)
            const query = { _id: new ObjectId(id) };
            const result = await AllFoodsCollection.deleteOne(query)
            res.send(result)

        })

        // update a item

        app.get('/foods/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await AllFoodsCollection.findOne(query);
            res.send(result)
        })

        app.put('/foods/:id', async (req, res) => {
            const id = req.params.id;
            const updateFood = req.body;
            console.log(id)
            console.log(updateFood)
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const food = {
                $set: {
                    AdditionalNotes: updateFood.AdditionalNotes,
                    FoodStatus: updateFood.FoodStatus,
                    FoodImage: updateFood.FoodImage

                }
            }

            const result = await AllFoodsCollection.updateOne(filter, food, options);
            res.send(result)


        })

        // updated data when requested to buy


        app.put('/foodBuyRequest/:id', async (req, res) => {
            const id = req.params.id;
            const updateFood = req.body;
            console.log(id)
            console.log(updateFood)
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const food = {
                $set: {

                    FoodStatus: updateFood.FoodStatus,
                    RequestDate: updateFood.RequestDate,
                    ClientEmail: updateFood.ClientEmail


                }
            }

            const result = await AllFoodsCollection.updateOne(filter, food, options);
            res.send(result)



        })




        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Assignment 11 server running')
})

app.listen(port, () => {
    console.log(`Server is Running on port ${port}`)
})