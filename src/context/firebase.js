import { createContext } from "react";
import { firebase } from '../lib/firebase.prod';

export const FirebaseContext = createContext(firebase);
