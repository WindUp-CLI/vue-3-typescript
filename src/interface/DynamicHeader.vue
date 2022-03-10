<script lang="ts">
/* ----- IMPORT:PACKAGES ------------------------- */
import { defineComponent } from "vue";

export default defineComponent({
	/* ----- SETUP:PAGE NAME ------------------------- */
	name: "Interface-Dynamic-Header",
	/* ----- SETUP:PROPS ------------------------- */
	props: {
		content: { type: Object, required: true },
	},
});
</script>

<template>
	<div class="Interface-Dynamic-Header" v-if="$props.content">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 h100 flex flexRow">
					<h1 v-if="$props.content.heading">{{ $props.content.heading }}</h1>
					<p v-if="$props.content.text" v-html="$props.content.text"></p>
					<a v-if="$props.content.buttonLink && $props.content.buttonText" :href="$props.content.buttonLink" target="_blank">
						<button>{{ $props.content.buttonText }}</button>
					</a>
					<button v-if="!$props.content.buttonLink && $props.content.buttonText">{{ $props.content.buttonText }}</button>
				</div>
				<div class="col-lg-6 h100 imageOuter">
					<div class="image">
						<img v-if="$props.content.image" :src="$props.content.image" alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.Interface-Dynamic-Header {
	width: 100%;
	height: 100vh;
	margin-top: -80px;

	.flex {
		align-items: flex-start;

		h1 {
			margin-bottom: 20px;
		}
		p {
			margin-bottom: 40px;
		}
	}
	.imageOuter {
		padding: 15vh 0;

		.image {
			width: 100%;
			height: 100%;
			border-radius: 15px;
			overflow: hidden;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
}
</style>
