"use strict"
const calculateWorth = () =>{
    let qrt1 = inptQrt1.value
    document.getElementById("result-display").style.display = "inline-block"
    let price1 = inptPrice1.value
    let qrt2 = inptQrt2.value
    let price2 = inptPrice2.value

    let worth1 = qrt1/price1
    let worth2 = qrt2/price2
    console.log("Worth 1 = "+worth1)
    console.log("Worth 2 = "+worth2)    
    
    if(worth1>worth2){
        document.getElementById("result").innerHTML = 'สินค้าชิ้นที่ 1 คุ้มกว่า'

    }else if(worth1<worth2){
        document.getElementById("result").innerHTML = 'สินค้าชิ้นที่ 2 คุ้มกว่า'
    }
    else
    {
        document.getElementById("result").innerHTML = 'ทั้งสองชิ้นมีความคุ้มค่าพอกัน'
    }
    
}