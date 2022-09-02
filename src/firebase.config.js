import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAzmP5ePDPyUXgi-2rpQqfxHM9QOVf_Vs4",
  authDomain: "mystore-56256.firebaseapp.com",
  databaseURL: "https://mystore-56256-default-rtdb.firebaseio.com",
  projectId: "mystore-56256",
  storageBucket: "mystore-56256.appspot.com",
  messagingSenderId: "998013503139",
  appId: "1:998013503139:web:accec9f681f2803288e116",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
