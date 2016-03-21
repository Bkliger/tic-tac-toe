// wait for the DOM to finish loading
$(document).ready(function() {
//counters for checking winners
  $("p.invisible").text();

//watch for the click and get the value of the cell selected
  $("div.col-xs-4.box").on("mousedown",function(event){
    cellValue = $(this).text();
    var $cell=$(this);
//used to test for winner
    // cellID=$(this).attr("id");
//retrieve stored counters


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
    //increment O counter
      //  incrementO(cellID);
       writeValue = "X";
     } else {
       //increment O counter
      //  incrementX(cellID);
       writeValue = "O";
    }
     $("#writeValue").text(writeValue);

  }
//accumulate counters
  // function incrementO(cellID) {
  //   switch (cellID) {
  //   case "r1c1":
  //     row1X++;
  //     $("#row1O").text(row1O);
  //     break;
  //   case "r1c1":
  //     row1X++;
  //     $("#row1O").text(row1O);
  //     break;
  //   case "r1c1":
  //     row1X++;
  //     $("#row1O").text(row1O);
  //     break;
  //   case "r1c1":
  //     row1X++;
  //     $("#row1O").text(row1O);
  //     break;
  //   case "r1c1":
  //     row1X++;
  //     $("#row1O").text(row1O);
  //     break;
  //   case "r1c1":
  //     row1X++;
  //     $("#row1O").text(row1O);
  //     break;
  //   case "r1c1":
  //     row1X++;
  //     $("#row1O").text(row1O);
  //     break;
  //   case "r1c1":
  //     row1X++;
  //     $("#row1O").text(row1O);
  //     break;
  //   }

  //}
  // function retrieveCounters () {
  //   var counterArray = $("p.invisible").text();
  //      return counterArray;
  // }

  //key for array
  // index 1 row1X;
  // index 2 row1O;
  // index 3 row2X;
  // index 4 row2O;
  // index 5 row3X;
  // index 6 row3O;
  // index 6 col1X;
  // index 7 col1O;
  // index 8 col2X;
  // index 9 col2O;
  // index 10 col3X;
  // index 11 col3O;
  // index 12 DiagBackX;
  // index 13 DiagBackO;
  // index 14 diagForwardX;
  // index 15 diagForwardO;
});

//starting the section on tracking who wins the game.
