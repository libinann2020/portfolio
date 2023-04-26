<script>
import Header from './header.vue';
import Sidebar from './sidebar.vue';
export default {
  components: {
    Header,
    Sidebar
  }
}
</script>

<template>
    <div class="base">
        <Header/>
        <Sidebar/>
    </div>
</template>



<style>
@import './base.css';
</style>