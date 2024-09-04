import Theme from "vitepress/theme"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import './style/var.css'

export default {
	...Theme
}

const firebaseConfig = {
	apiKey: "AIzaSyDcKx1dBRVlvaoR62jKeR_t22EnPgZsy3k",
	authDomain: "nas-wiki.firebaseapp.com",
	projectId: "nas-wiki",
	storageBucket: "nas-wiki.appspot.com",
	messagingSenderId: "438774902687",
	appId: "1:438774902687:web:f160b922e7b50d5ef197aa",
	measurementId: "G-YHZ0PVFXQ3"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);