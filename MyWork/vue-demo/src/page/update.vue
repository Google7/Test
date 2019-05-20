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

var obj = {
  userName: "hhh",
  userId: 45
};

export default {
  components: { Header, Footer },
  data() {
    return {
      res: false
    };
  },
  created() {
    this.update();
  },
  methods: {
    update() {
      this.$api.put(
        "/update",
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