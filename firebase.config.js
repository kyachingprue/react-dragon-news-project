// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBclzEgWIy50HxWaZSLfqsbfoTgGNz9hZY',
  authDomain: 'react-dragon-news-400bd.firebaseapp.com',
  projectId: 'react-dragon-news-400bd',
  storageBucket: 'react-dragon-news-400bd.firebasestorage.app',
  messagingSenderId: '91884959765',
  appId: '1:91884959765:web:238d647edc133ce911f61c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
