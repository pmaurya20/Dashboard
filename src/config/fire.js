import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAf4TSPMVYjofzCmRPAS8XXpsFBFn0gpk0",
    authDomain: "zauba-ecomm.firebaseio.com",
    databaseURL: "https://zauba-ecomm.firebaseio.com",
    projectId: "zauba-ecomm",
    storageBucket: "zauba-ecomm.appspot.com",
    messagingSenderId: "190000394917",
    appId: "1:190000394917:web:68c39629649637d92f934c",
    measurementId: "G-ZHNSJMSJVG"
  };

  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;