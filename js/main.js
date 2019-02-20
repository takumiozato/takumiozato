var headerComponent = {
	template: `
		<header class="header-area">
			<h1 class="header-logo"><a href="/takumiozato/">OZATO TAKUMI</a></h1>
			<nav class="header-nav">
				<ul>
					<li class="header-list"><a href="/takumiozato/profile/" class="header-link">profile</a></li>
					<li class="header-list"><a href="/takumiozato/ability/" class="header-link">ability</a></li>
					<li class="header-list"><a href="/takumiozato/future/" class="header-link">future</a></li>
				</ul>
			</nav>
		</header>
	`
}

var pageTopComponent = {
	template: `
		<div class="fixed-bottom">
			<i class="material-icons" @click="scrollTop">keyboard_arrow_up</i>
		</div>
	`,
	methods: {
		scrollTop: function(){
			window.scrollTo({top: 0, behavior: "smooth"})
		}
	},
}

var vm = new Vue({
	el: '#app',
	components: {
		'header-component': headerComponent,
		'pagetop-component': pageTopComponent,
	}
})
