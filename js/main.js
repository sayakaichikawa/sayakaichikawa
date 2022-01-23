/* 背景画像のスライドショー */
jQuery(function($) {
  $('.bg-slider').bgSwitcher({
    images: ['images/background-1.jpg', 'images/background-3.jpg', 'images/background-5.jpg', 'images/background-6.jpg', 'images/background-7.jpg' ], // 背景画像
    interval: 3000, // 切り替える間隔
    loop: true, // 切り替えの繰り返し
    shuffle: false, // 背景画像シャッフル
    effect: "fade", // エフェクト
    duration: 800, // エフェクトの時間
    easing: "swing" // エフェクトのイージング
  });
});

/* メインニューの表示・非表示 */
//$('.main_navi').toggle();
//$('.main_logo').click(function(){
  //$('.main_navi').show();
//});


//プロフィールの表示・非表示 
$('.profile').on('click', function(){
  $('#profile').fadeToggle();
  $('#contact,#gallery,#prose').hide();
});

// ギャラリーの表示・非表示 
$('.gallery').on('click', function(){
  $('#gallery').fadeToggle();
  $('#profile,#contact,#prose').hide();
});

// 散文の表示・非表示 
$('.prose').on('click', function(){
  $('#prose').fadeToggle();
  $('#profile,#gallery,#contact').hide();
});

// コンタクトの表示・非表示 
$('.contact').on('click', function(){
  $('#contact').fadeToggle();
  $('#profile,#gallery,#prose').hide();
});


//お問い合わせフォームのバリデーション
$(function() {
  $('input[type="text"]').blur(function() {
    if ($(this).val() == '') {
      $(this).next().text('入力をお願いいたします');
    } else {
      $(this).next().text('');
    }
  });
});

//お問い合わせフォームのバリデーション
$(function() {
  $('textarea').blur(function() {
    if ($(this).val() == '') {
      $(this).next().text('入力をお願いいたします');
    } else {
      $(this).next().text('');
    }
  });
});

//colorbox
$(document).ready(function(){
  $(".main_img").colorbox({rel:'main_img', maxWidth:"90%", maxHeight:"90%"});
});