//function to show and hide preloader
	function preloader(_this_, preloader_file_location, timeout_time)
	{
		$(_this_).load(preloader_file_location);

		$(document).ready(function()
		{
			setTimeout(function()
			{
				$(_this_).css('z-index', '-1').fadeOut(0);
			}, timeout_time);
		});
	}

//function to load editor window
	function editor_window(_this_, project_address, project_title)
	{
		var html = '<div class="row title_bar"><div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 title_bar_buttons"><div id="title_bar_close_btn"></div><div id="title_bar_mini_btn"></div><div id="title_bar_maxi_btn"></div></div><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 title_bar_title"><div class="file_name_address">' + project_address + '&nbsp</div><div style="display: inline-block;" id="opened_file_name_in_title_bar"> </div><div class="file_name_address"> - ' + project_title + '</div></div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-3"></div></div></div><div class="row nav_bar_file_container"><div class="col-lg-2 col-md-2 col-sm-2 col-xs-12 navigation_menu_bar"><div id="FOLDERS_Name">FOLDERS</div><ul class="nav_bar_options"></ul></div>';
	
		$(_this_).html(html);
	}