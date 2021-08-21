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

// selecting elements by their id
const memoryEightGb = document.getElementById('memory_eightGB');
const memorySixteenGb = document.getElementById('memory_sixteenGB');

const storageMini = document.getElementById('storage_mini');
const storageMedium = document.getElementById('storage_medium');
const storageBig = document.getElementById('storage_big');

const deliveryOption1 = document.getElementById('delivery_option1');
const deliveryOption2 = document.getElementById('delivery_option2');

const extraMemoryCost = document.getElementById('extra_memory_cost');
const extraStorageCost = document.getElementById('extra_storage_cost');
const deliveryCost = document.getElementById('delivery_cost');
const totalCost = document.getElementById('total_cost');

const promo = document.getElementById('promo_code_btn');


// adding actionListeners
// for memory costs
memoryEightGb.addEventListener('click', function (){
     calcMemoryCost(calculateMemoryOption1);
});
memorySixteenGb.addEventListener('click', function (){
     calcMemoryCost(calculateMemoryOption2);
});