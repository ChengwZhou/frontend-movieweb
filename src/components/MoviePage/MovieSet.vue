<template>
    <div class="movieSetBG">
      <el-container style="background: rgba(109,114,120,0.1);margin:0px 0px">
          <el-header height="30%" v-if="categoryView"> 
            <movies-nav @categorySelect="listByCategory" ref="categories"></movies-nav>
          </el-header>
          <el-main>
            <movies-view @pageChange="handlePageChange" ref="movieView"></movies-view>
          </el-main>
      </el-container>
    </div>
  </template>
  
  <script>
  import MoviesNav from "@/components/MoviePage/MoviesNav";
  import MoviesView from "@/components/MoviePage/MoviesView";
  
  export default {
    name: "MovieSet",
    components: {MoviesView, MoviesNav},
    data() {
      return{
        categoryView: true
      }
    },
    methods: {
      listByCategory() {
        console.log('listByCategory')
        this.categoryView = true
        this.fetchMovies()
      },
      handlePageChange(){
        console.log('handlePageChange')
        this.categoryView = true
        this.fetchMovies()
      },
      
      fetchMovies(){    
        const _this = this
        const cid = _this.$refs.categories.cid
        const dateOrRate = _this.$refs.categories.dateOrRate
        const c_page= _this.$refs.movieView.currentPage
        const url = '/movie'
        
        
        const map_cid = { 0: 'All', 1: 'Drama', 2: 'Comedy', 3: 'Action',
            4: 'Romance', 5: 'Science Fiction', 6: 'Animation', 7: 'Mystery',
            8: 'Thriller', 9: 'Horror', 10: 'Crime', 11: 'Fantasy',
            12: 'Music', 13: 'Adventure', 14: 'Documentary', 15: 'History',
            16: 'War', 17: 'Western'}
        const map_dateOrRate = { 1: 'Rating Descending', 2:'Release Date Descending'}
        
        console.log(url)
        console.log(c_page)
        _this.$axios.post(url,{page: c_page, genre: map_cid[cid], sort:map_dateOrRate[dateOrRate]}).then(resp=>{
          if (resp && resp.status === 200) {
            _this.$refs.movieView.movies = resp.data.movies
            _this.$refs.movieView.totalpage = resp.data.total
          }
        })
      },
    }
  }
  </script>
  
  <style scoped>
  
  </style>