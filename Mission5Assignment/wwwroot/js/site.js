// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $("#calculate").click(function () {
        let hrsNeeded = parseFloat($("#HrsNeeded").val());
        let hrRate = parseFloat($("#HrRate").val());

        if (hrsNeeded > 0) {
            $("#totalLabel").removeClass("invisible");
            $("#totalCost").removeClass("invisible").val(hrsNeeded * hrRate);
        } else {
            alert("Please enter a valid number greater than 0");
            $("#totalCost").val("")
        }
    });
});
