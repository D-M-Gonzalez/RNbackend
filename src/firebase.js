import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCrvpPDrTsg5Pxd0b71VhGULI8YBlT1VLw",
    authDomain: "ejemplo-e3131.firebaseapp.com",
    projectId: "ejemplo-e3131",
    storageBucket: "ejemplo-e3131.appspot.com",
    messagingSenderId: "269788693571",
    appId: "1:269788693571:web:e182a77814d86b090bc0f6",
    measurementId: "G-9P3XV807LY"
  };

const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)