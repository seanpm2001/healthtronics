
// Modal window
// ----------------------------------------------------------

$(document).ready(function()
{

	$(window).resize(function()
	{
		if($(window).width() >= 768)
		{
			var modal = $(".modal");
			modal.css('margin-top', (modal.outerHeight() / 2) * -1).css('margin-left', (modal.outerWidth() / 2) * -1);
		}
	
		if($(window).width() < 768)
		{
			var modal = $(".modal");
			modal.css('margin-top', 0).css('margin-left', 0);
		}
	});
	
	$('#videoModal').on('hidden', function (e) {
		if(e.target.id == "videoModal")
		{
			$("#videoModal .modal-body").empty();
		}
	});

	$(".video_open").click(function()
	{
		// Get data, construct embed code
		// --------------------------------------
		var vid_title = $(this).attr("data-title");
		var vid_summary = $(this).attr("data-summary");
		var vid_link = $(this).attr("data-video").substr(16);
	    var embed = '<iframe width="794" height="404" src="http://www.youtube.com/embed/' + vid_link + '?rel=0" frameborder="0" allowfullscreen></iframe>';
		// var vid_data = "http://gdata.youtube.com/feeds/api/videos/" + vid_link;
		var form = $("#share-video-email");
		var nIDinput = $('#nid-input');
		nIDinput.val($(this).attr('data-node-id'));
		
		// Empty existing modal content
		// --------------------------------------
		$(".modal-title").empty();
		$(".modal-summary").empty();
	    $(".modal-body").empty();
	
		// Add data to modal
		// --------------------------------------
		// $(vid_title).appendTo(".modal-title");
		$(".modal-title").append(vid_title);
		$(".modal-summary").append(vid_summary);
	   	$(embed).appendTo(".modal-body");
				
	    var modal = $("#videoModal");
	    
	    modal.fitVids();
	
	    if($(window).width() >= 768)
	    {
	        modal.css('margin-top', (modal.outerHeight() / 2) * -1).css('margin-left', (modal.outerWidth() / 2) * -1);
	        return this;
	    }
	            
	    if($(window).width() < 768)
	    {
	        modal.css('margin-top', 0).css('margin-left', 0);
	        return this;
	    }
				
	});
	
	$("#modalCollapse").on("shown", function() {
		// not a very good solution
		var modal = $(".modal");
		modal.css('margin-top', (modal.outerHeight() / 2) * -1).css('margin-left', (modal.outerWidth() / 2) * -1);
	})

});