var win;
var current_player;
addDiagonals()

function reset()
{
    /* clears all the variables of the game and sets up a fresh game with some graphics*/
    $("button").hide();

    current_player = 1;
    $("#player_number").html(current_player);
    $("#player_title").html('Player:');
    $(".result").remove();

    $("#player_number").show();
    $("#player_title").show();
    

    $("div.tile").fadeOut(500);
    $("div.tile").fadeIn(1000);
    $("div.tile").html('');
    $("div.tile").removeClass("x");
    $("div.tile").removeClass("o");
    $("div.tile").addClass("n");

    win = null;

};

$(document).ready(function(){
    reset(); 

    $("div.tile").hover(
        function(){
            $(this).addClass("active");
        },
        function(){
            $(this).removeClass("active");
        }
    );

    $("div.tile").click(function(){
        if ($(this).hasClass('n') && (win == null))
        {
            $(this).removeClass('n');

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

            // check game state for victory / no moves, executes their sequence; otherwise next player,
            win = winCheck();
            if (win != null) winSequence(win);
            else if (noMovecheck()) tieSequence();
            else
            {
                current_player = (current_player % 2) + 1;
                $("#player_number").html(current_player);
            };

        };
    });

    $("button").click(function()
    {
        reset();
    });

});

function noMovecheck()
{
    /* checks if there are any neutral [class .n] tiles left */
    if ($('.n').length > 0) return false
    return true
}


function winCheck()
{
    /*executes a set of tests that checks if there is a winning state on the board
    returns the corresponding state or null if no winning state is found.*/

    var rows = ['.r1','.r2','.r3'];
    var cols = ['.c1','.c2','.c3'];
    var blocks = ['.b1','.b2','.b3'];
    var rDiag = ['.rd1','.rd2'];
    var cDiag = ['.cd1','.cd2'];
    var bDiag = ['.bd1','.bd2'];
    var gDiag = ['.gd1','.gd2','.gd3','.gd4'];

    var tests = {
        1: [rows, blocks],
        2: [cols, blocks],
        3: [cols, rows],
        4: [rDiag, rows],
        5: [cDiag, cols],
        6: [bDiag, blocks],
        7: [gDiag, ['div']]
    };

    for (var i = 1; i <= 7; i++)
    {
        check = checkGroup(tests[i][0],tests[i][1]);
        if (check != null)
        {
            return check;
        };
    };
    return null;


};


function checkGroup(variable, constant)
/*executes a test by holding one dimension constant and checking for for a winning state (3X or 3O)
along the variable dimension. e.g., holding constant block1, check for a winning row;
returns the location of the winning state; null if no winning state was found. 
*/
{       
    for (i in constant)
    {
        for (j in variable)
        {
            el = constant[i] + variable[j];
            console.log(el);
            if (($(el + '.x').length == 3) || ($(el + '.o').length == 3))
            {
            return el;
            };

        };
        
    };
    return null;
};

function winSequence(win)
/*Executes the winning sequence by highlighting the winning state and presenting the winner*/
{
    $(win).effect('highlight','slow');
    $(win).promise().done(function(){

        $("div.tile").fadeOut(500);
        $("h2").fadeOut(500);   
        $("h1").after("<h2 class='result'>Player " + current_player + " Wins</h2>").delay(1000);

        $(".result").fadeIn(2000);
        $("button").fadeIn(2000);
    });  
};

function tieSequence()
/*Executes the tie sequence by presenting the no moves left screen*/

{
        $("div.tile").fadeOut(500);;
        $("h2").fadeOut(500);
        $("h1").after("<h2 class='result'>a Tie!</h2>").delay(1000);

        $(".result").fadeIn(2000);
        $("button").fadeIn(1000);
}


function addDiagonals()
/*manually adds the divs classes for the fixed dimension diagonals and the general diagonals of the cube.*/
{
    var rows = ['.r1','.r2','.r3'];
    var cols = ['.c1','.c2','.c3'];
    var blocks = ['.b1','.b2','.b3'];

    addDiag(rows, cols, blocks);
    addDiag(cols, rows, blocks);
    addDiag(blocks, cols, rows);

    // add the general diagonals
    for (var i=0; i < 3; i++)
    {
        el1 = "div" + rows[i] + cols[i] + blocks[i];
        el2 = "div" + rows[i] + cols[i] + blocks[2-i];
        el3 = "div" + rows[i] + cols[2-i] + blocks[i];
        el4 = "div" + rows[2-i] + cols[i] + blocks[i];

        $(el1).addClass('gd1');
        $(el2).addClass('gd2');
        $(el3).addClass('gd3');
        $(el4).addClass('gd4');
    };
}

function addDiag(constant, var1, var2)
/*adds a fixed dimension diagonal by holding one dimension constant and calculating the diagonals along it*/
{
    base = constant[0][1]; // getting the const letter for the diagonal

    for (c in constant)
    {
        for (var i=0; i < 3; i++)
        {
            el1 = "div" + constant[c] + var1[i] + var2[i];
            el2 = "div" + constant[c] + var1[i] + var2[2-i];

            $(el1).addClass(base + 'd1');
            $(el2).addClass(base + 'd2');
        };
    };
};
