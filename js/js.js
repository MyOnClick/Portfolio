
      $('.item-carousel').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [

    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        prevArrow:'<button class="prew arrow"></button>',
        nextArrow:'<button class="next arrow"></button>',
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });



$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;
    
    var dropdownlink = this.el.find('.dropdownlink');
    dropdownlink.on('click',
                    { el: this.el, multiple: this.multiple },
                    this.dropdown);
  };
  // portfolio small divais

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el,
        $this = $(this),
        //this is the ul.submenuItems
        $next = $this.next();
    
    $next.slideToggle();
    $this.parent().toggleClass('open');
    
    if(!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
    }
  }
  
  var accordion = new Accordion($('.accordion-menu'), false);
})
// portfolio big divais
var activeFact = $('.facts__fact-title_active').length != 0 ? $('.facts__fact-title_active') : $('.facts__fact-title:first-child');
$('.facts__fact-container').html(activeFact.next().html());
$(document).on('click', '.facts__fact-title', function(){
  if(!$(this).hasClass('facts__fact-title_active')){
    $('.facts__fact-title').removeClass('facts__fact-title_active');
    $(this).addClass('facts__fact-title_active');
    
    $('.facts__fact-container').html($(this).next().html());
    
  }
})
