const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: "mithra-79f81.appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

// const storage = getStorage();

const storage = getStorage(firebaseApp, process.env.STORAGE_BUCKET);

console.log("Storage Bucket:", process.env.STORAGE_BUCKET);

module.exports = { storage, firebaseApp };
