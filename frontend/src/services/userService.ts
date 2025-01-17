import type { User } from "../models/User";
import type { UserLogin } from "../models/UserLogin";
import type { UserRegister } from "../models/UserRegister";

const API_URL = "http://127.0.0.1:8000/api";

class userService {
    async register(user: UserRegister) {
        try { 
            const response = await fetch(`${API_URL}/register`, { 
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify(user) 
            }); 
        
            const data = await response.json(); 
            console.log('User registered:', data); 

            setTimeout(() => {
                window.location.href = "/login";
            }, 1000)

        } catch (error) { 
            console.error('Error registering user:', error); 
        }
    }

    async login(user: UserLogin) {
        try { 
            const response = await fetch(`${API_URL}/login`, { 
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify(user) 
            }); 
    
            if (!response.ok) { throw new Error('Request error'); } 
    
            const data = await response.json(); 

            // Create the user to keep it on the storage
            const fetchedUser: User = {
                name: data.user.name,
                lastname: data.user.lastname,
                phone: data.user.phone,
                email: data.user.email,
            }

            sessionStorage.setItem('user', JSON.stringify(fetchedUser));

            setTimeout(() => {
                window.location.href = "/";
            }, 1000)
            console.log('Logged in:', data);

        } catch (error) { 
            console.error('Login error:', error); 
        }
    
    }

    getUser(): User | null {
        const loggedUser = sessionStorage.getItem('user');

        if (!loggedUser) {
            return null
        }
        
        return JSON.parse(loggedUser);
    }
    logout() {
        sessionStorage.removeItem('user');
        window.location.href = "/";
    }
}

export default new userService();