import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
const Home = () => {
    const logOut = async () => {
        await signOut(auth)
    }
    return (
        <div>
            <h2>Welcome home</h2>
            <button onClick={logOut}>Log Out</button>
        </div>
    )
}

export default Home
