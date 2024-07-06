import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-axJ5xneb0a_eqQtwbmMlAg7TRYi3aiI",
  authDomain: "discode-f3d37.firebaseapp.com",
  projectId: "discode-f3d37",
  storageBucket: "discode-f3d37.appspot.com",
  messagingSenderId: "14227948610",
  appId: "1:14227948610:web:575cc2351dfe69fe4899db",
  measurementId: "G-B9DY1Q2HE2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
