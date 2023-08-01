function sol() {
    var VP = document.getElementById("VP").value; 
    var DP =
  document.getElementById("DP").value;      
  var first_line = (DP - 1) * 3.2 ;
  var second_line = (3.2 -1)* DP;
  var calculation = (first_line/second_line);
  var calculation_tofixed = calculation.toFixed(2)

  var M_H = VP * calculation_tofixed * DP
  var elemento = document.getElementById("resultado"); document.getElementById("M_H").innerHTML = "Massa " + M_H.toFixed(2) + " t/h";
  };
  console.log(calculation_tofixed);
  console.log(M_H); 
