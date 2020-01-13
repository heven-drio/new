import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import( /* webpackChunkName: "Home" */ '@/views/Home/Home');
const Want = () => import( /* webpackChunkName: "Want" */ '@/views/Want/Want');
const Cart = () => import( /* webpackChunkName: "Cart" */ '@/views/Cart/Cart');
const Mine = () => import( /* webpackChunkName: "Mine" */ '@/views/Mine/Mine');
const List = () => import( /* webpackChunkName: "Mine" */ '@/views/List/List');
const NotFound = () => import( /* webpackChunkName: "NotFound" */ '@/views/NotFound/NotFound');
const Login = () => import( /* webpackChunkName: "Mine" */ '@/views/Login/Login');
const Reg = () => import( /* webpackChunkName: "Mine" */ '@/views/Reg/Reg');
const Details = () => import( /* webpackChunkName: "Mine" */ '@/views/Details/Details');


Vue.use(Router);

export default new Router({
	routes: [{
			path: '/',
			name: 'Home',
			component: Home,
		}, {
			path: '/Cart',
			name: 'Cart',
			component: Cart
		},
		{
			path: '/Mine',
			name: 'Mine',
			component: Mine
		}, {
			path: '/Want',
			name: 'Want',
			component: Want
		}, {
			path: '/Login',
			name: 'Login',
			component: Login,
			meta: {
				fullScreen: true
			}
		},
		{
			path: '/List',
			name: 'List',
			component: List,
			meta: {
				fullScreen: true
			}
		},
		{
			path: '/Reg',
			name: 'Reg',
			component: Reg,
			meta: {
				fullScreen: true
			}
		},
		{
			path: '/Details',
			name: 'Details',
			component: Details,
			meta: {
				fullScreen: true
			}
		},

		{
			path: '*',
			name: 'Notfound',
			component: NotFound,
			meta: {
				fullScreen: true
			}
		},
	],
	// scrollBehavior() {
	// 	return {
	// 		x: 0,
	// 		y: 0
	// 	};
	// }
});
