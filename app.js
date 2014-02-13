function on_load() 
{
	$('.mainMenuItem').click(function()
	{
		var currMMI = $(this)
		var	currSML =  $(get_submenuList_class(currMMI))

		if(currMMI.hasClass("clicked"))
		{
			currMMI.removeClass("clicked");
			currSML.slideUp(300);
		}	
		else
		{
			currMMI.addClass("clicked");
			currSML.slideDown(300);
		}

	});
}

function get_submenuList_class(mainMenuItemClass)
{
	return ('.' + 'sub' + $(mainMenuItemClass).attr("class").split(/\s+/)[1]);
}