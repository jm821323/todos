$(function(){
  var $ipt = $('.input')
  function leftnum(){
    var num = $('.main .box ul li').length - $('.main .box ul .completed').length
    $('footer .left span').html(num + ' item left')
  }
  leftnum()
	$('body').on('keydown', function(e) {
		if(e.keyCode === 13){
      var text = $ipt.val()
			var html = $('.main .box ul').html() + '<li class="clear">'+
      '<span class="checked"></span>'+
     '<p>'+ text +'</p>'+
      '<button>x</button>'+
      '<input type="text" class="hidden">'+
    '</li>'
      $('.main .box ul').html(html)
      $ipt.val('')
      if($('footer .center .completed').hasClass('active')){
        $('.main .box ul li').each((i, item) => {
          if($(item).hasClass('completed')){
            $(item).show()
          }else{
            $(item).hide()
          }
        })
      }
      leftnum()
		}
	})
	$('.main .box ul').on('click','span',function(){
    $(this).parent().toggleClass('completed')
    leftnum()
	})
	$('#toggall').on('click',function(){
    $('.main .box ul li').toggleClass('completed')
    leftnum()
	})
	$('.main .box ul').on('click','button',function(){
    $(this).parent().remove()
    leftnum()
	})
	$('footer .right span').on('click', function(){
    leftnum()
		$('.main .box ul').children().each((i,item) => {
			if($(item).hasClass('completed')){
        $(item).remove()
			}
		})
  })
  $('footer .center .all').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active')
    $('.main .box ul li').show()
  })
  $('footer .center .activeli').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active')
    $('.main .box ul li').each((i, item) => {
      if($(item).hasClass('completed')){
        $(item).hide()
      }else{
        $(item).show()
      }
    })
  })
  $('footer .center .completed').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active')
    $('.main .box ul li').each((i, item) => {
      if($(item).hasClass('completed')){
        $(item).show()
      }else{
        $(item).hide()
      }
    })
  })
})