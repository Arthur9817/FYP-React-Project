import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "******",
	authDomain: "******",
	databaseURL: "******",
	projectId: "******t",
	storageBucket: "******",
	messagingSenderId: "******",
	appId: "******",
	measurementId: "******",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
