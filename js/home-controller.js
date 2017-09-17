/**
 * Created by Dilanka Virajith on 9/5/2017.
 */

var color = ['red','yellow','blue','green','black'];

var i=0;

function printsometest() {
    $("#top").css("color",color[i]);
    i++;
    if (i=== color.length){
        i=0;
    }
}

setInterval(printsometest,100);
///////////////////////////////////////////////////////////////
var LetterArray = ['A','B','C','D','E','F','G','H']
var NumberArray = [1,2,3,4,5,6,7,8]

var currentPossition;
var suares;
var chesspieces;

var pondCount;
var CountArray =new Array(8);

$(document).ready(function () {
    suares=$('.square');
    chesspieces=$('.pieces');
    pondCount = 0;
    for(var i=0;i<CountArray.length;i++){
        CountArray[i]=0;
    }
});

////////////////////////////////////////////////////////////

$('.pieces').on("click",function (eventdata) {
    currentPossition=$(this);
    console.log(currentPossition);

    if(!(currentPossition.hasClass('pieceHover')) && currentPossition.hasClass('blackPawn')){
        pondCount=0;
        pathofBlackPawn(currentPossition);
    }
    if(!(currentPossition.hasClass('pieceHover')) && currentPossition.hasClass('whitePawn')){
        pondCount=0;
        pathofWhitePawn(currentPossition);
    }
    if(!(currentPossition.hasClass('pieceHover'))&& currentPossition.hasClass('Rock1')){
        pathofBlackRook(currentPossition);
    }
    if(!(currentPossition.hasClass('pieceHover'))&& currentPossition.hasClass('Rock2')){
        pathofWhiteRook(currentPossition);
    }
    if(!(currentPossition.hasClass('pieceHover'))&& currentPossition.hasClass('Queen1')){
        pathofBlackRook(currentPossition);
    }
    if(!(currentPossition.hasClass('pieceHover'))&& currentPossition.hasClass('Queen2')){
        pathofWhiteRook(currentPossition);
    }

});

////////////////////////////////set of blackPawn/////////////////////////////////

function pathofBlackPawn(eventData) {
    currentPossition=eventData;
    suares.removeClass('selectPath');
    chesspieces.removeClass('pieceHover');
    suares.removeClass('crosspiece');
    var currentId=currentPossition.parents().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LetterArrayPossition=($.inArray(letter,LetterArray));
    var numberArrayPossition=($.inArray(parseInt(no),NumberArray));
    var tempId=LetterArray[LetterArrayPossition]+NumberArray[numberArrayPossition+1];
    var tempId1=LetterArray[LetterArrayPossition+1]+NumberArray[numberArrayPossition+1];
    var tempId2=LetterArray[LetterArrayPossition-1]+NumberArray[numberArrayPossition+1];
    var x = LetterArrayPossition;

    for(var y=numberArrayPossition+1;y<4;y++){
        tempId=LetterArray[x]+NumberArray[y];
        if(!($("#"+tempId).children().hasClass('pieces'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('pieceHover');
        }
        else {
            break;
        }
    }
    if (!($("#"+tempId).children().hasClass('pieces'))){
        $("#"+tempId).addClass('selectPath');
        currentPossition.addClass('pieceHover');
        currentPossition.removeClass('selectPath');
    }
    if ($("#"+tempId1).children().hasClass('white')){
        $("#" + tempId1).addClass('crosspiece');
        currentPossition.addClass('pieceHover');
        currentPossition.removeClass('selectPath');
    }
    if ($("#"+tempId2).children().hasClass('white')){
        $("#" + tempId2).addClass('crosspiece');
        currentPossition.addClass('pieceHover');
        currentPossition.removeClass('selectPath');
    }

}
////////////////////////////////set of whitePawn////////////////////////////////
function pathofWhitePawn(eventData) {
    currentPossition=eventData;
    suares.removeClass('selectPath');
    chesspieces.removeClass('pieceHover');
    var currentId=currentPossition.parents().attr('id');
    console.log(currentId);
    var letter=currentId.charAt(0);
    var no = currentId.charAt(1);
    var LetterArrayPossition=($.inArray(letter,LetterArray));
    var numberArrayPossition=($.inArray(parseInt(no),NumberArray));
    var tempId1=LetterArray[LetterArrayPossition]+NumberArray[numberArrayPossition-1];
    var tempId2=LetterArray[LetterArrayPossition]+NumberArray[numberArrayPossition-2];
    var tempId3=LetterArray[LetterArrayPossition+1]+NumberArray[numberArrayPossition-1];
    var tempId4=LetterArray[LetterArrayPossition-1]+NumberArray[numberArrayPossition-1];
    switch (currentPossition.attr('id')){
        case "white-Pawn1" :CountArray[0]++; break;
        case "white-Pawn2" :CountArray[1]++; break;
        case "white-Pawn3" :CountArray[2]++; break;
        case "white-Pawn4" :CountArray[3]++; break;
        case "white-Pawn5" :CountArray[4]++; break;
        case "white-Pawn6" :CountArray[5]++; break;
        case "white-Pawn7" :CountArray[6]++; break;
        case "white-Pawn8" :CountArray[7]++; break;
    }
    if (CountArray[0]==1){
        if (!($("#"+tempId1).children().hasClass('pieces'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('pieceHover');
        }
        if(!($("#"+tempId2).children().hasClass('pieces'))&& !($("#"+tempId1).children().hasClass('pieces'))) {
            $("#" + tempId2).addClass('selectPath');
            currentPossition.addClass('pieceHover');
        }
        if ($("#"+tempId3).children().hasClass('black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('pieces'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId3).children().hasClass('black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }

    }
    if (CountArray[1]==1){
        if (!($("#"+tempId1).children().hasClass('pieces'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('pieceHover');
        }
        if(!($("#"+tempId2).children().hasClass('pieces'))&& !($("#"+tempId1).children().hasClass('pieces'))) {
            $("#" + tempId2).addClass('selectPath');
            currentPossition.addClass('pieceHover');
        }
        if ($("#"+tempId3).children().hasClass('black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }

    }else{
        if (!($("#"+tempId1).children().hasClass('pieces'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId3).children().hasClass('black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }


    }
    if (CountArray[2]==1){
        if (!($("#"+tempId1).children().hasClass('pieces'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('pieceHover');
        }
        if(!($("#"+tempId2).children().hasClass('pieces'))&& !($("#"+tempId1).children().hasClass('pieces'))) {
            $("#" + tempId2).addClass('selectPath');
            currentPossition.addClass('pieceHover');
        }
        if ($("#"+tempId3).children().hasClass('black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }

    }else{
        if (!($("#"+tempId1).children().hasClass('pieces'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId3).children().hasClass('black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }



    }
    if (CountArray[3]==1){
        if (!($("#"+tempId1).children().hasClass('pieces'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('pieceHover');
        }
        if(!($("#"+tempId2).children().hasClass('pieces'))&& !($("#"+tempId1).children().hasClass('pieces'))) {
            $("#" + tempId2).addClass('selectPath');
            currentPossition.addClass('pieceHover');
        }
        if ($("#"+tempId3).children().hasClass('black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }

    }else{
        if (!($("#"+tempId1).children().hasClass('pieces'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId3).children().hasClass('black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }


    }
    if (CountArray[4]==1){
        if (!($("#"+tempId1).children().hasClass('pieces'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('pieceHover');
        }
        if(!($("#"+tempId2).children().hasClass('pieces'))&& !($("#"+tempId1).children().hasClass('pieces'))) {
            $("#" + tempId2).addClass('selectPath');
            currentPossition.addClass('pieceHover');
        }
        if ($("#"+tempId3).children().hasClass('black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }

    }else{
        if (!($("#"+tempId1).children().hasClass('pieces'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId3).children().hasClass('black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }


    }
    if (CountArray[5]==1){
        if (!($("#"+tempId1).children().hasClass('pieces'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('pieceHover');
        }
        if(!($("#"+tempId2).children().hasClass('pieces'))&& !($("#"+tempId1).children().hasClass('pieces'))) {
            $("#" + tempId2).addClass('selectPath');
            currentPossition.addClass('pieceHover');
        }
        if ($("#"+tempId3).children().hasClass('black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }

    }else{
        if (!($("#"+tempId1).children().hasClass('pieces'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId3).children().hasClass('black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }


    }
    if (CountArray[6]==1){
        if (!($("#"+tempId1).children().hasClass('pieces'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('pieceHover');
        }
        if(!($("#"+tempId2).children().hasClass('pieces'))&& !($("#"+tempId1).children().hasClass('pieces'))) {
            $("#" + tempId2).addClass('selectPath');
            currentPossition.addClass('pieceHover');
        }
        if ($("#"+tempId3).children().hasClass('black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }

    }else{
        if (!($("#"+tempId1).children().hasClass('pieces'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId3).children().hasClass('black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }


    }
    if (CountArray[7]==1){
        if (!($("#"+tempId1).children().hasClass('pieces'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('pieceHover');
        }
        if(!($("#"+tempId2).children().hasClass('pieces'))&& !($("#"+tempId1).children().hasClass('pieces'))) {
            $("#" + tempId2).addClass('selectPath');
            currentPossition.addClass('pieceHover');
        }
        if ($("#"+tempId3).children().hasClass('black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }

    }else{
        if (!($("#"+tempId1).children().hasClass('pieces'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId3).children().hasClass('black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }


    }
    if (CountArray[8]==1){
        if (!($("#"+tempId1).children().hasClass('pieces'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('pieceHover');
        }
        if(!($("#"+tempId2).children().hasClass('pieces'))&& !($("#"+tempId1).children().hasClass('pieces'))) {
            $("#" + tempId2).addClass('selectPath');
            currentPossition.addClass('pieceHover');
        }
        if ($("#"+tempId3).children().hasClass('black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }

    }else{
        if (!($("#"+tempId1).children().hasClass('pieces'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId3).children().hasClass('black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }



    }


}
/////////////////////////////////path of blackrock////////////////////////////////
function pathofBlackRook(eventData) {
    currentPossition=eventData;
    suares.removeClass('selectpath');
    chesspieces.removeClass('pieceHover');
    suares.removeClass('crosspiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LetterArrayPossition=($.inArray(letter,LetterArray));
    var NumberArrayPossition=($.inArray(parseInt(no),NumberArray));
    var tempId=LetterArray[LetterArrayPossition]+NumberArray[NumberArrayPossition+1];
    var tempId1=LetterArray[LetterArrayPossition]+NumberArray[NumberArrayPossition+1];
    var tempId2=LetterArray[LetterArrayPossition]+NumberArray[NumberArrayPossition+1];
    var tempIdA=LetterArray[LetterArrayPossition+1]+NumberArray[NumberArrayPossition];
    var tempIdB=LetterArray[LetterArrayPossition+1]+NumberArray[NumberArrayPossition];
    var tempIdC=LetterArray[LetterArrayPossition+1]+NumberArray[NumberArrayPossition];
    var tempIdQ=LetterArray[LetterArrayPossition-1]+NumberArray[NumberArrayPossition];
    var tempIdW=LetterArray[LetterArrayPossition-1]+NumberArray[NumberArrayPossition];
    var tempIdE=LetterArray[LetterArrayPossition-1]+NumberArray[NumberArrayPossition];
    // var x=LetterArrayPossition;
    // for(var y=NumberArrayPossition+1;y<8;y++){
    //     tempId=LetterArray[x]+NumberArray[y];
    //     if(!($("#"+tempId).children().hasClass('pieces'))){
    //         $('#'+tempId).addClass('selectPath');
    //         currentPossition.addClass('pieceHover')
    //     }else {
    //         break;
    //     }
    // }
    // var x1=LetterArrayPossition;
    // for(var y=NumberArrayPossition+1;y<8;y++){
    //     tempId=LetterArray[y]+NumberArray[x1];
    //     if(!($("#"+tempId).children().hasClass('pieces'))){
    //         $('#'+tempId).addClass('selectPath');
    //         currentPossition.addClass('pieceHover')
    //     }else {
    //         break;
    //     }
    //
    // }
    // var x2=LetterArrayPossition;
    // for(var y=NumberArrayPossition-1;y>=0;y--){
    //     tempId=LetterArray[y]+NumberArray[x2];
    //     if(!($("#"+tempId).children().hasClass('pieces'))){
    //         $('#'+tempId).addClass('selectPath');
    //         currentPossition.addClass('pieceHover')
    //     }else {
    //         break;
    //     }
    //
    // }
    //
    // for(var y=NumberArrayPossition-1;y>=0;y--){
    //     tempId=LetterArray[x]+NumberArray[y];
    //     if(!($("#"+tempId).children().hasClass('pieces'))){
    //         $('#'+tempId).addClass('selectPath');
    //         currentPossition.addClass('pieceHover')
    //     }else {
    //         break;
    //     }
    //
    // }
    var x=LetterArrayPossition;
    for (var y=NumberArrayPossition+1;y<8;y++){
        tempId=LetterArray[x]+NumberArray[y];
        if (!($("#"+tempId).children().hasClass('pieces'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('pieceHover');
        }
        else{
            break;
        }
        if (!($("#"+tempId).children().hasClass('pieces'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId1).children().hasClass('white')){
            $("#" + tempId1).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId2).children().hasClass('white')){
            $("#" + tempId2).addClass('crosspiece');
            currentPossition.addClass('pieceHover');
            currentPossition.removeClass('selectPath');
        }
    }
    var x1=NumberArrayPossition;
    for (var y=LetterArrayPossition+1;y<8;y++){
        tempId=LetterArray[y]+NumberArray[x1];
        if (!($("#"+tempId).children().hasClass('pieces'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('pieceHover');
        }
        else{
            break;
        }
    }
    var x2=NumberArrayPossition;
    for (var y=LetterArrayPossition-1;y>=0;y--){
        tempId=LetterArray[y]+NumberArray[x2];
        if (!($("#"+tempId).children().hasClass('pieces'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('pieceHover');
        }
        else{
            break;
        }
    }
    for (var y=NumberArrayPossition-1;y>=0;y--){
        tempId=LetterArray[x]+NumberArray[y];
        if (!($("#"+tempId).children().hasClass('pieces'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('pieceHover');
        }
        else{
            break;
        }
    }


}
//////////////////////////////path of whiterock///////////////////////////////////
function pathofWhiteRook(eventData) {
    currentPossition=eventData;
    suares.removeClass('selectpath');
    chesspieces.removeClass('pieceHover');
    suares.removeClass('crosspiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LetterArrayPossition=($.inArray(letter,LetterArray));
    var NumberArrayPossition=($.inArray(parseInt(no),NumberArray));
    var tempId=LetterArray[LetterArrayPossition]+NumberArray[NumberArrayPossition+1];

    var x=LetterArrayPossition;
    for (var y=NumberArrayPossition+1;y<8;y++){
        tempId=LetterArray[x]+NumberArray[y];
        if (!($("#"+tempId).children().hasClass('pieces'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('pieceHover');
        }
        else{
            break;
        }
    }
    var x1=NumberArrayPossition;
    for (var y=LetterArrayPossition+1;y<8;y++){
        tempId=LetterArray[y]+NumberArray[x1];
        if (!($("#"+tempId).children().hasClass('pieces'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('pieceHover');
        }
        else{
            break;
        }
    }
    var x2=NumberArrayPossition;
    for (var y=LetterArrayPossition-1;y>=0;y--){
        tempId=LetterArray[y]+NumberArray[x2];
        if (!($("#"+tempId).children().hasClass('pieces'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('pieceHover');
        }
        else{
            break;
        }
    }
    for (var y=NumberArrayPossition-1;y>=0;y--){
        tempId=LetterArray[x]+NumberArray[y];
        if (!($("#"+tempId).children().hasClass('pieces'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('pieceHover');
        }
        else{
            break;
        }
    }


}

//////////////////////////remove pieces//////////////////////////////////////

$(".square").mousedown(function (eventData) {
    var currentSquare=$(this);
    var currentPiece=$(".pieces.pieceHover");
    if($(currentSquare).hasClass('selectPath')){
        currentSquare.append(currentPiece);
        chesspieces.removeClass('pieceHover');
        suares.removeClass('selectPath');
    }
    if($(currentSquare).hasClass('crosspiece')){
        var y=$(currentPiece).clone();
        //$(currentPiece).remove();
        $(currentSquare).children().remove();
        currentSquare.append(currentPiece);
        suares.removeClass('selectPath');
        chesspieces.removeClass('pieceHover');
        suares.removeClass('crosspiece');
    }

});





























