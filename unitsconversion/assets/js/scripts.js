function calculate() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $( "#myform" );
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        // Operand 1
        var fromvalue = document.getElementById("FromValue").value;

        // Operator
        // Get the value associated with the operator that was checked (+, -, *, or /)
        var fromoperator;
        if (document.getElementById("CenOperator").checked) {
            fromoperator = document.getElementById("CenOperator").value;
        }
        if (document.getElementById("MetOperator").checked) {
            fromoperator = document.getElementById("MetOperator").value;
        }
        if (document.getElementById("KiloOperator").checked) {
            fromoperator = document.getElementById("KiloOperator").value;
        }
        if (document.getElementById("IncOperator").checked) {
            fromoperator = document.getElementById("IncOperator").value;
        }
        if (document.getElementById("FeetOperator").checked) {
            fromoperator = document.getElementById("FeetOperator").value;
        }
        if (document.getElementById("YardsOperator").checked) {
            fromoperator = document.getElementById("YardsOperator").value;
        }
        if (document.getElementById("MilesOperator").checked) {
            fromoperator = document.getElementById("MilesOperator").value;
        }
        
        var tooperator;
        if (document.getElementById("CenOperator").checked) {
            tooperator = document.getElementById("CenOperator").value;
        }
        if (document.getElementById("MetOperator").checked) {
            tooperator = document.getElementById("MetOperator").value;
        }
        if (document.getElementById("KiloOperator").checked) {
            tooperator = document.getElementById("KiloOperator").value;
        }
        if (document.getElementById("IncOperator").checked) {
            tooperator = document.getElementById("IncOperator").value;
        }
        if (document.getElementById("FeetOperator").checked) {
            tooperator = document.getElementById("FeetOperator").value;
        }
        if (document.getElementById("YardsOperator").checked) {
            tooperator = document.getElementById("YardsOperator").value;
        }
        if (document.getElementById("MilesOperator").checked) {
            tooperator = document.getElementById("MilesOperator").value;
        }
        
        CalculateResult(fromvalue, fromoperator, tooperator);
    }
}

async function CalculateResult(fromvalue, fromoperator, tooperator) {
        
        // URL and method used with AJAX Call
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";

        /* AJAX calculator requires Operand1, Operator, and Operand2 */
        myURL = myURL + "?FromValue=" + encodeURIComponent(fromvalue) + "&FromOperator=" + encodeURIComponent(fromoperator) + "&ToOperator=" + encodeURIComponent(tooperator);

        /* fetch the results */
        let myCalcObject = await fetch(myURL);
        let myResult = await myCalcObject.text();
        
        document.getElementById("Result").innerHTML = myResult;
}

function clearform() {
    "use strict";
    
    /* Set all of the form values to blank or false */
    document.getElementById("FromValue").value = "";
    document.getElementById("FromValueMsg").innerHTML = "";
    document.getElementById("FromCenOperator").checked = false;
    document.getElementById("FromMetOperator").checked = false;
    document.getElementById("FromKiloOperator").checked = false;
    document.getElementById("FromIncOperator").checked = false;
    document.getElementById("FromFeetOperator").checked = false;
    document.getElementById("FromYardsOperator").checked = false;
    document.getElementById("FromMilesOperator").checked = false;
    document.getElementById("ToCenOperator").checked = false;
    document.getElementById("ToMetOperator").checked = false;
    document.getElementById("ToKiloOperator").checked = false;
    document.getElementById("ToIncOperator").checked = false;
    document.getElementById("ToFeetOperator").checked = false;
    document.getElementById("ToYardsOperator").checked = false;
    document.getElementById("ToMilesOperator").checked = false;
    document.getElementById("Result").innerHTML = "";
}

$( "#myform" ).validate({

});