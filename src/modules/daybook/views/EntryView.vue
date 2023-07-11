<template >
  <template v-if="entry">
  <div class="entry-title d-flex justify-content-between pt-3 px-3">
    <div>
      <span class="text-success fs-3 fw-bold">{{ day }}</span>
      <span class="mx-1 fs-3"> {{ month }}</span>
      <span class="fw-light">{{ yearDay }}</span>
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
   <textarea v-model="entry.text" placeholder="Que sucedio hoy?"></textarea>
  </div>


  <img src="https://pbs.twimg.com/profile_images/1579811683521937409/Q5iYpexb_400x400.jpg" alt="entry-img">
  </template>


  <Fab
    icon="fa-save"
    @on:click="saveEntry"
  />


</template>


<script>

import getDayMonthYear from '../helpers/getDayMonthYear'


import { defineAsyncComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
  export default{
    name: 'EntryViewComponent',
    props: {
      id:{
        type: String,
        required: true,
      }
    },
    components: {
      Fab: defineAsyncComponent( () => import('../components/Fab.vue'))
    },
    data(){
      return{
        entry: null
      }
    },
    computed:{
      ...mapGetters('journal',['getEntryById']),
      day(){
        const { day } = getDayMonthYear(this.entry.date)
        return day
      },
      month(){
        const { month } = getDayMonthYear(this.entry.date)
        return month
      },
      yearDay(){
        const { year } = getDayMonthYear(this.entry.date)
        return year
      }

    },
    methods: {
      ...mapActions('journal', ['updateEntry','createEntry']),
      loadEntry(){
        let entry;
        if(this.id === 'new'){
          entry = {
            text: '',
            date: new Date().getTime(),
          }
        }else{
          entry = this.getEntryById(this.id)
          if(Object.keys(entry).length === 0) return this.$router.push({name: 'no-entry'})
        }
        
        // if(!entry) // no funciono
        this.entry = entry;
      },
      
      async saveEntry(){
        //console.log('Guardando entrada')
        //console.log(this.entry)


        if(this.entry.id){
          //update the entry
          await this.updateEntry(this.entry)
        }else{
          //create a new entry
          const id = await this.createEntry(this.entry);

          this.$router.push({name: 'entry', params: {id}})
        }
      }
    },
    created(){
      console.log(this.entry)
      this.loadEntry()
    },
    watch: {
      id(){
        this.loadEntry()
      }
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