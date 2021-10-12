import firebase from 'firebase/app';
import { TLState } from 'ducks/tl';

const TL_COLLECTION_NAME = 'tl';

if (firebase.apps.length === 0) {
  const firebaseConfig = {
    apiKey: 'AIzaSyAkQU7p1YNFPq7K-DSWCzJCUsQe9O1rLxs',
    authDomain: 'tlformatter.firebaseapp.com',
    projectId: 'tlformatter',
    storageBucket: 'tlformatter.appspot.com',
    messagingSenderId: '718811297260',
    appId: '1:718811297260:web:ddb8ad68b51b9bbc293cc9',
    measurementId: 'G-4CP0QKZ23X',
  };
  firebase.initializeApp(firebaseConfig);
}

const storeTL: (tlData: TLState) => void = async (tlData) => {
  const db = firebase.firestore();
  await db.collection(TL_COLLECTION_NAME).add(tlData);
};

export default storeTL;
