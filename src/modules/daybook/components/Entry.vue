<template>
  <div class="entry-container ml-2 p-3 pointer" @click="$router.push({name: 'entry', params: { id: entry.id}})">
    <div class="entry-title d-flex ">
      <span class="text-success fs fw-bold">{{ day  }}</span>
      <span class="mx-1 fs-5">{{ month  }}</span>
      <span class="mx-2 fw-light">{{  yearDay }}</span>
    </div>
    <div class="entry-description">
       {{  shortText }}
    </div>
  </div>
</template>

<script>
import getDayMonthYear from '../helpers/getDayMonthYear'
export default{
    name: 'EntryComponent',
    props: {
      entry: {
        type: Object,
        required: true,
      }
    },
    computed: {
      shortText(){
        return this.entry.text.length > 130 ? this.entry.text.substring(0,130) + '...' : this.entry.text;
      },
      
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