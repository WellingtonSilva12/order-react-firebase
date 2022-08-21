import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAE2EOBE6phm9-ofmMuNMFYKzTyXGbpEuM',
  authDomain: 'order-service-react.firebaseapp.com',
  projectId: 'order-service-react',
  storageBucket: 'order-service-react.appspot.com',
  messagingSenderId: '462989992468',
  appId: '1:462989992468:web:f181babfbf9939a61d7d01'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
