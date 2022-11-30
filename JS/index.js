let turn ="X"
let t=document.getElementById("turn")
let divs=[]
function reset(){
    location.reload()
}
function verfiy(n1,n2,n3){
    t.innerHTML=`${divs[n1]} Winner`
        document.getElementById("d"+n1).style.background="black"
        document.getElementById("d"+n2).style.background="black"
        document.getElementById("d"+n3).style.background="black"
}
function Actions(){
    for (let i=1;i<10;i++){
        divs[i]=document.getElementById("d"+i).innerHTML;
    }
    if ((divs[1]==divs[2]) && (divs[2]==divs[3])&&(divs[3]!="")){
        verfiy(1,2,3)
    }
    else if ((divs[4]==divs[5]) && (divs[5]==divs[6])&&(divs[5]!="")){
        verfiy(4,5,6)
    }
    else if ((divs[7]==divs[8]) && (divs[8]==divs[9])&&(divs[8]!="")){
        verfiy(7,8,9)  
    }
    else if ((divs[1]==divs[4]) && (divs[4]==divs[7])&&(divs[4]!="")){
        verfiy(1,4,7)
    }
    else if ((divs[2]==divs[5]) && (divs[5]==divs[8])&&(divs[5]!="")){
        verfiy(2,5,8)   
    }
    else if ((divs[3]==divs[6]) && (divs[6]==divs[9])&&(divs[9]!="")){
        verfiy(3,6,9)
    }
    else if ((divs[1]==divs[5]) && (divs[5]==divs[9])&&(divs[5]!="")){
        verfiy(1,5,9)
    }
    else if ((divs[7]==divs[5]) && (divs[5]==divs[3])&&(divs[5]!="")){
        verfiy(7,5,3)
    }
}
function Game(id){
    let element=document.getElementById(id);

    if (turn =="X" && element.innerHTML == ""){
        element.innerHTML=turn
        turn="O"
        t.innerHTML="O turn"
    }
    else if (turn =="O" && element.innerHTML == "") {
        element.innerHTML=turn
        turn="X"
        t.innerHTML="X turn"
    }    
    Actions()
}