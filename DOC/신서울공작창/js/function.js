//슬라이드
$(function () {
	const $container = $('.section-slides > .slides-container')
	const $indicator = $('section > .slides-pagination > li > a')
	const $btnPrev = $('.slides-navigation > .prev')
	const $btnNext = $('.slides-navigation > .next')

	let nowIdx = 0

	$indicator.on('click', function (evt) {
		evt.preventDefault()

		nowIdx = $indicator.index(this)

		//인디케이터 활성화
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')

		//슬라이드 처리
		$container.stop().animate({ left: -1200 * nowIdx }, 1000)
	})

		//다음버튼
		$btnNext.on('click', function (evt) {
			evt.preventDefault()
	
			if (nowIdx < 5) {
				nowIdx++
			} else {
				nowIdx = 0
			}
	
			//슬라이드 처리
		    $container.stop().animate({ left: -1200 * nowIdx }, 1000)
	
			//인디케이터 활성화
			$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')
		})
	
		//이전버튼
		$btnPrev.on('click', function (evt) {
			evt.preventDefault()
	
			if (nowIdx > 0) {
				nowIdx--
			} else {
				nowIdx = 5
			}
	
			//슬라이드 처리
		    $container.stop().animate({ left: -1200 * nowIdx }, 1000)
	
			//인디케이터 활성화
			$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')
		})

	//자동재생
	setInterval(function () {
		if (nowIdx < 5) {
			nowIdx++
		} else {
			nowIdx = 0
		}

		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')
		$container.stop().animate({ left: -1200 * nowIdx }, 400)
	}, 3000)
})

//다크 모드
document.addEventListener('DOMContentLoaded', function () {
	//다크모드 토글
	if (document.querySelector('.darkmode')) {
		if (localStorage.getItem('darkmode') == 'on') {
			//다크모드 켜기
			document.body.dataset.darkmode = 'on'
			document.querySelector('#toggle-radio-dark').checked = true
		}
		//다크모드 이벤트 핸들러
		document.querySelector('.darkmode').addEventListener(
			'click',
			(e) => {
				if (e.target.classList.contains('todark')) {
					document.body.dataset.darkmode = 'on'
					localStorage.setItem('darkmode', 'on')
				} else if (e.target.classList.contains('tolight')) {
					document.body.dataset.darkmode = 'off'
					localStorage.setItem('darkmode', 'off')
				}
			},
			false
		)
	} else {
		localStorage.removeItem('darkmode')
	}
})

//공지사항 영역
$(function () {
	const $tit = $('#announcement > .apply > dl > dt > a')

	$tit.on('click', function (evt) {
		evt.preventDefault()

		$(this).parent().toggleClass('on').next().slideToggle(150)
	})
})


 //헤더 고정 , 스크롤 이벤트
 $(function () {
	const $header = $('nav')
	const arrTopVal = [] //배열은 여러 데이터를 한번에 저장, 관리

	//셀렉팅 집합을 순회하며 처리하는 .each() 메소드
	$('section').each(function (idx) {
		//어떤 요소의 top 값(body로부터 떨어진 거리)을 구하는 방법 => .offset().top
		arrTopVal[idx] = $(this).offset().top
	})

	$(window).on({
		scroll: function () {
			//scrollTop 값에 소수점이 발생할 경우를 대비
			const scrollTop = Math.ceil($(window).scrollTop())

			//1. 스크롤탑값에 따른 header 고정처리
			if (scrollTop > 120) {
				$header.addClass('fixed')
				$header.next().css({ marginTop: 0 })
			} else {
				$header.removeClass('fixed')
				$header.next().css({ marginTop: 0 })
			}

			//topbar 노출처리
			const $TopBar = $('.topbar')

			if (scrollTop > 300) {
				$TopBar.fadeIn()
			} else {
				$TopBar.fadeOut()
			}

			//view>0 이면 푸터가 화면에 노출되었다는 것을 의미
			const view = scrollTop + $(window).height() - $('footer').offset().top
		},
		load: function () {
			$('html,body').animate({ scrollTop: 0 }, 400)
		} //load 이벤트 - 화면에 내용이 출력완료된 시점에 발생
	})

	//top 버튼에 대한 click 이벤트 구문
	$('.topbar').on('click', function (evt) {
		evt.preventDefault()

		$('html,body').animate({ scrollTop: 0 }, 1000)
	})
})

//underbar
$(function () {
	const arrTopVal = [] //배열은 여러 데이터를 한번에 저장, 관리

	//셀렉팅 집합을 순회하며 처리하는 .each() 메소드
	$('section').each(function (idx) {
		//어떤 요소의 top 값(body로부터 떨어진 거리)을 구하는 방법 => .offset().top
		arrTopVal[idx] = $(this).offset().top
	})

	$(window).on({
		scroll: function () {
			//scrollTop 값에 소수점이 발생할 경우를 대비
			const scrollTop = Math.ceil($(window).scrollTop())

			//view>0 이면 푸터가 화면에 노출되었다는 것을 의미
			const view = scrollTop + $(window).height() - $('footer').offset().top

			if (view > 0) {
				//푸터노출
				$UnderBar.css('margin-bottom', view)
			} else {
				$UnderBar.css('margin-bottom', 0)
			}
		},
		load: function () {
			$('html,body').animate({ scrollTop: 0 }, 400)
		} //load 이벤트 - 화면에 내용이 출력완료된 시점에 발생
	})

	//underbar 버튼에 대한 click 이벤트 구문
	$('.underbar').on('click', function (evt) {
		evt.preventDefault()

		$('html,body').animate({ scrollTop: 2000 }, 1000)
	})
})