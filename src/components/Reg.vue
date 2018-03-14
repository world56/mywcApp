<template>
  <div>
      <div class='tp'>
        <img src="../img/o0.png">
        <span>手机号注册</span>
      </div>
      <div id='inps'>
        <input class='inp1' id='phone' placeholder="输入手机号" type="text">
        <input class='inp2' id='psw' placeholder="设置登录密码，不少于6位" type="password">
          <img class='im2' src="../img/a5p.png">
        <div class='pt'>
          <img src="../img/a5n.png">
          <span>+86</span>
        </div>
      </div>
      <button @click="nextadd" class='next'>下一步</button>
  </div>
</template>

<script>
export default {
  methods:{
    nextadd(){
      let param={
        phone:phone.value,
        psw:psw.value
      }
      console.log(param)
      this.$store.dispatch({
        type:'adduser',
        param,
        url:this.$router
      })
    }
  }
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}

.tp {
  width: 100%;
  height: 3.5rem;
  background-color: #d43b33;
  text-align: center;
}

.tp span {
  font-size: 1.2rem;
  color: white;
  text-align: center;
  line-height: 3.5rem;
}
.tp img {
  position: absolute;
  left: 0;
  width: 3.5rem;
  height: 3.5rem;
  /* float: left; */
}
input {
  display: block;
  margin: auto;
  width: 24rem;
  margin: 0.8rem;
  height: 2.2rem;
  outline: none;
  border: none;
  border-bottom: 0.01rem solid #e1e2e4;
  font-size: 1.4rem;
  margin-top: 2rem;
}
.pt {
  font-size: 1.4rem;
  line-height: 2.2rem;
}
.pt img {
  margin-bottom: -0.3rem;
}
#inps{
  position: relative;
}
#inps .pt{
  position: absolute;
  top: 0;
  left: 1rem;
}
.inp1{
  width: 15.3rem;
  padding-left: 5.5rem;
}
.inp2{
    padding-left: 2.2rem;
    width: 18.8rem;
}
.im2{
  position: absolute;
  left: 1rem;
  bottom: 0.3rem;
}
.next{
  display: block;
  margin: auto;
  margin-top: 2rem;
  width: 22rem;
  height: 2.6rem;
  border-radius: 2rem;
  border: none;
  outline: none;
  background-color: #d33a32;
  color: white;
  font-size: 1rem;
}
</style>