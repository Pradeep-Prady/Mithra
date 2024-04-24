const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");

const firebaseConfig = {
  apiKey: "AIzaSyDp5iDnzGTLnLLTw5YfIZfXgACfdej8vBA",
  authDomain: "mithra-c9b5e.firebaseapp.com",
  projectId: "mithra-c9b5e",
  storageBucket: "mithra-c9b5e.appspot.com",
  messagingSenderId: "748624635218",
  appId: "1:748624635218:web:b6be496b2ce1aad859868b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage();

module.exports = { storage, firebaseApp };
