<template>
  <div class="entry-container ml-2 p-3 pointer" @click="$router.push({name: 'entry', params: { id: 10}})">
    <div class="entry-title d-flex ">
      <span class="text-success fs fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2021, jueves</span>
    </div>
    <div class="entry-description">
       {{ info.text }}
    </div>
  </div>
</template>

<script>
   export default{
    name: 'EntryComponent',
    props: {
      info: {
        type: Object,
        required: true,
      }
    }
   }
</script>

<style lang="scss" scoped>
  .entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s ease-in-out;

    &:hover{
      background-color: lighten($color: grey, $amount: 45);
      transition: 0.2s ease-in-out;
    }
    .entry-description{
      text-align: left;
      font-size: 12px;
    }
  }

  
</style>