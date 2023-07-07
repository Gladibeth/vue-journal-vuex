<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <button @click="goDaybook" class="btn btn-primary">Primary</button>
  <button @click="goDaybook" class="btn btn-secondary">secundary</button>
  <button @click="goDaybook" class="btn btn-success">success</button>
</template>


<script>
  export default{
    methods:{
      goDaybook(){
        this.$router.push({ name: 'no-entry'})
      }
    }
  }
</script>