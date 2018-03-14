<template>
  <div>
      <div class='tp'> 
        <img src="../img/topl.png">
      <input type="text">
      <img src="../img/topr.png">
      </div>
      <div class="center">
        <li><a href="">音乐</a></li>
        <li><a href="">视频</a></li>
        <li><a href="">电台</a></li>
      </div>
      <img class='fm' src="../img/fm.png">
      <ul id='dh'>
          <li><img class='fm' src="../img/1.png"><a>私人FM</a></li>
          <li><img class='fm' src="../img/2.png"><a>每日推荐</a></li>
          <li><img class='fm' src="../img/3.png"><a>歌单</a></li>
          <li><img class='fm' src="../img/4.png"><a>排行榜</a></li>
      </ul>

      <div id='btom'>
        <div><span>推荐歌曲></span></div>
        <ul id='tjyy' @click="ulclick">
       
          <li :key='vlaue._id' :id='vlaue._id' v-for="vlaue in this.$store.state.home.list">
            <img :id='vlaue._id' :src="'http://192.168.43.143:4001'+vlaue.img">
            <span :id='vlaue._id' href="">{{vlaue.name}}</span>
            </li>


       
        </ul>
      </div>
      <!-- 导航 -->
      <ul>
        
      </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  created() {
    this.listajax();
  },
  computed: {
    listm() {
      return this.$store.state.home.list
    }
  },
  methods: {
    listajax() {
      this.$store.dispatch({
        type: "listl",
        url: this.$router
      });
    },
    ulclick(e){
      let id=e.target.id;
      console.log('id',id)
      this.$store.dispatch({
        type:'ulgq',
        id,
        url:this.$router
      })
    }
  }
};
</script>


<style scoped>
* {
  list-style: none;
}
.tp {
  width: 100%;
  height: 3.5rem;
  background-color: #d43b33;
  text-align: center;
  display: flex;
  justify-content: space-between;
  line-height: 3.5rem;
}
.tp img {
  width: 2.4rem;
  height: 2.4rem;
}
.tp input {
  border: none;
  outline: none;
  border-radius: 4rem;
  width: 16rem;
  height: 2.5rem;
  display: inline-block;
}
.center {
  display: flex;
  justify-content: center;
}
.center li {
  margin: 0.6rem 0.8rem 0.6rem 0.8rem;
}
.center a {
  text-decoration: none;
  color: #d43b33;
  
}
.fm {
  width: 100%;
}
#dh {
  margin:0.8rem  0.2rem 0;
  /* margin-top: 0.8rem; */
  color: black;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap
}
#dh img {
  display: block;
  width: 3rem;
  height: 3rem;
  display: block;
  margin: auto;
}
#dh li {
  text-align: center;
}
#dh a {
  font-size: 1rem;
  color: black;
  text-decoration: none;
}
#btom {
  margin-top: 0.7rem;
}

#tjyy {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;

}
#tjyy li {
  float: left;
  text-align: center;
  margin-top: 1rem;
}
#tjyy span {
  text-decoration: none;
  color: black;
  font-size: 1rem;
}
#tjyy img {
  width: 7rem;
  height: 7rem;
  display: block;
  margin: 0.3rem
}
</style>
