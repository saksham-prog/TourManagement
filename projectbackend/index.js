const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const multer = require('multer');
const fs = require('fs');
const mongodb = require('mongodb');
const binary = require('binary');
const path = require('path');





var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        console.log("in destination");
        cb(null, 'uploads')
    },
    filename: function(req, file, cb) {



        console.log(file);
        var ext = file.originalname.split('.').pop();
        console.log(ext);


        if (!req.hasTextDataProcessed) {



            var collection = connection.db('tourdb').collection('places');
            collection.insert(req.body, (err, r) => {
                if (!err) {
                    console.log(r);
                    var insertedId = r.insertedIds['0'];

                    console.log("inserted id is returned as->" + insertedId)
                    req.hasTextDataProcessed = true;
                    req.insertedId = insertedId;
                    req.sliderImagesCtr = 1;
                    cb(null, req.insertedId + "_" + file.fieldname + "_" + req[file.fieldname + 'Ctr']++ + "." + ext);


                } else {
                    return null;
                }
            })















        } else {

            cb(null, req.insertedId + "_" + file.fieldname + "_" + req[file.fieldname + 'Ctr']++ + "." + ext);


        }


    }
})

var upload = multer({ storage: storage })




var dbName = "tourdb"
var client = new MongoClient('mongodb+srv://admin:admin@cluster0-h4v6l.mongodb.net/tourdb?retryWrites=true&w=majority', { useNewUrlParser: true });















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
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'tourproject')));


app.get('/', (req, res) => {

    res.sendFile('index.html');
})




// app.get('/', (req, res) => {
//     res.sendFile('index.html');
// })




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

app.get('/getAllplaces', (req, res) => {

    console.log(req.body)
    var collection = connection.db(dbName).collection('places');
    collection.find().toArray((err, docs) => {
        console.log("docs found");
        console.log(docs);
        if (!err && docs.length > 0) {
            res.send({ status: "ok", data: docs });
        } else {
            res.send({ status: "failed", data: err });
        }
    })



})
app.get('/getAllpackages', (req, res) => {

    console.log(req.body)
    var collection = connection.db(dbName).collection('packages');

    collection.find().toArray((err, docs) => {
        console.log("docs found");
        console.log(docs);
        if (!err && docs.length > 0) {
            res.send({ status: "ok", data: docs });
        } else {
            res.send({ status: "failed", data: err });
        }
    })



})

app.post('/getAlldata', bodyParser.json(), (req, res) => {
    console.log(req.body)
    var collection = connection.db(dbName).collection('form');


    collection.find({ loginEmail: req.body.loginEmail }).toArray((err, docs) => {
        console.log("docs found");
        console.log(docs);
        if (!err && docs.length > 0) {
            res.send({ status: "ok", data: docs });
        } else {
            res.send({ status: "failed", data: err });
        }
    })



})
app.get('/getAlldatas', (req, res) => {
    console.log(req.body)
    var collection = connection.db(dbName).collection('form');

    console.log(req.body)
    collection.find().toArray((err, docs) => {
        console.log("docs found");
        console.log(docs);
        if (!err && docs.length > 0) {
            res.send({ status: "ok", data: docs });
        } else {
            res.send({ status: "failed", data: err });
        }
    })



})
app.get('/getplaces', (req, res) => {
    console.log(req.body)
    var collection = connection.db(dbName).collection('places');

    console.log(req.body)
    collection.find().toArray((err, docs) => {
        console.log("docs found");
        console.log(docs);
        if (!err && docs.length > 0) {
            res.send({ status: "ok", data: docs });
        } else {
            res.send({ status: "failed", data: err });
        }
    })



})

app.get('/getpackages', (req, res) => {
    console.log(req.body)
    var collection = connection.db(dbName).collection('packages');

    console.log(req.body)
    collection.find().toArray((err, docs) => {
        console.log("docs found");
        console.log(docs);
        if (!err && docs.length > 0) {
            res.send({ status: "ok", data: docs });
        } else {
            res.send({ status: "failed", data: err });
        }
    })



})

app.get('/getuser', (req, res) => {
    console.log(req.body)
    var collection = connection.db(dbName).collection('tour');

    console.log(req.body)
    collection.find().toArray((err, docs) => {
        console.log("docs found");
        console.log(docs);
        if (!err && docs.length > 0) {
            res.send({ status: "ok", data: docs });
        } else {
            res.send({ status: "failed", data: err });
        }
    })



})

app.get('/getenquiry', (req, res) => {
    console.log(req.body)
    var collection = connection.db(dbName).collection('enquiry');

    console.log(req.body)
    collection.find().toArray((err, docs) => {
        console.log("docs found");
        console.log(docs);
        if (!err && docs.length > 0) {
            res.send({ status: "ok", data: docs });
        } else {
            res.send({ status: "failed", data: err });
        }
    })



})












app.post('/addPlace',

    upload.fields([{ name: 'banner', maxcount: 1 }, { name: 'sliderImages', maxcount: 8 }]),
    (req, res) => {
        console.log("in last");
        res.send({ status: "ok" })
    });


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
app.post('/add', bodyParser.json(), (req, res) => {

    console.log("sign up for user..")
    console.log(req.body);

    var collection = connection.db(dbName).collection('form');

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


app.post('/packages', bodyParser.json(), (req, res) => {

    console.log("sign up for user..")
    console.log(req.body);

    var collection = connection.db(dbName).collection('packages');

    collection.find(req.body).toArray((err, docs) => {
        console.log("found with this email ");
        console.log(docs);

        if (!err && docs.length > 0) {
            res.send({ status: "failed", data: "email already Exist" })
        } else {

            collection.insert(req.body, (err, result) => {
                if (!err) {
                    res.send({ status: "ok", data: "" });
                } else {
                    res.send({ status: "failed", data: err });
                }
            })

        }
    })
})





app.listen(80, () => { console.log("server is listining on port 80") })