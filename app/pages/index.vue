<script setup>
const img = useImage();
const background = computed(() => {
  const imgUrl = img('/images/backgrounds/mars-far.jpg', { width: 1920, quality: 75, format: 'webp' })
  return `background: center / cover url('${imgUrl}')`
})
</script>
<template>
  <ILayoutContent>
    <IContainer fluid :style="background" class="adjusted">
<!--    <IContainer fluid class="adjusted">-->
      <IContainer class="main-header _display:flex _align-items:center">
        <div class="_flex-grow:1">
          <div class="d1 _text-align:center _color:black _text:uppercase _text-decoration:underline _margin-bottom:2" style="text-shadow: 2px 2px 6px lawngreen">
            Reptilian Report
          </div>
          <div class="_border-width:3 _text:lg _border-radius:3 _padding:1/2 transparent-black-bg title-container" >
            <div class="_margin-top:1 _margin:1/2 _float:right main-legend">
              <NuxtImg :modifiers="{ flop: true, trim: 10, extract: '0_0_610_850' }" src="/images/figures/finger-up.png" class="" width="190" format="webp" />
            </div>
            <div class="_padding-left:1/2">
              <div class="d5 _margin-top:3/4">Introduction</div>
              <p>
                Reptilian Report (ReRe) is dedicated to gathering information on terrestrial and extraterrestrial intelligent reptilian species and groups. While the idea of humans interacting with, or even being aware of, reptilians—terrestrial or otherwise—is not widely accepted, ReRe believes there is sufficient evidence to make a strong case that such occurrences have happened in the past and are still occurring to some degree today.
              </p>
              <p>
                Gathering evidence of reptilian beings by conventional means is impossible—after all, if that weren't the case, the existence of such entities would already be accepted by the public. The fact that we are limited in our ability to gather information about reptilians does not prove that they exist; however, it does mean that, if we wish to know who they are and what they want (assuming they do exist), we must be less rigid about conventions when collecting information.
              </p>
              <p>
                While ReRe can't prove the existence of reptilians beyond doubt, we believe that their existence should be investigated regardless of any preconceived notions of common sense or other biases. Given the wealth of independent sources describing reptilian activity—as well as eyewitness accounts from experiencers—we hope to expand humanity's knowledge while maintaining an objective point of view.
              </p>
            </div>
          </div>
        </div>
      </IContainer>
    </IContainer>
  </ILayoutContent>
</template>
<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .d1 {
    font-size: 3.8rem;
    padding-top: 30px;
  }
  .main-legend{
    text-align: center;
    float: none;
  }
}
#answers {
  position: absolute;
  margin-top: -110px;
}
.navbar-header {
  z-index: 2;
}
.transparent-black-bg {
  background-color: rgba(10,10,10,0.8);
}
.layout-content > .container.adjusted .main-header {
  margin-top: -110px;
  padding: 90px 0 90px 0;
  min-height: 100vh;
}
.main-header {
  min-height: calc(100vh - 110px);
}
</style>