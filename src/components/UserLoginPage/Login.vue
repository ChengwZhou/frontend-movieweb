<template>
    <div id="poster">
        <el-form :model="loginForm" label-position="left" class="login"
          @keyup.enter="login"
          label-width="80px" style="width: 300px;"
        >
          <h2 style="color: #3a91ba;">Login</h2>
          <el-form-item label="Username:">
            <el-input size="medium" type="text" v-model="loginForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Password:">
            <el-input size="medium" type="password" v-model="loginForm.password" autocomplete="off"></el-input>
          </el-form-item>
          
          <el-row style="margin-top:2.5rem">
            <el-col :span="8">
                <div>
                <el-button style="padding-right: 10px; display: block" type="text" @click="register">Create Account </el-button>
                <el-button style="padding-right: 10px; display: block" type="text" @click="adminlogin">Admin Login</el-button>
                </div>
            </el-col>
            <el-col :span="8">
                <el-checkbox size="medium" style="padding-left: 80px; padding-top: 1rem;color: white" v-model="checked">Remember Me</el-checkbox>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
                <el-form-item style="padding: 0px 50px 0px 0px">
                <el-button class="submit" size="medium" round type="primary" @click="login">Login</el-button>
                </el-form-item>
            </el-col>
          </el-row>


          <el-divider></el-divider>
          <!-- <el-form-item>
            <a class="login-way" href="/">
              <img src="../../assets/ico/wechat.png" style="object-fit: fill"/>
            </a>
            <a class="login-way" href="https://baidu.com">
              <img src="../../assets/ico/github.png" style="object-fit: fill"/>
            </a>
            <a class="login-way" href="https://baidu.com">
              <img src="../../assets/ico/weibo.png" style="object-fit: fill"/>
            </a>
          </el-form-item> -->
        </el-form>
      </div>
  </template>
  
  <script>
  export default {
    name: "Login",
    data () {
      return {
        checked: false,
        loginForm: {
          username: '',
          password: ''
        },
        responseResult: []
      }
    },
    methods: {
      login () {
        const _this = this
        console.log(this.$store.state)
        const url = '/login?rememberMe=' + this.checked
        this.$axios
            .post(url, {
              username: this.loginForm.username,
              password: this.loginForm.password
            },)
            .then(successResponse => {
              if (successResponse.data.code === 200) {
                _this.$store.commit('login',_this.loginForm)
                const path = this.$route.query.redirect;
                this.$router.replace({path:path === '/' || path === undefined ? '/' : path})
              }
              if (successResponse.data.code === 400) {
                alert(successResponse.data.message)
              }
            })
            .catch(failResponse => {
              alert(failResponse.data);
            })
      },
      register() {
        this.$router.replace('/register')
      },
      adminlogin() {
        this.$router.replace('/Adminlogin')
      }
    }
  }
  </script>
  
  <style scoped>
  
    #poster {
      background: url("../../assets/images/login.jpg") no-repeat center;
      height: 100%;
      width: 100%;
      background-size: cover;
      position: fixed;
    }
  
    .login {
      margin:100px auto;
      width:300px;
      padding: 10px 20px 0px 20px;
      background: rgba(2, 10, 14, 0.5);
    }
  
    ::v-deep .el-form-item__label {
      color: white;
    }
  
    .submit.el-button {
      width: 200px;
    }
  
    a.login-way {
      padding: 23px;
    }
  
  </style>