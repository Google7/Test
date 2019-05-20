<template>
  <div>
    <Header></Header>
    <input type="text" placeholder="请输入用户名" v-model="userName"><br/>
    <input type="password" placeholder="请输入密码" v-model="userPwd"><br/>
    <button v-on:click="insert">提交</button>
    <div>
      <p>结果：{{res}}</p>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../components/header";
import Footer from "../components/footer";


export default {
  components: { Header, Footer },
  data() {
    return {
      res: false,
      userName : "",
      userPwd : ""
    };
  },
  methods: {
    insert() {
      this.$api.post(
        "/insert",
        { userName: this.userName, userPwd: this.userPwd },
        result => {
          this.res = result.success;
        },
        err => {
          window.alert(err);
        }
      );
    }
  }
};
</script>