import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcyuDbYAQC-R02moc9eq18BybYhAo4k6I",
  authDomain: "soto-baguio.firebaseapp.com",
  projectId: "soto-baguio",
  storageBucket: "soto-baguio.appspot.com",
  messagingSenderId: "514623620919",
  appId: "1:514623620919:web:303658538385e0b73abcb2",
  measurementId: "G-NED1DVC1HY",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
