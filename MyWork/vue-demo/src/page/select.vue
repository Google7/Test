<template>
  <div>
    <Header></Header>
    <div>
      <ul>
        <li v-for="i in list" v-bind:key="i.userId">
          <p v-if="i.userId">ID：{{i.userId}} 用户名：{{i.userName}}</p>
        </li>
      </ul>
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
      list: []
    };
  },
  created() {
    this.select();
  },
  methods: {
    select() {
      this.$api.get(
        "/select",
        null,
        result => {
          this.list = result.data;
        },
        err => {
          window.alert(err);
        }
      );
    }
  }
};
</script>