<template>
<div class="container">
  <div class="card">
    <p>春はあけぼの。やうやう白くなりゆく山ぎは、すこしあかりて、紫だちたる 雲のほそくたなびきたる。
      　夏は夜。月のころはさらなり。やみもなほ、蛍の多く飛びちがひたる。
      　秋は夕暮れ。夕日のさして山の端いと近うなりたるに、烏の寝どころへ行く とて、三つ四つ、二つ三つなど、飛びいそぐさへあはれなり。
      　冬はつとめて。雪の降りたるはいふべきにもあらず、霜のいと白きも、また さらでもいと寒きに、火など急ぎおこして、炭もて渡るもいとつきづきし。 </p>
    <button class="primary">Click</button>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TsTheme'
})
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: var(--base-color);
}

.card {
  width: 15rem;
  background-color: var(--sub-color);
  color: var(--main-color);
  padding: 1.4em;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.primary {
  background-color: var(--accent-color);
  color: var(--text-color);
  padding: 0.7em;
  border-radius: 5px;
  border-style: none;
}
</style>
