<template>
    <div>
      <div class="selectOp">
        <h4>Model Type</h4>
        <select v-model="selectedOption">
          <option value="option1">R model</option>
          <option value="option2">S model</option>
        </select>
        <div class="ad-field">
          <label>
              <li>Model Address： <input type="text" placeholder="local addr." v-model="ModelAddr"></li>
          </label>
        </div>
      </div>
      <p>
      </p>
    </div>

</template>
  
<script>
  
  export default {
    name: 'ModelUpdate',
    data() {
    return {
      selectedOption: '' 
    };
    }
  }

</script>
  
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ad-field {
    justify-content: center;
    width: 100%; 
    margin-top: 2rem; 
    /* margin-right: auto;  */
  }
  
  h4 {
    margin: 40px 0 0;
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
  

  .selectOp{
    /* display: flex; */
    margin-top: 5rem; 
    justify-content: center;
    align-items: center;
  }
</style>
  