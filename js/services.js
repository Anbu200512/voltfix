// Services
document.addEventListener('DOMContentLoaded', function() {
  const serviceFilter = document.getElementById('serviceFilter');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  function applyFilter(filter) {
    serviceCards.forEach(card => {
      const category = card.getAttribute('data-category');
      card.classList.toggle('hidden', filter !== 'all' && category !== filter);
    });
    filterBtns.forEach(btn => {
      btn.classList.toggle('is-active', btn.getAttribute('data-filter') === filter);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      applyFilter(this.getAttribute('data-filter'));
    });
  });

  if (filterBtns.length) {
    applyFilter('all');
  }

  if (serviceFilter) {
    serviceFilter.addEventListener('change', function() {
      applyFilter(this.value);
    });
  }
  
  // Service details modal
  window.openServiceModal = function(serviceId) {
    const modal = document.getElementById('serviceModal');
    const title = document.getElementById('serviceModalTitle');
    const content = document.getElementById('serviceModalContent');
    
    const serviceData = {
      'battery-testing': {
        title: 'Battery Testing',
        content: `
          <div class="space-y-4">
            <p>Comprehensive battery health assessment using professional testing equipment.</p>
            <h4 class="font-semibold text-gray-900 dark:text-white">What's Included:</h4>
            <ul class="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Battery voltage test</li>
              <li>Cold cranking amps (CCA) test</li>
              <li>State of charge analysis</li>
              <li>Battery condition report</li>
              <li>Professional recommendation</li>
            </ul>
            <p class="font-semibold text-orange-600 dark:text-orange-400">Starting Price: $15 - $25</p>
          </div>
        `
      },
      'battery-replacement': {
        title: 'Battery Replacement',
        content: `
          <div class="space-y-4">
            <p>Fast and reliable battery replacement with quality batteries to suit your vehicle.</p>
            <h4 class="font-semibold text-gray-900 dark:text-white">What's Included:</h4>
            <ul class="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Old battery removal & disposal</li>
              <li>Terminal cleaning</li>
              <li>New battery fitting & testing</li>
              <li>Charging system check</li>
              <li>Warranty registration</li>
            </ul>
            <p class="font-semibold text-orange-600 dark:text-orange-400">Starting Price: $150 - $250</p>
          </div>
        `
      },
      'battery-charging': {
        title: 'Battery Charging',
        content: `
          <div class="space-y-4">
            <p>Safe battery charging using smart chargers to restore charge without damaging your battery.</p>
            <h4 class="font-semibold text-gray-900 dark:text-white">What's Included:</h4>
            <ul class="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Battery condition assessment</li>
              <li>Smart slow/fast charge as appropriate</li>
              <li>Voltage monitoring</li>
              <li>Post-charge testing</li>
              <li>Safety checks</li>
            </ul>
            <p class="font-semibold text-orange-600 dark:text-orange-400">Starting Price: $25 - $40</p>
          </div>
        `
      },
      'alternator': {
        title: 'Alternator Diagnostics',
        content: `
          <div class="space-y-4">
            <p>Professional alternator testing to ensure your charging system is working correctly.</p>
            <h4 class="font-semibold text-gray-900 dark:text-white">What's Included:</h4>
            <ul class="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Output voltage testing</li>
              <li>Amperage output test</li>
              <li>Belt inspection</li>
              <li>Wiring connection check</li>
              <li>Load testing under operating conditions</li>
            </ul>
            <p class="font-semibold text-orange-600 dark:text-orange-400">Starting Price: $40 - $70</p>
          </div>
        `
      },
      'starter': {
        title: 'Starter Motor Diagnostics',
        content: `
          <div class="space-y-4">
            <p>Thorough starter motor testing to diagnose starting issues.</p>
            <h4 class="font-semibold text-gray-900 dark:text-white">What's Included:</h4>
            <ul class="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Cranking voltage test</li>
              <li>Starter draw test</li>
              <li>Solenoid testing</li>
              <li>Circuit inspection</li>
              <li>Comprehensive report</li>
            </ul>
            <p class="font-semibold text-orange-600 dark:text-orange-400">Starting Price: $40 - $70</p>
          </div>
        `
      },
      'wiring': {
        title: 'Wiring Repair',
        content: `
          <div class="space-y-4">
            <p>Expert automotive wiring repair for electrical faults and damaged harnesses.</p>
            <h4 class="font-semibold text-gray-900 dark:text-white">What's Included:</h4>
            <ul class="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Fault finding & tracing</li>
              <li>Wire repair/replacement</li>
              <li>Connector repair</li>
              <li>Insulation & protection</li>
              <li>Testing after repair</li>
            </ul>
            <p class="font-semibold text-orange-600 dark:text-orange-400">Starting Price: $60 - $150</p>
          </div>
        `
      },
      'fuse': {
        title: 'Fuse & Electrical Issue Repair',
        content: `
          <div class="space-y-4">
            <p>Diagnosis and repair of blown fuses and common electrical circuit issues.</p>
            <h4 class="font-semibold text-gray-900 dark:text-white">What's Included:</h4>
            <ul class="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Fuse box inspection</li>
              <li>Circuit testing</li>
              <li>Short circuit detection</li>
              <li>Component testing</li>
              <li>Repair & verification</li>
            </ul>
            <p class="font-semibold text-orange-600 dark:text-orange-400">Starting Price: $35 - $80</p>
          </div>
        `
      },
      'inspection': {
        title: 'Electrical Component Inspection',
        content: `
          <div class="space-y-4">
            <p>Thorough inspection of electrical components to identify potential issues early.</p>
            <h4 class="font-semibold text-gray-900 dark:text-white">What's Included:</h4>
            <ul class="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Lights, switches & relays check</li>
              <li>Sensors & modules inspection</li>
              <li>Ground connections check</li>
              <li>Battery & charging system overview</li>
              <li>Detailed inspection report</li>
            </ul>
            <p class="font-semibold text-orange-600 dark:text-orange-400">Starting Price: $40 - $60</p>
          </div>
        `
      },
      'emergency': {
        title: 'Emergency Battery Assistance',
        content: `
          <div class="space-y-4">
            <p>Quick emergency battery service when you're stranded and need immediate help.</p>
            <h4 class="font-semibold text-gray-900 dark:text-white">What's Included:</h4>
            <ul class="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>On-site battery jump start (where possible)</li>
              <li>Battery health check</li>
              <li>Emergency replacement options</li>
              <li>Troubleshooting starting issues</li>
              <li>Immediate assistance</li>
            </ul>
            <p class="font-semibold text-orange-600 dark:text-orange-400">Starting Price: $40 - $90</p>
          </div>
        `
      }
    };
    
    if (title && content && serviceData[serviceId]) {
      title.textContent = serviceData[serviceId].title;
      content.innerHTML = serviceData[serviceId].content;
      window.openModal('serviceModal');
    }
  };
});
