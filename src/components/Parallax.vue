<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  heading: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  bgSrc: {
    type: String,
    required: true
  },
})
</script>

<template>
  <v-parallax
      scale=.5
			:src="bgSrc"
			class="flex-row mb-4 fade-transition-move"
	>
<!--   mx-auto align-center w-75
			style="max-width: 800px"
 -->
    <section class="masthead" role="img" aria-label="Image Description" >
<!--     :style="'background-image: url('+bgSrc+')'" -->
      <h1 v-if="title">
        Elise Davis
      </h1>
      <button v-if="heading">
        {{ heading }}
      </button>
      <p class='mt-12 w-50 text-subtitle-2' v-if="description">
        {{ description }}
      </p>
    </section>
    <section class="flex-row" >
      <slot name="default"/>
    </section>
	</v-parallax>
</template>

<style>
.v-responsive__content {
	z-index: 10;
}
.portfolio .v-parallax--active > img {
	filter: brightness(50%);
}
.masthead {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100vh; /* if you don't want it to take up the full screen, reduce this number */
  overflow: hidden;
  background-size: cover !important;
  background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 37%, rgba(0,0,0,0.65) 100%), no-repeat center center scroll;
}

h1 {
  font-style: normal;
  font-weight: bold;
  color: #eee;
  font-size: 11vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 40px;
}


button {
  background: #098191;
  transition: background ease .25s;
  border-radius: 5px;
  display: inline-block;
  border: none;
  padding: 0.75rem 1.5rem;
  margin: 0;
  text-decoration: none;
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
}
button:hover {
  background: #63b6b8
}
button:focus {
  outline: 1px solid #fff;
  outline-offset: -4px;
}

</style>