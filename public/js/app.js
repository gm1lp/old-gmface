for (var i = 1; i <= 3; i++)
    $(".owl-carousel.slider-" + i).owlCarousel({
        items: 1,
        nav: !0,
        loop: !0,
        dots: !1,
        margin: 5,
        autoplay: !0,
        autoplayTimeout: '3000',
        navContainer: '#slider-' + i + '-nav',
        navText: ['<div class="carousel-left"></div>', '<div class="carousel-right"></div>'],
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1,
                nav: !0
            }
        }
    });
let glob = {
    auth: $('#auth'),
    selectBtn: $('#selectBtn'),
    init() {
        window.addEventListener('click', function(e){
            if(!document.getElementById('auth').contains(e.target) && !$('#auth').hasClass('d-none'))
                $('#auth').addClass('d-none');
            if(!document.getElementById('selectBtn').contains(e.target) && !$('#selectBtn').hasClass('d-none'))
                $('#selectBtn').addClass('d-none');
        });
        $('.owl-prev,.owl-next').on('click', function(event){
            $(this).parent().parent().find('.owl-carousel').trigger('stop.owl.autoplay');
        });
    },
    st(id) {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#" + id).offset().top
        }, 300)
    },
    ta(key) {
        if(!this[key].hasClass('d-none')) {
            $('.btn-select i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
            this[key].addClass('d-none');
            return 1;
        }
        setTimeout(()=>{
            if(this[key].hasClass('d-none')) {
                $('.btn-select i.fa').removeClass('fa-chevron-down').addClass('fa-chevron-up');
                this[key].removeClass('d-none');
            }
            else {
                this[key].addClass('d-none');
                $('.btn-select i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
            }
        });
        return 1;
    },
    sl() {
        let $text = $('.btn-collapse span');
        let $icon = $('.btn-collapse i.fa');
        $('.clear').removeClass('clearfix');
        $('.hashtags-slider').slideToggle({
            done: function() {
                $('.clear').addClass('clearfix');
                console.log('test', $('.hashtags-slider').is(':visible'));
                if ($(this).is(':visible')) {
                    $text.text('свернуть');
                    $icon.removeClass('fa-chevron-down').addClass('fa-chevron-up')
                } else {
                    $text.text('развернуть');
                    $icon.removeClass('fa-chevron-up').addClass('fa-chevron-down')
                }
            }
        })
    }
}
$(document).ready(function(){
  glob.init();
});