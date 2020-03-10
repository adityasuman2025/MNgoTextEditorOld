<!-------counter & ip tracking-------->
<?php
	$ip = $_SERVER["REMOTE_ADDR"];
	date_default_timezone_set('Asia/Kolkata');
	$time = date ("H:i:s", time());
	$date = date ("d M Y", time());

	$handleip =fopen('ip.txt', 'a');
	$handlecnt= fopen('count.txt', 'r');
	$currentcnt= fread($handlecnt, 1342177);
	fwrite($handleip, "$currentcnt :---> \t \t $ip  \t \t Time :--> \t $time \t \t Date:--> \t $date \n");

	$newcnt= $currentcnt + 1;
	$handlecnt= fopen('count.txt', 'w');
	fwrite($handlecnt, $newcnt);	
?>

<!-------counter & ip tracking-------->
<html>
<head>
	<title>Aditya Suman</title>
	<link rel="icon" href="img/logo.png" />
	<meta name="viewport" content="width=device-width, initial-scale= 1">

	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">	
	<link rel="stylesheet" type="text/css" href="css/editor.css">

	<script type="text/javascript" src="js/jquery.js"> </script>
	<script type="text/javascript" src="js/editor.js"> </script>

	<meta charset="utf-8">
	<meta name="description" content="Aditya Suman | Software Developer | Ex-Intern at ISRO, Oxyvin, NGCN, CatchFreeDeal | B.Tech, IIT Patna">
	<meta name="google-site-verification" content="tmpTIfxUJCSXkF8NKNgLWkRBtFpKisiSJOipCBQT8DA" />
	<meta name="keywords" content="Aditya Suman, IIT, IIT Patna, software, developer, software developer, app development, web development, web, web application, website, android app, android, app, android studio, website, graphics, programming, coding, coder, programmer, development, enginner, software engineering, software ">
	<meta name="robots" content="index, follow">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="language" content="English">
	<meta name="revisit-after" content="1">
	<meta name="author" content="Aditya Suman">
</head>

<body>
<!---------preloader area------->
	<div class="preloader_container"></div>

<!---------main area------------>
	<div class="container-fluid editor_window_container"></div>	

<!---script---------->
	<script type="text/javascript">
	//preloader stuffs
		var preloader_file_location = "preloader_new.php";
		var timeout_time = 100;
		preloader($('.preloader_container'), preloader_file_location, timeout_time);

	//main window stuffs
		var project_address = "/var/www/html/MNgo/adityasuman";
		var project_title = "MNgo Text Editor";

		var folder_icon_location = "img/folder.png";
		var file_icon_location = "img/file2.png";
		var menu_items_file_location = "html/";

		var menu_items = 
		[
			{"type": "folder_title", "name": "adityasuman", "icon_src": folder_icon_location, "file_src": ""},
			{"type": "file", "name": "about_me.html", "icon_src": file_icon_location, "file_src": "about_me.html"},
			{"type": "file", "name": "contact_me.html", "icon_src": file_icon_location, "file_src": "contact_me.html"},
			{"type": "file", "name": "education.html", "icon_src": file_icon_location, "file_src": "education.html"},
			{
				"type": "file_group",
				"files":
				[
					{"type": "folder_title", "name": "internship_experience", "icon_src": folder_icon_location, "file_src": ""},
					{"type": "file", "name": "ISRO Telemetry, Tracking and Command Network (ISTRAC).html", "icon_src": file_icon_location, "file_src": "isro_intern.html"},
					{"type": "file", "name": "Oxyvin Technologies (OPC) Pvt Ltd.html", "icon_src": file_icon_location, "file_src": "oxyvin_intern.html"},
					{"type": "file", "name": "NGCN Infosolutions Pvt Ltd.html", "icon_src": file_icon_location, "file_src": "ngcn_intern.html"},
					{"type": "file", "name": "CatchFreeDeal.html", "icon_src": file_icon_location, "file_src": "catchfreedeal.html"}
				],
			},
			{
				"type": "file_group",
				"files":
				[
					{"type": "folder_title", "name": "academic_projects", "icon_src": folder_icon_location, "file_src": ""},
					{"type": "file", "name": "Key Issue System for IIT Patna.html", "icon_src": file_icon_location, "file_src": "key_issue.html"},
					{"type": "file", "name": "Notice Board IIT Patna.html", "icon_src": file_icon_location, "file_src": "notice_board.html"},
					{"type": "file", "name": "IPR Module for IIT Patna.html", "icon_src": file_icon_location, "file_src": "ipr.html"},
					{"type": "file", "name": "Wi-Fi Based Attendance System for IIT Patna.html", "icon_src": file_icon_location, "file_src": "wifi_attend.html"},
					{"type": "file", "name": "QR Based Attendance System for IIT Patna.html", "icon_src": file_icon_location, "file_src": "qr_attend.html"},
					{"type": "file", "name": "Calculator.html", "icon_src": file_icon_location, "file_src": "calc.html"}
				],
			},
			{
				"type": "file_group",
				"files":
				[
					{"type": "folder_title", "name": "other_projects", "icon_src": folder_icon_location, "file_src": ""},
					{"type": "file", "name": "ChatApp.html", "icon_src": file_icon_location, "file_src": "chatapp.html"},
					{"type": "file", "name": "MNgo Notes.html", "icon_src": file_icon_location, "file_src": "mngonotes.html"},
					{"type": "file", "name": "MNgo Drive.html", "icon_src": file_icon_location, "file_src": "mngodrive.html"},
					{"type": "file", "name": "Wi-Fi Based Chatting App.html", "icon_src": file_icon_location, "file_src": "wifi_chatapp.html"},
					{"type": "file", "name": "QR Code Scanner & Generator.html", "icon_src": file_icon_location, "file_src": "qr_app.html"},
					{"type": "file", "name": "Anwesha 2k18 Website’s front-end.html", "icon_src": file_icon_location, "file_src": "anwesha_2k18.html"},
					{"type": "file", "name": "IITP Motorsports Website.html", "icon_src": file_icon_location, "file_src": "iitp_motor.html"},
				],
			},
			{"type": "file", "name": "achievements.html", "icon_src": file_icon_location, "file_src": "achievements.html"},
			{"type": "file", "name": "skills_and_interests.html", "icon_src": file_icon_location, "file_src": "skills_n_intr.html"},
			{"type": "file", "name": "position_of_responsibility.html", "icon_src": file_icon_location, "file_src": "por.html"},
			{"type": "file", "name": "resume.html", "icon_src": file_icon_location, "file_src": "resume.html"},
			{"type": "file", "name": "follow_me.html", "icon_src": file_icon_location, "file_src": "follow_me.html"},
			{"type": "file", "name": "info.html", "icon_src": file_icon_location, "file_src": "info.html"},
		];

		var title_bar_height = 25;
		var open_files_menu_bar_height = 30;
		var navigation_menu_bar_for_mob = 200;

		editor_window($('.editor_window_container'), project_address, project_title, menu_items_file_location, menu_items, title_bar_height, open_files_menu_bar_height, navigation_menu_bar_for_mob);
	</script>
</body>
</html>