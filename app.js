function cartItemsUpdate(prodctName, price, isIncreasing){
    const itemsCounter = document.getElementById(prodctName + '-number')
    const itemsCounterValue = itemsCounter.value
    let itemsCounterValueInteger = parseInt(itemsCounterValue)
    if(isIncreasing){
        itemsCounterValueInteger += 1
    } else if(itemsCounterValueInteger > 0){
        itemsCounterValueInteger -= 1
    }
    itemsCounter.value = itemsCounterValueInteger

    //Update Total amout
    const itemTotal = document.getElementById(prodctName + '-total')
    itemTotal.innerText = itemsCounterValueInteger * price

    //Total calculation
    totalAmountCalculation()
}

function productNumbers(productName){
    const productInput = document.getElementById(productName + '-number')
    const productNumber = parseInt(productInput.value)
    return productNumber
}

function totalAmountCalculation(){
    const phoneTotal = productNumbers('phone') * 1219
    const caseTotal = productNumbers('case') * 59
    const subTotal = phoneTotal + caseTotal
    const taxTotal = parseInt((subTotal / 100) * 5)
    const total = subTotal + taxTotal

    document.getElementById('sub-total').innerText = subTotal
    document.getElementById('tax-amount').innerText = taxTotal
    document.getElementById('total-price').innerText = total
}





// Phone Update
document.getElementById('phone-plus').addEventListener('click', function(){
    cartItemsUpdate('phone', 1219, true)
})

document.getElementById('phone-minus').addEventListener('click', function(){
    cartItemsUpdate('phone', 1219, false)
})

// Case Update
document.getElementById('case-plus').addEventListener('click', function(){
    cartItemsUpdate('case', 59, true)
})

document.getElementById('case-minus').addEventListener('click', function(){
    cartItemsUpdate('case', 59, false)
})