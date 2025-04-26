<script setup>
import TextClamp from "vue3-text-clamp";
const data = await useReports();
const fixText = (text) => text.replace(/\\n/g, ' ')
</script>
<template>
  <IContainer fluid class="star-background" style="min-height: calc(100vh - 74px)">
    <IContainer>
      <h1 class="_margin-top:2 _margin-bottom:1 _text-align:center">Articles</h1>
      <IRow>
        <IColumn v-for="post in data" :key="post._file" xs="12" sm="12" md="6" lg="4" class="_margin-bottom:2">
          <ICard>
            <template #image>
              <nuxt-img :src="post.image" fit="cover" height="400" width="600" class="_image:fluid" />
            </template>
            <div style="height: 200px" class="_overflow:hidden">
              <h3>
                {{ post.title }}
              </h3>
              <p>
                <text-clamp :text="fixText(post.description)" :max-lines="5" />
              </p>
            </div>
            <nuxt-link class="_overlay-link!" :to="post.path"></nuxt-link>
            <template #footer>
              <div class="_display:flex! _justify-content:space-between! _text:weak">
                <div class="_text-align:left"> {{ formatDate(post.date) }} </div>
              </div>
            </template>
          </ICard>
        </IColumn>
      </IRow>
      <IRow>
        <IColumn></IColumn>
      </IRow>
    </IContainer>
  </IContainer>
</template>