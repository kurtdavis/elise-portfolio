<script setup lang="ts" xmlns:h3="http://www.w3.org/1999/html">
import { ref, computed } from 'vue'
import PortfolioItem from '@/components/PortfolioItem.vue'
import {items, cardItems, projItems} from '../data/portfolio.js'

const dialogItem = ref(null)
const showDialog = ref(false)
const tagFilter = ref([])
// functions that mutate state and trigger updates
function openDetailDialog(item) {
	dialogItem.value = item
	showDialog.value = true
}
function filterByTag(tag) {
  console.log('filterByTag', tag)
  if (tagFilter.value.includes(tag)) {
    tagFilter.value = tagFilter.value.filter(t => t !== tag)
  } else {
    tagFilter.value.push(tag)
  }
}

// computed properties
const filteredItems = computed(() => {
  let myItems = [...items, ...projItems, ...cardItems]
  return myItems
  // return filteredItems.filter(i => {
  //   return tagFilter.value.length === 0 || (i.tags && i.tags.some(t => tagFilter.value.includes(t)))
  // })
})
const availableTags = computed(() => {
  let allItems = projItems.concat(cardItems).concat(items)
  let tags = []
  // allItems.forEach(i => {
  //   if (i.tags) {
  //     i.tags.forEach(t => {
  //       if (!tags.includes(t)) {
  //         tags.push(t)
  //       }
  //     })
  //   }
  // })
  return tags
})
</script>

<template>
<!--  <v-sheet class="d-flex flex-row flex-wrap justify-center xxbg-surface-variant">-->
<!--  <v-btn class="mx-2" v-for="tag in availableTags" @click="filterByTag(tag)"-->
<!--         :color="tagFilter.includes(tag) ? 'primary' : 'secondary'">{{ tag }}-->
<!--  </v-btn>-->
<!--  </v-sheet>-->
  <h3 class="ma-2 pa-2">Various Art Projects & Doodles</h3>
  <v-sheet class="d-flex flex-row flex-wrap justify-center bg-shades-transparent mb-8 pa-2">
    <PortfolioItem
        class="flex-1-1 ma-2 pa-0"
        @showDetails="openDetailDialog(i)"
        @tagClick="filterByTag"
        v-for="i in items"
        :msg="i.msg"
        :date="i.date"
        :img="i.img"
        :thumb="i.thumb"
        :tags="i.tags"
        :details="i.details"
        :subMsg="i.subMsg"/>
  </v-sheet>
  <h3 class="ma-2 pa-2">Cards</h3>
  <v-sheet class="d-flex flex-row flex-wrap justify-center bg-shades-transparent mb-8 pa-2">
        <PortfolioItem
            class="flex-1-1 ma-2 pa-0"
            @showDetails="openDetailDialog(i)"
            @tagClick="filterByTag"
            v-for="i in cardItems"
            :msg="i.msg"
            :date="i.date"
            :img="i.img"
            :thumb="i.thumb"
            :tags="i.tags"
            :details="i.details"
            :subMsg="i.subMsg"/>
  </v-sheet>
  <h3 class="ma-2 pa-2">Hamlet Project</h3>
  <v-sheet class="d-flex flex-row flex-wrap justify-center bg-shades-transparent mb-8 pa-2">
    <PortfolioItem
        class="ma-2 pa-0"
        @showDetails="openDetailDialog(i)"
        @tagClick="filterByTag"
        v-for="i in projItems"
        :msg="i.msg"
        :date="i.date"
        :img="i.img"
        :thumb="i.thumb"
        :tags="i.tags"
        :details="i.details"
        :subMsg="i.subMsg"/>
  </v-sheet>
<!--    <Parallax-->
<!--        title="Portfolio"-->
<!--        heading="Portfolio of baking and art projects.  Mostly recent."-->
<!--        bgSrc="/src/assets/projects/macaroons.jpg"-->
<!--        description="Macarons are one of my favorite things to bake.-->
<!--					They are a bit tricky, but I have a good recipe-->
<!--					and I've gotten pretty good at them." >-->
<!--    </Parallax>-->
	<v-dialog
      v-model="showDialog"
      fullscreen=""
      close-on-back>
		<v-hover
        v-slot="{ isHovering, props }"
        open-delay="200">
			<v-card
							:title="dialogItem.msg"
							:subtitle="dialogItem.subMsg"
							class=""
							density="compact"
							v-bind="props"
							height="600">
        <v-img
            :src="dialogItem.img"
            height="460px"
            contain ></v-img>
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
    //display: flex;
    //align-items: center;
  }
}
.ed-portfolio-bg-fade {
	background-color: #ccc9;
}
</style>
