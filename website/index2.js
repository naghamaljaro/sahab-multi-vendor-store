
$(function(){
    let count=0;
    let fontSizeCount = 16;
    $('#plusBtn').click(function(){
        count++;
        fontSizeCount++;
        $('#countlabel').text(count);
        $('#countlabel').css('font-size',fontSizeCount +"px")
    })


    
    $('#minusBtn').click(function(){
        count--;
        fontSizeCount--;
        $('#countlabel').text(count);
        $('#countlabel').css('font-size',fontSizeCount +"px")
    })
     
    $('#restBtn').click(function(){
        count=0;
        fontSizeCount=16;
        $('#countlabel').text(count)

    })


});

//document.getElementById("plusBtn").onclick = function(){
  //  count +=1;
  // fontSizeCount +=1;
  //document.getElementById("countlabel").innerHTML =count;
   // document.getElementById("countlabel").style.fontSize = fontSizeCount + "px";

//}

//document.getElementById("minusBtn").onclick = function(){
   // count-=1;
   // fontSizeCount-=1;
   //document.getElementById("countlabel").innerHTML =count;
 //document.getElementById("countlabel").style.fontSize = fontSizeCount - "px";
//}

//document.getElementById("restBtn").onclick = function(){
   // count =0;
   // fontSizeCount =16;
   //document.getElementById("countlabel").innerHTML =count;
//}

