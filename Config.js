import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDamM3hYG1Ume8plZK9TzgWr08yoFaxnVo",
    authDomain: "barter-system-123.firebaseapp.com",
    databaseURL: "https://barter-system-123.firebaseio.com",
    projectId: "barter-system-123",
    storageBucket: "barter-system-123.appspot.com",
    messagingSenderId: "250843595123",
    appId: "1:250843595123:web:7318e0b9fa793580620506"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database()