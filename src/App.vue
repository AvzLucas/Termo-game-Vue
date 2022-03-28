<template>
    <HeaderComponent msg="Welcome to Your Vue.js App"/>
    <LetterField />
    <KeyBoard />
    <p v-for="i in teste" v-bind:key="i">{{teste[i]}}</p>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import LetterField from './components/LetterFields.vue'
import KeyBoard from './components/KeyBoard.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    LetterField,
    KeyBoard
  },
  mounted:function(){
    console.log(this.something[0])
  }
  ,
  data(){
    return {
      dataSet : this.$store.dataSet,
      teste : this.$store.something
    }
  },
}
</script>

<style>
  #app{
    display: grid;
    place-items:center;
  }
</style>