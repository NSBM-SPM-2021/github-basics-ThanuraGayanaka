import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDuoDYqeFC4_xr06-0pKxYR6AuCUTX7pck",

  authDomain: "todo-app-6ef23.firebaseapp.com",

  projectId: "todo-app-6ef23",

  storageBucket: "todo-app-6ef23.appspot.com",

  messagingSenderId: "237241870123",

  appId: "1:237241870123:web:409fcc37012b36bd03076e",

  measurementId: "G-96HS4CWC4Y"

};

const firebaseRef = firebase.initializeApp(firebaseConfig);
export default firebaseRef;


