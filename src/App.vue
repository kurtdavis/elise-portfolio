<template>
	<v-layout ref="app" >
		<v-app-bar elevation="5"  name="app-bar" class="d-flex" >
			<v-app-bar-title class="w-25">Elise Davis</v-app-bar-title>
      <template v-slot:append>
        <RouterLink class="v-btn mx-2 pa-2" to="./">About</RouterLink>
        <RouterLink class="v-btn mx-2 pa-2" to="./portfolio">Portfolio</RouterLink>
        <RouterLink class="v-btn mx-2 pa-2" to="./resume">Resume</RouterLink>
        <v-switch
            v-model="darkmode"
            hide-details
            inset
            color="primary"
        ></v-switch>
        </template>
    </v-app-bar>
		<v-main style="min-height: 300px;" class="xd-flex align-centerx xjustify-center">
			<RouterView />
		</v-main>
	</v-layout>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {ref, watch} from 'vue'

import { useTheme } from 'vuetify'

const theme = useTheme()
const darkmode = ref(true)
theme.global.name.value =  'dark'

watch(darkmode, (newVal, oldVal) => {
  // theme.global.current.value.dark = newVal
  console.log('darkmode', newVal)
  theme.global.name.value = newVal ? 'dark' : 'light'
})

</script>

<style scoped >
</style>
