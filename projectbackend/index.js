const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

var dbName = "tourdb"
var client = new MongoClient('mongodb+srv://admin:admin@cluster0-h4v6l.mongodb.net/dbname?retryWrites=true&w=majority', { useNewUrlParser: true });




var connection;
client.connect((err, con) => {

    if (!err) {
        connection = con;
        console.log("database connected successfully");
    } else {
        console.log("database could not connect");
    }
})



const app = express();

app.use(cors());


app.get('/', (req, res) => {

    res.send({ status: "ok", data: "this is a test api" });
})




app.get('/user', (req, res) => {
    var id = req.query.id;
    res.send({ status: "ok", data: [{ name: "X", age: 78, id: id }, { name: "Y", age: 67 }] });
})


app.post('/sign-in', bodyParser.json(), (req, res) => {

    console.log(req.body)
    var collection = connection.db(dbName).collection('tour');


    collection.find(req.body).toArray((err, docs) => {
        console.log("docs found");
        console.log(docs);
        if (!err && docs.length > 0) {
            res.send({ status: "ok", data: docs });
        } else {
            res.send({ status: "failed", data: err });
        }
    })

})



app.post('/sign-up', bodyParser.json(), (req, res) => {

    console.log("sign up for user..")
    console.log(req.body);

    var collection = connection.db(dbName).collection('tour');

    collection.find({ email: req.body.email }).toArray((err, docs) => {
        console.log("found with this email ");
        console.log(docs);

        if (!err && docs.length > 0) {
            res.send({ status: "failed", data: "email already Exist" })
        } else {

            collection.insert(req.body, (err, result) => {
                if (!err) {
                    res.send({ status: "ok", data: "signup success" });
                } else {
                    res.send({ status: "failed", data: err });
                }
            })

        }
    })
})
app.post('/submit', bodyParser.json(), (req, res) => {

    console.log("sign up for user..")
    console.log(req.body);

    var collection = connection.db(dbName).collection('enquiry');

    collection.find({ email: req.body.email }).toArray((err, docs) => {
        console.log("found with this email ");
        console.log(docs);

        if (!err && docs.length > 0) {
            res.send({ status: "failed", data: "email already Exist" })
        } else {

            collection.insert(req.body, (err, result) => {
                if (!err) {
                    res.send({ status: "ok", data: "signup success" });
                } else {
                    res.send({ status: "failed", data: err });
                }
            })

        }
    })

})



app.listen(3000, () => { console.log("server is listining on port 3000") });