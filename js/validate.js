//Order validation
function validate()
{
	if (document.myForm.qtyA.value === "" || document.myForm.qtyB.value === "" || document.myForm.qtyC.value === "" ||
	document.myForm.qtyD.value === "" || document.myForm.qtyE.value === "" || document.myForm.qtyF.value === "")
{
alert("!! ATTENTION !! Please fill in Quantity, Input 0 for none!");
return false;
}
else
{
alert("!!! YOUR ORDER IS PLACED SUCCESSFULLY !!! Thank you for ordering from our shop, we will send you confirmation by email");
return true;
}
}