<template>
  <div class="login-wrap">
    <el-form class="login-form" label-position="left" label-width="80px" :model="formData">
<!--      <h2 class="login_user">用户登录</h2>-->
      <h2>用户登录</h2>
      <el-form-item label="用户名：">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码：">
        <el-input v-model="formData.password"></el-input>
      </el-form-item>
      <el-button class="login-btn" type="primary">登录</el-button>
    </el-form>
  </div>

</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      formData: {
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style scoped>
.login-wrap{
  height: 100%;
  background-color: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrap .login-form{
  width: 400px;
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
}
.login-wrap .login-btn{
  width: 100%;
}
/*.login-wrap .login_user{*/
/*  text-align：center;*/
/*}*/
</style>
