<script setup>
import { ref, computed } from 'vue'
defineProps({
	view: {
		type: String,
		required: false,
		default: 'small'
	},
	msg: {
		type: String,
		required: true,
	},
	img: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: false,
		default: null
	},
	subMsg: {
		type: String,
		required: false,
		default: null,
	},
	details: {
		type: String,
		required: false,
		default: null,
	},
})

let show = ref(false)
</script>

<template>
	<v-card min-width="344" >
		<v-img
				:src="img"
				height="200px"
				cover ></v-img>

		<v-card-title>
			{{ msg }}
			<small v-if="date" class="float-right font-weight-light">
			circa {{ new Date(date).toLocaleDateString() }}
			</small>
		</v-card-title>
		<v-card-subtitle v-if="subMsg">
			{{ subMsg }}
		</v-card-subtitle>

		<v-card-actions v-if="view == 'small'">
			<v-btn
					color="orange-lighten-2"
					variant="text"
					@click="$emit('showDetails')"
			>
				Details
			</v-btn>

			<v-spacer></v-spacer>

			<v-btn
					:icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
					@click="show = !show"
			></v-btn>
		</v-card-actions>

		<v-expand-transition>
			<div v-show="show">
				<v-divider></v-divider>

				<v-card-text>
					{{ details }}
				</v-card-text>
			</div>
		</v-expand-transition>
	</v-card>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    display: block;
    text-align: left;
  }
}
</style>
