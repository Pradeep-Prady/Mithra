const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");

// const firebaseConfig = {
//   apiKey: "AIzaSyDp5iDnzGTLnLLTw5YfIZfXgACfdej8vBA",
//   authDomain: "mithra-c9b5e.firebaseapp.com",
//   projectId: "mithra-c9b5e",
//   storageBucket: "mithra-c9b5e.appspot.com",
//   messagingSenderId: "748624635218",
//   appId: "1:748624635218:web:b6be496b2ce1aad859868b",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBQ_0Ix_-vLGbLdS0pC7fYhUgpS0Uo7zsk",
  authDomain: "mithra-79f81.firebaseapp.com",
  projectId: "mithra-79f81",
  storageBucket: "mithra-79f81.appspot.com",
  messagingSenderId: "995873193893",
  appId: "1:995873193893:web:0afe16b549a1e4613cf24c",
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage();

module.exports = { storage, firebaseApp };
