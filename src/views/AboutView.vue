<script setup>
import ViewHeader from "@/components/ViewHeader.vue";
</script>

<template>
  <ViewHeader title="About Me"
              bgSrc="/src/assets/elise-mugshot.jpg" />
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>