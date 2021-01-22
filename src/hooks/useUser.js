import firebase from 'firebase/app';

export const useUser = () => {
    const user = firebase.auth().currentUser
    return user ? {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid
    } : null
}