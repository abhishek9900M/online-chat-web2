function toggleForms() {
        const registrationForm = document.getElementById('registrationForm').parentNode;
        const loginForm = document.getElementById('loginForm').parentNode;
        
        registrationForm.style.display = registrationForm.style.display === 'none' ? 'block' : 'none';
        loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    }