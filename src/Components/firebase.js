import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB0fzJAibu_1LU4HQwlE1dBKP5_ghxbBE0",
  authDomain: "defencevidhya.firebaseapp.com",
  projectId: "defencevidhya",
  storageBucket: "defencevidhya.appspot.com",
  messagingSenderId: "432765101100",
  appId: "1:432765101100:web:362b213e759e7e442b9d89",
  measurementId: "G-7KC7F8XXDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
