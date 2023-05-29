<script setup lang="ts">
import { ref, computed } from 'vue'
import PortfolioItem from '@/components/PortfolioItem.vue'

const dialogItem = ref(null)
const showDialog = ref(false)
// functions that mutate state and trigger updates
function openDetailDialog(item) {
	dialogItem.value = item
	showDialog.value = true
}
const items = [
	// {
	// 	msg: 'Top western road trips',
	// 	img: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
	// 	subMsg: 'The best road trips in the west',
	// 	details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	// },
	// {
	// 	msg: 'Top eastern road trips',
	// 	img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
	// 	subMsg: 'The best road trips in the east',
	// 	details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	// },
	// {
	// 	msg: 'Top southern road trips',
	// 	img: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
	// 	subMsg: 'The best road trips in the south',
	// 	details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	// },
	{
		msg: 'A Barn',
		img: '/src/assets/projects/barn.jpg',
		subMsg: 'A harvest host\'s barn in the midwest',
		date: '5/23/2021',
		details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	},
	{
		msg: 'Flower Card',
		img: '/src/assets/projects/card-flowers.jpg',
		subMsg: 'Watercolor',
		details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	},
	{
		msg: 'Cartoon Card',
		img: '/src/assets/projects/cartoon-drawings.jpg',
		subMsg: 'Ink on paper',
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
					Portfolio of baking and art projects.  Mostly recent.
				</h4>
				<p class='mt-12 w-50 text-subtitle-2' >
					Macarons are one of my favorite things to bake.
					They are a bit tricky, but I have a good recipe
					and I've gotten pretty good at them.
				</p>
			</div>
		</v-parallax>
		<v-sheet class="d-flex flex-wrap bg-s bg-surface-variant">
			<PortfolioItem
					class="flex-1-1 ma-2 pa-2"
					@showDetails="openDetailDialog(i)"
					v-for="i in items"
					:msg="i.msg"
					:date="i.date"
					:img="i.img"
					:details="i.details"
					:subMsg="i.subMsg"/>
		</v-sheet>
  </div>
	<v-dialog
			v-model="showDialog"
			close-on-back
	>
		<v-card :image="dialogItem.img"
						:title="dialogItem.msg"
						:subtitle="dialogItem.subMsg"
						:hover="dialogItem.detail"
						class="text-blue-darken-4 text-shades-black"
		density="compact"
		height="600">
			<v-spacer/>
			<v-card-actions>
				<v-spacer/>
				<v-btn
						color="primary"
						variant="text"
						@click="showDialog = false"
				>
					Close
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
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
