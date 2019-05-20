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
import axios from 'axios'
import qs from 'qs'

var reqParams = {
  userName : "aaaa",
  userId : 45
}

export default {
  components: { Header, Footer },
  data() {
    return {
      res: false
    };
  },
  created() {
    this.demo();
  },
  methods: {
    demo() {
      axios.put("http://localhost:8080/index/update",qs.stringify({
        params : reqParams
      }))
      .then(result => {
        this.res = result.data.success
      })
      .catch(err => {
        alert(err)
      })
    }
  }
};
</script>