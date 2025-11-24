// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXI-PjsWDmwddmlt6DnfF4M4pC59XDS7o",
  authDomain: "aulapwahambuguermenu.firebaseapp.com",
  projectId: "aulapwahambuguermenu",
  storageBucket: "aulapwahambuguermenu.firebasestorage.app",
  messagingSenderId: "1056583419682",
  appId: "1:1056583419682:web:92b22388925334008dc77b",
  measurementId: "G-MNMPRFEDRT"
};

  window.fbApp = initializeApp(firebaseConfig);
  window.analytics = getAnalytics(window.fbApp);
  console.log(window.fbApp);
