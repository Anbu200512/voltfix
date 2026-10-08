// Contact & Booking
document.addEventListener('DOMContentLoaded', function() {
  const bookingForm = document.getElementById('bookingForm');
  const bookingRef = document.getElementById('bookingRef');
  
  // Load saved bookings
  function loadBookings() {
    const saved = localStorage.getItem('voltfix_bookings');
    return saved ? JSON.parse(saved) : [];
  }
  
  // Save booking
  function saveBooking(booking) {
    const bookings = loadBookings();
    bookings.push(booking);
    localStorage.setItem('voltfix_bookings', JSON.stringify(bookings));
    localStorage.setItem('voltfix_preferences', JSON.stringify({
      lastName: booking.name,
      lastPhone: booking.phone,
      lastEmail: booking.email,
      lastVehicle: booking.vehicleType
    }));
  }
  
  // Generate reference
  function generateRef() {
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `VF-${year}${month}${day}-${random}`;
  }
  
  // Form validation
  function validateForm(data) {
    const required = ['name', 'phone', 'email', 'vehicleType', 'vehicleModel', 'registration', 'service', 'date', 'time'];
    for (let field of required) {
      if (!data[field] || data[field].trim() === '') {
        return { valid: false, message: `Please fill in ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}` };
      }
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return { valid: false, message: 'Please enter a valid email address' };
    }
    
    // Phone validation (basic)
    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    if (data.phone.length < 6 || !phoneRegex.test(data.phone)) {
      return { valid: false, message: 'Please enter a valid phone number' };
    }
    
    // Date validation - not in past
    const selectedDate = new Date(data.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      return { valid: false, message: 'Please select a future date' };
    }
    
    return { valid: true };
  }
  
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(bookingForm);
      const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        vehicleType: formData.get('vehicleType'),
        vehicleModel: formData.get('vehicleModel'),
        registration: formData.get('registration'),
        service: formData.get('service'),
        date: formData.get('date'),
        time: formData.get('time'),
        message: formData.get('message') || '',
        ref: generateRef(),
        createdAt: new Date().toISOString()
      };
      
      const validation = validateForm(data);
      if (!validation.valid) {
        window.showToast(validation.message, 'error');
        return;
      }
      
      // Save booking
      saveBooking(data);
      
      // Show success
      bookingForm.classList.add('hidden');
      if (bookingRef) {
        bookingRef.textContent = data.ref;
        document.getElementById('bookingSuccess').classList.remove('hidden');
      }
      
      window.showToast('Booking submitted successfully!', 'success');
      
      // Scroll to success
      document.getElementById('bookingSuccess')?.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Pre-fill from preferences if available
    const prefs = localStorage.getItem('voltfix_preferences');
    if (prefs) {
      try {
        const p = JSON.parse(prefs);
        if (p.lastName) bookingForm.elements.name.value = p.lastName;
        if (p.lastPhone) bookingForm.elements.phone.value = p.lastPhone;
        if (p.lastEmail) bookingForm.elements.email.value = p.lastEmail;
        if (p.lastVehicle) bookingForm.elements.vehicleType.value = p.lastVehicle;
      } catch (e) {}
    }
  }
  
  // New booking button
  const newBookingBtn = document.getElementById('newBookingBtn');
  if (newBookingBtn) {
    newBookingBtn.addEventListener('click', function() {
      bookingForm.reset();
      bookingForm.classList.remove('hidden');
      document.getElementById('bookingSuccess').classList.add('hidden');
      document.querySelectorAll('.service-pill').forEach(function (pill) { pill.classList.remove('is-active'); });
    });
  }
  
  // Quick service pills
  document.querySelectorAll('.service-pill').forEach(function (pill) {
    pill.addEventListener('click', function () {
      const select = document.getElementById('service');
      if (select) select.value = pill.dataset.service;
      document.querySelectorAll('.service-pill').forEach(function (p) {
        p.classList.toggle('is-active', p === pill);
      });
    });
  });
});
