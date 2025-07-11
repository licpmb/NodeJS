import "dotenv/config";
import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  // measurementId: process.env.FIREBASE_MEASUREMENT_ID 
};
console.log(process.env.FIREBASE_API_KEY); // Should log your API key
console.log(firebaseConfig); // Should log the full config object
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (necesita front)
// let analytics = null;
// isSupported()
//   .then((supported) => {
//     if (supported) {
//       analytics = getAnalytics(app);
//     } else {
//       console.log("Firebase Analytics is not supported in this environment");
//     }
//   })
//   .catch((error) => {
//     console.error("Error checking analytics support:", error);
//   });

// Initialize Firestore
const db = getFirestore(app);

export { app, db };