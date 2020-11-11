


const app = new Vue({
  el:'#app',
  data:{
    items: [
      { message: 'Fare colazione' },
      { message: 'Palestra' },
      { message: 'Doccia' },
      { message: 'Corso Boolean' },
    ],
    text: '',
    true: 'true',
  },
  methods:{
    add(){
      if(this.text !== ''){
        this.items.push({ message: this.text});
        this.text='';
      }else{
        text = '';
      }
    },
    del(index){
      this.items.splice(index,1);
    },
  },
});
