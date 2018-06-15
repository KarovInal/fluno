import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyCfDH0wYoUGiyXGTt7V71DgTRrCoY7sRjM',
  authDomain: 'fluno-develop.firebaseapp.com',
  databaseURL: 'https://fluno-develop.firebaseio.com',
  projectId: 'fluno-develop',
  storageBucket: 'fluno-develop.appspot.com',
  messagingSenderId: '130776480011'
};

firebase.initializeApp(config);

// export const database = firebaseDB.database();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
export const auth = firebase.auth();

export default firebase;
