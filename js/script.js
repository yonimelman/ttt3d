var win;
var current_player;

function reset()
{
    current_player = 1;
    $("#player_number").html(current_player);
    $("#player_title").html('Player:');
    $("h2").hide();
    $("button").hide();

    $("#player_number").show();
    $("#player_title").show();
    

    $("div").fadeOut(500);
    $("div").fadeIn(1000);
    $("div").html('');
    $("div").removeClass("x");
    $("div").removeClass("o");
    $("div").addClass("n");

    win = null;

};

$(document).ready(function(){
    reset();

    $("div").hover(
        function(){
            $(this).addClass("active");
        },
        function(){
            $(this).removeClass("active");
        }
    );

    $("div").click(function(){
        if ($(this).hasClass('n') && (win == null))
        {
        
            if (current_player==1)
            {
                $(this).addClass('x');
                $(this).html('X');
            }
            else
            {
                $(this).addClass('o');
                $(this).html('O');
            };

            $(this).effect('bounce',{times: 2}, 'fast');
            $(this).removeClass('n');

            win = winCheck();
            if (win != null) winSequence(win);
            else if (noMovecheck()) tieSequence();
            else
            {
                if (current_player==1) current_player=2;
                else current_player=1;
                $("#player_number").html(current_player);
            };

        }
        else
        {
            $(this).effect('shake',{'distance':2});
        };
    });
});

function noMovecheck()
{
    if ($('.n').length > 0) return false
    return true
}


function winCheck()
{
    var rows = ['.r1','.r2','.r3'];
    var cols = ['.c1','.c2','.c3'];
    var diags = ['.d1','.d2'];

    rowCheck = checkGroup(rows);
    if (rowCheck != null)
        return rowCheck;
    colCheck = checkGroup(cols);
    if (colCheck != null)
        return colCheck;
    diagCheck = checkGroup(diags);
    if (diagCheck != null)
        return diagCheck;
    return null;

}


function checkGroup(array)
{       
    for (i in array)
    {
        el = array[i];
        if (($(el + '.x').length == 3) || ($(el + '.o').length == 3))
        {
            return el;
        };

    };
    return null;


};

function winSequence(win)
{
    $(win).effect('highlight','slow');
    $(win).promise().done(function(){
        $("div").effect('explode');
        $("h1").after("<h2 class='winner'>Player " + current_player + " Wins</h2>")
        $("h2").hide();
        $(".winner").fadeIn(2000);
        $("button").fadeIn(2000);
    });  
};

function tieSequence()
{
        $("div").effect('explode');
        $("h1").after("<h2 class='tie'>a Tie!</h2>")
        $("h2").hide();
        $(".tie").fadeIn(2000);
        $("button").fadeIn(1000);
}

$(document).ready(function(){
    $("button").click(function()
    {
        reset();
    });
});