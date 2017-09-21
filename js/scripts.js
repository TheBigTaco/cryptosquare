function cryptoEncode(input) {
  input = input.toLowerCase();
  input = input.replace(/[^a-z\d]/g, "");

  var largestSquare = 1;
  var sideLength = 0;
  while (largestSquare < input.length) {
    sideLength++;
    largestSquare = sideLength * sideLength;
  }
  var rows = [];
  for (var i = 0; i * sideLength < input.length; i++) {
    rows[i] = input.substr(i * sideLength, sideLength).split("");
  }

  var output = "";
  var fiveCounter = 0;
  for (var column = 0; column < sideLength; column++) {
    rows.forEach(function(row){
      var currentLetter = row[column];
      if (currentLetter !== undefined) {
        output += currentLetter;
        fiveCounter++;
        if (fiveCounter === 5) {
          fiveCounter = 0;
          output += " ";
        }
      }
    });
  }
  for () {
    sideLength
  }
  console.log(rows);
  return output;
}



$(document).ready(function() {
  $("#encoder").submit(function(event) {
    event.preventDefault();

    var input = $("#encoder input").val();
    var output = cryptoEncode(input);
    $("#output h1").text(output);
  });
});
