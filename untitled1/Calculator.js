var opType = "";

/** Add function */
function my_add(a, b){
  return (Number(a)+Number(b));
}

/** Substarct function */
function my_substarct(a, b){
    return (Number(a)-Number(b));
}

/** Multiply function */
function my_multiply(a, b){
    return (Number(a)*Number(b));
}

/** Divide function */
function my_divide(a, b){
    return (Number(a)/Number(b));
}

/** Attach click event handlers to show the number in display bar on click */
function attachEventListerner(e) {
  document.getElementById("cell7").addEventListener("click", function () {
      displayNumber("7");
   })
    document.getElementById("cell8").addEventListener("click", function () {
        displayNumber("8");
    })
    document.getElementById("cell9").addEventListener("click", function () {
        displayNumber("9");
    })
    document.getElementById("cell0").addEventListener("click", function () {
        displayNumber("0");
    })
    document.getElementById("cell1").addEventListener("click", function () {
        displayNumber("1");
    })
    document.getElementById("cell2").addEventListener("click", function () {
        displayNumber("2");
    })
    document.getElementById("cell3").addEventListener("click", function () {
        displayNumber("3");
    })

    document.getElementById("cell4").addEventListener("click", function () {
        displayNumber("4");
    })
    document.getElementById("cell5").addEventListener("click", function () {
        displayNumber("5");
    })
    document.getElementById("cell6").addEventListener("click", function () {
        displayNumber("6");
    });

    document.getElementById("cell*").addEventListener("click", function () {
        storeOp("*");
    })

    document.getElementById("cell/").addEventListener("click", function () {
        storeOp("/");
    })
    document.getElementById("cell+").addEventListener("click", function () {
        storeOp("+");
    })
    document.getElementById("cell-").addEventListener("click", function () {
        storeOp("-");
    });
    document.getElementById("cell.").addEventListener("click", function () {
        clearField();
    })
    document.getElementById("cell=").addEventListener("click", function () {
        calculateResult();
    });
}

/* Store operator to calculate the result later on */
function storeOp(op){
    document.getElementById("resultDiv").innerHTML = document.getElementById("resultDiv").innerHTML + op;
    opType = op;
}

/* Display number in the display bar */
function displayNumber(e) {
    document.getElementById("resultDiv").innerHTML = document.getElementById("resultDiv").innerHTML + e;
}

/* "C" funcionality in calculator */
function clearField(){
    document.getElementById("resultDiv").innerHTML = "";
    opType = "";
}

/** Calculate Final Result */
function calculateResult()
{
    var tempResString = document.getElementById("resultDiv").innerHTML;
    var res = tempResString.split(opType);
    var finalResult = 0;
    switch(opType){
        case '+':finalResult = res.reduce(my_add,0);
                 break;
        case '-':finalResult = res.reduce(my_substarct);
                 break;
        case '*':finalResult = res.reduce(my_multiply);
            break;
        case '/':finalResult = res.reduce(my_divide);
            break;
    }
    document.getElementById("resultDiv").innerHTML = finalResult.toString();
}



