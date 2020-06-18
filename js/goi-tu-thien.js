// Field-Item Hover

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
