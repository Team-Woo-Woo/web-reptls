<script setup>
import TextClamp from "vue3-text-clamp";
const data = await useGroups();
const fixText = (text) => text.replace(/\\n/g, ' ')
</script>
<template>
  <IContainer fluid class="main-container" style="min-height: calc(100vh - 74px)">
    <IContainer class="_background-color:dark-shade-50">
      <h1 class="_padding-top:2 _margin-bottom:1 _text-align:center">Groups</h1>
      <IRow>
        <IColumn class="_margin-bottom:2">
          <div class="_float:right main-legend _margin-bottom:1 _flex">
            <NuxtImg :modifiers="{ trim: 10, extract: '0_0_580_890' }" src="/images/figures/serious.png" height="225" format="webp"/>
            <NuxtImg :modifiers="{ flop: true, trim: 10, extract: '0_0_750_890' }" src="/images/figures/explaining.png" width="190" format="webp"  />
          </div>
          Below is an incomplete list of reptilian racial groups currently believed to be interacting with planet Earth.
          Most of the information comes from channeling, which is a form of mediumship where a trained psychic creates a
          channel for another being's energy and thoughts, or words to come through. Our current understanding of physics
          and consciousness has no method of validating the process of channeling; however other forms of psychic abilities
          such as (blind) remote viewing have been used to check up on the channelers and the channeled entities with success.
          Alternatively one can derive a modest amount of certainty by listening to the words of the entities themselves and
          by cross-referencing their knowledge with information obtained from sources deemed more reliable at our present point in
          time. Even if the authenticity of all of the sources herein could be established, it is the responsibility of
          each individual to discern the validity of the message given by the entities.
        </IColumn>
      </IRow>
      <IRow>
        <IColumn v-for="post in data" :key="post._file" xs="12" class="_margin-bottom:2">
          <ICard>
            <div class="_flex _flex-direction:row row-container">
              <nuxt-img :src="post.image" fit="cover"
                  class="card-image _margin-right:1 _margin-bottom:1/2 _image:responsive _height:100%"
                  height="400" width="400" :modifiers="{ extract: post.align === 'center' ? '0_0_900_1000' : '0_0_1000_600' }"  />
              <div class="_flex:1 _overflow:hidden _position:relative">
                <h3>
                  {{ post.title }}
                </h3>
                <p class="excerpt">
                  {{ post.description }}
                </p>
              </div>
            </div>
            <nuxt-link class="_overlay-link!" :to="post.path"></nuxt-link>
          </ICard>
        </IColumn>
      </IRow>
      <IRow>
        <IColumn></IColumn>
      </IRow>
    </IContainer>
  </IContainer>
</template>

<style lang="scss">
@media screen and (max-width: 768px) {
  .main-legend{
    text-align: center;
    float: none;
  }
}
.card-image {
  max-width: 300px;
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    clear: both;
    margin-bottom: 16px;
  }
}
.row-container {
  height: 310px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    div {
      max-height: 190px !important;
    }
  }
}
.excerpt {
  p {
    display: inline;
  }
  @media screen and (max-width: 1600px) {
    &::after {
      position: absolute;
      content: '...';
      display: inline-block;
      //background-color: red;
      bottom: 0;
      right: 0;
    }
  }
}
</style>