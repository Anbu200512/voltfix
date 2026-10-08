// Diagnostics tool
document.addEventListener('DOMContentLoaded', function() {
  const symptomSelect = document.getElementById('symptomSelect');
  const diagnoseBtn = document.getElementById('diagnoseBtn');
  const resetBtn = document.getElementById('resetBtn');
  const resultDiv = document.getElementById('diagnosisResult');
  
  if (!symptomSelect || !diagnoseBtn || !resultDiv) return;
  
  const diagnosisData = {
    'won-start': {
      category: 'Starting System Issue',
      issue: 'Vehicle won\'t start',
      recommendation: 'Battery Testing & Possible Replacement',
      service: 'Battery Testing, Battery Replacement, Starter Motor Diagnostics',
      urgency: 'High',
      description: 'This could indicate a dead battery, failed starter, or alternator issue.'
    },
    'weak-start': {
      category: 'Battery Power Issue',
      issue: 'Weak/slow starting',
      recommendation: 'Battery Health Check',
      service: 'Battery Testing, Battery Charging',
      urgency: 'Medium',
      description: 'Your battery may be losing charge capacity or nearing end of life.'
    },
    'battery-light': {
      category: 'Charging System Issue',
      issue: 'Battery warning light',
      recommendation: 'Alternator Diagnostics',
      service: 'Alternator Diagnostics, Battery Testing',
      urgency: 'High',
      description: 'Warning light often indicates charging system problem - alternator may not be charging battery properly.'
    },
    'dim-headlights': {
      category: 'Electrical Power Issue',
      issue: 'Headlights dimming',
      recommendation: 'Alternator & Battery Check',
      service: 'Alternator Diagnostics, Battery Testing, Electrical Inspection',
      urgency: 'Medium',
      description: 'Dimming lights while idling can indicate weak alternator output.'
    },
    'accessories': {
      category: 'Electrical Circuit Issue',
      issue: 'Electrical accessories not working',
      recommendation: 'Electrical Inspection',
      service: 'Fuse & Electrical Issue Repair, Electrical Component Inspection, Wiring Inspection',
      urgency: 'Medium',
      description: 'Could be a blown fuse, loose connection, or wiring issue.'
    },
    'drains': {
      category: 'Parasitic Drain Issue',
      issue: 'Battery drains quickly',
      recommendation: 'Electrical Drain Test',
      service: 'Electrical Component Inspection, Battery Testing, Wiring Inspection',
      urgency: 'Medium',
      description: 'Parasitic drain means something is drawing power when vehicle is off.'
    },
    'wiring': {
      category: 'Wiring Issue',
      issue: 'Wiring/fuse issue',
      recommendation: 'Wiring Repair',
      service: 'Wiring Repair, Fuse & Electrical Issue Repair',
      urgency: 'High',
      description: 'Damaged wiring or blown fuses need professional inspection and repair.'
    }
  };
  
  diagnoseBtn.addEventListener('click', function() {
    const selected = symptomSelect.value;
    
    if (!selected) {
      window.showToast('Please select a symptom', 'error');
      return;
    }
    
    const data = diagnosisData[selected];
    if (data) {
      const urgencyColor = data.urgency === 'High' ? 'text-red-600 dark:text-red-400' : 
                          data.urgency === 'Medium' ? 'text-yellow-600 dark:text-yellow-400' : 
                          'text-green-600 dark:text-green-400';
      
      resultDiv.innerHTML = `
        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Diagnosis Result</h3>
          
          <div class="space-y-4">
            <div>
              <p class="text-sm text-gray-600 dark:text-gray-400">Category</p>
              <p class="font-semibold text-gray-900 dark:text-white">${data.category}</p>
            </div>
            
            <div>
              <p class="text-sm text-gray-600 dark:text-gray-400">Possible Issue</p>
              <p class="font-semibold text-gray-900 dark:text-white">${data.issue}</p>
            </div>
            
            <div>
              <p class="text-sm text-gray-600 dark:text-gray-400">Urgency</p>
              <p class="font-semibold ${urgencyColor}">${data.urgency}</p>
            </div>
            
            <div>
              <p class="text-sm text-gray-600 dark:text-gray-400">Description</p>
              <p class="text-gray-700 dark:text-gray-300">${data.description}</p>
            </div>
            
            <div>
              <p class="text-sm text-gray-600 dark:text-gray-400">Recommended Action</p>
              <p class="font-semibold text-orange-600 dark:text-orange-400">${data.recommendation}</p>
            </div>
            
            <div>
              <p class="text-sm text-gray-600 dark:text-gray-400">Suggested Services</p>
              <p class="text-gray-700 dark:text-gray-300">${data.service}</p>
            </div>
            
            <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mt-4">
              <p class="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Important:</strong> This is only a basic website diagnostic guide and not a professional vehicle diagnosis. For accurate diagnosis, please book a professional inspection with our technicians.
              </p>
            </div>
            
            <div class="flex gap-3 mt-6">
              <a href="contact.html" class="btn-primary">
                <i data-lucide="calendar"></i>
                Book Service
              </a>
              <button onclick="location.reload()" class="btn-secondary">
                <i data-lucide="refresh-cw"></i>
                Reset
              </button>
            </div>
          </div>
        </div>
      `;
      resultDiv.classList.remove('hidden');
      
      // Re-initialize lucide icons
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
      
      // Scroll to result
      resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
  
  resetBtn.addEventListener('click', function() {
    symptomSelect.value = '';
    resultDiv.classList.add('hidden');
    resultDiv.innerHTML = '';
  });
});
