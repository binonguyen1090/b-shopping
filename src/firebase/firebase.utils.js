import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCnCVms9mC03_BJv4MolFDe7UC1mVHUeIM",
  authDomain: "bshop-db.firebaseapp.com",
  databaseURL: "https://bshop-db.firebaseio.com",
  projectId: "bshop-db",
  storageBucket: "bshop-db.appspot.com",
  messagingSenderId: "515603019711",
  appId: "1:515603019711:web:edcfb38428c7c2782f530a",
  measurementId: "G-8DQP0EDJQQ",
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase