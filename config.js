import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBoeK9zwMmAVqe08dv-MROaiVNEidgEVMU",
  authDomain: "attendnce---app--60.firebaseapp.com",
  databaseURL: "https://attendnce---app--60-default-rtdb.firebaseio.com",
  projectId: "attendnce---app--60",
  storageBucket: "attendnce---app--60.appspot.com",
  messagingSenderId: "531897557696",
  appId: "1:531897557696:web:4c8cfec8edea30788fc325"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.database();
