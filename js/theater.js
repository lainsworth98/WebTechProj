function getReport() {
    var totalseat = document.getElementById('seat').value;
    var a = document.getElementById("show");
    var showprice = a.options[a.selectedIndex].value;
    var showvalue = a.options[a.selectedIndex].text;
    document.getElementById('message1').innerHTML=totalseat+' tickets for '+showvalue;

    var multiply=totalseat*showprice;
    document.getElementById('message2').innerHTML='Total Cost: £'+multiply;

    var discountvalue=0;
    //var finalcost=0;

    if(totalseat>6){
        discountvalue=multiply*((10)/100);
        document.getElementById('message3').innerHTML='10% Discount: £'+discountvalue;
    }
    if(totalseat>10){
        discountvalue=multiply*((15)/100);
        document.getElementById('message3').innerHTML='15% Discount: £'+discountvalue;
    }
    if(totalseat<6){
        document.getElementById('message3').innerHTML='';
    }

    var med1=document.getElementById('method1');
    var med2=document.getElementById('method2');
    var med3=document.getElementById('method3');

    var methodprice=0;

    if(med1.checked===true){
        methodprice=med1.value;
        document.getElementById('message4').innerHTML='E-Ticket: £'+methodprice;
    }
    else if(med2.checked===true){
        methodprice=med2.value;
        document.getElementById('message4').innerHTML='Collect from Box Office: £'+methodprice;
    }
    else if(med3.checked===true){
        methodprice=med3.value;
        document.getElementById('message4').innerHTML='Posted: £'+methodprice;
    }

    var total=0;
    multiply=parseInt(multiply);
    methodprice=parseInt(methodprice);
    total=(multiply+methodprice)-discountvalue;

    document.getElementById('message5').innerHTML='Total Cost: £'+total;

}