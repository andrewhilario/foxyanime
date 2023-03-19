import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5D9oPOuIdILsSbu8vmVguCJ5v7UaoPq8",
  authDomain: "auth-dev-a2157.firebaseapp.com",
  projectId: "auth-dev-a2157",
  storageBucket: "auth-dev-a2157.appspot.com",
  messagingSenderId: "224071663134",
  appId: "1:224071663134:web:8d1bf22831df598fa9780f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
