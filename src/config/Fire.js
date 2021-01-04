import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0GGKcofhQm6sdXHlGPUxG9CDhdCE2HKA",
    authDomain: "onlinestreamingservice-25941.firebaseapp.com",
    projectId: "onlinestreamingservice-25941",
    storageBucket: "onlinestreamingservice-25941.appspot.com",
    messagingSenderId: "917479418767",
    appId: "1:917479418767:web:5f41326f6242843da279fa",
    measurementId: "G-HQ0E9TNEZG"
  };

  const fire =  firebase.initializeApp(firebaseConfig);

  export default fire;