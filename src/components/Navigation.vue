<script lang="ts">
/* ----- IMPORT:PACKAGES ------------------------- */
import { defineComponent, ref, Ref } from "vue";

export default defineComponent({
	/* ----- SETUP:PAGE NAME ------------------------- */
	name: "Component-Navigation",
	setup() {
		/* ----- SETUP:DATA ------------------------- */
		const hamburgerMenu: Ref<Boolean> = ref(false);

		/* ----- SETUP:METHODS ------------------------- */
		const toggleHamburgerMenu = () => {
			hamburgerMenu.value = !hamburgerMenu.value;
		};

		/* ----- RETURN ------------------------- */
		return {
			/* ----- RETURN:DATA ------------------------- */
			hamburgerMenu,

			/* ----- RETURN:METHODS ------------------------- */
			toggleHamburgerMenu,
		};
	},
});
</script>

<template>
	<nav class="Component-Navigation">
		<div class="container">
			<div class="flex">
				<div class="branding">
					<img src="../assets/images/logo.png" alt="CWS Template Logo" />
				</div>
				<div class="menu desktop d-none d-lg-flex flex">
					<a href="/">Home</a>
					<a href="/about">About</a>
					<a href="/services">Services</a>
					<a href="/portfolio">Portfolio</a>
					<a href="/contact">Contact</a>
				</div>
				<div class="menu mobile d-block d-lg-none">
					<div class="hamburger" :class="{ open: hamburgerMenu }" @click="toggleHamburgerMenu()">
						<div class="block"></div>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
nav.Component-Navigation {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 60px;
	padding: 10px 0;
	overflow: hidden;
	z-index: 9;

	.flex {
		display: flex;
		align-items: center;
		align-content: center;
		justify-content: flex-end;

		.branding {
			width: 120px;
			height: 40px;

			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
				object-position: left;
			}
		}
		.menu.desktop {
			width: 100%;
			height: 40px;

			a {
				color: var(--text);
				text-decoration: none;
				margin-right: 30px;
			}
			a:last-child {
				margin-right: 0px;
			}
		}
		.menu.mobile {
			width: 100%;
			height: 40px;

			.hamburger {
				position: relative;
				width: 30px;
				height: 40px;
				float: right;

				.block,
				.block:before,
				.block:after {
					content: "";
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					margin: auto;
					width: 20px;
					height: 2px;
					border-radius: 4px;
					background-color: var(--text);
					transition: var(--transition);
				}
				.block:before {
					top: -10px;
				}
				.block:after {
					top: 10px;
				}
			}
			.hamburger.open {
				.block {
					width: 0px;
				}
				.block:before,
				.block:after {
					top: 0;
					left: -10px;
					transform: rotate(-45deg);
				}
				.block:after {
					transform: rotate(45deg);
				}
			}
		}
	}
}
</style>
