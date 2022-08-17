import { ref } from "vue"
import { auth } from "../firebase/config"


let error=ref(null)
let signOut=async()=>{
    try{
        await auth.signOut();
        console.log('User was logged out');
     }catch(err){
         error.value=err.message
     }
}

let useLogout=()=>{
    return { error,signOut }
}
export default useLogout