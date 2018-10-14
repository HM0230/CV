<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted(){
    var h = location.href;
    console.log(h);
  }
}
</script>

<style>

</style>
