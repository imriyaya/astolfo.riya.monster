<script lang="ts" setup>
import Header from "./Header.vue"

useSeoMeta({
  title: "Astolfo Database",
  ogTitle: "Astolfo Database",
  description: "This is database of Astolfo, Astolfo is femboy who is awesome cute.",
  ogDescription: "This is database of Astolfo, femboy who is awesome cute.",
  ogImage: "https://" + useRequestURL().host + "/icon.png"
});
</script>

<template>
  <div class="text-shadow">
    <NuxtLoadingIndicator/>
    <Header/>
    <slot/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');

* {
  font-family: "Lora", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.text-shadow {
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.39);
}
</style>