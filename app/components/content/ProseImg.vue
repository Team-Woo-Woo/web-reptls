<script setup>
const props = defineProps(['src', 'alt']);
const image = inject('image');
const targetImage = ref('');
const getLink = (event) => {
  targetImage.value = event?.target?.src;
}
</script>
<template>
  <div class="_flex _justify:center! image-container">
    <nuxt-img
        :src="props.src"
        :alt="props.alt || ''"
        format="webp"
        densities="1x"
        class="_image:responsive _image:thumbnail"
        @click="image = targetImage || props.src"
        @load="getLink"
    />
  </div>
</template>
<style lang="scss">
.image-container {
  cursor: pointer;
}
@media screen and (min-width: 992px) {
  .image-container img {
    max-width: 60%;
    max-height: 50vh;
  }
}
.image-container + em {
  margin-top: 10px;
  display: block;
  text-align: center;
}
</style>