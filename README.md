# course-management-platform
This project is a backend system for managing course allocations, tracking facilitator activities, and handling student reflections. It is built with **Node.js**, **Express**, **Sequelize**, **MySQL**, and **Redis**.

---

## 🚀 Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/NadiaTeta/course-management-platform.git
cd course-management-platform/backend
npm install
```
PORT=5000

### MySQL database
DB_NAME=your_database
DB_USER=your_user
DB_PASS=your_password
DB_HOST=localhost

### JWT secrets
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d
```sh
docker run -p 6379:6379 redis
npm run dev
```
### API Documentation
Base URL: http://localhost:5000/api

🔐 Auth Endpoints
```sh
Method	Endpoint	    Description	         Body / Params	                         Response Example
POST	/auth/register	Register a new user	{ name, email, password, role }	          201 Created
POST	/auth/login	    Login a user	      { username, password }	{ token, user }
```
📘 Courses
Method	Endpoint	    Description
GET	    /courses	    Get all courses
POST	  /courses	    Create new course
GET	    /courses/:id	Get course by ID
PUT	    /courses/:id	Update course
DELETE	/courses/:id	Delete course

🧮 Allocations
Method	  Endpoint	      Description
GET     /allocations	    Get all allocations
POST	  /allocations	    Assign course to facilitator
GET	    /allocations/:id	Get allocation by ID
PUT	    /allocations/:id	Update allocation
DELETE	/allocations/:id	Delete allocation

📊 Activity Logs 
Method	Endpoint                  Description
GET	    /activities              	Manager: Get all activities
POST	  /activities	              Facilitator:  Create activity log
GET	    /activities/self	        Facilitator: View own logs
PUT	    /activities/:id	          Facilitator: Update own log
DELETE	/activities/:id	          Facilitator: Delete own log

Example request:

{
  "allocationId": 1,
  "week": 3,
  "attendance": [true, true, false],
  "formativeOneGrading": "Done",
  "formativeTwoGrading": "Pending",
  "summativeGrading": "Not Started",
  "courseModeration": "Done",
  "intranetSync": "Pending",
  "gradeBookStatus": "Pending"
}

### Notification System
Redis-backed notification queue

Reminders sent to facilitators who haven't submitted weekly logs.

Alerts sent to managers on submission or missed deadlines.

Background worker script: backgroundWorker.js

Run background worker:
```sh
node backgroundWorker.js
```
### Assumptions
Roles are either manager, facilitator or students, and protected routes are accessed via JWT tokens.

A facilitator can only view/update/delete their own logs.

### Running Tests
```sh
npm test
```
Tests are written using Jest and Supertest.

### Future Enhancements
Add pagination, search & filters to all endpoints.

Full email and push notification integration.

Admin dashboard for managers.

UI frontend using React or another JS framework.
