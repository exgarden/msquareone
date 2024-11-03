// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore for database
import { getAnalytics } from "firebase/analytics"; // Analytics for tracking

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqNrIwqw0gUR_krTJrSYvoex2Xn9MddXA",
  authDomain: "msquareone-c4e92.firebaseapp.com",
  projectId: "msquareone-c4e92",
  storageBucket: "msquareone-c4e92.firebasestorage.app",
  messagingSenderId: "743477825879",
  appId: "1:743477825879:web:9b8e7df1485c4f3538ae12",
  measurementId: "G-SC2MYTLQMG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (Database)
const db = getFirestore(app);

// Initialize Analytics (if needed)
const analytics = getAnalytics(app);

// Export Firestore database so it can be used in other components
export default db;
