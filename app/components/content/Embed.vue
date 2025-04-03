<script setup>
const props = defineProps(['title', 'id']);

import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'

</script>
<template>
    <LiteYouTubeEmbed
        :title="props.title || 'Video'"
        :id="props.id"
        ref="iframe"
        poster="maxresdefault"
    />
</template>

<style lang="scss">

</style>