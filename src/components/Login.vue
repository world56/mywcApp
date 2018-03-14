<template>
  <div>
      <div class='tp'> 
        <img src="../img/o0.png">
        <span>手机号登录</span>
      </div>
      <div id='center'>
        <input id='phdl' placeholder="请输入手机号" type="text">
        <input id='pswdl' placeholder="请输入密码" type="password">     
        <img id='ph' src="../img/a5n.png">   
        <img id='smm' src="../img/a5p.png">   
      </div>
      <button @click="userdl" id='btndl'>登录</button>
      <a href="">重置</a>
  </div>
</template>

<script>
export default {
  methods:{
    userdl(){
      this.$store.dispatch({
        type:'dllook',
        phone:phdl.value,
        psw:pswdl.value,
        url:this.$router
      })
    }
  }
};
</script>

<style scoped>
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
  width: 18rem;
  margin: auto;
  margin-top: 2rem;
  height: 2rem;
  outline: none;
  border: none;
  border-bottom: 1px solid #e1e2e4;
  padding-left: 2rem;
  font-size: 1.4rem;
}
#center {
  position: relative;
}
#ph {
  position: absolute;
  top: 0;
  left: 1.2rem;
}
#smm {
  position: absolute;
  bottom: 0.3rem;
  left: 1.2rem;
}
#btndl {
  width: 20rem;
  height: 2.5rem;
  display: block;
  margin: auto;
  margin-top: 1.6rem;
  outline: none;
  border: none;
  background-color: #d33a32;
  border-radius: 4rem;
  color: white;
  font-size: 0.8rem;
}
a {
  display: block;
  font-size: 1.2rem;
  color: gray;
  text-align: center;
  margin-top: 1rem;
}
</style>
