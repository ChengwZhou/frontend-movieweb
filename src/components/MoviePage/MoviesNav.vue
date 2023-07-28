<template>
    <div class="movie-nav" style="margin-top: 0px">
      <div class="chooseMovie" style="display: flex">
        <el-tag effect="dark" style="margin-left: 10px">Genres</el-tag>
      </div>
      <div class="chooseBytype" style="display: flex;width: 100%;flex-wrap: wrap;margin-top: 10px">
        <el-radio-group
            v-model="cid"
            @change="handleSelect"
        >
          <el-radio v-for="(val,key) in types" :key="key" :label="key">{{val}}</el-radio>
        </el-radio-group>
      </div>
      <el-divider></el-divider>
      <div class="chooseByOther" style="margin-left: 15px">
        <el-radio-group
          v-model="dateOrRate"
          @change="handleSelect2"
        >
          <el-radio label="1">Rating Descending </el-radio>
          <el-radio label="2">Release Date Descending</el-radio>
        </el-radio-group>
      </div>
    </div>
  </template>
  
  <script>
  const categories = {
    0: 'All', 1: 'Drama', 2: 'Comedy', 3: 'Action',
    4: 'Romance', 5: 'Science Fiction', 6: 'Animation', 7: 'Mystery',
    8: 'Thriller', 9: 'Horror', 10: 'Crime', 11: 'Fantasy',
    12: 'Music', 13: 'Adventure', 14: 'Documentary', 15: 'History',
    16: 'War', 17: 'Western'
  };
  export default {
    name: "MoviesNav",
    data() {
      return {
        dateOrRate:'1',
        cid:'0',
        types: categories
      }
    },
    methods: {
      handleSelect(value) {
        this.cid = value;
        this.$emit('categorySelect')
      },
      handleSelect2(value) {
        this.dateOrRate = value;
        this.$emit('categorySelect')
      }
    }
  }
  </script>
  
  <style scoped>
    div {
      display: flex;
      flex-wrap: wrap;
    }
  
    button {
      background: transparent !important;
      color: white;
      border: none;
      margin: 0 !important;
    }
  
    .el-radio {
      color: white;
    }
  
    ::v-deep .chooseBytype span.el-radio__inner {
      display: none;
    }
  
    .el-radio {
      font-size: 25px;
      padding-top: 10px;
    }
  </style>