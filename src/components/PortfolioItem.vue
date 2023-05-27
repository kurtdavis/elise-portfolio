<script setup>
defineProps({
	msg: {
		type: String,
		required: true,
	},
	img: {
		type: String,
		required: true,
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
	show: {
		type: Boolean,
		required: false,
		default: false,
	},
})
</script>

<template>
	<v-card
			class="mx-auto"
			max-width="344"
	>
		<v-img
				:src="img"
				height="200px"
				cover ></v-img>

		<v-card-title>
			{{ msg }}
		</v-card-title>
		<v-card-subtitle v-if="subMsg">
			{{ subMsg }}
		</v-card-subtitle>

		<v-card-actions>
			<v-btn
					color="orange-lighten-2"
					variant="text"
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
