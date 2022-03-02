// Introduction Problem: TipCalculator

function tipCalculator(billAmt, tipRate) {
    // Challenge: Ensure user can only enters numbers
    if (typeof(billAmt) !== "number" || typeof(tipRate) != "number") {
        throw `God you're so fucking stupid, why would you calculate tips without numbers`;
    }
    // Initialize tip variable to calculate tip in dollars
    let tip = 0;
    // Initialize roundedTip
    let roundedTip = 0;
    // Initialize total
    let total = 0;

    // Calculate tip by converting tipRate as a percent into decimal, 
    // then multiplying by billAmt
    tip = billAmt * (tipRate / 100);
    // Round tip to nearest cent
    roundedTip = Math.round(tip * 100) / 100;
    total = billAmt + roundedTip;
    // For some reason, total was still giving decimals.
    let newTotal = total.toFixed(2);
    console.log(`The total is $${newTotal}, with a $${roundedTip} tip`);
}

tipCalculator(24.74, 15);
tipCalculator(9.44, 20);
tipCalculator(30.00, 0);
tipCalculator("30.00", 0);
tipCalculator(30.00, "0");