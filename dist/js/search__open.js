let btn = document.querySelector('.header__search-btn')
let search = document.querySelector('.header__search')
let btn_close = document.querySelector('.header__search-close')
btn.onclick = function () {
	if (search.classList.length < 2) {
		search.classList.add('header__search_open')
		setTimeout(function () {
			btn_close.classList.add('header__search-close_visible')
		}, 900)
	} else {
		search.classList.remove('header__search_open')
		btn_close.classList.remove('header__search-close_visible')
	}
}
btn_close.onclick = function () {
	search.classList.remove('header__search_open')
	btn_close.classList.remove('header__search-close_visible')
}
