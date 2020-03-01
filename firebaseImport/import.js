/* eslint-disable no-console */
// Imports
const firestoreService = require('firestore-export-import');
const firebaseConfig = require('./config.js');
let serviceAccount = require('./serviceAccount.json');
const privateKey = require('./privateKey.js');
serviceAccount['private_key_id'] = privateKey['private_key_id'];
serviceAccount['private_key'] = privateKey['private_key'];

// JSON To Firestore
const jsonToFirestore = async () => {
  try {
    console.log('Initialzing Firebase');
    await firestoreService.initializeApp(serviceAccount, firebaseConfig.databaseURL);
    console.log('Firebase Initialized');

    await firestoreService.restore('./data.json');
    console.log('Upload Success');
  }
  catch (error) {
    console.log(error);
  }
};

jsonToFirestore();