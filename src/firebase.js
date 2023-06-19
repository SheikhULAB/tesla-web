import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAn_lgBHhTcnXdop_tRG0I-0tsHsaKlIPY",
  authDomain: "tesla-web-23b00.firebaseapp.com",
  projectId: "tesla-web-23b00",
  storageBucket: "tesla-web-23b00.appspot.com",
  messagingSenderId: "1039661557828",
  appId: "1:1039661557828:web:0de0dd8d34d809ef5ab411"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }
