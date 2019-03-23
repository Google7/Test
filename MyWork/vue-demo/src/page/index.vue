<template>
  <div>
    <Header></Header>
    <div class="article_list">
      <ul>
        <li v-for="i in list" v-bind:key="i.id">
          <time v-text="$utils.goodTime(i.create_at)"></time>
          <router-link :to="'/content/' + i.id">{{ i.title }}</router-link>
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
    this.getData();
  },
  methods: {
    getData() {
      this.$api.get("topics", null, result => {
        this.list = result.data;
      },err => {
        window.alert(err);
      });
    }
  }
};
</script>