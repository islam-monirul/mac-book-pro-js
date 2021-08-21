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
let calculateFinalCost = basePrice;

//setting promo code status
let promoStatus = 0;

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

// for storage cost
storageMini.addEventListener('click', function (){
     calcStorageCost(calculateStorageOption1);
});
storageMedium.addEventListener('click', function (){
     calcStorageCost(calculateStorageOption2);
});
storageBig.addEventListener('click', function (){
     calcStorageCost(calculateStorageOption3);
});

// for delivery charge cost
deliveryOption1.addEventListener('click', function (){
     calcDeliveryCost(calculateDeliveryCost1);
});
deliveryOption2.addEventListener('click', function (){
     calcDeliveryCost(calculateDeliveryCost2);
});

// for promo code
promo.addEventListener('click', calcPromoCode);

// all functions
// function for calculating memory cost
function calcMemoryCost(memoryValue){
     calculateMemoryCost = memoryValue;
     finalCalc();
}

// function for calculating storage cost
function calcStorageCost(storageValue){
     calculateStorageCost = storageValue;
     finalCalc();
}

// function for calculating delivery cost
function calcDeliveryCost(deliveryValue){
     calculateDeliveryCost = deliveryValue;
     finalCalc();
}

// function for promo code
function calcPromoCode(){
     // if promo code not applied before
     if(promoStatus == 0){
          const promoCode = document.getElementById('promo_code_text').value;
          if(promoCode == "stevekaku"){
               promoStatus = 1;
               finalCalc();
          }
          else{
               alert('Invalid Promo Code.')
          }
     }
     // if valid promo code already applied
     else{
          alert('Promo code already applied.');
     }

     document.getElementById('promo_code_text').value = '';
}

// function for total cost calculation
function calcTotalCost(){
     calculateTotalCost = basePrice + calculateMemoryCost + calculateStorageCost + calculateDeliveryCost;
     document.getElementById('total_cost').textContent = calculateTotalCost;
}

// function for final cost calculation
function calcFinalCost(){
     if(promoStatus == 1){
          calculateFinalCost = calculateTotalCost - (calculateTotalCost * 0.2);
     }

     else{
          calculateFinalCost = calculateTotalCost;
     }

     document.getElementById('final_cost').textContent = calculateFinalCost;
}

// function for assigning final values to html element
function finalCalc(){
     document.getElementById('initial_cost').textContent = basePrice;
     document.getElementById('extra_memory_cost').textContent = calculateMemoryCost;
     document.getElementById('extra_storage_cost').textContent = calculateStorageCost;
     document.getElementById('delivery_cost').textContent = calculateDeliveryCost;
     calcTotalCost();
     calcFinalCost();
}