$(document).ready(function(){
    var count_group = $(".list .item").length;
    var active = 0;
    var deg_bg = 0;
    var begin= true;
    function Load(){

        if(begin){
            begin = false;
        }else{
            $('#item_'+(active - 2 < -1 ? count_group - 2 : active - 2 < 0 ? count_group -1 : active - 2)).removeClass('hide');
            $('#item_'+(active - 1 < 0 ? count_group - 1 : active - 1)).removeClass('active');
            $('#item_'+(active - 1 < 0 ? count_group - 1 : active - 1)).addClass('hide');
        }

        $('#item_'+active).removeClass('hide');
        $('#item_'+active).addClass('active');

        $('.dots-page div').removeClass('active');
        $('#dot_'+active).addClass('active');

        
        deg_bg = deg_bg - 100;
        $('.bg-rotate').css('transform', 'rotate('+deg_bg+'deg)');
    }
    
    $('#next').on('click', function(){
      active = active + 1 >= count_group ? 0 : active + 1;
      Load();
    })
        $('#prev').on('click', function(){
        active = active - 1 < 0 ? count_group - 1 : active - 1;
        })
    });