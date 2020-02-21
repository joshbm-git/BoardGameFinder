const firebaseConfig = {
    apiKey: "AIzaSyDNmWbE7CjS7Z3mEtyU84v_gzscMFVuOcE",
    authDomain: "boardgamefinder-b5afb.firebaseapp.com",
    databaseURL: "https://boardgamefinder-b5afb.firebaseio.com",
    projectId: "boardgamefinder-b5afb",
    storageBucket: "boardgamefinder-b5afb.appspot.com",
    messagingSenderId: "776004722207",
    appId: "1:776004722207:web:1132a94ea596cfe34b7f2a"
};
firebase.initializeApp(firebaseConfig);

export const firebaseDB = firebase.firestore();