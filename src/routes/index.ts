/* ----- IMPORT:PACKAGES------------------------- */
import { createRouter, createWebHistory } from "vue-router";

/* ----- SET:ROUTES------------------------- */
const routes = [
	/* ----- CREATE:ROUTE:Home------------------------- */
	{
		path: "/",
		name: "homePage",
		component: () => import("../pages/index.vue"),
		meta: {
			title: "Home Page",
			metaTags: [
				{
					name: "description",
					content: "This is a home page template made by CWS ❤️",
				},
				{
					name: "keywords",
					content: "CWS, Vue.js Template, Internal Use Only",
				},
			],
		},
	},
];

/* ----- CREATE:ROUTER------------------------- */
const router = createRouter({
	history: createWebHistory(),
	routes,
});

/* ----- NAVIGATION GUARD:META------------------------- */
router.beforeEach((to, from, next) => {
	const nearestWithTitle = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.title);
	const nearestWithMeta = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.metaTags);
	const previousNearestWithMeta = from.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.metaTags);
	if (nearestWithTitle) {
		document.title = nearestWithTitle.meta.title;
	} else if (previousNearestWithMeta) {
		document.title = previousNearestWithMeta.meta.title;
	}
	Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((el) => el.parentNode.removeChild(el));
	if (!nearestWithMeta) return next();
	nearestWithMeta.meta.metaTags
		.map((tagDef) => {
			const tag = document.createElement("meta");
			Object.keys(tagDef).forEach((key) => {
				tag.setAttribute(key, tagDef[key]);
			});
			tag.setAttribute("data-vue-router-controlled", "");
			return tag;
		})
		.forEach((tag) => document.head.appendChild(tag));
	next();
});

/* ----- EXPORT:ROUTER------------------------- */
export default router;
