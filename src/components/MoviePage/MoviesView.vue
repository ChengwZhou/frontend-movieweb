<template>
    <div>
      <el-row style="height: 950px;">
        <el-tooltip effect="dark" placement="right"
        v-for="item in movies"
        :key="item.id">
            <template v-slot:content>
                <h1 style="font-size: 24px;margin-bottom: 6px;">{{item.movie_name}} ({{item.publish_date.slice(0, 4)}})</h1>
                <RateStars :grade="(item.rate*2).toFixed(1)"></RateStars>
                <p>Director:  {{item.director}}</p>
                <p>Actors:  {{item.actor}}</p>
                <p>TMDB_id:  {{item.tmdb_id}}</p>
                <p>Language:  {{item.spoken_language}}</p>
                

                <p>Keyword:  {{item.keyword}}</p>
                <div class="categories">
                <span class="tag-group__title" style="font-size: 16px;">Genre:  </span>
                <el-tag style="margin: 3px" effect="dark" v-for="(category, index) in item.genre.split(',')" :key="index">
                    {{category}}
                </el-tag>
                </div>
                <p style="width: 300px" class="abstract">Outline:  {{item.outline}}</p>
            </template>
            <el-card style="background-color:transparent;border:none;width: 135px;margin-bottom: 10px;height: 300px;float: left;margin-right: 25px" class="movie" bodyStyle="padding:10px" shadow="hover">
                <div class="cover">
                <img :src="item.poster" alt="Poster"/>
                </div>
                <div class="title" style="padding-left: 10px;">
                <a href="">{{item.movie_name}}</a>
                <span class="rate" style="font-size: 15px;color: #f9ca05;margin-left: 5px;margin-top: 2px">{{(item.rate*2).toFixed(1)}}</span>
                <!--
                <img src="../../assets/ico/delete.png" style="width: 15px;height: 15px;padding-left: 5px;" class="el-icon-delete" @click="deleteMovie(item.id)" alt="delete"
                -->
                </div>
            </el-card>
        </el-tooltip>
      </el-row>

      <el-row>
        <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pageSize"
            :total="totalpage">
        </el-pagination>
      </el-row>
    </div>
  </template>
  
  <script>
//   import EditInformation from "@/components/admin/content/EditInformation";
  import RateStars from "@/components/common/Rate";
  
  export default {
    name: 'MoviesView',
    components: {RateStars},
    data () {
      return {
        currentPage:1,
        pageSize:21,
        movies: [],
        totalpage: 0,
      }
    },
    mounted: function () {
      this.loadMovies()
    },
    methods: {
      loadMovies () {
        const _this = this;
        this.$axios.post('/movie',{page:1, genre:'Comedy', sort:'Rating Descending'}).then(resp => {
          console.log(resp.status)
          console.log(resp.data)
          if (resp && resp.status === 200) {
            _this.movies = resp.data.movies
            _this.totalpage = resp.data.total
          }
        })
      },
      handleCurrentChange: function (currentPage) {
        this.currentPage = currentPage
        this.$emit('pageChange')
        console.log(this.currentPage)
      },
    }
  }
  </script>
  
  <style scoped>
  
    .cover {
      width: 115px;
      height: 172px;
      margin-bottom: 7px;
      overflow: hidden;
      cursor: pointer;
    }
  
    img {
      width: 115px;
      height: 172px;
      /*margin: 0 auto;*/
    }
  
  
    .title {
      font-size: 14px;
      display: flex;
      justify-content: center;
    }
    .abstract {
      display: block;
      line-height: 17px;
    }
  
    a {
      text-decoration: none;
      height: 50px;
    }
  
    a:link, a:visited, a:focus {
      color: #3377aa;
    }
  
    p {
      font-size: 15px;
      width: 320px;
    }
  
    ::v-deep li.number.active{
      background: transparent !important;
    }
  
    ::v-deep li.number {
      background: transparent !important;
    }
  
    ::v-deep li.el-icon.more {
      background: transparent !important;
    }
    ::v-deep button.btn-prev {
      background: transparent !important;
    }
  
    ::v-deep button.btn-next {
      background: transparent !important;
    }
  
  </style>
  