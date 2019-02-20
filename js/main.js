var headerComponent = {
	template: `
		<header class="header-area">
			<h1 class="header-logo"><a href="/takumiozato/">Ozato Takumi</a></h1>
			<nav class="header-nav">
				<ul>
					<li class="header-list"><a href="/takumiozato/profile/" class="header-link">profile</a></li>
					<li class="header-list"><a href="/takumiozato/ability/" class="header-link">ability</a></li>
					<li class="header-list"><a href="/takumiozato/future/" class="header-link">future</a></li>
				</ul>
			</nav>
			<a class="menu-btn">
				<span class="menu__line menu__line--top"></span>
				<span class="menu__line menu__line--center"></span>
				<span class="menu__line menu__line--bottom"></span>
			</a>
		</header>
	`,
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

var footerComponent = {
	template: `
		<footer class="footer">
			<div class="row footer-inner">
				<div class="column one-half profile-wrapper">
					<div class="image-wrapper">
						<img src="/takumiozato/images/profile.jpg" alt="大里　匠" class="profile-icon">
					</div>
					<div>
						<p>大里　匠 / Ozato Takumi</p>
						<p>Web Developer</p>
					</div>
				</div>
				<div class="column one-half row">
					<div class="three columns">
						<p><a href="/takumiozato/profile/" class="footer-link">profile</a></p>
					</div>
					<div class="three columns">
						<p><a href="/takumiozato/profile/" class="footer-link">ability</a></p>
						<ul>
							<li>企画</li>
							<li>制作</li>
							<li>改善</li>
						</ul>
					</div>
					<div class="three columns">
						<p>WORKS</p>
					</div>
				</div>
			</div>
		</footer>
	`
}

var vm = new Vue({
	el: '#app',
	data: function(){
		return {
			isShow: false
		}
	},
	mounted: function(){
		this.isShow = true
	},
	components: {
		'header-component': headerComponent,
		'pagetop-component': pageTopComponent,
		'footer-component': footerComponent,
	}
})
