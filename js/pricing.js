// Pricing estimator
document.addEventListener('DOMContentLoaded', function() {
  const serviceSelect = document.getElementById('estService');
  const vehicleSelect = document.getElementById('estVehicle');
  const addService = document.getElementById('estAddService');
  const estimateBtn = document.getElementById('estimateBtn');
  const resetEstimate = document.getElementById('resetEstimate');
  const estimateResult = document.getElementById('estimateResult');
  const estimatedPrice = document.getElementById('estimatedPrice');
  const estimateBreakdown = document.getElementById('estimateBreakdown');
  
  if (!serviceSelect || !estimateBtn) return;
  
  const pricingBase = {
    'battery-testing': { name: 'Battery Testing', base: 20 },
    'battery-replacement': { name: 'Battery Replacement', base: 175, multiplier: { car: 1, suv: 1.15, truck: 1.3, van: 1.25 } },
    'battery-charging': { name: 'Battery Charging', base: 30 },
    'wiring-inspection': { name: 'Wiring Inspection', base: 45 },
    'wiring-repair': { name: 'Wiring Repair', base: 95, multiplier: { car: 1, suv: 1.1, truck: 1.25, van: 1.15 } },
    'alternator': { name: 'Alternator Diagnostics', base: 50 },
    'starter': { name: 'Starter Diagnostics', base: 50 },
    'electrical-inspection': { name: 'Electrical Inspection', base: 50 },
    'emergency': { name: 'Emergency Assistance', base: 65, multiplier: { car: 1, suv: 1.1, truck: 1.25, van: 1.2 } }
  };
  
  const addOnPricing = {
    'terminal-clean': { name: 'Terminal Cleaning', price: 15 },
    'cable-repair': { name: 'Cable Repair', price: 40 },
    'corrosion-treatment': { name: 'Corrosion Treatment', price: 20 },
    'load-test': { name: 'Extended Load Test', price: 15 }
  };
  
  estimateBtn.addEventListener('click', function() {
    const service = serviceSelect.value;
    const vehicle = vehicleSelect.value;
    
    if (!service) {
      window.showToast('Please select a service', 'error');
      return;
    }
    
    const serviceData = pricingBase[service];
    if (!serviceData) return;
    
    let total = serviceData.base;
    let multiplier = 1;
    const breakdown = [];
    
    if (serviceData.multiplier && vehicle) {
      multiplier = serviceData.multiplier[vehicle] || 1;
    }
    total = total * multiplier;
    
    breakdown.push({ label: serviceData.name, value: '$' + serviceData.base.toFixed(2) });
    if (multiplier > 1) {
      const adjusted = Math.round(serviceData.base * multiplier * 100) / 100;
      breakdown.push({ label: 'Vehicle adjustment (' + vehicle + ' x' + multiplier + ')', value: '$' + adjusted.toFixed(2) });
    }
    
    if (addService.value) {
      const addon = addOnPricing[addService.value];
      if (addon) {
        total += addon.price;
        breakdown.push({ label: addon.name, value: '+$' + addon.price.toFixed(2) });
      }
    }
    
    const finalPrice = Math.round(total * 100) / 100;
    
    if (estimateBreakdown) {
      estimateBreakdown.innerHTML = breakdown.map(row => (
        '<div class="flex justify-between gap-4"><span>' + row.label + '</span><span class="font-medium text-gray-900 dark:text-white">' + row.value + '</span></div>'
      )).join('') + '<div class="flex justify-between gap-4 pt-2 border-t border-gray-300 dark:border-gray-600 font-semibold"><span>Total estimate</span><span class="text-orange-600 dark:text-orange-400">$' + finalPrice.toFixed(2) + '</span></div>';
    }
    
    estimatedPrice.textContent = '$' + finalPrice.toFixed(2);
    estimateResult.classList.remove('hidden');
    
    estimateResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
  
  resetEstimate.addEventListener('click', function() {
    serviceSelect.value = '';
    vehicleSelect.value = 'car';
    addService.value = '';
    estimateResult.classList.add('hidden');
  });
});
