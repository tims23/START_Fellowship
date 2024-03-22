import firebase_app from "../config";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)
export default async function getStartup(id) {
    console.log(id)
    let docRef = doc(db, "startups", id);

    let result = null;
    let error = null;

    try {
        console.log(docRef)
        result = await getDoc(docRef);
        console.log(result)
    } catch (e) {
        error = e;
    }

    return { result, error };
}