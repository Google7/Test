<template>
  <div>
    <Header></Header>
    <div>
      <p>结果：{{res}}</p>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../components/header";
import Footer from "../components/footer";

var obj = { userId: 59 };

export default {
  components: { Header, Footer },
  data() {
    return {
      res: false
    };
  },
  created() {
    this.delete();
  },
  methods: {
    delete() {
      this.$api.delete(
        "/delete",
        obj,
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