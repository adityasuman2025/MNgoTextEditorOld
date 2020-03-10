<head>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<img id="my_img_in_cover" src="img/cover1.jpg">
<div class="welcome_msg">
	<p class="line-1"></p>
	<br>
	
	<img class="loading_gif" src="img/loader1.gif">
</div>

<script type="text/javascript">

//the animation function
	function loop()
	{
        $('.line-1').text("\"Hello World\"").addClass('anim-typewriter');

		setTimeout(function()
		{
			$('.line-1').addClass('anim-typewriter-remove');
		}, 4000);

		setTimeout(function()
		{
			$('.line-1').text("This is Aditya Suman").width('325px').addClass('anim-typewriter2');
		}, 7000);

		setTimeout(function()
		{
			$('.line-1').addClass('anim-typewriter-remove2');			
		}, 12000);
		
		setTimeout(function()
		{
			$('.line-1').text("").removeClass('anim-typewriter').removeClass('anim-typewriter2').removeClass('anim-typewriter-remove').removeClass('anim-typewriter-remove2').width('205px');
		}, 15500);
    }
	
    loop();

//repeating the animation
	setInterval(function()
	{
		loop();
	}, 16000);

</script>
