//function to show and hide preloader
function preloader(_this_, preloader_file_location, timeout_time) {
	$(_this_).load(preloader_file_location);

	$(document).ready(function() {
		setTimeout(function() {
			$(_this_).css('z-index', '-1').fadeOut(0);
		}, timeout_time);
	});
}

//function to load editor window
function editor_window(_this_, project_address, project_title, menu_items_file_location, menu_items, title_bar_height, open_files_menu_bar_height, navigation_menu_bar_for_mob) {
	//generating html for menu	
	var menuItemHTML = "";
	for (i in menu_items) {
		var type = menu_items[i]['type'];
		var tempHTML = "";

		if (type == "folder_title") {
			var name = menu_items[i]['name'];
			var icon_src = menu_items[i]['icon_src'];

			tempHTML = '<div><img class="nav_bar_folder_icon" src="' + icon_src + '"><span> ' + name + '</span></div>';
		}
		else if (type == "file") {
			var name = menu_items[i]['name'];
			var icon_src = menu_items[i]['icon_src'];
			var file_src = menu_items[i]['file_src'];

			tempHTML = '<li src="' + file_src + '"><img class="nav_bar_folder_icon" src="' + icon_src + '"><span> ' + name + '</span></li>';
		}
		else if (type == "file_group") {
			var isFirstUlItem = true;
			tempHTML += '<li>';
			for (j in menu_items[i]['files']) {
				var files = menu_items[i]['files'][j];
				var type2 = files['type'];

				if (type2 == "folder_title") {
					var name = files['name'];
					var icon_src = files['icon_src'];

					tempHTML += '<div><img class="nav_bar_folder_icon" src="' + icon_src + '"><span> ' + name + '</span></div>';
				}
				else if (type2 == "file") {
					var name = files['name'];
					var icon_src = files['icon_src'];
					var file_src = files['file_src'];

					if (isFirstUlItem) {
						tempHTML += '<ul><li src="' + file_src + '"><img class="nav_bar_folder_icon" src="' + icon_src + '"><span> ' + name + '</span></li>';
						isFirstUlItem = false;
					}
					else
						tempHTML += '<li src="' + file_src + '"><img class="nav_bar_folder_icon" src="' + icon_src + '"><span> ' + name + '</span></li>';
				}
			}
			tempHTML += '</ul></li>'
		}

		menuItemHTML += tempHTML;
	}

	//generating editor window html	
	var html = '<div class="row title_bar"><div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 title_bar_buttons"><div id="title_bar_close_btn"></div><div id="title_bar_mini_btn"></div><div id="title_bar_maxi_btn"></div></div><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 title_bar_title"><div class="file_name_address">' + project_address + '&nbsp</div><div style="display: inline-block;" id="opened_file_name_in_title_bar"> </div><div class="file_name_address"> - ' + project_title + '</div></div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-3"></div></div></div><div class="row nav_bar_file_container"><div class="col-lg-2 col-md-2 col-sm-2 col-xs-12 navigation_menu_bar"><div id="FOLDERS_Name">FOLDERS</div><ul class="nav_bar_options">' + menuItemHTML + '</ul></div><div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 file_container"><div class="row"><ul class="col-lg-12 col-md-12 col-sm-12 col-xs-12 open_files_menu_bar"><li class="open_files_menu_card" id="open_files_menu_card_sample"><div>sample.txt</div><span>x</span></li><li class="open_files_menu_card" style="width: auto; opacity: 0;">x<span>x</span></li></ul><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 file_opener"></div></div></div>';

	//rendering html
	$(_this_).html(html);

	//blank will be opened by default
	$('.file_opener').load(menu_items_file_location + "blank.html");

	//on hovering over title bar buttons
	$('.title_bar_buttons div').hover(function() {
		var color = $(this).css('background-color');
		$(this).css('box-shadow', "0 0 3px " + color);
	}, function() {
		$(this).css('box-shadow', "");
	});

	//on selecting menu	items
	active_menu_items_in_card = [];

	$('.nav_bar_options li').click(function() {
		var src = $(this).attr('src');

		var selected_li_display = $(this).find('ul');
		if (selected_li_display[0] == undefined) //if it does not contains sub list then highlighting it and displaying content
		{
			//highlighting that item in menu bar	
			$(this).css('background', '#282923');
			$('.nav_bar_options li').not(this).css('background', 'none');

			//checking if that menu item is already present in card or not
			if (active_menu_items_in_card.includes(src)) //if already present
			{
				//opening content of that menu item and highlighting its card
				$('.open_files_menu_card').each(function() {
					var text = $(this).find('div').text().trim();
					if (text == src)
						handleSelectACard($(this));
				});

				//on clicking x (close btn) of open_files_menu_card
				$('.open_files_menu_card span').off().on("click", function() {
					handleClosingOfCard($(this));
				});

				//for making any open file card active (on cliking on that card) and others inactive
				$('.open_files_menu_card').off().on("click", function() {
					handleSelectACard($(this));
				});
			}
			else {
				active_menu_items_in_card.push(src);

				//opening content of that menu item
				$('.file_opener').load(menu_items_file_location + src, function() {
					//creating card of the opened file	
					$('.open_files_menu_bar li').css("background", '#21221d').css("color", "#9a9a98"); //de-highlighting other cards

					$('.open_files_menu_bar #open_files_menu_card_sample div').text(src);

					var html = $('.open_files_menu_bar #open_files_menu_card_sample').html().trim();
					html = '<li class="open_files_menu_card" style="background: #282923;">' + html + '</li>';
					$('.open_files_menu_bar').append(html);

					//on clicking x (close btn) of open_files_menu_card
					$('.open_files_menu_card span').off().on("click", function() {
						handleClosingOfCard($(this));
					});

					//for making any open file card active (on cliking on that card) and others inactive
					$('.open_files_menu_card').off().on("click", function() {
						handleSelectACard($(this));
					});
				});
			}
		}
	});

	//for showing sub menu
	$('.nav_bar_options li').click(function() {
		var selected_li_display = $(this).find('ul').css('display');
		if (selected_li_display == 'none') {
			$(this).find('ul').slideDown(300);
			$('.nav_bar_options li').not(this).find('ul').slideUp(300);
		}
	});

	//getting window height
	var window_height = $(window).height();
	var window_width = $(window).width();

	//setting height of title bar	
	$('.title_bar').css('height', title_bar_height + "px");
	$('.nav_bar_file_container').css('margin-top', title_bar_height + "px");
	$('.nav_bar_file_container').css('height', window_height - title_bar_height + "px");
	$('.open_files_menu_bar').css('height', open_files_menu_bar_height + "px");
	$('.file_opener').css('height', window_height - (open_files_menu_bar_height + title_bar_height) + "px");

	//setting height of nav_bar_file_container and nav menu bar
	updateContainerOnResizing(window_height, window_width, title_bar_height, navigation_menu_bar_for_mob);

	//on resizing window
	$(window).on('resize', function() {
		var window_height = $(window).height();
		var window_width = $(window).width();
		updateContainerOnResizing(window_height, window_width, title_bar_height, navigation_menu_bar_for_mob);
	});

	//function to update different window sizes on resizing the browser size
	function updateContainerOnResizing(window_height, window_width, title_bar_height, navigation_menu_bar_for_mob) {
		if (window_width > 767) {
			$('.navigation_menu_bar').css('height', "100%");
		}
		else {
			$('.navigation_menu_bar').css('height', navigation_menu_bar_for_mob + "px");
			// $('.file_opener').css('height', window_height-(title_bar_height + navigation_menu_bar_for_mob) + "px");
		}
	}
}

//function for closing any window card
function handleClosingOfCard(e) {
	//removing that card from array of active menu items in card
	var this_crad_src = e.parent().find("div").text().trim();
	active_menu_items_in_card = remove_array_element(active_menu_items_in_card, this_crad_src);

	//getting the previous card of that card (which is to be closed)	
	var src = e.parent().prev().find("div").text().trim();
	var li_count = $('.open_files_menu_bar li').length;

	if (src == "") //if no any prev element is present
	{
		if (li_count == 3) //if it is the last card
		{
			src = "blank.html";
		}
		else //if closing the first card //but more cards are available
		{
			//then showing card next-right to it
			var src = $('.open_files_menu_bar li:nth-child(4)').find("div").text().trim();

			//highligting the nth element
			$('.open_files_menu_bar li').css("background", '#21221d').css("color", "#9a9a98"); //dehighlting other elements
			$('.open_files_menu_bar li:nth-child(4)').css("background", '#282923').css('color', '#e2e2e2');
		}
	}
	else {
		//highliting its previous element
		$('.open_files_menu_bar li').css("background", '#21221d').css("color", "#9a9a98"); //dehighlting other elements
		e.parent().prev().css("background", '#282923').css('color', '#e2e2e2');
	}

	//loading the required page	
	$('.file_opener').load("html/" + src);

	//deleting that card	
	e.parent().remove();
}

//function for selecting any window card
function handleSelectACard(e) {
	//loading content of that card	
	var src = (e.find('div').text());
	$('.file_opener').load("html/" + src, function() {
		$('.open_files_menu_bar .open_files_menu_card').not(e).css("background", '#21221d').css("color", "#9a9a98"); //de-highlighting other cards
		e.css("background-color", '#282923').css('color', '#e2e2e2'); //highlighting this card	
	});
}

//function to remove a specific element from an array
function remove_array_element(array, n) {
	var index = array.indexOf(n);
	if (index > -1) {
		array.splice(index, 1);
	}
	return array;
}
