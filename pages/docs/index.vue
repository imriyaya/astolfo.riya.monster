<script lang="ts" setup>
</script>

<template>
  <main class="py-5 px-5 bg-pink-50">
    <h1 class="text-2xl">Overview</h1>
    <div class="ml-16">
      <p>Welcome to documentation page of Astolfo Database.</p>

      <h2>Base URL is <span class="underline">https://astolfo.riya.monster/api</span></h2>

      <h2>Home</h2>

      <h3>Health Check</h3>
      <code>GET /health_check</code>

      <h3>Get stats</h3>
      <code>GET /stats</code>

      <h2>Image Category</h2>

      <h3>Get image</h3>
      <code>GET /image/{UUID}.{extension}</code>

      <h3>Get count of image</h3>
      <code>GET /image/count</code>

      <h3>Get random image</h3>
      <code>GET /image/random?count=1&nsfw=false</code>
      <p>Query: </p>
      <p class="ml-3">count: number. Default 0. Get the specified number of images.</p>
      <p class="ml-3">nsfw: boolean. Default unset. Filter nsfw image.</p>
      <p class="ml-3">raw: Default unset. Response body will be raw image.</p>

      <h3>Search image with <a class="underline" href="https://github.com/benhoyt/dhash">Difference Hash Algorithm</a>
      </h3>
      <code>GET
        /image/search?dhash=0011000001111010100110101001100101111000011100101100110011101110&max_distance=10</code>
      <p>Query: </p>
      <p class="ml-3">dhash: string. Require. Target difference Hash(64 size).</p>
      <p class="ml-3">max_distance: number. Default unset. Filter distance.</p>
    </div>
  </main>
</template>

<style scoped>
h2 {
  margin-top: 3rem;
  font-size: 2rem;
}

h3 {
  margin-top: 2rem;
  font-size: 1.3rem;
}

code {
  color: white;
  background-color: #515151;
  padding: 5px;
  margin: 1rem;
}
</style>