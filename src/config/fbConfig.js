import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
const config = {
  apiKey: "AIzaSyCNxBGxrPEydgV1KXYyiJSjHuLzxVtCfdk",
  authDomain: "marioplan-f0734.firebaseapp.com",
  databaseURL: "https://marioplan-f0734.firebaseio.com",
  projectId: "marioplan-f0734",
  storageBucket: "marioplan-f0734.appspot.com",
  messagingSenderId: "93088772232",
  appId: "1:93088772232:web:042b5f66e52ff76e0c6f3d"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
