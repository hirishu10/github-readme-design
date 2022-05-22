import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { Analytics, getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

export const app =
  getApps()?.length <= 0 ? initializeApp(firebaseConfig) : getApp();

//
let analytics: Analytics;
if (app.name && typeof window !== "undefined") {
  analytics = getAnalytics(app);

  // This help to send the data after some event happened
  logEvent(analytics, "notification_received");
  logEvent(analytics, "screen_view");
}
const auth = getAuth(app);
const dbAuth = getFirestore(app);
//
export { auth, dbAuth, analytics };
