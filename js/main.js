
// start-mainActive-tab
$(document).ready(function(){
    function menuActiveTab(){
        let currenlocation = location.href;
        let menuItem = document.querySelectorAll('#nav-header a');
        for (let i =0;i<menuItem.length;i++){
        if(menuItem[i].href === currenlocation){
        menuItem[i].className = "active-tab";
    }
    }
    }
    menuActiveTab();
});
// end-mainActive-tab

//  ---start-Slick---

// banner-slick
$(document).ready(function(){
    $('#index-slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
    });
});
// end-banner-slick

// start-partner-page
// start-tab-loi-ich
$(document).ready(function(){
    function openTab(evt, tabName) {
        let i, tabcontent, tablinks;
        tabcontent = document.querySelectorAll(" #partner_tab-1 .partner-tab-item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.querySelectorAll("#partner_tab-1 .tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    document.getElementById("loi-ich-tab1").onclick = function(event) {
        openTab(event, 'loi-ich-content-1');
        
    }
    document.getElementById("loi-ich-tab2").onclick = function(event) {
        openTab(event, 'loi-ich-content-2');
    }
    document.getElementById("loi-ich-tab3").onclick = function(event) {
        openTab(event, 'loi-ich-content-3');
    }
    document.getElementById("loi-ich-tab1").click();
});

$(document).ready(function() {
    function partnerLinksTab(){
        let tablink = document.querySelectorAll("#partner_tab-1 .tabs a");
        for (let i = 0; i < tablink.length; i++) {
            tablink[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("partner_tablinks-active");
            current[0].className = current[0].className.replace("partner_tablinks-active", "");
            this.className += " partner_tablinks-active";
      });
    }
    }
    partnerLinksTab();
});
// end-tab-loi-ich
// start-tab-2
$(document).ready(function() {
    function openTab1(evt, tabName) {
        let i, tabcontent, tablinks;
        tabcontent = document.querySelectorAll(" #partner_tab-2 .tab_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.querySelectorAll("#partner_tab-2 .tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
            tablinks[i].style.backgroundColor = tablinks[i].style.backgroundColor.replace("red","");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    
    document.getElementById("show-all").onclick = function(event) {
        openTab1(event, 'tab_content-item-1');
        $('.showAll').css('display', 'block'); 
        $('.showAll').get(0).slick.setPosition()
    }
    document.getElementById("tai-chinh").onclick = function(event) {
        openTab1(event, 'tab_content-item-2');
        $('.taiChinh').css('display', 'block'); 
        $('.taiChinh').get(0).slick.setPosition()
    }
    document.getElementById("hang-hoa").onclick = function(event) {
        openTab1(event, 'tab_content-item-3');
        $('.hangHoa').css('display', 'block'); 
        $('.hangHoa').get(0).slick.setPosition()
    }
    document.getElementById("to-chuc").onclick = function(event) {
        openTab1(event, 'tab_content-item-4');
        $('.toChuc').css('display', 'block'); 
        $('.toChuc').get(0).slick.setPosition()
    }
    document.getElementById("dong-hanh").onclick = function(event) {
        openTab1(event, 'tab_content-item-5');
        $('.dongHanh').css('display', 'block'); 
        $('.dongHanh').get(0).slick.setPosition()
    }
    document.getElementById("truyen-thong").onclick = function(event) {
        openTab1(event, 'tab_content-item-6');
        $('.truyenThong').css('display', 'block'); 
        $('.truyenThong').get(0).slick.setPosition()
    }
    document.getElementById("khac").onclick = function(event) {
        openTab1(event, 'tab_content-item-7');
        $('.khac').css('display', 'block'); 
        $('.khac').get(0).slick.setPosition()
    }
    document.getElementById("show-all").click();
    
});

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
$(document).ready(function(){
    $('.toChuc').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><i class="fa fa-angle-left fa-4x" aria-hidden="true"></i></button>',
nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><i class="fa fa-angle-right fa-4x" aria-hidden="true"></i></button>',
    });
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

$(document).ready(function(){
    $('.truyenThong').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><i class="fa fa-angle-left fa-4x" aria-hidden="true"></i></button>',
nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><i class="fa fa-angle-right fa-4x" aria-hidden="true"></i></button>',
    });
});
$(document).ready(function(){
    $('.khac').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><i class="fa fa-angle-left fa-4x" aria-hidden="true"></i></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><i class="fa fa-angle-right fa-4x" aria-hidden="true"></i></button>',
    });
});

$(document).ready(function() {
    function partnerbtntab(){
        let btns = document.querySelectorAll("#partner_tab-2 .tablinks");
        for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("partner_tab2-active");
      current[0].className = current[0].className.replace(" partner_tab2-active", "");
      this.className += " partner_tab2-active";
      });
    }
    }
    partnerbtntab();
});
// --end-parent-tab 2-

// end-partner-page


// about-tab
$(document).ready(function() {
    function openTab(evt, tabName) {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    
    document.getElementById("tab-1").onclick = function(event) {
        openTab(event, 'tab1');
    }
    
    document.getElementById("tab-2").onclick = function(event) {
        openTab(event, 'tab2');
    }
    document.getElementById("tab-3").onclick = function(event) {
        openTab(event, 'tab3');
    }
    document.getElementById("tab-4").onclick = function(event) {
        openTab(event, 'tab4');
    }
    document.getElementById("tab-5").onclick = function(event) {
        openTab(event, 'tab5');
    }
    
    document.getElementById("tab-1").click();
});

$(document).ready(function() {
    function aboutLinksTab(){
        let tablink = document.querySelectorAll("#about_tab-control p");
        for (let i = 0; i < tablink.length; i++) {
            tablink[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("about_tablink-active-color");
            current[0].className = current[0].className.replace("about_tablink-active-color", "");
            this.className += "about_tablink-active-color";
      });
    }
    }
    aboutLinksTab();
});
// end about tab
$(document).ready(function(){
    $(".field-item").hover(function (e) {
        e.stopPropagation();
            // over
            $(".goi-tu-thien-text").css("display", "block");
        }, function (e) {
        e.stopPropagation();
            // out
            $(".goi-tu-thien-text").css("display", "none");
        }
    );
});
// Field-Item Hover

// --start-trang news---\
// -----start news tab----
$(document).ready(function() {
    function newsLinksTab(){
        let newsTablink = document.querySelectorAll("#news-section-1 .tintuc-item a");
        for (let i = 0; i < newsTablink.length; i++) {
            newsTablink[i].addEventListener("click", function() {
            let current1 = document.getElementsByClassName("tintuc-item-active ");
            current1[0].className = current1[0].className.replace("tintuc-item-active ", "");
            this.className += " tintuc-item-active ";
      });
    }
    }
    newsLinksTab();
});

$(document).ready(function() {
    function openNewsTab(evt, tabName) {
        let i, tabcontent, tablinks;
        tabcontent = document.querySelectorAll("#news-section-1 .news-tab-item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.querySelectorAll("#news-section-1 .news-tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    
    document.getElementById("news-tablinks-1").onclick = function(event) {
        openNewsTab(event, 'news-tabContent-1');
    }
    
    document.getElementById("news-tablinks-2").onclick = function(event) {
        openNewsTab(event, 'news-tabContent-2');
    }
    document.getElementById("news-tablinks-3").onclick = function(event) {
        openNewsTab(event, 'news-tabContent-3');
    }
    document.getElementById("news-tablinks-1").click();
});

// -----end news tab----
$(document).ready(function(){
    $('#goi_tu-thien .goituthien').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay:true,
    autoplaySpeed:3000,
    prevArrow: '<button class="" aria-label="Previous" type="button" style="background: transparent;border: none;position: absolute;top: 30%;color: white;left: -2%;;outline: none;transform: translateY(-50%);"><i class="fa fa-angle-left fa-3x" aria-hidden="true"></i></button>',
    nextArrow: '<button class="" aria-label="Previous" type="button" style="background: transparent;border: none;position: absolute;top: 30%;color: white;right:-2%;outline: none;transform: translateY(-50%);"><i class="fa fa-angle-right fa-3x" aria-hidden="true"></i></button>',
    });
    });

$(document).ready(function(){
    $('.news_aboutus').slick({
        infinite:true,
        slidesToShow:3,
        slidesToScroll:2,
        autoplay:true,
        autoplaySpeed:3000,
        prevArrow: '<button class="" aria-label="Previous" type="button" style="background: transparent;border: none;position: absolute;top: 30%;color: black;left: -2%;;outline: none;transform: translateY(-50%);"><i class="fa fa-angle-left fa-3x" aria-hidden="true"></i></button>',
        nextArrow: '<button class="" aria-label="Previous" type="button" style="background: transparent;border: none;position: absolute;top: 30%;color: black;right:-2%;outline: none;transform: translateY(-50%);"><i class="fa fa-angle-right fa-3x" aria-hidden="true"></i></button>',
    });
});
// --end -trang news---