
import * as env from '../env'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: env.API_KEY,
  authDomain: env.AUTH_DOMAIN,
  projectId: env.PROJECT_ID,
  databaseURL:env.DATABASE_URL,
  storageBucket: env.STORAGE_BUCKET,
  messagingSenderId: env.MESSAGE_SENDER_ID,
  appId: env.APP_ID,
  measurementId: env.MEASUREMENT_ID
};
const app = initializeApp(firebaseConfig);
export default app