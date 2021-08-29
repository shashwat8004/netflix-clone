// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyC-UXuLTDOemzvllO_vRwJizUyqYj6ZoSI",
	authDomain: "netflix-clone-d20df.firebaseapp.com",
	projectId: "netflix-clone-d20df",
	storageBucket: "netflix-clone-d20df.appspot.com",
	messagingSenderId: "875050319875",
	appId: "1:875050319875:web:ca0c090c87365ae1300e36",
	measurementId: "G-8HEZX166WQ",
};

// this will initializ firebase and store it in the firebaseApp
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firestore is the database for the firebase
const db = firebaseApp.firestore();
// for the authentication
const auth = firebase.auth();

export { auth }; // here we can have multiple exports but here we have one
export default db; // we can only have one default export
