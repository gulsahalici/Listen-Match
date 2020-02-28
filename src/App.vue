<template>
  <div id="app"  >
      <drag-drop></drag-drop>
  </div>
</template>

<script>
    import DragDrop1 from "./components/DragDrop1";
    export default {
        name: 'App',
        components:{
            'drag-drop':DragDrop1
        }

    }
</script>

<style>
    #app {
          font-family: Avenir, Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-align: center;
          color: #2c3e50;
          margin-top: 60px;
    }
</style>
