

/* export default () => ({

}) */

export default () => ({
  isLoading: true,
  entries : [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: 'Excepteur officia amet culpa consectetur nulla consequat ut aliquip minim nisi. Aliqua labore mollit duis irure consequat dolore consequat voluptate eiusmod. Anim commodo deserunt labore esse.',
      picture: null
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: 'Consequat commodo sit esse nisi eiusmod proident id occaecat aliquip veniam.',
      picture: null
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: 'Voluptate veniam minim culpa occaecat. Et eu quis ea pariatur. Tempor quis reprehenderit dolore eiusmod consequat aliquip commodo est cillum laboris eiusmod eiusmod id adipisicing.',
      picture: null
    }
  ]
})