<script setup>
defineProps({
    title: {
        type: String,
        required: true
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
	>
		<div class="d-flex flex-column fill-height justify-center align-center text-white">
			<h1 class="text-h4 font-weight-thin mb-4">
				Elise Davis
			</h1>
			<h4 class="subheading">
				{{ title }}
			</h4>
			<p class='mt-12 w-50 text-subtitle-2' v-if="description">
				{{ description }}
			</p>
		</div>
	</v-parallax>
</template>

<style scoped>

</style>