var functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.adjustData = functions.https.onRequest((req, res) => {
  
  res.set({'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'Content-Type, Authorization',
		'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
		'Content-Type': 'application/json'});

  let original = req.query.text;
  if (original) {
      original = original.toUpperCase();
  }
  res.json( { 'name' : 'originaltext', 'get': 'data', 'data': original });
});