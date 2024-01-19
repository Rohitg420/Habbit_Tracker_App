import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyARMWr4PGfKW1C5jKK4hmMJGUG8eHYAROU",
  authDomain: "habit-tracker-85037.firebaseapp.com",
  projectId: "habit-tracker-85037",
  storageBucket: "habit-tracker-85037.appspot.com",
  messagingSenderId: "825389918779",
  appId: "1:825389918779:web:459c6a2bf7e5ae75dbca1e"
};

//Initializing the firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


//Initialize firebase Authentication and get a reference to the service

const auth = getAuth(app);
