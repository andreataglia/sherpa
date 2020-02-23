import firebase from 'firebase/app'
import 'firebase/firestore'

// firebase init goes here
const config = {
  apiKey: 'AIzaSyCgesXXYaY46OvH3p4I5sDfOR0_lByaJ60',
  databaseURL: 'https://sherpa-mvp-project.firebaseio.com',
  projectId: 'sherpa-mvp-project'
};
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()

// firebase collections
const ambassadorsCollection = db.collection('ambassadors')
// const contactsCollection = db.collection('contacts')

export {
    db,
    ambassadorsCollection,
}