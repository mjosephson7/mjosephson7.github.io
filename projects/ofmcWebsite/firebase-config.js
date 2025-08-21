// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3Lk6oCdWrzu8B3tKYbdBJlwUq7e0MVfc",
  authDomain: "ofmcwebsite.firebaseapp.com",
  projectId: "ofmcwebsite",
  storageBucket: "ofmcwebsite.firebasestorage.app",
  messagingSenderId: "358979011425",
  appId: "1:358979011425:web:df36a2f0aa1b19f03efb20",
  measurementId: "G-1N2X1WMS08"
};

// Initialize Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, setDoc, getDoc } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export for use in other files
window.firebaseDB = db;
window.firebaseCollection = collection;
window.firebaseAddDoc = addDoc;
window.firebaseGetDocs = getDocs;
window.firebaseDeleteDoc = deleteDoc;
window.firebaseDoc = doc;
window.firebaseSetDoc = setDoc;
window.firebaseGetDoc = getDoc;