<template>
  <div id='app'>
    <message v-text="test"></message>
    <message>Hello There</message>
    <message>Hello There</message>
  </div>
</template>

<script>
  import Message from "./components/Message.vue";
  export default {
    name: 'app',
    components: { Message },
    data () {
      return {
        'test': 'testing'
      }
    }
  }
</script>

<style type="text/css">
  
</style>
