var COLUMN_TYPE = ['todo', 'doing', 'done'];

var DB = {
	getData: function () {
		if (typeof (Storage) !== "undefined") {
			var data;
			try {
				data = JSON.parse(localStorage.getItem('list')) || {};
			} catch (error) {
				data = {};
			}
			return data;
		}
		else {
			alert("sorry");
		}

	},
	setData: function (data) {
		localStorage.setItem('list', JSON.stringify(data));
	}
};

var list = DB.getData();

var app = {
	newJob: function (e, type) {
		var event = e;
		var name = $("#input-" + type).val();
		if (event.keyCode === 13 && name !== '') {
			if (!list[type]) list[type] = [];
			list[type].push(name);
			DB.setData(list);
			// update công việc 
			this.addJob(type, name);
			// reset input về rỗng
			$("#input-" + type).val('');
		}
	},
	addJob: function (type, name) {
		var item = '<a href="#" class="list-group-item bar  list-group-item-danger">' + name + ' <i onclick="app.deleteJob(this)" class="fas fa-trash-alt"></i></a>';
		$("#" + type).append(item);
	},
	deleteJob: function (abc) {
		var modal = $('#Modal');
		var btn = $('#btn-primary');
		var item = $(abc).parent();
		$('#Modal').modal('show');

		btn.off('click');

		btn.on('click', function () {
			var columnType = item.parent().attr('id');
			var itemPosition = $('#' + columnType + ' .list-group-item').index(item);
			list[columnType].splice(itemPosition, 1);
			DB.setData(list);

			item.remove();
			$('#Modal').modal('hide')
		})
	}
};





$(function () {
	COLUMN_TYPE.forEach(function (type) {
		var columnType = list[type] || [];
		columnType.forEach(function (name) {
			app.addJob(type, name);
		});
	});

	$(".sort-list").sortable({
		connectWith: ".sort-list",
		placeholder: 'group-list-item',
		start: function (event, ui) {
			$(ui.item[0]).addClass("dragging");
			// ui.item.oldColumnType = ui.item.context.parentElement.getAttribute('id');
			// ui.item.oldItemPosition = ui.item.index();
		},
		stop: function (event, ui) {
			$(ui.item[0]).removeClass("dragging");
			// var item = ui.item;
			// var oldColumnType = item.oldColumnType;
			// var oldItemPosition = item.oldItemPosition;
			// var newColumnType = item.context.parentElement.getAttribute('id');
			// var newItemPosition = item.index();

			// list[oldColumnType].splice(oldItemPosition, 1);

			// list[newColumnType].splice(newItemPosition, 0, item[0].innerText);

			// DB.setData(list);

		}
	});
});
