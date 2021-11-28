import app from "./firebaseConfig";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
const firestore = getFirestore(app);
export default firestore
