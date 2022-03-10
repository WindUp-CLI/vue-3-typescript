<script lang="ts">
/* ----- IMPORT:PACKAGES ------------------------- */
import { defineComponent } from "vue";

/* ----- IMPORT:INTERFACE ------------------------- */
import DynamicHeader from "../interface/DynamicHeader.vue";

export default defineComponent({
	/* ----- SETUP:PAGE NAME ------------------------- */
	name: "Home-Page",
	/* ----- SETUP:COMPONENTS ------------------------- */
	components: {
		DynamicHeader,
	},
	setup() {
		/* ----- SETUP:INTERFACE ------------------------- */
		interface dynamicHeaderInterface {
			heading: String;
			text: String;
			image: String;
			buttonText: String;
			buttonLink: String;
		}

		/* ----- SETUP:DATA ------------------------- */
		const dynamicHeaderData: dynamicHeaderInterface = {
			heading: "WindUp Vue 3 TypeScript Template",
			text: "Welcome to the Vue 3 TypeScript Template by <a href='https://cws.ltd' target='_blank'>Clockwork Studios</a>",
			image: "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			buttonText: "See Documentation",
			buttonLink: "https://windup.app/vue/3/typescript",
		};

		/* ----- RETURN:VARIABLES ------------------------- */
		return {
			/* ----- RETURN:DATA ------------------------- */
			dynamicHeaderData,
		};
	},
});
</script>

<template>
	<DynamicHeader :content="dynamicHeaderData" />
</template>

<style lang="scss"></style>
