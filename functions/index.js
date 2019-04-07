const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.helloWorld1 = functions.database.ref('/Rooms')
	.onWrite(event => {
		console.log('New data: ', event.data.val());
	});
