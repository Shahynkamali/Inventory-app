import Rebase from 're-base';
import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDbiUZB70o0ahDRHdJrg-5KJfjPr_-9hFE",
        authDomain: "fish-store-88413.firebaseapp.com",
        databaseURL: "https://fish-store-88413.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

export {firebaseApp} ;

export default base;
