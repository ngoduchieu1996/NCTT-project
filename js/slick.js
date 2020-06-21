
// --partner-show-all--
$(document).ready(function(){
$('.showAll').slick({
infinite: true,
slidesToShow: 5,
slidesToScroll: 2,
prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><i class="fa fa-angle-left fa-4x" aria-hidden="true"></i></button>',
nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><i class="fa fa-angle-right fa-4x" aria-hidden="true"></i></button>',
});
});

$('#show-all').on("click", function() {
    $('.showAll').css('display', 'block'); 
    $('.showAll').get(0).slick.setPosition()
});
// --end-partner-show-all--

// --partner-tai-chinhl--
$(document).ready(function(){
    $('.taiChinh').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><i class="fa fa-angle-left fa-4x" aria-hidden="true"></i></button>',
nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><i class="fa fa-angle-right fa-4x" aria-hidden="true"></i></button>',
    });
});
$('#tai-chinh').on("click", function() {
    $('.taiChinh').css('display', 'block'); 
    $('.taiChinh').get(0).slick.setPosition()
});
// --end -partner-tai-chinhl--
// --partner-hanghoa--
$(document).ready(function(){
    $('.hangHoa').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><i class="fa fa-angle-left fa-4x" aria-hidden="true"></i></button>',
nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><i class="fa fa-angle-right fa-4x" aria-hidden="true"></i></button>',
    });
});
$('#hang-hoa').on("click", function() {
    $('.hangHoa').css('display', 'block'); 
    $('.hangHoa').get(0).slick.setPosition()
});
$(document).ready(function(){
    $('.toChuc').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><i class="fa fa-angle-left fa-4x" aria-hidden="true"></i></button>',
nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><i class="fa fa-angle-right fa-4x" aria-hidden="true"></i></button>',
    });
});
$('#to-chuc').on("click", function() {
    $('.toChuc').css('display', 'block'); 
    $('.toChuc').get(0).slick.setPosition()
});
$(document).ready(function(){
    $('.dongHanh').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><i class="fa fa-angle-left fa-4x" aria-hidden="true"></i></button>',
nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><i class="fa fa-angle-right fa-4x" aria-hidden="true"></i></button>',
    });
});
$('#dong-hanh').on("click", function() {
    $('.dongHanh').css('display', 'block'); 
    $('.dongHanh').get(0).slick.setPosition()
});

$(document).ready(function(){
    $('.truyenThong').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><i class="fa fa-angle-left fa-4x" aria-hidden="true"></i></button>',
nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><i class="fa fa-angle-right fa-4x" aria-hidden="true"></i></button>',
    });
});
$('#truyen-thong').on("click", function() {
    $('.truyenThong').css('display', 'block'); 
    $('.truyenThong').get(0).slick.setPosition()
});
$(document).ready(function(){
    $('.khac').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    pprevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><i class="fa fa-angle-left fa-4x" aria-hidden="true"></i></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><i class="fa fa-angle-right fa-4x" aria-hidden="true"></i></button>',
    });
});
$('#khac').on("click", function() {
    $('.khac').css('display', 'block'); 
    $('.khac').get(0).slick.setPosition()
});