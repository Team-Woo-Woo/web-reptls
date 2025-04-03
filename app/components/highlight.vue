<script setup>
const props = defineProps(['value', 'bg'])
const parsed = computed(() => {
  const message = props.value || '';
  const splits = message.split(/<\/?em>/g);
  return splits.map((split, index) => {
    return {
      text: split,
      em: index % 2 !== 0
    }
  })
})
</script>
<template>
  <div>
    <span :class="split.em ? props.bg ? 'highlight-bg' : 'highlight' : ''" v-for="split of parsed">
      {{ split.text }}
    </span>
  </div>
</template>

<style scoped>

.highlight-bg {
  background-color: #178bb2;
  color: white;
}
.highlight {
  font-weight: bold;
  color: #178bb2;
}
</style>