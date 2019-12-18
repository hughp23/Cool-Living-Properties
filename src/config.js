import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCltXbb_p_KXILUxP1T5P36wArakJ4_4Rk",
  authDomain: "cool-living-properties.firebaseapp.com",
  databaseURL: "https://cool-living-properties.firebaseio.com",
  projectId: "cool-living-properties",
  storageBucket: "gs://cool-living-properties.appspot.com",
  messagingSenderId: "294467780939"
};

firebase.initializeApp(firebaseConfig);

export default firebaseConfig;
