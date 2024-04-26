const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");

 
// const firebaseConfig = {
//   apiKey: "AIzaSyBQ_0Ix_-vLGbLdS0pC7fYhUgpS0Uo7zsk",
//   authDomain: "mithra-79f81.firebaseapp.com",
//   projectId: "mithra-79f81",
//   storageBucket: "mithra-79f81.appspot.com",
//   messagingSenderId: "995873193893",
//   appId: "1:995873193893:web:0afe16b549a1e4613cf24c",
// };

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket:  process.env.STORAGE_BUCKET,
  messagingSenderId:  process.env.MESSAGING_SENDER_ID,
  appId:  process.env.APP_ID,
};


const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage();

module.exports = { storage, firebaseApp };
