/*** Main Menu Mobile ***/

var MainNav = document.querySelector(".header__nav");
var toggleNav = document.querySelector(".header__toggle");

MainNav.classList.remove("header__nav--nojs");

toggleNav.addEventListener("click", function(event) {
  if(MainNav.classList.contains("header__nav--closed")) {
    MainNav.classList.remove("header__nav--closed");
    MainNav.classList.add("header__nav--opened");
  } else {
    MainNav.classList.remove("header__nav--opened");
    MainNav.classList.add("header__nav--closed");
  }
});

/*** Sign In Form ***/
var SignIn = document.querySelector(".header__user-sign");
var SignInForm = document.querySelector(".sign");
var SignClose = document.querySelector(".sign__close");
var Overlay = document.querySelector(".overlay");

SignIn.addEventListener("click", function(e) {
  e.preventDefault();
  if(SignInForm.classList.contains("sign--closed")) {
    SignInForm.classList.remove("sign--closed");
    SignInForm.classList.add("sign--opened");
    Overlay.classList.add("overlay--opened");
  }
});

SignClose.addEventListener("click", function(e) {
  e.preventDefault();
  SignInForm.classList.remove("sign--opened");
  SignInForm.classList.add("sign--closed");
  Overlay.classList.remove("overlay--opened");
});

/*** Cart Form ***/
var CartIn = document.querySelector(".header__user-cart");
var CartForm = document.querySelector(".cart");
var CartClose = document.querySelector(".cart__close");
var Body = document.querySelector ("body");

CartIn.addEventListener("click", function(e) {
  e.preventDefault();
  if(CartForm.classList.contains("cart--closed")) {
    CartForm.classList.remove("cart--closed");
    CartForm.classList.add("cart--opened");
    Overlay.classList.add("overlay--opened");
    Body.classList.add("body-overflow");
  }
});

CartClose.addEventListener("click", function(e) {
  e.preventDefault();
  CartForm.classList.remove("cart--opened");
  CartForm.classList.add("cart--closed");
  Overlay.classList.remove("overlay--opened");
  Body.classList.remove("body-overflow");
});



/*** Search Form ***/
var SearchBtn = document.querySelector(".header__user-search");
var SearchForm = document.querySelector(".header__search-block");

SearchBtn.addEventListener("click", function(e) {
  e.preventDefault();
  if(SearchForm.classList.contains("header__search-block--closed")) {
    SearchForm.classList.remove("header__search-block--closed");
    SearchForm.classList.add("header__search-block--opened");
  }
  else {
    SearchForm.classList.remove("header__search-block--opened");
    SearchForm.classList.add("header__search-block--closed");
  }
});

CartClose.addEventListener("click", function(e) {
  e.preventDefault();
  CartForm.classList.remove("cart--opened");
  CartForm.classList.add("cart--closed");
  Overlay.classList.remove("overlay--opened");
  Body.classList.remove("body-overflow");
});


//sharee
Share = {
    /**
     * Показать пользователю дилог шаринга в сооветствии с опциями
     * Метод для использования в inline-js в ссылках
     * При блокировке всплывающего окна подставит нужный адрес и ползволит браузеру перейти по нему
     *
     * @example <a href="" onclick="return share.go(this)">like+</a>
     *
     * @param Object _element - элемент DOM, для которого
     * @param Object _options - опции, все необязательны
     */
    go: function(_element, _options) {
        var
            self = Share,
            options = $.extend(
                {
                    type:       'vk',    // тип соцсети
                    url:        location.href,  // какую ссылку шарим
                    count_url:  location.href,  // для какой ссылки крутим счётчик
                    title:      document.title, // заголовок шаринга
                    image:        '',             // картинка шаринга
                    text:       '',             // текст шаринга
                },
                $(_element).data(), // Если параметры заданы в data, то читаем их
                _options            // Параметры из вызова метода имеют наивысший приоритет
            );

        if (self.popup(link = self[options.type](options)) === null) {
            // Если не удалось открыть попап
            if ( $(_element).is('a') ) {
                // Если это <a>, то подставляем адрес и просим браузер продолжить переход по ссылке
                $(_element).prop('href', link);
                return true;
            }
            else {
                // Если это не <a>, то пытаемся перейти по адресу
                location.href = link;
                return false;
            }
        }
        else {
            // Попап успешно открыт, просим браузер не продолжать обработку
            return false;
        }
    },

    // ВКонтакте
    vk: function(_options) {
        var options = $.extend({
                url:    location.href,
                title:  document.title,
                image:  '',
                text:   '',
            }, _options);

        return 'http://vkontakte.ru/share.php?'
            + 'url='          + encodeURIComponent(options.url)
            + '&title='       + encodeURIComponent(options.title)
            + '&description=' + encodeURIComponent(options.text)
            + '&image='       + encodeURIComponent(options.image)
            + '&noparse=true';
    },

    // Одноклассники
    ok: function(_options) {
        var options = $.extend({
                url:    location.href,
                text:   '',
            }, _options);

        return 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1'
            + '&st.comments=' + encodeURIComponent(options.text)
            + '&st._surl='    + encodeURIComponent(options.url);
    },

    // Facebook
    fb: function(_options) {
        var options = $.extend({
                url:    location.href,
                title:  document.title,
                image:  '',
                text:   '',
            }, _options);

        return 'http://www.facebook.com/sharer.php?s=100'
            + '&p[title]='     + encodeURIComponent(options.title)
            + '&p[summary]='   + encodeURIComponent(options.text)
            + '&p[url]='       + encodeURIComponent(options.url)
            + '&p[images][0]=' + encodeURIComponent(options.image);
    },

    // Живой Журнал
    lj: function(_options) {
        var options = $.extend({
                url:    location.href,
                title:  document.title,
                text:   '',
            }, _options);

        return 'http://livejournal.com/update.bml?'
            + 'subject='        + encodeURIComponent(options.title)
            + '&event='         + encodeURIComponent(options.text + '<br/><a href="' + options.url + '">' + options.title + '</a>')
            + '&transform=1';
    },

    // Твиттер
    tw: function(_options) {
        var options = $.extend({
                url:        location.href,
                count_url:  location.href,
                title:      document.title,
            }, _options);

        return 'http://twitter.com/share?'
            + 'text='      + encodeURIComponent(options.title)
            + '&url='      + encodeURIComponent(options.url)
            + '&counturl=' + encodeURIComponent(options.count_url);
    },

    // Mail.Ru
    mr: function(_options) {
        var options = $.extend({
                url:    location.href,
                title:  document.title,
                image:  '',
                text:   '',
            }, _options);

        return 'http://connect.mail.ru/share?'
            + 'url='          + encodeURIComponent(options.url)
            + '&title='       + encodeURIComponent(options.title)
            + '&description=' + encodeURIComponent(options.text)
            + '&imageurl='    + encodeURIComponent(options.image);
    },

    // Открыть окно шаринга
    popup: function(url) {
        return window.open(url,'','toolbar=0,status=0,scrollbars=1,width=626,height=436');
    }
}

// Все элементы класса .social_share считаем кнопками шаринга
$(document).on('click', '.social_share', function(){
    Share.go(this);
});
//end share


//Проверка CheckBox на отметку
$( ".btn--cart" ).click(function() {
  if($(".cart__terms-checkbox").prop('checked') == false) {
    $(".cart__indicator-checkbox").css('border-color', '#b94a48');
  }
  $( ".cart__indicator-checkbox" ).click(function() {
    $(".cart__indicator-checkbox").css('border-color', '#e5e5e5');
  });
});

//Пересчет общей суммы корзины
$(document).ready(function() {
  $('.cart__minus').click(function () {
      var $input = $(this).parent().find('.cart__in-count');
      var $sprice = $(this).parent().parent().find('.cart__in-sum-js');
      var count = parseInt($input.val()) - 1;
      var summ = 0;
      var total = 0;
      var price = parseInt($sprice.text());
    if(count < 1) {
      var idrow = $(this).closest('.cart__row').attr('id');
        $('.warning').show();
        $('.btn--cancel').click(function() {
            $('.warning').hide();
            return false;
        });
        $('.btn--cart-item-del').click(function() {
          $('#'+ idrow).remove();
          $('.warning').hide();
          return false;
        });
    }
      count = count < 1 ? 1 : count;
      summ = (count * price);
      $input.attr('data-summ', summ);
      $input.val(count);
      $input.change();
      $('.cart__in-count').each(function() {       
        total += Number($(this).attr('data-summ'));
    });
      $('.cart__subtotal-js').text(total);
      return false;
});
  $('.cart__plus').click(function () {
      var $input = $(this).parent().find('.cart__in-count');
      var $sprice = $(this).parent().parent().find('.cart__in-sum-js');
      var summ = 0;
      var total = 0;
      var price = parseInt($sprice.text());
      var count = parseInt($input.val()) + 1;
      summ = (count * price);
      $input.attr('data-summ', summ);
      $input.val(count);
      $input.change();
      $('.cart__in-count').each(function() {       
        total += Number($(this).attr('data-summ'));
      });
      $('.cart__subtotal-js').text(total);
      return false;
    });
});


/*
$(window).on('load', function() {
   var arr = $('.cart__in-count').map(function() {return this.value;}).get();
   var arrayData = []; // массив, для данных
   var num = 0; // счетчик, для родительских елементов
$('.cart__summa').each(function(){ // перебираем все родительские елементы
    var oneDiv = $(this);
    var countSpan = oneDiv.find('.cart__in-sum-js').length - 1; // считаем количество span'ов в одном родителе
    var spansData = []; // массив для данных из span'он одного родителя
    for(i = 0; i <= countSpan; i++){ // перебираем все span'ы одного родителя
        var dataSpan = oneDiv.find('.cart__in-sum-js').text(); // получаем данные из одного span'а
        spansData[i] = dataSpan; // записываем в массив данные
    }
  arr[num] = spansData; // записываем в основной массиы массив с данными из спанов одного родителя
  num ++; // увеличиваем счетчик родителей
});
console.log(arrayData); // выводим массив в консоль
    var arr=$('.cart__in-count').map(function() {return this.value;}).get();
    console.log(arr); 
  });
*/
