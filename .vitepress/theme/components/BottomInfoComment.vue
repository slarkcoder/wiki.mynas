<script setup>
import Theme from 'vitepress/theme'
const { isDark } = useData()
import { useData } from 'vitepress'
</script>

<template>
<div class="cookieCard">
  <p class="cookieHeading">一起玩 NAS！</p>
  <p class="cookieDescription">📝 如果遇到问题，可以 <a href="https://wiki.slarker.me/contact.html">加群</a> 请教大佬，也可以直接在下方 👇 评论区留言。</p>
  <p class="cookieDescription">💬 如果需要 <b>定制 NAS</b>，可以 <a href="https://jsj.top/f/qGaDq1">提交需求</a> 或者直接添加我的 <a href=https://wiki.slarker.me/contact.html#%E5%BE%AE%E4%BF%A1>微信</a> 沟通。</p>
  <p class="cookieDescription">👍 如果觉的本篇教程对你有用，不妨打赏支持 ！鼓励我产出更多更优质的内容！</p>
  <img src="https://img.slarker.me/wiki/pay2.webp" alt="logo" width="480" height="360">
</div>

</template>

<style scoped>
/* From Uiverse.io by vinodjangid07 */ 
.cookieCard {
  /* width: 300px;
  height: 200px; */
  border-radius: 1rem;
  background: linear-gradient(to right,rgb(137, 104, 255),rgb(175, 152, 255));
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  position: relative;
  overflow: hidden;
  bottom: 25px;
}

.cookieCard::before {
  width: 200px;
  height: 200px;
  content: "";
  background: linear-gradient(to right,rgb(142, 110, 255),rgb(208, 195, 255));
  position: absolute;
  z-index: 1;
  border-radius: 50%;
  right: -15%;
  top: -55%;
}

.cookieHeading {
  font-size: 1.5em;
  font-weight: 600;
  color: rgb(241, 241, 241);
  z-index: 2;
}

.cookieDescription {
  font-size: 1em;
  color: rgb(241, 241, 241);
  z-index: 2;
}

.cookieDescription a {
  color: rgb(175, 223, 32);
}

</style>