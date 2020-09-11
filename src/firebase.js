import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDd0Jvp1Luonu-lG4jnyxgD5TrFnN1sOek",
    authDomain: "whatsapp-clone-ddbd2.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-ddbd2.firebaseio.com",
    projectId: "whatsapp-clone-ddbd2",
    storageBucket: "whatsapp-clone-ddbd2.appspot.com",
    messagingSenderId: "184204355963",
    appId: "1:184204355963:web:cb8eb069f7f41d0366b5de",
    measurementId: "G-G7V7294472"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;