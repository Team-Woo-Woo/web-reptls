<script setup>
const img = useImage();
const props = defineProps(['image', 'align'])
const background = computed(() => {
  const imgUrl = img(props.image, { width: 1024, quality: 75, format: 'webp' })
  return `background: ${ props.align || 'top' } / cover url('${imgUrl}')`
})
</script>
<template>
  <div :style="`height: 350px; ${background}`"></div>
</template>