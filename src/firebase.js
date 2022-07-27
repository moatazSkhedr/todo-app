
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseApp =firebase.initializeApp({
        apiKey: "AIzaSyBGwHHGhXos5D_W2iZpR1IXjjuNpRkZGeY",
        authDomain: "todo-app-f3d20.firebaseapp.com",
        projectId: "todo-app-f3d20",
        storageBucket: "todo-app-f3d20.appspot.com",
        messagingSenderId: "839384757944",
        appId: "1:839384757944:web:ad8fc903e2b6f192ed664d",
        measurementId: "G-D6TPD48H9P"
      
});
const db = firebaseApp.firestore();

export default db

