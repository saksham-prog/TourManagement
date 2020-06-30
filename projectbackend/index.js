const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const multer = require('multer');
const fs = require('fs');
const mongodb = require('mongodb');


var storage = multer.diskStorage({
    destination: function(req,file,cb){
        console.log("in destination");
        cb(null,'uploads')
    },
    filename:function(req,file,cb){
       
       
       
        console.log(file);
        var ext = file.originalname.split('.').pop();
        console.log(ext);


        if(!req.hasTextDataProcessed)
        {



            var collection=connection.db('tourdb').collection('places');
            collection.insert(req.body,(err,r)=>{
                if(!err)
                {
                    console.log(r);
              var insertedId=  r.insertedIds['0'];
                    
                      console.log("inserted id is returned as->"+insertedId)
                      req.hasTextDataProcessed = true;
                     req.insertedId=insertedId;
                     req.sliderImagesCtr = 1;
                     cb(null,req.insertedId+"_"+file.fieldname+"_"+req[file.fieldname+'Ctr']++ +"."+ext);
       
                  
                }
                else
                {
                    return null;
                }
            })













              

        }
        else{

            cb(null,req.insertedId+"_"+file.fieldname+"_"+req[file.fieldname+'Ctr']++ +"."+ext);
       
        
        }


    }
})

var upload=multer({storage:storage})




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
app.get('/getAlldata', (req, res) => {

    console.log(req.body)
    var collection = connection.db(dbName).collection('form');


    collection.find({email:req.body.email}).toArray((err, docs) => {
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

                            upload.fields([{name:'banner',maxcount:1},{name:'sliderImages',maxcount:8}]),
                            (req,res)=>{console.log("in last"); res.send({status:"ok"})   
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




// router.get("/", (req, res) => {
//     res.sendfile('./file-upload.html', { root: __dirname })
// })

// router.get("/", (req, res) => {
//     getFiles(res)
// })

// app.use(fileUpload())
// router.post("/upload", (req, res) => {
//     let file = { name: req.body.name, file: binary(req.file.uploadfile.data) }
//     insertFile(file, res)
// })

// function insertFile(file, res) {
//     MongoClient.client, ((err, client) => {
//         if (err) {
//             return err
//         } else {
//             let db = sakshamdb.db('uploadDB')
//             let collection = db.collection('files')
//             try {
//                 collection.insertOne(file)
//                 console.log('file inserted')
//             } catch {}
//             client.close()
//             res.redirect('/')
//         }
//     });
// }

// function getFiles(res) {

//     MongoClient.client('mongodb+srv://admin:admin@cluster0-h4v6l.mongodb.net/dbname?retryWrites=true&w=majority', { useNewUrlParser: true }, (err, client) => {
//         if (err) {
//             return err
//         } else {
//             let db = sakshamdb.db('uploadDB')
//             let collection = db.collection('files')
//             collection.find({}).toArray((err, docs) => {
//                 if (err) {
//                     console.log('err in finding doc:', err)
//                 } else {
//                     let buffer = doc[0].file.buffer
//                     fs.writeFileSync('uploadedimage.jpg'.buffer)
//                 }
//             })
//             client.close()
//             res.redirect('/')
//         }
//     });
// }
// app.use("/", router)



app.listen(3000, () => { console.log("server is listining on port 3000") });