<template>
  <div class="app-main-layout">
    <Navbar @click="isOpen=!isOpen"/>
    <Sidebar v-model="isOpen"/>

    <main class="app-content " :class="{full: !isOpen}">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <router-link class="fixed-action-btn" to='/record'>
      <a class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">add</i>
      </a>
    </router-link>
  </div>
</template>
<script>
import Navbar from "@/components/app/Navbar";
import Sidebar from "@/components/app/Sidebar";
export default {
  name: "main-layout",
  components: { Navbar, Sidebar },
  data:()=>({
    isOpen:true
  }),
  async mounted(){
    if(!Object.keys(this.$$store.getters.info)){
      await this.$store.dispatch('fetchinfo')
    }
  },

};
</script>
