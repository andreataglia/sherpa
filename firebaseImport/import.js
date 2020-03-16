/* eslint-disable no-console */
// Imports
const firestoreService = require('firestore-export-import');
const firebaseConfig = require('./config.js');
let serviceAccount = require('./serviceAccount.json');
<<<<<<< HEAD
=======
const privateKey = require('./privateKey.js');
serviceAccount['private_key_id'] = privateKey['private_key_id'];
serviceAccount['private_key'] = privateKey['private_key'];
>>>>>>> 3d2d2f53a5300e36d47b09ba386d78ef7eafe3c8

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