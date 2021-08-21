// setting the values of the product options
const calculateMemoryOption1 = 0;
const calculateMemoryOption2 = 80;

const calculateStorageOption1 = 0;
const calculateStorageOption2 = 100;
const calculateStorageOption3 = 180;

const calculateDeliveryCost1 = 0;
const calculateDeliveryCost2 = 20;

// setting initial values for calculation
const basePrice = 1299;
let calculateMemoryCost = 0;
let calculateStorageCost = 0;
let calculateDeliveryCost = 0;
let calculateTotalCost = basePrice;
let calculateFinalCost = calculateTotalCost;

//setting promo code status
let promoStatus = 0;

// inital value assign to html elements
document.getElementById('initial_cost').textContent = basePrice;
document.getElementById('extra_memory_cost').textContent = calculateMemoryCost;
document.getElementById('extra_storage_cost').textContent = calculateStorageCost;
document.getElementById('delivery_cost').textContent = calculateDeliveryCost;
document.getElementById('total_cost').textContent = calculateTotalCost;
document.getElementById('final_cost').textContent = calculateFinalCost;

