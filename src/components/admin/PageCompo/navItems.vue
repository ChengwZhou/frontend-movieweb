<template>
    <h3 class="name">Model Admin: {{ADname}}</h3>
    <nav>     
        <ul class="nav-list">
        <li v-for="(item, index) in navItems" :key="index">
            <router-link :to="item.link" class="link">{{ item.name }}</router-link>
        </li>
        </ul>        
    </nav>
    <div><router-view></router-view></div>
</template>

<script>
export default {
    name: 'navItems', 
    data() {
        return {
        ADname: null, 
        navItems: [
            { name: 'Model Select', link: '/Admin/modelselect' },
            { name: 'Model Update', link: '/Admin/modelupdate' },
            { name: 'EDA', link: '/Admin/eda' }
        ]
        }
    },
    created() {
        console.log('this.$route:', this.$route);
        this.ADname = this.$route.query.ADname;
        console.log('ADname:', this.ADname);
    }
}
</script>

<style scoped>
.name {
  margin: 0 52rem 1rem 0;
}
.nav-list li {
  display: inline-block;
  margin: 0rem 12rem 3rem;
}
.link {
  color: rgb(105, 106, 107);
  text-decoration: none;
}
.router-link-active {
  color: rgb(113, 140, 234);
}
</style>