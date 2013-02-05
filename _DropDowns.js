var showDropdown = function ($tag) {
	var $dropdown = $(".dropdown", $tag);
	var height = 0;
	$dropdown.children().each(function(){
		height += $(this).outerHeight(true);
	});
			
$dropdown.stop().animate({"height":height+"px"}, 1000);
}
		
var hideDropdown = function ($tag) {
	$(".dropdown", $tag).stop().animate({"height":"0px"}, 1000);
}
		
		
