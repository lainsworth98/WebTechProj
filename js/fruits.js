
function choosePic() {
    var myPix = new Array("image/apple.PNG","image/banana.PNG","image/grapes.PNG","image/lemon.PNG","image/melon.PNG","image/orange.PNG","image/cherries.PNG");
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById('pic1').src = myPix[randomNum];

    var randomNum1 = Math.floor(Math.random() * myPix.length);
    document.getElementById('pic2').src = myPix[randomNum1];

    var randomNum3 = Math.floor(Math.random() * myPix.length);
    document.getElementById('pic3').src = myPix[randomNum3];

    document.getElementById('message').innerHTML = ' ';

    var a=document.getElementById('credit').innerHTML;
    a--;
    document.getElementById('credit').innerHTML=a;
    if(a==0){
        document.getElementById('spinbtn').disabled=true;
    }
    if(a>0){
        document.getElementById('spinbtn').disabled=false;
    }

    var p1=document.getElementById('pic1').src;
    var p2=document.getElementById('pic2').src;
    var p3=document.getElementById('pic3').src;


    if(p1===p2){
        if(p1===p3) {
            var bb = document.getElementById('win').innerHTML;
            bb=parseInt(bb);
            bb=bb + 10;
            document.getElementById('win').innerHTML = bb;

            document.getElementById('message').innerHTML = '10 Points Has been Added';

            var b11=document.getElementById('win').innerHTML;
            if(b11==0){
                document.getElementById('winbtn').disabled=true;
            }
            if(b11>0){
                document.getElementById('winbtn').disabled=false;
            }

        }
    }
    else if(p1===p3){
        var bbb=document.getElementById('win').innerHTML;
        bbb=parseInt(bbb);
        bbb=bbb+5;
        document.getElementById('win').innerHTML=bbb;
        document.getElementById('message').innerHTML = '5 Points Has been Added';

        var b111=document.getElementById('win').innerHTML;
        if(b111==0){
            document.getElementById('winbtn').disabled=true;
        }
        if(b111>0){
            document.getElementById('winbtn').disabled=false;
        }

    }

}

function getCredit() {
    var a=document.getElementById('credit').innerHTML;
    a++;
    document.getElementById('credit').innerHTML=a;

    if(a==0){
        document.getElementById('spinbtn').disabled=true;
    }
    if(a>0){
        document.getElementById('spinbtn').disabled=false;
    }
}

function collect() {
    var a=document.getElementById('win').innerHTML;
    a=parseInt(a);
    document.getElementById('message').innerHTML = 'You have collected all winnings points';
    a=0;
    document.getElementById('win').innerHTML=a;

    if(a==0){
        document.getElementById('winbtn').disabled=true;
    }
    if(a>0){
        document.getElementById('winbtn').disabled=false;
    }

}