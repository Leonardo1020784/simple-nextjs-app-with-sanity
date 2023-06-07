// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD724k3X6zG9umjl2nx2hsOZrVuCUiBYlY",
  authDomain: "fragacia-seductora.firebaseapp.com",
  projectId: "fragacia-seductora",
  storageBucket: "fragacia-seductora.appspot.com",
  messagingSenderId: "788469170213",
  appId: "1:788469170213:web:480d65d62de4df29bfbfcc",
  measurementId: "G-FSLET58DVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app
