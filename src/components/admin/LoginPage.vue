<template>
  <div class="box1">
      <div>
          <h1>Model Admin System</h1>
          <ul>
              <div class="input-field">
                <label>
                    <li>Name： <input type="text" placeholder="please enter" v-model.trim="name"></li>
                </label>
                <label>
                    <li>Password：<input type="password" placeholder="please enter" v-model.trim="password"></li>
                </label>
              </div>
              <li><button @click="sign">Log in</button></li>
              <li v-show="flag" :class="{style1:flag}">
                  {{ this.tip }}
              </li>
          </ul>
      </div>
  </div>
</template>


<script>
export default {
    name: 'LoginPage',
    data(){
        return{
            name:'',
            password:'',
            tip:'',
            // flag
            flag:'false'
        }
    },
    methods:{
        async sign(){
            if(this.name === '' || this.password === ''){
                this.flag='false'
                this.tip='Username or password should not be empty'
            // } else if(this.name ==='123' && this.password === '123456'){
            //     this.flag='true',
            //     this.tip=''
            //     // router
            //     console.log('this.name:', this.name);
            //     this.$router.push({
            //     path:'/Admin/modelselect',
            //     query: { ADname: this.name } 
            //     })
            // } else {
            //     this.flag='false',
            //     this.tip="Username and password didn't match"
            // }
            }else{
              try {
                const response = await this.$axios.post('/login', {
                    role: 'admin', 
                    username: this.name,
                    pwd: this.password
                });
                // 检查返回的响应状态
                if(response.status === 200){
                    if(response.data === 'Login successfully'){
                        console.log('Login success:', response.data);
                        this.$router.push({
                        path:'/Admin/modelselect',
                        query: { ADname: this.name } 
                        });
                    }else {
                        this.flag='false';
                        this.tip=response.data;
                    }
                    
                } else {
                    console.log('Login failed:', response.data);
                    this.flag='false';
                    this.tip="Username and password didn't match";
                }
            } catch(error) {
                // 处理或显示错误
                console.log('Error:', error);
                this.flag='false';
                this.tip="An error occurred";
            }

            }
        }
    }
}
</script>


<style scoped>
h1 {
  margin-left: 2rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
}
div.box1 {
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* height: 100vh; */
    height: 50%;
    width: 100%;
    /* background-color: red; */
}
.input-field {
    justify-content: center;
    width: 57%; 
    /* margin-left: auto;  */
    /* margin-right: auto;  */
    text-align: right; 
  }
.style1{
    color:rgb(135, 132, 132);
}

 div.box1 div ul li {
    margin-top: 10px;
    list-style: none;
    /* color:rgb(96, 207, 170) */
 }
 div.box1 div ul li button {
    margin-top: 1rem;
    width: 5%;
 }
</style>
