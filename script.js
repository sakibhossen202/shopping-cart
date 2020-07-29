



// function purchaseAmount(id1,id2,isIncrease){
//     let orderAmount = document.getElementById(id1).value 
//     let orderConvert = parseFloat(orderAmount)
//     let presentOrder = orderConvert;

//     if(isIncrease == true){
//         presentOrder = orderConvert + 1;
//     }
//     if(isIncrease == false && presentOrder>0){
//         presentOrder = orderConvert - 1;
//     }

//     document.getElementById(id1).value = presentOrder;

//     let mobilePrice = document.getElementById(id2).innerText
//     let newPrice = parseFloat(mobilePrice)
//     let totalPrice =  (1219* presentOrder);
//     document.getElementById(id2).innerText = totalPrice;
    
// }


















//phone order part

// function handlePhone(isIncrease){
//     let productSub = document.getElementById("phoneCount").value

//     let productSubtract = parseFloat(productSub);
//     let newProductSub = productSubtract;
    
//     if(isIncrease ==  true){
//         newProductSub = productSubtract + 1;
//     }

//     if(isIncrease == false && newProductSub > 0){
//         newProductSub = productSubtract - 1;
//     }
    
//     document.getElementById("phoneCount").value = newProductSub;

//     let phonePrice = document.getElementById("phonePrice").innerText
//     let newPhonePrice = parseFloat(phonePrice)
//     newPhonePrice = 1219 * newProductSub;

//     document.getElementById("phonePrice").innerText = newPhonePrice;

    
// }


 

//case part 


function handleProduct(isIncrease ,product){
    let productSub = document.getElementById(product + 'Count').value

    let productSubtract = parseFloat(productSub);
    let newProductSub = productSubtract;
    
    if(isIncrease ==  true){
        newProductSub = productSubtract + 1;
    }

    if(isIncrease == false && newProductSub > 0){
        newProductSub = productSubtract - 1;
    }
    
    document.getElementById(product + 'Count').value = newProductSub;

    let casePrice = document.getElementById("casePrice").innerText
    let PriceConvert = parseFloat(casePrice)

    let phonePrice = document.getElementById("phonePrice").innerText
    let newPhonePrice = parseFloat(phonePrice)
    // casePriceConvert = 59 * newProductSub;
    if(product == "phone"){
        PriceConvert = 1219 * newProductSub;
        
    }
    
    if(product == "case"){
        
        PriceConvert = 59 * newProductSub;

    }
    
    document.getElementById(product + "Price").innerText =  PriceConvert;

    subTotalCount()

    
}

//subtotal part

function subTotalCount (){
    
    const newCaseCount = countConverter("caseCount")
    const newPhoneCount = countConverter("phoneCount")

    const subtotalPrice = newPhoneCount*1219 + newCaseCount*59;
    document.getElementById("subTotal").innerText = "$"+subtotalPrice

    const tax = Math.round(subtotalPrice * 12 /100);

    document.getElementById("taxAmount").innerText = "$"+ tax;

    const netAmount = subtotalPrice + tax;
    document.getElementById("netAmount").innerText = "$" + netAmount;


}


function countConverter(id){
    const caseCount = document.getElementById(id)
    const newCaseCount = parseFloat(caseCount.value);
    return newCaseCount;
}




   

