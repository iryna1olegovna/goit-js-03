function getShippingCost(country) {
    let price;
    let message;

    switch (country.toLowerCase()) {
        case "china":
            price = 100;
            message = `Shipping to China will cost ${price} credits`;
            break;
        case "chile":
            price = 250;
            message = `Shipping to Chile will cost ${price} credits`;
            break;
        case "australia":
            price = 170;
            message = `Shipping to Australia will cost ${price} credits`;
            break;
        case "jamaica":
            price = 120;
            message = `Shipping to Jamaica will cost ${price} credits`;
            break;
        default:
            message = "Sorry, there is no delivery to your country";
    }

    return message;
}


console.log(getShippingCost("Australia")); 
console.log(getShippingCost("Germany")); 
console.log(getShippingCost("China")); 
console.log(getShippingCost("Chile")); 
console.log(getShippingCost("Jamaica")); 
console.log(getShippingCost("Sweden")); 