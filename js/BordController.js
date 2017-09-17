/*=======General variables========*/
var stringArray = ["A", "B", "C", "D", "E", "F", "G", "H"];
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8];
var tiles;
var pieces;
var currentPiece;
var currPiece;

var whiteDraggable;
var blackDraggable;

/**/

/*==Loading stats==*/
$(window).on('load', function (eventData) {
    $("#div-loader").css("display", "none");
});
/*===Document Ready===*/
$(document).ready(function () {
    tiles = $(".square");
    pieces = $(".chessPiece");
    whiteDraggable = true;
    blackDraggable = false;
console.log("yess")

});


/*=======Click functions=======*/
$('.chessPiece').click(function (eventData) {
    currentPiece = $(this);
    console.log("Clicked:" + currentPiece.attr('id'));
    //tiles.removeClass('pieceInDanger');
    //pieces.removeClass('pieceInDanger');

    if (!(currentPiece.hasClass('pieceInDanger')) && currentPiece.hasClass('white') && currentPiece.hasClass('pawn')) {
        pathOfWhitePawn(currentPiece);
    }
    if (!(currentPiece.hasClass('pieceInDanger')) && currentPiece.hasClass('black') && currentPiece.hasClass('pawn')) {
        pathOfBlackPawn(currentPiece);
    }
    if (!(currentPiece.hasClass('pieceInDanger')) && currentPiece.hasClass('rock')) {
        pathOfRock(currentPiece);
    }
    if (!(currentPiece.hasClass('pieceInDanger')) && currentPiece.hasClass('knight')) {
        pathOfKnight(currentPiece);
    }
    if (!(currentPiece.hasClass('pieceInDanger')) && currentPiece.hasClass('bishop')) {
        pathOfBishop(currentPiece);
    }
    if (!(currentPiece.hasClass('pieceInDanger')) && currentPiece.hasClass('queen')) {
        pathOfQueen(currentPiece);
    }
    if (!(currentPiece.hasClass('pieceInDanger')) && currentPiece.hasClass('king')) {
        pathOfKing(currentPiece);
    }
    /*===Cutting or removing===*/
    //cutting//wht?/blak?
    if (currentPiece.hasClass('pieceInDanger')) {
        var cSquare = currentPiece.parent();
        currPiece = $(".chessPiece.pieceHover");
        cSquare.html(currPiece);
        cSquare.append(currPiece);

        tiles.removeClass('selectPath');
        pieces.removeClass('pieceHover');
        pieces.removeClass('pieceInDanger');
        tiles.removeClass('pieceInDanger');
        console.log('moved');
    }


});

$('.chessPiece').click(function () {

});
//$(".rock").click(pathOfRock);
//$(".white.pawn").click(pathOfWhitePawn);
//$(".black.pawn").click(pathOfBlackPawn);
//$(".king").click(pathOfKing);
//$(".queen").click(pathOfQueen);
//$(".bishop").click(pathOfBishop);
//$(".knight").click(pathOfKnight);

/*==========dragging=============*/
$(".square").click(function () {
    var currSquare = $(this);
    //dragging
    currPiece = $(".chessPiece.pieceHover");
    if ($(currSquare).hasClass('selectPath')) {
        var currPieceId = currPiece.attr('id');
        currSquare.append(currPiece);/*move piece*/
        currSquare.removeClass('selectPath');
        tiles.removeClass('selectPath');
        pieces.removeClass('pieceHover');
        console.log("Last Clicked piece : " + currPieceId);
        /*--------*/
        tiles.removeClass('pieceInDanger');
        pieces.removeClass('pieceInDanger');
    }

});

function startGame() {
    if (whiteDraggable === true && blackDraggable === false) {

    }
}

/**/

function pathOfWhitePawn(eventData) {
    currentPiece = eventData;
    tiles.removeClass("selectPath");
    pieces.removeClass("pieceHover");
    var currID = currentPiece.parent().attr('id');
    var letter = currID.charAt(0);
    var idNo = currID.charAt(1);
    var stringArrayPosition = ($.inArray(letter, stringArray));
    var numberArrayPosition = ($.inArray(parseInt(idNo), numberArray));

    var tempId = stringArray[stringArrayPosition] + numberArray[numberArrayPosition + 1];
    if (!($('#' + tempId + ' > div').hasClass('chessPiece'))) {
        $('*[id="' + tempId + '"]').addClass('selectPath');
        currentPiece.addClass('pieceHover');
        currentPiece.removeClass('selectPath');
        console.log('ID : ' + currID);
    }
    /*mark red*/
    var tempId1 = stringArray[stringArrayPosition + 1] + numberArray[numberArrayPosition + 1];
    if (($('#' + tempId1 + ' > div').hasClass('black')) && ($('#' + tempId1 + ' > div').hasClass('chessPiece'))) {
        $('#' + tempId1 + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId1 + '"]').addClass('pieceInDanger');
    }
    var tempId2 = stringArray[stringArrayPosition - 1] + numberArray[numberArrayPosition + 1];
    if (($('#' + tempId2 + ' > div').hasClass('black')) && ($('#' + tempId2 + ' > div').hasClass('chessPiece'))) {
        $('#' + tempId2 + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId2 + '"]').addClass('pieceInDanger');
    }
}
function pathOfBlackPawn(eventData) {
    currentPiece = eventData;
    tiles.removeClass("selectPath");
    pieces.removeClass("pieceHover");
    var currID = currentPiece.parent().attr('id');
    var letter = currID.charAt(0);
    var idNo = currID.charAt(1);
    var stringArrayPosition = ($.inArray(letter, stringArray));
    var numberArrayPosition = ($.inArray(parseInt(idNo), numberArray));

    var tempId = stringArray[stringArrayPosition] + numberArray[numberArrayPosition - 1];
    if (!($('#' + tempId + ' > div').hasClass('chessPiece'))) {
        $('*[id="' + tempId + '"]').addClass('selectPath');
        currentPiece.addClass('pieceHover');
        currentPiece.removeClass('selectPath');
        console.log(currID);
    }
    /*mark red*/
    var tempId1 = stringArray[stringArrayPosition + 1] + numberArray[numberArrayPosition - 1];
    if (($('#' + tempId1 + ' > div').hasClass('white')) && ($('#' + tempId1 + ' > div').hasClass('chessPiece'))) {
        $('#' + tempId1 + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId1 + '"]').addClass('pieceInDanger');
    }
    var tempId2 = stringArray[stringArrayPosition - 1] + numberArray[numberArrayPosition - 1];
    if (($('#' + tempId2 + ' > div').hasClass('white')) && ($('#' + tempId2 + ' > div').hasClass('chessPiece'))) {
        $('#' + tempId2 + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId2 + '"]').addClass('pieceInDanger');
    }
}
function pathOfRock(eventData) {
    currentPiece = eventData;
    tiles.removeClass("selectPath");
    pieces.removeClass("pieceHover");
    var currID = currentPiece.parent().attr('id');
    console.log(currID);
    var letter = currID.charAt(0);
    var idNo = currID.charAt(1);
    var stringArrayPosition = ($.inArray(letter, stringArray));
    var numberArrayPosition = ($.inArray(parseInt(idNo), numberArray));

    var i = stringArrayPosition + 1;
    var j = numberArrayPosition;
    var tempId;
    for (; i < 8; i++) {/* ==>side */
        var tempId = stringArray[i] + numberArray[j];
        if (!($('#' + tempId + ' > div').hasClass('chessPiece'))) {
            $('*[id="' + tempId + '"]').addClass('selectPath');
            console.log(tempId);
            currentPiece.removeClass('selectPath');
            currentPiece.addClass('pieceHover');
        } else {
            break;
        }
    }//for white
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('white')) && ($('#' + tempId + ' > div').hasClass('black'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }//for black
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('black')) && ($('#' + tempId + ' > div').hasClass('white'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }

    var i = stringArrayPosition - 1;
    var j = numberArrayPosition;
    for (; i >= 0; i--) {/* <==side */
        var tempId = stringArray[i] + numberArray[j];
        if (!($('#' + tempId + ' > div').hasClass('chessPiece'))) {
            $('*[id="' + tempId + '"]').addClass('selectPath');
            console.log(tempId);
            currentPiece.removeClass('selectPath');
            currentPiece.addClass('pieceHover');
        } else {
            break;
        }
    }//for white
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('white')) && ($('#' + tempId + ' > div').hasClass('black'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }//for black
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('black')) && ($('#' + tempId + ' > div').hasClass('white'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }


    var i = stringArrayPosition;
    var j = numberArrayPosition + 1;
    for (; j < 8; j++) {/* /\side */
        var tempId = stringArray[i] + numberArray[j];
        if (!($('#' + tempId + ' > div').hasClass('chessPiece'))) {
            $('*[id="' + tempId + '"]').addClass('selectPath');
            console.log(tempId);
            currentPiece.removeClass('selectPath');
            currentPiece.addClass('pieceHover');
        } else {
            break;
        }
    }//for white
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('white')) && ($('#' + tempId + ' > div').hasClass('black'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }//for black
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('black')) && ($('#' + tempId + ' > div').hasClass('white'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }


    var i = stringArrayPosition;
    var j = numberArrayPosition - 1;
    for (; j >= 0; j--) {/* \/side */
        var tempId = stringArray[i] + numberArray[j];
        if (!($('#' + tempId + ' > div').hasClass('chessPiece'))) {
            $('*[id="' + tempId + '"]').addClass('selectPath');
            console.log(tempId);
            currentPiece.removeClass('selectPath');
            currentPiece.addClass('pieceHover');
        } else {
            break;
        }
    }
    //for white
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('white')) && ($('#' + tempId + ' > div').hasClass('black'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }//for black
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('black')) && ($('#' + tempId + ' > div').hasClass('white'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }

    console.log(currID);
}
function pathOfKnight(eventData) {
    currentPiece = eventData;
    tiles.removeClass("selectPath");
    pieces.removeClass("pieceHover");
    var currID = currentPiece.parent().attr('id');
    var letter = currID.charAt(0);
    var idNo = currID.charAt(1);
    var stringArrayPosition = ($.inArray(letter, stringArray));
    var numberArrayPosition = ($.inArray(parseInt(idNo), numberArray));

    /**/
    var tempId1 = stringArray[stringArrayPosition + 1] + numberArray[numberArrayPosition + 2];
    knightMarkDanger(tempId1);
    var tempId1 = stringArray[stringArrayPosition - 1] + numberArray[numberArrayPosition + 2];
    knightMarkDanger(tempId1);
    var tempId1 = stringArray[stringArrayPosition + 2] + numberArray[numberArrayPosition + 1];
    knightMarkDanger(tempId1);
    var tempId1 = stringArray[stringArrayPosition - 2] + numberArray[numberArrayPosition + 1];
    knightMarkDanger(tempId1);
    /**/
    var tempId1 = stringArray[stringArrayPosition + 2] + numberArray[numberArrayPosition - 1];
    knightMarkDanger(tempId1);
    var tempId1 = stringArray[stringArrayPosition + 1] + numberArray[numberArrayPosition - 2];
    knightMarkDanger(tempId1);
    var tempId1 = stringArray[stringArrayPosition - 1] + numberArray[numberArrayPosition - 2];
    knightMarkDanger(tempId1);
    var tempId1 = stringArray[stringArrayPosition - 2] + numberArray[numberArrayPosition - 1];
    knightMarkDanger(tempId1);
    /**/
    currentPiece.removeClass('selectPath');
    currentPiece.addClass('pieceHover');
    console.log(currID);
}
function pathOfBishop(eventData) {
    currentPiece = eventData;
    tiles.removeClass("selectPath");
    pieces.removeClass("pieceHover");
    var currID = currentPiece.parent().attr('id');
    var letter = currID.charAt(0);
    var idNo = currID.charAt(1);
    var stringArrayPosition = ($.inArray(letter, stringArray));
    var numberArrayPosition = ($.inArray(parseInt(idNo), numberArray));

    var i = stringArrayPosition + 1;
    var j = numberArrayPosition;
    var tempId;
    L1:for (; i < 8; i++) {
        j++;
        var tempId = stringArray[i] + numberArray[j];
        if (!($('#' + tempId + ' > div').hasClass('chessPiece'))) {
            L2:for (; j < 8; j++) {
                $('*[id="' + tempId + '"]').addClass('selectPath');
                console.log(tempId);
                currentPiece.removeClass('selectPath');
                currentPiece.addClass('pieceHover');
                console.log(currID);
                break;
            }
        } else {
            break;
        }
    }//for white
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('white')) && ($('#' + tempId + ' > div').hasClass('black'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }//for black
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('black')) && ($('#' + tempId + ' > div').hasClass('white'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }
    console.log(stringArrayPosition);
    console.log(numberArrayPosition);


    i = stringArrayPosition - 1;
    j = numberArrayPosition;
    L3:for (; i >= 0; i--) {
        j++;
        var tempId = stringArray[i] + numberArray[j];
        if (!($('#' + tempId + ' > div').hasClass('chessPiece'))) {
            L4:for (; j >= 0; j++) {
                $('*[id="' + tempId + '"]').addClass('selectPath');
                console.log(tempId);
                currentPiece.removeClass('selectPath');
                currentPiece.addClass('pieceHover');
                console.log(currID);
                break;
            }
        } else {
            break;
        }
    }//for white
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('white')) && ($('#' + tempId + ' > div').hasClass('black'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }//for black
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('black')) && ($('#' + tempId + ' > div').hasClass('white'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }
    console.log(stringArrayPosition);
    console.log(numberArrayPosition);


    i = stringArrayPosition + 1;
    j = numberArrayPosition;
    L5:for (; i < 8; i++) {
        j--;
        var tempId = stringArray[i] + numberArray[j];
        if (!($('#' + tempId + ' > div').hasClass('chessPiece'))) {
            L6:for (; j >= 0; j--) {
                $('*[id="' + tempId + '"]').addClass('selectPath');
                console.log(tempId);
                currentPiece.removeClass('selectPath');
                currentPiece.addClass('pieceHover');
                console.log(currID);
                break;
            }
        } else {
            break;
        }
    }//for white
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('white')) && ($('#' + tempId + ' > div').hasClass('black'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }//for black
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('black')) && ($('#' + tempId + ' > div').hasClass('white'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }
    console.log(stringArrayPosition);
    console.log(numberArrayPosition);

    i = stringArrayPosition - 1;
    j = numberArrayPosition;
    L7:for (; i >= 0; i--) {
        j--;
        var tempId = stringArray[i] + numberArray[j];
        if (!($('#' + tempId + ' > div').hasClass('chessPiece'))) {
            L8:for (; j >= 0; j--) {
                $('*[id="' + tempId + '"]').addClass('selectPath');
                console.log(tempId);
                currentPiece.removeClass('selectPath');
                currentPiece.addClass('pieceHover');
                console.log(currID);
                break;
            }
        } else {
            break;
        }
    }//for white
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('white')) && ($('#' + tempId + ' > div').hasClass('black'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }//for black
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('black')) && ($('#' + tempId + ' > div').hasClass('white'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }
    console.log(stringArrayPosition);
    console.log(numberArrayPosition);
}

function pathOfQueen(eventData) {
    /**/
    currentPiece = eventData;
    tiles.removeClass("selectPath");
    pieces.removeClass("pieceHover");
    var currID = currentPiece.parent().attr('id');
    var letter = currID.charAt(0);
    var idNo = currID.charAt(1);
    var stringArrayPosition = ($.inArray(letter, stringArray));
    var numberArrayPosition = ($.inArray(parseInt(idNo), numberArray));

    var i = stringArrayPosition + 1;
    var j = numberArrayPosition;
    var tempId;
    for (; i < 8; i++) {/* ==>side */
        var tempId = stringArray[i] + numberArray[j];
        if (!($('#' + tempId + ' > div').hasClass('chessPiece'))) {
            $('*[id="' + tempId + '"]').addClass('selectPath');
            console.log(tempId);
            currentPiece.removeClass('selectPath');
            currentPiece.addClass('pieceHover');
        } else {
            break;
        }
    }//for white
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('white')) && ($('#' + tempId + ' > div').hasClass('black'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }//for black
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('black')) && ($('#' + tempId + ' > div').hasClass('white'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }

    var i = stringArrayPosition - 1;
    var j = numberArrayPosition;
    for (; i >= 0; i--) {/* <==side */
        var tempId = stringArray[i] + numberArray[j];
        if (!($('#' + tempId + ' > div').hasClass('chessPiece'))) {
            $('*[id="' + tempId + '"]').addClass('selectPath');
            console.log(tempId);
            currentPiece.removeClass('selectPath');
            currentPiece.addClass('pieceHover');
        } else {
            break;
        }
    }//for white
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('white')) && ($('#' + tempId + ' > div').hasClass('black'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }//for black
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('black')) && ($('#' + tempId + ' > div').hasClass('white'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }

    var i = stringArrayPosition;
    var j = numberArrayPosition + 1;
    for (; j < 8; j++) {/* /\side */
        var tempId = stringArray[i] + numberArray[j];
        if (!($('#' + tempId + ' > div').hasClass('chessPiece'))) {
            $('*[id="' + tempId + '"]').addClass('selectPath');
            console.log(tempId);
            currentPiece.removeClass('selectPath');
            currentPiece.addClass('pieceHover');
        } else {
            break;
        }
    }//for white
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('white')) && ($('#' + tempId + ' > div').hasClass('black'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }//for black
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('black')) && ($('#' + tempId + ' > div').hasClass('white'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }

    var i = stringArrayPosition;
    var j = numberArrayPosition - 1;
    for (; j >= 0; j--) {/* \/side */
        var tempId = stringArray[i] + numberArray[j];
        if (!($('#' + tempId + ' > div').hasClass('chessPiece'))) {
            $('*[id="' + tempId + '"]').addClass('selectPath');
            console.log(tempId);
            currentPiece.removeClass('selectPath');
            currentPiece.addClass('pieceHover');
        } else {
            break;
        }
    }
    //for white
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('white')) && ($('#' + tempId + ' > div').hasClass('black'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }//for black
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('black')) && ($('#' + tempId + ' > div').hasClass('white'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }

    /**/

    var i = stringArrayPosition + 1;
    var j = numberArrayPosition;
    var tempId;
    L1:for (; i < 8; i++) {
        j++;
        var tempId = stringArray[i] + numberArray[j];
        if (!($('#' + tempId + ' > div').hasClass('chessPiece'))) {
            L2:for (; j < 8; j++) {
                $('*[id="' + tempId + '"]').addClass('selectPath');
                console.log(tempId);
                currentPiece.removeClass('selectPath');
                currentPiece.addClass('pieceHover');
                console.log(currID);
                break;
            }
        } else {
            break;
        }
    }//for white
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('white')) && ($('#' + tempId + ' > div').hasClass('black'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }//for black
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('black')) && ($('#' + tempId + ' > div').hasClass('white'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }
    console.log(stringArrayPosition);
    console.log(numberArrayPosition);

    i = stringArrayPosition - 1;
    j = numberArrayPosition;
    L3:for (; i >= 0; i--) {
        j++;
        var tempId = stringArray[i] + numberArray[j];
        if (!($('#' + tempId + ' > div').hasClass('chessPiece'))) {
            L4:for (; j >= 0; j++) {
                $('*[id="' + tempId + '"]').addClass('selectPath');
                console.log(tempId);
                currentPiece.removeClass('selectPath');
                currentPiece.addClass('pieceHover');
                console.log(currID);
                break;
            }
        } else {
            break;
        }
    }//for white
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('white')) && ($('#' + tempId + ' > div').hasClass('black'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }//for black
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('black')) && ($('#' + tempId + ' > div').hasClass('white'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }
    console.log(stringArrayPosition);
    console.log(numberArrayPosition);

    i = stringArrayPosition + 1;
    j = numberArrayPosition;
    L5:for (; i < 8; i++) {
        j--;
        var tempId = stringArray[i] + numberArray[j];
        if (!($('#' + tempId + ' > div').hasClass('chessPiece'))) {
            L6:for (; j >= 0; j--) {
                $('*[id="' + tempId + '"]').addClass('selectPath');
                console.log(tempId);
                currentPiece.removeClass('selectPath');
                currentPiece.addClass('pieceHover');
                console.log(currID);
                break;
            }
        } else {
            break;
        }
    }//for white
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('white')) && ($('#' + tempId + ' > div').hasClass('black'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }//for black
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('black')) && ($('#' + tempId + ' > div').hasClass('white'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }
    console.log(stringArrayPosition);
    console.log(numberArrayPosition);

    i = stringArrayPosition - 1;
    j = numberArrayPosition;
    L7:for (; i >= 0; i--) {
        j--;
        var tempId = stringArray[i] + numberArray[j];
        if (!($('#' + tempId + ' > div').hasClass('chessPiece'))) {
            L8:for (; j >= 0; j--) {
                $('*[id="' + tempId + '"]').addClass('selectPath');
                console.log(tempId);
                currentPiece.removeClass('selectPath');
                currentPiece.addClass('pieceHover');
                console.log(currID);
                break;
            }
        } else {
            break;
        }
    }//for white
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('white')) && ($('#' + tempId + ' > div').hasClass('black'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }//for black
    if (($('#' + tempId + ' > div').hasClass('chessPiece')) && (currentPiece.hasClass('black')) && ($('#' + tempId + ' > div').hasClass('white'))) {
        $('#' + tempId + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId + '"]').addClass('pieceInDanger');
    }
    console.log(stringArrayPosition);
    console.log(numberArrayPosition);

    console.log(currID);
}
function pathOfKing(eventData) {
    currentPiece = eventData;
    tiles.removeClass("selectPath");
    pieces.removeClass("pieceHover");
    var currID = currentPiece.parent().attr('id');
    var letter = currID.charAt(0);
    var idNo = currID.charAt(1);
    var stringArrayPosition = ($.inArray(letter, stringArray));
    var numberArrayPosition = ($.inArray(parseInt(idNo), numberArray));


    var tempId1 = stringArray[stringArrayPosition] + numberArray[numberArrayPosition + 1];
    kingMarkDanger(tempId1);
    var tempId1 = stringArray[stringArrayPosition + 1] + numberArray[numberArrayPosition + 1];
    kingMarkDanger(tempId1);
    var tempId1 = stringArray[stringArrayPosition + 1] + numberArray[numberArrayPosition];
    kingMarkDanger(tempId1);
    var tempId1 = stringArray[stringArrayPosition + 1] + numberArray[numberArrayPosition - 1];
    kingMarkDanger(tempId1);
    var tempId1 = stringArray[stringArrayPosition] + numberArray[numberArrayPosition - 1];
    kingMarkDanger(tempId1);
    var tempId1 = stringArray[stringArrayPosition - 1] + numberArray[numberArrayPosition - 1];
    kingMarkDanger(tempId1);
    var tempId1 = stringArray[stringArrayPosition - 1] + numberArray[numberArrayPosition];
    kingMarkDanger(tempId1);
    var tempId1 = stringArray[stringArrayPosition - 1] + numberArray[numberArrayPosition + 1];
    kingMarkDanger(tempId1);

    currentPiece.removeClass('selectPath');
    currentPiece.addClass('pieceHover');
    console.log(currID);
}
/*========================================*/

$('.chessPiece').click(movePieces);
function movePieces(eventData) {

}

/*===============Methods==================*/

/*===Knight mark danger===*/
function knightMarkDanger(eventData) {
    tempId1 = eventData;
    if (!($('#' + tempId1 + ' > div').hasClass('chessPiece'))) {
        $('*[id="' + tempId1 + '"]').addClass('selectPath');
    }//white
    if ((currentPiece.hasClass('white')) && ($('#' + tempId1 + ' > div').hasClass('black'))) {
        $('#' + tempId1 + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId1 + '"]').addClass('pieceInDanger');
    }
    //black
    if ((currentPiece.hasClass('black')) && ($('#' + tempId1 + ' > div').hasClass('white'))) {
        $('#' + tempId1 + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId1 + '"]').addClass('pieceInDanger');
    }
}
/*===King mark danger===*/
function kingMarkDanger(eventData) {
    tempId1 = eventData;
    if (!($('#' + tempId1 + ' > div').hasClass('chessPiece'))) {
        $('*[id="' + tempId1 + '"]').addClass('selectPath');
    }//white
    if ((currentPiece.hasClass('white')) && ($('#' + tempId1 + ' > div').hasClass('black'))) {
        $('#' + tempId1 + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId1 + '"]').addClass('pieceInDanger');
    }
    //black
    if ((currentPiece.hasClass('black')) && ($('#' + tempId1 + ' > div').hasClass('white'))) {
        $('#' + tempId1 + ' > div').addClass('pieceInDanger');
        $('*[id="' + tempId1 + '"]').addClass('pieceInDanger');
    }
}