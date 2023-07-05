export default {
  name: 'daybook',
  component: () => import(/* webpackChunkName: "Daybook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
  children: [
    {
      path: '',
      name: 'no-entry',
      component: () => import(/* webpackChunkName: "Daybook" */ '@/modules/daybook/views/NoEntrySelected.vue'),
    }
  ]
}