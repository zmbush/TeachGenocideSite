function on_load() 
{
	$('.mainMenuItem').click(function()
	{
		var currMMI = $(this)
		var	currSMI =  $(get_submenuItem_class(currMMI))

		if(currMMI.hasClass("clicked"))
		{
			currMMI.removeClass("clicked");

			$(currSMI.get().reverse()).each(function(index)
			{
				var currSubEl = $(this);

		        setTimeout(function() {
		            currSubEl.slideUp(75)
		        }, 75 * index);
			});
		}	
		else
		{
			currMMI.addClass("clicked");

			currSMI.each(function(index)
			{
				var currSubEl = $(this);
		        setTimeout(function() {
		            currSubEl.slideDown(75);
		        }, 75 * index);
			});		
		}

	});
}

function get_submenuItem_class(mainMenuItemClass)
{
	return ('.' + 'sub' + $(mainMenuItemClass).attr("class").split(/\s+/)[1]);
}