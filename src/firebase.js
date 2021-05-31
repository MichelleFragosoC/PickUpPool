import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBKw2NHPMOXtlVqBFM6RLnjIWBisBN6r90",
    authDomain: "pickup-vtex.firebaseapp.com",
    projectId: "pickup-vtex",
    storageBucket: "pickup-vtex.appspot.com",
    messagingSenderId: "1019913078929",
    appId: "1:1019913078929:web:6f6878a7240e63dd5e5730",
    measurementId: "G-G6WPSMG4YS"
};

const fb = firebase.initializeApp(firebaseConfig);
const auth = fb.auth();
const db = fb.firestore();
const collectionOrders = () => {
    return db.collection('orders').get();
}
const collectionDeliveries = () => {
    return db.collection('deliveries').get();
}

export {auth, db, collectionOrders, collectionDeliveries}
