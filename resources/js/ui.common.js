;(function($, win, doc, undefined) {

	'use strict';

	$plugins.common = {
		init: function(){
			var fristHref = '/hyou/html/start/introduction.html';

			if (!!$plugins.uiPara('page')) {
				switch($plugins.uiPara('page')) {
					case 'introduction' :
						fristHref = '/hyou/html/start/introduction.html';
						break;
					case 'branding' :
						fristHref = '/hyou/html/start/branding.html';
						break;
					case 'refList' :
						fristHref = '/hyou/html/start/refList.html';
						break;
					case 'margin' :
						fristHref = '/hyou/html/start/margin.html';
						break;
					case 'naming' :
						fristHref = '/hyou/html/start/naming.html';
						break;
					case 'placeholder' :
						fristHref = '/hyou/html/start/placeholder.html';
						break;
					case 'units' :
						fristHref = '/hyou/html/start/units.html';
						break;

					case 'bulletList' :
						fristHref = '/hyou/html/contents/bulletList.html';
						break;
					case 'table' :
						fristHref = '/hyou/html/contents/table.html';
						break;
					case 'inputFormat' :
						fristHref = '/hyou/html/contents/inputFormat.html';
						break;
					case 'inputPlaceholder' :
						fristHref = '/hyou/html/components/inputPlaceholder.html';
						break;


					case 'accordion' :
						fristHref = '/hyou/html/components/accordion.html';
						break;
					case 'brickList' :
						fristHref = '/hyou/html/components/brickList.html';
						break;
					case 'draggable' :
						console.log('draggable');
						fristHref = '/hyou/html/components/draggable.html';
						break;
					case 'dropdown' :
						fristHref = '/hyou/html/components/dropdown.html';
						break;
					case 'floating' :
						fristHref = '/hyou/html/components/floating.html';
						break;
					case 'floatingRange' :
						fristHref = '/hyou/html/components/floatingRange.html';
						break;
					case 'modal' :
						fristHref = '/hyou/html/components/modal.html';
						break;
					case 'scrollBar' :
						fristHref = '/hyou/html/components/scrollBar.html';
						break;
					case 'parallax' :
						fristHref = '/hyou/html/components/parallax.html';
						break;
					case 'popupBook' :
						fristHref = '/hyou/html/components/popupBook.html';
						break;
					case 'loading' :
						fristHref = '/hyou/html/components/loading.html';
						break;
					case 'tab' :
						fristHref = '/hyou/html/components/tab.html';
						break;
					case 'tableCaption' :
						fristHref = '/hyou/html/components/tableCaption.html';
						break;
					case 'tableCellFix' :
						fristHref = '/hyou/html/components/tableCellFix.html';
						break;
					case 'tableScroll' :
						fristHref = '/hyou/html/components/tableScroll.html';
						break;
					case 'print' :
						fristHref = '/hyou/html/components/print.html';
						break;
					case 'popup' :
						fristHref = '/hyou/html/components/popup.html';
						break;
					case 'tooltip' :
						fristHref = '/hyou/html/components/tooltip.html';
						break;
					case 'datePicker' :
						fristHref = '/hyou/html/components/datePicker.html';
						break;
					case 'inputClear' :
						fristHref = '/hyou/html/components/inputClear.html';
						break;
					case 'select' :
						fristHref = '/hyou/html/components/select.html';
						break;
					case 'innerLabel' :
						fristHref = '/hyou/html/components/innerLabel.html';
						break;
					case 'scrollMove' :
						fristHref = '/hyou/html/components/scrollMove.html';
						break;
					case 'countNumber' :
						fristHref = '/hyou/html/components/countNumber.html';
						break;

					case 'layout' :
						fristHref = '/hyou/html/contents/layout.html';
						break;
					case 'button' :
						fristHref = '/hyou/html/contents/button.html';
						break;
					case 'jsonCodingList' :
						fristHref = '/hyou/html/components/jsonCodingList.html';
						break;
					case 'fileUpload' :
						fristHref = '/hyou/html/components/fileUpload.html';
						break;
					case 'slider' :
						fristHref = '/hyou/html/components/slider.html';
						break;
					case 'issue' :
						fristHref = '/hyou/html/memory/issue.html';
						break;

				}
			}

			$plugins.uiAjax({
				id:'baseHeader',
				url:'/hyou/html/inc/header.html',
				page:true,
				callback:$plugins.common.header
			});
			$plugins.uiAjax({
				id:'baseFooter',
				url:'/hyou/html/inc/footer.html',
				page:true
			});
			$plugins.uiAjax({
				id: 'baseMain',
				url: fristHref,
				page: true,
				effect: true,
				callback: function(){
					$(win).off('scroll.win');
					$plugins.common.pageInit(fristHref);
					$plugins.common.settingAside();


					// $(doc).find('.base-wrap').find('button, a').on('click', function(){
					// 	var $this = $(this);
					// 	(!$this.closest('.ui-modal').length || $this.hasClass('.ui-modal')) && $('body').data('active', $this);
					// });

				}
			});



			// $plugins.uiAjax({
			//	 id:'baseFooter',
			//	 url:'/hyou/html/inc/footer.html',
			//	 page:true,
			//	 callback:$plugins.common.footer
			// });

			console.log('------------------------------------------------------')

			$plugins.uiCaption();
			$plugins.uiInputClear();




		},

		header: function(){
			console.log('header load');
			$plugins.uiAccordion({
				id: 'exeLNB',
				current: 'all',
				autoclose: false
			});
			$plugins.common.menuAjax();

			$('.ui-nav').on('click', $plugins.common.navOpen)
		},
		navOpen: function(){
			var $body = $('body');

			if (!$body.hasClass('nav-open')) {
				$body.addClass('nav-open')
			} else {
				$body.removeClass('nav-open')
			}

		},
		settingAside: function(){
			var $aside = $('#baseAside'),
				$main = $('#baseMain'),
				$h2 = $main.find('.h-2');

			var asideUl = '<ul>';

			if (!!$aside.find('ul')){
				var delAside = $aside.find('ul');
				delAside.remove();
			}

			asideUl += '<li><a href="#">Top</a></li>';
			$h2.each(function(i){
				$(this).attr('id', 'pageTit' + i);
				asideUl += '<li><a href="#pageTit'+ i +'">'+ $(this).text() +'</a></li>';
			});
			asideUl += '</ul>';
			$aside.append(asideUl);
		},
		pageInit: function(v){
			var jsName = null;

			if (!!doc.querySelector('#uiJsName')) {
				jsName = doc.querySelector('#uiJsName').value;
				$plugins.page[jsName]();
			}

			if(typeof(history.pushState) == 'function') {
				var renewURL = location.href;

				renewURL = renewURL.replace(/\&page=([0-9]+)/ig,'');
				renewURL = renewURL.split('/hyou/');
				renewURL = renewURL[0];
				renewURL = renewURL + v;

				var paraUrl = v.split('.'),
					paraUrl = paraUrl[0].split('/'),
					paraUrl = paraUrl[paraUrl.length - 1];

				var indexUrl = '/hyou/html/index.html?page=' + paraUrl;

				history.pushState(false, 'loading', indexUrl);
			}




			// console.log(v.split('.html'), !!doc.querySelector('#uiPageJS'));
			// if (!doc.querySelector('#uiPageJS')) {
			//	  var del = doc.querySelector('#uiPageJS');
			//	 del.parentNode.removeChild(del);
			// }

			// var jsSrc = v.split('.html'),
			//	 jsSrc = jsSrc[0] + '.js',
			//	 script = document.createElement('script'),
			//	 element = document.getElementsByTagName('body')[0];

			// script.src = jsSrc;
			// script.id = 'uiPageJS'
			// script.async = true;
			// script.defer = true;
			// (typeof element === 'undefined' ? document.getElementsByTagName('html')[0] : element).appendChild(script);


		},
		menuAjax: function(){
			$('.dep-2-btn').off('click.ajax').on('click.ajax', function(){
				var href = this.getAttribute('data-href');
				!!$('body').hasClass('nav-open') && $plugins.common.navOpen();
				$plugins.uiAjax({
					id: 'baseMain',
					url: href,
					page: true,
					effect: true,
					callback: function(v){
						$plugins.uiScroll({
							value:0,
							speed:0,
							focus:  $('#baseMain h1').eq(0)
						});

						$(win).off('scroll.win');
						$plugins.common.pageInit(href);
						$plugins.common.settingAside();

					}
				});
			});


		},
		footer: function(){
			console.log('footer load');
		}
	};

	//modal


	//page
	$plugins.page = {}

	//callback
	$plugins.callback = {
		modal: function(modalId){
			switch(modalId) {
				case 'modalID':
					break;


			}
		}
	}

	// $(doc).ready(function() {
	//	 var timer,
	//		 n = 0;

	//	 pageCodeIs();

	//	 function pageCodeIs(){
	//		 console.log('common.js ready?')
	//		 if ($plugins.common.pageid === undefined && n < 10) {
	//			 n = n + 1;
	//			 delayExe();
	//		 } else {
	//			 console.log('common.js ok')
	//			 clearTimeout(timer);
	//			 $plugins.common.init();
	//			 $('body').stop().animate({
	//				 opacity:1
	//			 }, 150);
	//		 }
	//	 }
	//	 function delayExe(){
	//		 clearTimeout(timer);
	//		 timer = setTimeout(function() {
	//			 console.log('common.js no')
	//			 pageCodeIs();
	//		 }, 0);
	//	 }
	// });
})(jQuery, window, document);
