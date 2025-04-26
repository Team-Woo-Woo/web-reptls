<script setup>
const route = useRoute();
const imageModalSrc = ref('');
const imageModal = ref(false);

function isMobile() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
}

const { data: doc } = await useAsyncData(route.path, () => {
  return queryCollection('groups').path(route.path).first()
})

watch(imageModalSrc, (newSrc) => {
  if (newSrc) {
    if (isMobile()) {
      window.open(imageModalSrc.value);
      imageModalSrc.value = '';
      return;
    }
    setTimeout(() => {
      imageModal.value = true;
    }, 100)
  }
})
watch(imageModal, (modal) => {
  if (!modal) {
    setTimeout(() => {
      imageModalSrc.value = '';
    }, 500)
  }
})
</script>
<template>
  <IContainer fluid class="star-background">
    <IContainer v-if="doc">
        <h1 class="d5 _margin-top:3 _margin-bottom:2 _text-align:center">{{ doc.title }}</h1>
        <ICard class="_margin-bottom:2 _border-bottom-radius:1" >
          <div class="_float:left _margin-right:1 _margin-bottom:1/2 main-image _max-width:50%">
            <ITooltip class="_position:absolute">
              <div class="_cursor:default _background-color:black _margin:1/2 _border _padding-y:1/2 _padding-x:1 _border-width:1 _border-radius:2 _border-color:white">AI</div>
              <template #body>This picture was generated using Sora from text. No rights reserved.</template>
            </ITooltip>
            <nuxt-img :src="doc.image" width="600" class="_image:fluid _cursor:pointer" @click="imageModalSrc = doc.image" />
            <div class="_padding-top:1 _text-align:center">A more accurate picture can be found on <nuxt-link target="_blank" external :to="doc.external">vashta.com</nuxt-link></div>
          </div>
          <ContentRenderer :value="doc" class="content-doc" />
        </ICard>
    </IContainer>
    <IModal v-model="imageModal" size="lg">
      <template #header> Image Preview </template>
      <NuxtImg :src="imageModalSrc" class="_image:responsive" />
    </IModal>
  </IContainer>
</template>

<style lang="scss">
.content-doc {
  h1, h2, h3, h4 {
    padding-top: 110px; margin-top: -110px;
  }
}
.modal-wrapper .modal {
  width: initial !important;
  max-width: initial !important;
}
.main-image {
  @media screen and (max-width: 768px) {
    max-width: 100% !important;
  }
}
</style>
