document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple authentication (for demo purposes only)
    if (username === 'admin' && password === 'admin123') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password');
    }
});

document.getElementById('logoutBtn').addEventListener('click', function() {
    window.location.href = 'index.html';
});