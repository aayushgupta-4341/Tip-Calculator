function calculateTip(){

let bill = parseFloat(document.getElementById("bill").value)
let tipPercent = parseFloat(document.getElementById("tip").value)
let people = parseInt(document.getElementById("people").value)

if(!bill || !tipPercent || !people){
alert("Please enter all values")
return
}

let tipAmount = (bill * tipPercent) / 100
let totalAmount = bill + tipAmount
let perPerson = totalAmount / people

document.getElementById("tipAmount").innerText = tipAmount.toFixed(2)
document.getElementById("totalAmount").innerText = totalAmount.toFixed(2)
document.getElementById("perPerson").innerText = perPerson.toFixed(2)

}