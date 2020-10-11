<template>
  <vs-tooltip v-if="this.tooltip">
    <div class="big-card">
      <div class="card-title">{{title}}</div>
      <div class="card-content">
        <slot />
      </div>
    </div>
    <template #tooltip>{{tooltip}}</template>
  </vs-tooltip>
  <div class="big-card" v-else>
    <div class="card-title">{{title}}</div>
    <div class="card-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'tooltip'],
}
</script>

<style scoped>
.big-card {
  background-color: #ffffff;
  margin: 2rem;
  border-radius: 4px;
  box-shadow: 0 0 4px #0003;
  display: flex;
  flex-direction: column;
}
.card-title {
  margin: 2rem 2rem 1rem;
  font-size: 2rem;
  display: flex;
}
.card-content {
  margin: 0 2rem;
}
</style>