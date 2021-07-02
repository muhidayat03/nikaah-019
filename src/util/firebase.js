import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDyMa5154xPqyIzACSR61sfjyzJnEjrU5o",
  authDomain: "second-folio-309217.firebaseapp.com",
  databaseURL: "https://second-folio-309217-default-rtdb.firebaseio.com",
  projectId: "second-folio-309217",
  storageBucket: "second-folio-309217.appspot.com",
  messagingSenderId: "302184120225",
  appId: "1:302184120225:web:26a28fe74805937b9695e0",
  measurementId: "G-X5YBFM7KMY",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;
