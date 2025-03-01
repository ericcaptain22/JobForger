## **🚀 JobForger: Resume Builder & Job Portal**  
A **Django & React.js**-powered application that allows users to **build resumes** from templates and serves as a **job portal** where recruiters can filter resumes based on skills.  

---

## **📌 Features**
✔ **User Authentication** (Register, Login, Logout) with JWT  
✔ **Resume Builder** (Auto-save & Pre-fill user details)  
✔ **Dashboard** (Displays user profile & saved resume)  
✔ **Job Portal** (Recruiters can filter resumes by skills)  
✔ **MySQL Database Integration**  
✔ **React.js Frontend with Tailwind CSS**  

---

## **📁 Project Structure**
```
JobForger/
│── backend/                 # Django Backend
│   ├── apps/
│   │   ├── users/           # User authentication
│   │   ├── resumes/         # Resume creation & management
│   │   ├── jobs/            # Job listings
│   ├── config/              # Django settings & configurations
│── frontend/                # React.js Frontend
│   ├── src/
│   │   ├── pages/           # Login, Dashboard, Resume Builder
│   │   ├── components/      # Navbar, Footer, etc.
│   ├── public/
│── README.md                # Documentation
│── requirements.txt         # Backend dependencies
│── package.json             # Frontend dependencies
```

---

## **⚙️ Installation & Setup**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/ericcaptain22/JobForger.git
cd JobForger
```

---

### **2️⃣ Backend Setup (Django)**
#### **🔹 Create Virtual Environment & Install Dependencies**
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

#### **🔹 Configure MySQL Database**
Edit **`backend/config/settings.py`** and update:
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'resume_db',
        'USER': 'your_db_user',
        'PASSWORD': 'your_db_password',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

#### **🔹 Apply Migrations & Create Superuser**
```bash
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py createsuperuser
```

#### **🔹 Run Django Server**
```bash
python3 manage.py runserver
```
📌 **API Base URL:** `http://127.0.0.1:8000/api/`

---

### **3️⃣ Frontend Setup (React.js)**
```bash
cd frontend
npm install
npm start
```
📌 **Frontend URL:** `http://localhost:3000/`

---

## **📌 API Endpoints**
### **🔹 User Authentication**
| Method | Endpoint | Description |
|--------|---------|------------|
| `POST` | `/api/users/register/` | Register a new user |
| `POST` | `/api/users/login/` | Authenticate & get JWT tokens |
| `GET` | `/api/users/me/` | Get logged-in user details |

### **🔹 Resumes**
| Method | Endpoint | Description |
|--------|---------|------------|
| `GET` | `/api/resumes/my-resume/` | Fetch or auto-create user's resume |
| `PATCH` | `/api/resumes/my-resume/` | Auto-save user resume |

### **🔹 Jobs**
| Method | Endpoint | Description |
|--------|---------|------------|
| `GET` | `/api/jobs/` | Get available job postings |

---

## **🔑 User Flow**
1️⃣ **Register/Login**  
2️⃣ **Dashboard** loads user details & previously saved resume  
3️⃣ **Edit Resume** (Auto-save on updates)  
4️⃣ **View Job Listings**  
5️⃣ **Logout & Data is Saved**  

---

## **📸 Screenshots**
📌 **Login Page**  
📌 **Dashboard with Auto-Filled Resume**  
📌 **Job Listings**  

---

## **🛠️ Technologies Used**
### **Backend**
- Python **Django** & **Django REST Framework**
- **JWT Authentication**
- **MySQL Database**
- **CORS Headers**

### **Frontend**
- **React.js**
- **Tailwind CSS**
- **Draft.js** (Rich text editing)

---

## **📜 License**
This project is **open-source**. Feel free to modify and use it! 😊🔥  

---

## **💡 Contributors**
👤 **Your Name**  
📌 **GitHub:** [ericcaptain22](https://github.com/ericcaptain22)  

---

## **🚀 Next Steps**
- ✅ **Implement Job Applications**  
- ✅ **Enhance Resume Templates**  
- ✅ **Add Recruiter Dashboard**  

📢 **Contributions are welcome!** 😊🎉  

---
