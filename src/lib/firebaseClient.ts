import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { firebaseConfig } from './firebaseConfig';

let analytics: ReturnType<typeof getAnalytics> | null = null;

export const initFirebase = async () => {
  // Skip analytics in development or localhost
  if (
    typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || process.env.NODE_ENV === 'development')
  ) {
    return null;
  }
  try {
    if (!getApps().length) {
      const app = initializeApp(firebaseConfig);
      if (typeof window !== 'undefined' && (await isSupported())) {
        analytics = getAnalytics(app);
      }
    }
    return analytics;
  } catch (err) {
    // Log error and return null if analytics fails
    console.error('Firebase Analytics initialization failed:', err);
    return null;
  }
};
