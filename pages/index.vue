<script lang="ts" setup>
const {data: count} = await useFetch("/api/image/count");
type Image = {
  uuid: string,
  extension: string,
}
const images = ref([] as Image[]);

const update = async () => {
  images.value = [];
  const array: [] = (await $fetch("/api/image/random?count=40"));


  array.forEach((image: Image) => {
    images.value.push({
      uuid: image.uuid,
      extension: image.extension,
    });
  })
}

update();
</script>

<template>
  <main class="bg-pink-50 text-center min-h-screen pt-32">
    <h1 class="text-4xl">Welcome to Astolfo Database.</h1>
    <h3 class="text-2xl">Many astolfo images are stored here.</h3>
    <h3 class="text-2xl">There are {{ count?.documents }} images.</h3>
    <h4 class="text-xl mb-32">By @imriyaya</h4>
    <div class="sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-8 ">
      <img v-for="image in images" :src="'/api/image/' + image.uuid + '.' + image.extension"
           alt="astolfo-chan" class="w-full">
    </div>
    <button class="bg-pink-200 m-3 p-1 rounded-2xl" v-on:click="update()">Reload</button>
  </main>
</template>

<style scoped>
</style>