import firebase_app from "../config";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebase_app)
export default async function getStartups() { 

    let collectionRef = collection(db, "startups")

    let result = null;
    let error = null;

    try {
        result = await getDocs(collectionRef);
    } catch (e) {
        error = e;
    }

    return { result, error };
}