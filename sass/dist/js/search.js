// Анимация открытия

let btn = document.querySelector('.header__search-btn')
let search = document.querySelector('.header__search')
let search_input = document.querySelector('.header__search-input')
let btn_close = document.querySelector('.header__search-close')
btn.onclick = function () {
	if (search.classList.length < 2) {
		search.classList.add('header__search_open')
		setTimeout(function () {
			btn_close.classList.add('header__search-close_visible')
		}, 900)
		search_input.setAttribute('tabindex', '0')
		btn_close.setAttribute('tabindex', '0')
		btn.setAttribute('tabindex', '0')
	} else {
		//FindOnPage(search)
		FindOnPage('search')
	}
}
btn_close.onclick = function () {
	search.classList.remove('header__search_open')
	btn_close.classList.remove('header__search-close_visible')
	search_input.setAttribute('tabindex', '-1')
	btn_close.setAttribute('tabindex', '-1')
}

// Реализация поиска

var lastResFind = '' // последний удачный результат
var copy_page = '' // копия страницы в ихсодном виде
var lastResFind = '' // последний удачный результат
var copy_page = '' // копия страницы в ихсодном виде
function TrimStr(s) {
	s = s.replace(/^\s+/g, '')
	return s.replace(/\s+$/g, '')
}
function FindOnPage(inputId) {
	//ищет текст на странице, в параметр передается ID поля для ввода
	var obj = window.document.getElementById(inputId)
	var textToFind

	if (obj) {
		textToFind = TrimStr(obj.value) //обрезаем пробелы
	} else {
		alert('Введенная фраза не найдена')
		return
	}
	if (textToFind == '') {
		alert('Вы ничего не ввели')
		return
	}

	if (document.body.innerHTML.indexOf(textToFind) == '-1')
		alert('Ничего не найдено, проверьте правильность ввода!')

	if (copy_page.length > 0) document.body.innerHTML = copy_page
	else copy_page = document.body.innerHTML

	document.body.innerHTML = document.body.innerHTML.replace(
		eval('/name=' + lastResFind + '/gi'),
		' '
	) //стираем предыдущие якори для скрола
	document.body.innerHTML = document.body.innerHTML.replace(
		eval('/' + textToFind + '/gi'),
		"<span class='found'>" + textToFind + '</span>'
	) //Заменяем найденный текст ссылками с якорем;
	lastResFind = textToFind // сохраняем фразу для поиска, чтобы в дальнейшем по ней стереть все ссылки
	window.location = '#' + textToFind //перемещаем скрол к последнему найденному совпадению
}
