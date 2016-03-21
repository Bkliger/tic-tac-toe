// wait for the DOM to finish loading
$(document).ready(function() {

//watch for the click and get the value of the cell selected
  $("div.col-xs-4.box").on("mousedown",function(event){
    cellValue = $(this).text();
    var $cell=$(this);

  //retrieve stored writeValue (x or o)
    var writeValue = $("#writeValue").text();

// test to see if there is a value in the cell already
    if (cellValue === 'X'|| cellValue === 'O') {
      alert("There is already a value in this box");
    } else {
  // call function to write value in cell
      writeValueFunc(writeValue, $cell);
    }
  });

//reset the board
$("button").on("mousedown",function(event){
  $("div.col-xs-4.box").text("");
});

//writes value in cell
  function writeValueFunc(writeValue, $cell) {
     $cell.text(writeValue);

     if (writeValue === "O") {
       writeValue = "X";
     } else {
       writeValue = "O";
    }
     $("#writeValue").text(writeValue);

  }









});
