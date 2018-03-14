<template>
  <div>

  <div class='bj'>
          <div class='tp'> 
        <img src="../img/o0.png">
        <img src="../img/aby.png">
      </div>



      <div class="center">
        
        <img :src="'http://192.168.43.143:4001'+ this.$store.state.home.gqlist.img">
        <ul class="centerl">
        <li>{{this.$store.state.home.gqlist.introduce}}</li>
        <li>{{this.$store.state.home.gqlist.cjname}} ></li>
       </ul>
      </div>

      <ul class="btom">
        <li><img src="../img/a14.png"><p>收藏</p></li>
        <li><img src="../img/a12.png"><p>评论</p></li>
        <li><img src="../img/a19.png"><p>分享</p></li>
        <li><img src="../img/a13.png"><p>下载</p></li>
      </ul>
  </div>

<div class="centert">
  <div class="centertl">
    <img src="../img/bf.png">
  </div>

  <div class="centertr">
    <span class="s1">播放全部</span>
    <span class="s2">(共首)</span>
</div>
</div>
<!-- 列表 -->
<div class="music">
<ul :key="value._id" :id="value._id"  v-for="value in this.$store.state.home.gqlist.music">
  <div :id="value._id" class="m1">
    <img :id="value._id" :src="'http://192.168.43.143:4001'+ value.cover">
  </div>
  <ul :id="value._id" class="m2">
   <li :id="value._id" class="p1">{{value.name}}</li>
   <li :id="value._id" class="p2">{{value.singer}}-{{value.album}}</li>
  </ul>
</ul>
</div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      num:0
    }
  },
  methods:{
    // num(){
    //   let length=this.$store.state.home.gqlist.music.length;
    //   for(let i=0;i<length;i++){
    //     this.num++
    //     return
    //   }
    //   console.log('我是num')
      
    // },
    mlength(){
      return this.$store.state.home.gqlist.music.length
    }
  }
};
</script>

<style scoped>

.bj {
  width: 100%;
  height: 18rem;
  background: url(http://192.168.43.143:4001/img/sm.jpg)center;
}
.tp {
  display: flex;
  justify-content: space-between;
}
.tp img {
  display: block;
  width: 4rem;
  height: 4rem;
}
.center {
  overflow: hidden;
}
.center img {
  width: 9rem;
  height: 9rem;
  margin: 0 0 0 0.8rem;
  float: left;
}
.centerl {
  width: 9rem;
  height: 9rem;
  /* list-style: none; */
  color: white;
  float: left;
  margin-left: 1rem;
}
.centerl li {
  display: block;
  margin-top: 0.5rem;
}
.centerl li:nth-child(2) {
  margin-top: 2rem;
}


.centertl img{
  width: 2rem;
  height: 2rem;
}

.s1{
  font-size: 1rem
}
.s2{
  font-size: 0.8rem;
  color: grey;
}

.m1{
  width: 3rem;
  height: 2.8rem;
  /* border: 1px solid gray; */
  float: left;
  margin-right: 0.3rem;
}
.m1 img{
  width: 3rem;
  height: 2.8rem;
  /* border-radius: 2rem; */
}
.m2{
  width: 20rem;
  height: 3rem;
  border-bottom:0.01rem solid gray;
  float: left;
}
.m2 li{
  list-style: none;
  display: block;
}
.centert{
  width: 100%;
  height: 2.5rem;
  border-bottom: 0.01rem solid gray;
  margin-bottom: 0.2rem;
}
.centertr{
  display:inline-block;
  width: 80%;
}
.centertl{
  width: 2.5rem;
  height: 2rem;
  float: left;
  margin: 0.28rem 0.4rem 0rem 0.6rem;
}

.centert span{
  display: inline-block;
  line-height: 2.5rem
}
.btom {
  overflow: hidden;
  margin-top: 1.2rem;
  width: 100%;
  height: 5rem;
  text-decoration: none;
  list-style: none;
  display: flex;
  justify-content: space-around;
  color: white;
  font-size: 0.6rem;
  text-align: center;
}



.btom img {
  /* width:1.5rem;
  height:1.5rem; */
}
.music li{
  width: 100%;
  /* height: 0.1rem; */
  /* border-bottom: 0.01rem solid gray; */
}
.p1{
  margin-top: 0.4rem;
}
.p2{
  /* margin-top: 0.4rem; */
  font-size: 0.2rem;
  color: gray;
}
</style>
