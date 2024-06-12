import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAPA2BWVd-VmiKtbyelRlCWkW-vqNbnVYI",
  authDomain: "desafio3-5dc4c.firebaseapp.com",
  projectId: "desafio3-5dc4c",
  storageBucket: "desafio3-5dc4c.appspot.com",
  messagingSenderId: "647218777889",
  appId: "1:647218777889:web:88d14fcb48d5dff63db860"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth}