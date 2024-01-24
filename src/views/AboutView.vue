<script setup>
import ViewHeader from "@/components/ViewHeader.vue";
import router from "@/router";
</script>

<template>
  <ViewHeader v-if="$route.path == '/'"
              bgSrc="imgs/elise-baking.jpg" >

    <section class="masthead" role="img" aria-label="Image Description" >
      <h1>
        Elise Davis
      </h1>
      <h3>
        {{ title }}
      </h3>
      <h4  class='mt-12 w-50 text-subtitle-1 text-shades-white' >
        I am a FULL stack baker and artist in my spare time. Check out my
        <a href="" @click="(e) => {e.preventDefault(); router.push({name: 'portfolio'})}">portfolio</a>
        and
        <a href="" @click="(e) => {e.preventDefault(); router.push({name: 'resume'})}">resume</a>
        .
      </h4>
      <p class='mt-12 w-50 text-subtitle-2'>
        <a href="https://www.instagram.com/elise.davis.arts/">instagram</a>
      </p>
    </section>
  </ViewHeader>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    //display: flex;
    //align-items: center;
  }
}
.masthead {
  height: 130vh;
}
</style>