// defines an array

var items = [
[1, 'img/stroke_call_colcorr-responsive.png', 'img/stroke_call_colcorr.png'],
[2, 'img/mom-square-responsive.png', 'img/mom-rect.png'],
[3, 'img/medx-wall-responsive.png', 'img/soundings-wall-2.png'],
[4, 'img/peaches-square-responsive.png', 'img/peaches-square.png'],
[5, 'img/360-vr-cam-responsive.png', 'img/vr-cam.png'],
[6, 'img/360-collab-responsive.png', 'img/360vr-collab.png'],
];

function resize(projNumber, newSource, origSrc){

	var x = '.proj-' + projNumber + ' img';

	if ($(window).width() < 600) { 
		console.log('passed check');
		$(x).attr('src', newSource);
	} 
	else {
		$(x).attr('src', origSrc);
	}
}

function resizeAll() {
	for (i = 0; i < items.length; i++) {
		resize(items[i][0],items[i][1],items[i][2]);
	}
}

$(window).on('load', resizeAll);
$(window).on('resize', resizeAll);