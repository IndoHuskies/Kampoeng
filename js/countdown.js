function countdown(str_dest_time) {
	/*=====================
    	COUNTDOWN TIMER
    ======================*/
	// set the date we're counting down to
	var target_date = new Date(str_dest_time).getTime();
	// variables for time units
	var days, hours, minutes, seconds;
	// get tag element
	var daysE = $("#countdown #days .num");
	var hoursE = $("#countdown #hrs .num");
	var minE = $("#countdown #min .num");
	var secE = $("#countdown #sec .num");
	// update the tag with id "countdown" every 1 second
	setInterval(function () {
	    // find the amount of "seconds" between now and target
	    var current_date = new Date().getTime();
	    if(target_date - current_date >= 0) {
		    var seconds_left = (target_date - current_date) / 1000;
		    // do some time calculations
		    days = parseInt(seconds_left / 86400);
		    seconds_left = seconds_left % 86400;
		    hours = parseInt(seconds_left / 3600);
		    seconds_left = seconds_left % 3600;
		    minutes = parseInt(seconds_left / 60);
		    seconds = parseInt(seconds_left % 60);
		    // format countdown string + set tag value
		    //daysE.html(days);
		    //hoursE.html(hours);
		    //minE.html(minutes);
		    //secE.html(seconds);
		    daysE.children(".d-1").html(parseInt(days/10));
		    daysE.children(".d-0").html(days%10);
		    hoursE.children(".d-1").html(parseInt(hours/10));
		    hoursE.children(".d-0").html(hours%10);
		    minE.children(".d-1").html(parseInt(minutes/10));
		    minE.children(".d-0").html(minutes%10);
		    secE.children(".d-1").html(parseInt(seconds/10));
		    secE.children(".d-0").html(seconds%10);
		}
	}, 1000);

}