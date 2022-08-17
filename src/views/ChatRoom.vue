<template>
<div class="container">
 <NavBar/>
 <ChatWindow/>
 <NewChatForm/>
</div>
</template>

<script>
import { watch } from '@vue/runtime-core';
import NavBar from '../components/NavBar.vue';
import getUser from '../composables/getUser';
import { useRouter } from 'vue-router';
import NewChatForm from '../components/NewChatForm.vue';
import ChatWindow from '../components/ChatWindow.vue';



export default {
    components: { NavBar, NewChatForm, ChatWindow },
    setup(){
      let {user}=getUser();
      let router=useRouter();
      watch(user,()=>{
         if(!user.value){
            router.push('/');
         }
      })
    }
}
</script>

<style>
     nav {
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      nav p {
        margin: 2px auto;
        font-size: 16px;
        color: #444;
      }
      nav p.email {
        font-size: 14px;
        color: #999;
      }
</style>