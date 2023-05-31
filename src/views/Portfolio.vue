<script setup lang="ts">
import { ref, computed } from 'vue'
import PortfolioItem from '@/components/PortfolioItem.vue'
import ViewHeader from "../components/ViewHeader.vue";

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
		msg: 'Me, in latin class',
		img: '/src/assets/projects/doodle-yawn.jpg',
		subMsg: 'Mechanical Pencil on Book',
		details: 'I don\'t always pay attention to latin lectures, but when I do, I create doodles.'
	},
	{
		msg: 'Cartoon Card',
		img: '/src/assets/projects/cartoon-drawings.jpg',
		subMsg: 'Ink on Paper',
		details: 'Ink on Paper, in Rectangles, through a CCD, on your Screen of choice'
	}
]
</script>

<template>
  <div class="portfolio">
		<ViewHeader title="Portfolio of baking and art projects.  Mostly recent."
								bgSrc="/src/assets/projects/macaroons.jpg"
								description="Macarons are one of my favorite things to bake.
					They are a bit tricky, but I have a good recipe
					and I've gotten pretty good at them." />
		<v-sheet class="d-flex flex-wrap bg-surface-variant">
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
		<v-hover
				v-slot="{ isHovering, props }"
				open-delay="200"
		>
			<v-card :image="dialogItem.img"
							:title="dialogItem.msg"
							:subtitle="dialogItem.subMsg"
							class="text-blue-darken-4 text-shades-black"
							density="compact"
							v-bind="props"
							height="600">
				<v-spacer/>
				<v-card-actions>
					<div class="ed-portfolio-bg-fade text-blue-grey-darken-4 rounded px-2"
							v-if="isHovering"
					>{{ dialogItem.details }}</div>
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
		</v-hover>
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
.ed-portfolio-bg-fade {
	background-color: #ccc9;
}
</style>
