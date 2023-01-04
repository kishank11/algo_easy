const express = require("express")
const app = express()
const mongoDb = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const fs = require("fs");
var crypto = require("crypto")
const cron = require('node-cron');
let value = 1;
var array = {};
let y = [];

var jsonString;
const fun = async () => {


    var time = Date.now()
    for (let i = 0; i <= 10000; i++) {
        value = Number(Math.random() * i)

        //temp=randomfunction
        y.push({
            data: {
                devSwVal: {
                    name: "test",
                    unit: "single",
                    value: value,//temp multiple of i with specific value
                    status: true

                },
                batteryVal: {
                    name: "Battery",
                    unit: "percent",
                    values: value,
                }
            },
            timeVal: time//use date and time number
        })

    }






}
fun()

// jsonString = JSON.stringify(y);

// (async () => {
//     const n = fs.writeFile(`output.json`, jsonString, 'utf8', function (err) {
//         if (err) {
//             console.log("An error occured while writing JSON Object to File.");
//             return console.log(err);
//         }

//         console.log("JSON file has been saved.");
//     });
// })();

// const now = Date.now(); // Unix timestamp in milliseconds
// console.log(now);

// cron.schedule("*/1 * * * * *", async () => {
//     // let y = Number(Math.random()
//     let i = crypto.randomInt(1, 10000)
//     fun()

//     var jsonString = JSON.stringify(y);
//     // console.log(y)

//     fs.writeFileSync(`output${i}.json`, jsonString, 'utf8', function (err) {
//         if (err) {
//             console.log("An error occured while writing JSON Object to File.");
//             return console.log(err);
//         }

//         console.log("JSON file has been saved.");
//     });

// });

// console.log(y)



app.listen("2000", () => { console.log("HELLO 2000 port") })


app.post("/test", (req, res) => {
    try {


        MongoClient.connect("mongodb://127.0.0.1:27017/", function (err, db) {

            if (err) throw err;
            // console.log(db)
            const dbo = db.db("events");
            dbo.collection("event").insertMany(y, function (err, result) {
                if (err) {
                    res.json(err);
                    console.log(err)
                }
                res.status(200).json({ message: result });
                db.close();
            });
        });

    }
    catch (err) {
        console.log(err)
        res.status(500).json({ err });
    }

})

app.post("/test1", (req, res) => {

    MongoClient.connect("mongodb://127.0.0.1:27017", function (err, db) {
        if (err) throw err;
        const dbo = db.db("events");
        dbo.collection("event").find().toArray(function (err, result) {
            if (err) console.log(err);
            res.status(200).json(result);
            db.close();
        });
    });
})
// for () { }




