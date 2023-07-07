<template>
  <div>
    <Navbar/>

    <div class="d-flex">
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
import { mapActions } from 'vuex'

export default{
  name: 'DaybookLayouts',
  components: {
    Navbar: defineAsyncComponent(() => import('../components/Navbar')),
    EntryList: defineAsyncComponent(() => import('../components/EntryList'))
  },
  methods:{
   ...mapActions('journal',['loadingEntries'])
  },
  created(){
    this.loadingEntries()
  }
}
</script>