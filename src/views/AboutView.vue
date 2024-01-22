<script setup>
import ViewHeader from "@/components/ViewHeader.vue";
</script>

<template>
  <ViewHeader v-if="$route.path == '/'"
              bgSrc="public/imgs/elise-baking.jpg" >
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
</style>