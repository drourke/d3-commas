function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0]  = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

setTimeout(function() {
  var spanVals = document.querySelectorAll('span.value');

  for (var i = 0; i < spanVals.length; i++) { 

    if (isNumeric(spanVals[i].innerText)) {
      spanVals[i].innerText = numberWithCommas(spanVals[i].innerText);
    }
  }
}, 500);