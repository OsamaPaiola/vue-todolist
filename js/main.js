

const app = new Vue({
  el:'#app',
  data:{
    indexItem: 0,
    items: [
      { message: 'Fare colazione' },
      { message: 'Palestra' },
      { message: 'Doccia' },
      { message: 'Corso Boolean' },
    ],
    text: '',
  },
  methods:{
    add(){
      this.items.push({ message: this.text});
      this.text='';
    },
    del(index){
      this.items.indexOf(index);
      console.log(index);
    },
  },
});
