// Zadeklaruj zmienną price, np. 100.Zadeklaruj zmienną discount, np. 0.2 (czyli 20%).
// Napisz funkcję calculateDiscountedPrice(price, discount), która zwróci cenę po rabacie. 
// Wywołaj funkcję i wyświetl wynik w konsoli


const price = 100;
const discount = 0.2;

function calculateDiscountedPrice(basePrice, discountRate) {
    return basePrice * (1 - discountRate);
}
console.log(calculateDiscountedPrice(price, discount));


const calculateDiscountedPrice1 = (basePrice, discountRate) => basePrice * (1 - discountRate);
console.log(calculateDiscountedPrice1(price, discount));