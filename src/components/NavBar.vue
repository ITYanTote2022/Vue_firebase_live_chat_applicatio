<template>
  <nav>
    <div>
      <p>Hi {{user.displayName}}</p>
      <p class="email">logged in as {{user.email}}</p>
    </div>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script>

import useLogout from "../composables/useLogout"
import getUser from "../composables/getUser"

export default {
     setup(){
      let { user }=getUser();
      let { error,signOut } = useLogout()
      let logout=async()=>{
         await signOut()
      }
      
      return { logout,error,user }
     }
     
}
</script>

<style>

</style>