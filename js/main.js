var headerComponent = {
	template: `
		<header class="header-area">
			<h1 class="header-logo"><a href="/takumiozato/">Ozato Takumi</a></h1>
			<a class="menu-btn" :class="{ 'active': isActive }" @click="menuActive">
				<span class="menu__line menu__line--top"></span>
				<span class="menu__line menu__line--center"></span>
				<span class="menu__line menu__line--bottom"></span>
			</a>
			<transition name="slideIn">
				<div class="menu-list" v-show="isActive">
					<div class="menu-list-inner">
						<ul>
							<li><a href="/takumiozato/profile/">Top トップページ</a></li>
							<li><a href="/takumiozato/profile/">Profile 私について</a></li>
							<li><a href="/takumiozato/ability/">Ability できること</a></li>
							<li><a href="/takumiozato/future/">Furture やりたいこと</a></li>
							<li><a href="/takumiozato/works/">Works 実績一覧</a></li>
						</ul>
					</div>
				</div>
			</transition>
		</header>
	`,
	data: function(){
		return {
			isActive: false
		}
	},
	methods: {
		menuActive: function(){
			this.isActive = !this.isActive;
		}
	}
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
				<div class="profile-wrapper">
					<div class="image-wrapper">
						<img src="/takumiozato/images/profile.jpg" alt="大里　匠" class="profile-icon">
					</div>
					<div>
						<p>大里　匠 / Ozato Takumi</p>
						<p>Web Developer</p>
					</div>
				</div>
				<div class="link-wrapper">
					<div class="row">
						<p class="columns three"><a href="/takumiozato/" class="footer-link">Top -トップ-</a></p>
						<p class="columns three"><a href="/takumiozato/profile/" class="footer-link">Profile -私について-</a></p>
						<p class="columns three"><a href="/takumiozato/ability/" class="footer-link">Ability -できること-</a></p>
						<p class="columns three"><a href="/takumiozato/future/" class="footer-link">Future -やりたいこと-</a></p>
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
