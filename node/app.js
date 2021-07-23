var Cloudant = require('@cloudant/cloudant');
require('dotenv/config')
const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express');
const app = express();


app.use(cors())
// app.use(express.json())
app.use(bodyParser.urlencoded({ extended : true }))

var url = "https://apikey-v2-1mnhzx88eb42n4xo06h5230omhg4jrqdvrbjfzilpn4b:2497bbe0fb0c8165b4e249e4afefaebb@52de3806-4ff6-4193-bbfa-67d9a1ab2d4a-bluemix.cloudantnosqldb.appdomain.cloud";  // Get account details from environment variables
var username = "apikey-v2-1mnhzx88eb42n4xo06h5230omhg4jrqdvrbjfzilpn4b";
var password = "2497bbe0fb0c8165b4e249e4afefaebb"

var cloudant = Cloudant({ url: url, username: username, password: password }) // Initialize the library with url and credentials.
var db = cloudant.db.use('greenbird-db') //Bringing the database in 

app.post('/api/insert', (req, res) => {
  const title = req.title
  const district = req.district
  const Address = req.Address
  const Contact1 = req.Contact1
  const Contact2 = req.Contact2
  const doc = {
    "title": title,
    "district": district,
    "Address": Address,
    "Contact1": Contact1,
    "Contact2": Contact2
  }
  const main = async () => {
    try {
      const response = await db.insert(doc)
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
  main()
})

app.listen(3001, () => {
  console.log("The app is running on port 3001")
})





//To see all the indexes in a database
// db.index(function(err, result) {
//     if (err) {
//       throw err;
//     }

//     console.log('The database has %d indexes', result.indexes.length);
//     for (var i = 0; i < result.indexes.length; i++) {
//       console.log('  %s (%s): %j', result.indexes[i].name, result.indexes[i].type, result.indexes[i].def);
//     }
//   });

//Querying
// db.find({ selector: { district: "Mumbai" } }, function(err, result) {
//     if (err) {
//       throw err;
//     }

//     console.log('Found %d collectors in Mumbai', result.docs.length);
//     for (var i = 0; i < result.docs.length; i++) {
//       console.log('  Collector title is: %s', result.docs[i].title);
//     }
//   });
