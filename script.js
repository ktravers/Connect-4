$(".container .column").click(function(event) {
    var is_red_turn = $(".container").hasClass("red");
    var is_blue_turn = $(".container").hasClass("blue");
    var square = $(event.currentTarget).find(".square.free").last();

    if (!!square.length) {
        $(square).removeClass("free");
        $(square).toggleClass("red", is_red_turn);
        $(square).toggleClass("blue", is_blue_turn);
        $(".container").toggleClass(["red", "blue"]);
    }
});

$(".reset-button").click(function() {
    $(".square").removeClass(["red", "blue"]);
    $(".square").addClass("free");
    $(".container").addClass("red");
    $(".container").removeClass("blue");
});