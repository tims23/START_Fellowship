import firebase_app from "../config";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebase_app)
export default async function getFilters() { 

    let collectionRef = collection(db, "filters")

    let result = null;
    let error = null;

    try {
        result = await getDocs(collectionRef);
    } catch (e) {
        error = e;
    }

    return { result, error };
}