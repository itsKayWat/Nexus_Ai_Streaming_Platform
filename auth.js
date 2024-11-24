class Auth {
    constructor() {
        this.isAuthenticated = false;
        this.checkAuthState();
    }

    checkAuthState() {
        // Check if user is logged in (e.g., check localStorage or session)
        this.isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
        this.updateUI();
    }

    login(email, password) {
        // Simulate login (replace with actual API call)
        this.isAuthenticated = true;
        localStorage.setItem('isAuthenticated', 'true');
        this.updateUI();
        window.location.href = 'index.html';
    }

    logout() {
        this.isAuthenticated = false;
        localStorage.removeItem('isAuthenticated');
        this.updateUI();
        window.location.href = 'index.html';
    }

    updateUI() {
        const navAuth = document.querySelector('.nav-auth');
        if (navAuth) {
            if (this.isAuthenticated) {
                navAuth.innerHTML = `
                    <button class="profile-btn" aria-label="Profile">
                        <i class="fas fa-user"></i>
                    </button>
                    <button onclick="auth.logout()" class="logout-btn" aria-label="Logout">
                        Logout
                    </button>
                `;
            } else {
                navAuth.innerHTML = `
                    <button onclick="window.location.href='login.html'" class="login-btn" aria-label="Login">
                        Login
                    </button>
                    <button onclick="window.location.href='signup.html'" class="signup-btn" aria-label="Sign Up">
                        Sign Up
                    </button>
                `;
            }
        }
    }
}

const auth = new Auth(); 