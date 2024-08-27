function returns() {
    const base = parseFloat(document.getElementById("capi").value);
    const numberOfYears = parseFloat(document.getElementById("years").value);
    const interestRate = parseInt(document.getElementById("rate").value);

    let isChecked = document.getElementById("check").checked;


    if(isChecked===false) {
        var answer =  (base* numberOfYears* interestRate)
        document.getElementById("output").innerHTML = answer/100
    }else {
        var ans = base*(Math.pow((1+interestRate/100), numberOfYears));
        document.getElementById("output").innerHTML = ans - base;
    }
}
