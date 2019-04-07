


const functions = require('firebase-functions');

const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// first function named as: helloWorld
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

//Another function named as countTasks
exports.countTasks = functions.https.onRequest((req, res) => {
	var db = admin.database();
	var ref = db.ref("/ionidemo");
  
	ref.once("value", function(snapshot) {
	  var count = snapshot.numChildren();
	  res.status(200).json({ count: count });
	});
  });

