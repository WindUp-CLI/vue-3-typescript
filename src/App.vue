<script lang="ts">
/* ----- IMPORT:PACKAGES ------------------------- */
import { defineComponent } from "vue";

/* ----- IMPORT:COMPONENTS ------------------------- */
import navigation from "./components/Navigation.vue";

export default defineComponent({
	/* ----- SETUP:PAGE NAME ------------------------- */
	name: "App",
	/* ----- SETUP:COMPONENTS ------------------------- */
	components: {
		navigation,
	},
	setup() {
		/* ----- SETUP:INTERFACE ------------------------- */

		/* ----- SETUP:DATA ------------------------- */

		/* ----- SETUP:METHOD ------------------------- */

		/* ----- SETUP:ONMOUNTED ------------------------- */

		/* ----- RETURN:VARIABLES ------------------------- */
		return {};
	},
});
</script>

<template>
	<navigation />
	<div class="page">
		<router-view />
	</div>
</template>

<style lang="scss"></style>
