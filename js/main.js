

const app = new Vue({
  el:'#app',
  data:{
    items: [
      { message: 'Fare colazione' },
      { message: 'Palestra' },
      { message: 'Doccia' },
      { message: 'Corso Boolean' },
    ],
    text:'',
    // item: { message: '' }
  },
  methods:{
    add(){
      this.items.push({ message: this.text});
      this.text='';
    },
    del(index){
      this.items.$remove(index);
    }
  },
});
