<template>
  <div>
    <Navbar/>

    <div v-if="isLoading" class="row justify-content-md-center">
      <div class="col-3 alert alert-primary text-center mt-5">
        Espere por favor...
        <h3 class="mt-2">
          <i class="fa fa-spin fa-sync"></i>
        </h3>
      </div>
    </div>

    <div v-else class="d-flex">
      <div class="col-3">
        <EntryList/>
      </div>
      <div class="col">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapActions, mapState } from 'vuex'

export default{
  name: 'DaybookLayouts',
  components: {
    Navbar: defineAsyncComponent(() => import('../components/Navbar')),
    EntryList: defineAsyncComponent(() => import('../components/EntryList'))
  },
  methods:{
   ...mapActions('journal',['loadingEntries'])
  },
  computed: {
    ...mapState('journal',['isLoading'])
  },
  created(){
    this.loadingEntries()
  }
}
</script>