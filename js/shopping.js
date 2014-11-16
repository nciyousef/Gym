// JavaScript to write HTML into browser document
			function calculate()
			{
				//declare quantity of items
				QtyA = 0;
				QtyB = 0;
				QtyC = 0;
				QtyD = 0;
				QtyE = 0;
				QtyF = 0;
				//declare total price
				TotA = 0;
				TotB = 0;
				TotC = 0;
				TotD = 0;
				TotE = 0;
				TotF = 0;
				//declare the Prices of items
				PrcA = 169;
				PrcB = 6.45;
				PrcC = 17.95;
				PrcD = 27.95;
				PrcE = 32.74;
				PrcF = 14.45;
				//ITEM A: check if user has entered a quantity in the input box
				if (document.getElementById("qtyA").value > "")
				{
					QtyA = document.getElementById("qtyA").value;
				}
				// calculate the subtotal for Item A & display it to 2 decimals
				TotA = eval(QtyA) * eval(PrcA);
				TotA = TotA.toFixed(2);
				document.getElementById("totalA").value = TotA;
				//ITEM B: check if user has entered a quantity in the input box
				if (document.getElementById("qtyB").value > "")
				{
					QtyB = document.getElementById("qtyB").value;
				}
				//calculate the subtotal for Item B & display it to 2 decimals
				TotB = eval(QtyB) * eval(PrcB);
				TotB = TotB.toFixed(2);
				document.getElementById("totalB").value = TotB;
				//ITEM C: check if user has entered a quantity in the input box
				if (document.getElementById("qtyC").value > "")
				{
					QtyC = document.getElementById("qtyC").value;
				}
				//calculate the subtotal for Item C & display it to 2 decimals
				TotC = eval(QtyC) * eval(PrcC);
				TotC = TotC.toFixed(2);
				document.getElementById("totalC").value = TotC;
				//ITEM D: check if user has entered a quantity in the input box
				if (document.getElementById("qtyD").value > "")
				{
					QtyD = document.getElementById("qtyD").value;
				}
				//calculate the subtotal for Item D & display it to 2 decimals
				TotD = eval(QtyD) * eval(PrcD);
				TotD = TotD.toFixed(2);
				document.getElementById("totalD").value = TotD;
				//ITEM E: check if user has entered a quantity in the input box
				if (document.getElementById("qtyE").value > "")
				{
					QtyE = document.getElementById("qtyE").value;
				}
				// calculate the subtotal for Item E & display it to 2 decimals
				TotE = eval(QtyE) * eval(PrcE);
				TotE = TotE.toFixed(2);
				document.getElementById("totalE").value = TotE;
				//ITEM F: check if user has entered a quantity in the input box
				if (document.getElementById("qtyF").value > "")
				{
					QtyF = document.getElementById("qtyF").value;
				}
				//calculate the subtotal for Item F & display it to 2 decimals
				TotF = eval(QtyF) * eval(PrcF);
				TotF = TotF.toFixed(2);
				document.getElementById("totalF").value = TotF;
				// Keep a Running Total & display it to 2 decimals
				Totamt = eval(TotA) + eval(TotB) + eval(TotC) + eval(TotD) + eval(TotE) + eval(TotF);
				Totamt = Totamt.toFixed(2);
				document.getElementById("GrandTotal").value = Totamt;
			}