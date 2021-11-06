	
			function randomNum(firstValue, lastValue) {
				var choices = lastValue - firstValue;
				return Math.floor(Math.random() * choices + firstValue);
			}
			
			function changeColor() {
				var colors = new Array("LightSeaGreen", "Orange", "MediumPurple", "SteelBlue","Sienna" ,"Auqamarin");
				return colors[randomNum(0, colors.length - 1)];
			}
			
			function divBackgroundColor() {
				var header = document.getElementsByTagName("header")[0];
				header.style.backgroundColor =  changeColor();
			}
			
			function timeColor() {
				divBackgroundColor();
				setTimeout(timeColor, 400);
 
			}
				
			window.onload = timeColor;
