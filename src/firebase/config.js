import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD6Owyzv-08XPtJsJlSDrF58HJ_aSiqvz0",
  authDomain: "learn-firebase-3509b.firebaseapp.com",
  projectId: "learn-firebase-3509b",
  storageBucket: "learn-firebase-3509b.appspot.com",
  messagingSenderId: "95311082896",
  appId: "1:95311082896:web:79e883bf6e3d80c4e06f15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage };
