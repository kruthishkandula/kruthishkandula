import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { firebaseConfig } from './firebaseConfig';

let analytics: ReturnType<typeof getAnalytics> | null = null;

export const initFirebase = async () => {
  if (!getApps().length) {
    const app = initializeApp(firebaseConfig);
    if (typeof window !== 'undefined' && (await isSupported())) {
      analytics = getAnalytics(app);
    }
  }
  return analytics;
};
