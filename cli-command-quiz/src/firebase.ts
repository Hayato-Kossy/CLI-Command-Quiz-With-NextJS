import {
  initializeApp,
  getApps,
  FirebaseApp,
  FirebaseOptions,
} from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {
  getFirestore,
  Firestore,
  initializeFirestore,
  setDoc,
  doc,
} from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCjddgk7SnWhJheK5goC083tYyzjAWotk4",
  authDomain: "cli-command-quiz.firebaseapp.com",
  projectId: "cli-command-quiz",
  storageBucket: "cli-command-quiz.appspot.com",
  messagingSenderId: "258777422471",
  appId: "1:258777422471:web:353db8854bfe6bdb8a3622",
  measurementId: "G-6MF1KVX92F"
};
const app = initializeApp(firebaseConfig);
initializeFirestore(app, {
  ignoreUndefinedProperties: true,
});
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

const signIn = async () => {
  await signInWithPopup(auth, provider).then((res) => {
    setDoc(doc(db, 'users', res.user.uid), {
      name: res.user.displayName,
      uid: res.user.uid,
      BestScore: 0,
      Scores: [],
      Life: 3,
    }).catch((error) => {
      console.log(error.message);
    });

    const displayName = res.user.displayName ? res.user.displayName : 'NoName';
    console.log(displayName);
    console.log(res.user.uid);

    localStorage.setItem('userName', displayName);
    localStorage.setItem('userId', res.user.uid);
    localStorage.setItem('isAuth', 'true');
  });
};

export { auth, provider, db, signIn };
