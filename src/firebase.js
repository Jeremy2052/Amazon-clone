import firebase from "firebase"

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBlTWHTPz1YDkExTHa0zGMj3dI_0TD5Neo",
    authDomain: "clone-95354.firebaseapp.com",
    databaseURL: "https://clone-95354.firebaseio.com",
    projectId: "clone-95354",
    storageBucket: "clone-95354.appspot.com",
    messagingSenderId: "940534911808",
    appId: "1:940534911808:web:dfe1a57122aa1aef2d60a5",
    measurementId: "G-WCT0P9FP46"

});


const auth = firebase.auth();

export {auth};