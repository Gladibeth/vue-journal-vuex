<template>
  <div>
    <button class="btn btn-primary">
      <i class="fa fa-2x fa-plus"></i>
    </button>
  </div>
</template>

<script>
  export default{
    name: 'BtnComponent'
  }
</script>


<style lang="scss" scoped>
  button{
    width: 80px;
    height: 80px;
    position: fixed;
    border-radius: 100%;
    bottom: 20px;
    right: 20px;
  }
</style>