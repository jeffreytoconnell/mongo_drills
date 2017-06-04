// GET ALL Find the command that retrieves all restaurants.
db.restaurants.find();

//LIMIT SORT Find the command that makes the first 10 restaurants appear when db.restaurants is alphabetically sorted by the name property.
db.restaurants.find().sort({name:1}).limit(10);

//GET BY_ID Retrieve a single restaurant by _id from the restaurants collection. This means you'll first need to get the _id for one of the restaurants imported into the database.
var myID = db.restaurants.findOne({}, {_id: true})._id;
db.restaurants.findOne({_id: myID});

//GET BY VALUE Write a command that gets all restaurants from the borough of "Queens".
db.restaurants.find({borough: "Queens"});

//COUNT Write a command that gives the number of documents in db.restaurants.
db.restaurants.count();

//COUNT BY NESTED VALUE Write a command that gives the number of restaurants whose zip code value is '11206'. Note that this property is at document.address.zipcode, so you'll need to use dot notation to query on the nested zip code property.
db.restaurants.find({'address.zipcode': '11206'}).count();

//DELETE BY ID Write a command that deletes a document from db.restaurants. This means you'll first need to get the _id for one of the restaurants imported into the database.
var myID = db.restaurants.findOne({}, {_id: true})._id;
db.restaurants.removeOne({_id: myID});

//UPDATE A SINGLE DOCUMENT Write a command that sets the name property of a document with a specific _id to 'Bizz Bar Bang'. Make sure that you're not replacing the existing document, but instead updating only the name property.
var myID = db.restaurants.findOne({}, {_id: true})._id;
db.restaurants.updateOne(
    {_id: myID},
    {$set: {name: 'Bizz Bar Bang'}});

//UPDATE MANY DOCUMENTS Uh oh, two zip codes are being merged! The '10035' zip code is being merged with '10036'. Write a command that updates values accordingly.
db.restaurants.updateMany({'address.zipcode': '10035'},{$set: {'address.zipcode': '10036'}});


