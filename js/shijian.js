    	function currenttime(){
    		var now =new Date();
    		var week =now.getDay();
    		var str="";
    		switch (week) {
    			case 0:
    				str="星期日";break;
                case 1:
    				str="星期一";break;
    			case 2:
    				str="星期二";break;
    			case 3:
    				str="星期三";break;
    			case 4:
    				str="星期四";break;
                case 5:
    				str="星期五";break;
    			case 6:
    			    str="星期六";break;
    		}
    	//	document.getElementById("htime").innerHTML='时间：'+now.getFullYear()+'年'+(now.getMonth()+1)+'月'+now.getDate()+'日'+now.getHours()+'时'+now.getMinutes()+'分'+now.getSeconds()+'秒  '+str;
		
		document.getElementById("htime").innerHTML='时间：'+now.getFullYear()+'/'+(now.getMonth()+1)+'/'+now.getDate()+'  '+now.getHours()+':'+now.getMinutes()+' ';

    	}setInterval("currenttime()", 1000);