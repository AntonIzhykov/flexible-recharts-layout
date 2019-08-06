// import firebase from './config/firebase';
// const db = firebase.firestore();
//TODO: create and use backend

import * as incomingData from 'projectSettings';

export const getIncomingData = () => {
  const requestHandler = (resolve, reject) => {

    setTimeout(() => {
      resolve(incomingData);
    }, 1)
      // .then(incomingData => resolve(incomingData))
      // .catch(error => reject(error.message));
  };
  return new Promise(requestHandler);
};
