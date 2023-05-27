<script setup lang="ts">
import PortfolioItem from '@/components/PortfolioItem.vue'

const items = [
	{
		msg: 'Top western road trips',
		img: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
		subMsg: 'The best road trips in the west',
		details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	},
	{
		msg: 'Top eastern road trips',
		img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
		subMsg: 'The best road trips in the east',
		details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	},
	{
		msg: 'Top southern road trips',
		img: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
		subMsg: 'The best road trips in the south',
		details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	}
]
</script>

<template>
  <div class="portfolio">
		<v-parallax
				scale=.5
				src="/src/assets/projects/macaroons.jpg"
		>
			<div class="d-flex flex-column fill-height justify-center align-center text-white">
				<h1 class="text-h4 font-weight-thin mb-4">
					Elise Davis
				</h1>
				<h4 class="subheading">
					Portfolio of Doom and Regret.  Mostly Doom.
				</h4>
				<p class='mt-12' >
					Scroll down some to see more...
				</p>
			</div>
		</v-parallax>
		<v-sheet class="d-flex">
			<PortfolioItem
					v-for="i in items"
					:msg="i.msg"
					:img="i.img"
					:details="i.details"
					:subMsg="i.subMsg"/>
		</v-sheet>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .portfolio {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.v-responsive__content {
	z-index: 10;
}
.portfolio .v-parallax--active > img {
	filter: brightness(50%);
}
</style>
