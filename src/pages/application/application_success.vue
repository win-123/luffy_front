<template>
  <main style="width: 1200px; margin: 127px auto 0; text-align: center;">
    <div style="display: flex; align-items: center; justify-content: center;">
      <img src="../../assets/img/select-icon.png" width="55" height="55" alt="">
      <p class="application-dec">提交成功，我们正在马不停蹄，为您分配导师</p>
    </div>
    <div style="margin: 54px auto;">
      <img src="../../assets/img/horse.png" width="183" height="243" alt="">
    </div>
    <button class="application-study-btn" v-link="{name: 'study'}">立即学习</button>
    <span class="study-guide" v-link="{}">查看学习指引手册</span>
    <span class="application-tip">《Python全栈开发课程》班级QQ群：502690712</span>
    <span class="application-tip">进群后，请修改个人名片：“XX-地区-姓名”如：Python-北京-晓小</span>
  </main>
</template>
<style scoped>
  .application-dec {
    margin-left: 30px;
    font-size: 30px;
    color: #4A4A4A;
  }
  .application-study-btn {
    width: 180px;
    height: 60px;
    border: 1px solid #84CC39;
    border-radius: 2px;
    outline: none;
    background: #fff;
    font-size: 18px;
    color: #84CC39;
    letter-spacing: 2px;
  }
  .study-guide {
    display: block;
    margin: 22px auto;
    font-size: 18px;
    color: #4A90E2;
    cursor: pointer;
  }
  .application-tip {
    font-size: 14px;
    color: #5E5E5E;
    margin-bottom: 12px;
    display: block;
  }
</style>
