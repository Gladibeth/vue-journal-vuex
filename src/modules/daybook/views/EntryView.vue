<template>
  <div class="entry-title d-flex justify-content-between pt-3 px-3">
    <div>
      <span class="text-success fs-3 fw-bold">5</span>
      <span class="mx-1 fs-3"> Julio</span>
      <span class="fw-light">2023, jueves</span>
    </div>

    <div>
    <button class="btn btn-danger mx-2">
      Borrar
      <i class="fa fa-trash-alt"></i>
    </button>
    <button class="btn btn-primary">
      Subir foto
      <i class="fa fa-upload"></i>
    </button>

    </div>
  </div>
  <hr>

  <div class="d-flex flex-column px-3 h-75">
   <textarea placeholder="Que sucedio hoy?"></textarea>
  </div>

  <Fab
    icon="fa-save"
  />

  <img src="https://pbs.twimg.com/profile_images/1579811683521937409/Q5iYpexb_400x400.jpg" alt="entry-img">

</template>


<script>
import { defineAsyncComponent } from 'vue'
  export default{
    name: 'EntryViewComponent',
    components: {
      Fab: defineAsyncComponent( () => import('../components/Fab.vue'))
    }
  }
</script>

<style lang="scss" scoped>
  textarea{
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus{
      outline: none;
    }
  }
  img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 0px rgba($color: #000000, $alpha: 0.2);
  }
</style>