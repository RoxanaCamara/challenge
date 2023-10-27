// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4bDJmfr8ek5WGPnpIiLhXvr1ZX_LNACU",
  authDomain: "unilingo-a7b7e.firebaseapp.com",
  projectId: "unilingo-a7b7e",
  storageBucket: "unilingo-a7b7e.appspot.com",
  messagingSenderId: "217787375748",
  appId: "1:217787375748:web:1e128639573a2f878b62d1",
  databaseURL: "https://unilingo-a7b7e-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);



export function writeUserData(userId, name, email, url) {
  const db = getDatabase();
  set(ref(db, "users/" + userId), {
    username: name,
    email: email,
    url: url,
  });
}
export function readData(postId) {
  const db = getDatabase();
  const starCountRef = ref(db, "users/" + postId );
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log( data);
  });
}
