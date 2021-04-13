$(document).ready(function () {

    $('#given-task').on('keyup', function (e) {

        if (e.keyCode == 13 && $('#given-task').val() != '') {
            var task = $('<li class="task"></li>').text($('#given-task').val());
            
            var del = $('<i class=" fa fa-trash trash"></i>').click(function() {
                var p = $(this).parent();
                p.hide(function () {
                    p.remove();
                })
            });


            var ok = $('<i class=" fa fa-check check"></i>').click(function() {
                var p = $(this).parent();
                p.hide(function () {
                    $('#completed-task ol').append(p);
                    p.fadeIn();
                });
                $(this).remove();
                task.append(undo);
            });

            var undo = $('<i class="fas fa-undo-alt undo"></i>').click(function() {
                var p = $(this).parent();
                p.hide(function () {
                    $('#pending-task ol').append(p);
                    p.fadeIn();
                });
                $(this).remove();
                task.append(ok);
            });

            var clearPendingBtn = $('#clear-pending').click(function() {
                var t = $("#pending-task li").remove();
            });


            var clearCompletedBtn = $('#clear-completed').click(function() {
                var t = $("#completed-task li").remove();
            });

            var clearAllBtn = $('#clear-everything').click(function() {
                var t = $("li").remove();
            });

            task.append(del, ok);
            $('#pending-task ol').append(task);
            $('#given-task').val('');
        
        }

    });

});

