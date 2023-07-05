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

export default{
  name: 'DaybookLayouts',
  components: {
    Navbar: defineAsyncComponent(() => import('../components/Navbar')),
    EntryList: defineAsyncComponent(() => import('../components/EntryList'))
  }
}
</script>