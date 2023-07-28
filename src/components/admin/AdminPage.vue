<template>
  <div>
    <div class="container">
      <h3>A/B Test</h3>
      <el-switch v-model="Iftest"></el-switch>
    </div>
    <SelecTable />
  </div>
</template>

<script>
import SelecTable from './PageCompo/SelcTable.vue';

export default {
  name: 'AdminPage',
  components: {
    SelecTable,
  },
  data() {
    return {
      Iftest: false,
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.name {
  margin: 0 52rem 1rem 0;
}
/* .container {
  display: flex;
  justify-content: center; 
  align-items: center; 
  margin: 1rem 1rem 1rem;
} */

h3 {
  margin: 40px 0 0 ;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
