var app = {
	newJob: function(e, type) {
		var event = e;
		var name = $("#input-" + type).val();
		if (event.keyCode === 13 && name  !== '') {
			// update công việc 
			this.addJob(type, name);
			// reset input về rỗng
			$("#input-"+type).val('');
		}
	},
	addJob: function(type, name) {
		var item = '<a href="#" class="list-group-item bar  list-group-item-danger">' +  name  +' <i onclick="app.deleteJob(this)" class="fas fa-trash-alt"></i></a>';
		$("#"+ type).append(item);
	},
	deleteJob: function(abc) {
		var modal = $('#Modal');
		var item = $(abc).parent();
		$('#Modal').modal('show');
		$('#btn-primary').on('click', function() {
			 item.remove();
			 $('#Modal').modal('hide')
		})
	}
};





$( function() {
	$( ".sort-list" ).sortable({
		connectWith: ".sort-list",
		placeholder: 'group-list-item',
		start:  function (event, ui) {
			$(ui.item[0]).addClass("dragging");
		},
		stop:  function (event, ui) {
			$(ui.item[0]).removeClass("dragging");
		}
	});
} );
