<template>
    <div id="poster">
      <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          @keyup.enter="submitForm('ruleForm')"
          label-width="150px" style="width: 380px"
          class="register">
        <h2 style="color: #3a91ba;">Sign up</h2>
        <el-form-item label="Username" prop="name">
          <el-input size="medium" auto-complete="off" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="pass">
          <el-input size="medium" type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Comfirm Password" prop="checkPass">
          <el-input size="medium" type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item style="margin-top: 50px;">
          <el-button  type="primary" @click="submitForm('ruleForm')">Submit</el-button>
          <el-button  @click="resetForm('ruleForm')">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Register',
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please enter password'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please enter password AGAIN!'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('Passwords are different'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          name: ''
        },
        rules: {
          pass: [
            { required: true, validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { required: true, validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { required: true, message: 'Please enter username', trigger: 'blur' },
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.post('/register',{
              username: this.ruleForm.name,
              password: this.ruleForm.pass
            }).then(resp => {
              if (resp.data.code === 200) {
                this.$alert('Register Succeed!', '提示', {
                  confirmButtonText: '确定'
                })
                this.$router.replace('/login')
              } else {
                this.$alert(resp.data.message, '提示', {
                  confirmButtonText: '确定'
                })
              }
              // eslint-disable-next-line no-unused-vars
            }).catch(failResponse => {
              this.$alert('Request failed')
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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
  
  .register {
    margin:100px auto;
    height: 450px;
    width: 300px;
    padding: 10px 20px 0px 20px;
    background: rgba(2, 10, 14, 0.5);
  }
  
  ::v-deep .el-form-item__label {
    color: white;
  }
  
  </style>