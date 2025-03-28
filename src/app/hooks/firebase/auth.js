import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./config";

export default function signIn() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log("User signed in:", user);
    })
    .catch((error) => {
      console.error("Error during sign-in:", error);
    });
}
