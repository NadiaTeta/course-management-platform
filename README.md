# course-management-platform
This project is a backend system for managing course allocations, tracking facilitator activities, and handling student reflections. It is built with **Node.js**, **Express**, **Sequelize**, **MySQL**, and **Redis**.

---

## 🚀 Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/NadiaTeta/course-management-platform.git
cd course-management-platform/backend
npm install

PORT=5000

# MySQL database
DB_NAME=your_database
DB_USER=your_user
DB_PASS=your_password
DB_HOST=localhost

# JWT secrets
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d

docker run -p 6379:6379 redis
npm run dev

### API Documentation
Base URL: http://localhost:5000/api

🔐 Auth Endpoints
Method	Endpoint	Description	Body / Params	Response Example
POST	/auth/register	Register a new user	{ name, email, password, role }	201 Created
POST	/auth/login	Login a user	{ email, password }	{ token, user }

📘 Courses
Method	Endpoint	Description
GET	/courses	Get all courses
POST	/courses	Create new course
GET	/courses/:id	Get course by ID
PUT	/courses/:id	Update course
DELETE	/courses/:id	Delete course

🧑‍🏫 Facilitators
Method	Endpoint	Description
GET	/facilitators	Get all facilitators
POST	/facilitators	Add a facilitator
GET	/facilitators/:id	Get facilitator by ID
PUT	/facilitators/:id	Update facilitator
DELETE	/facilitators/:id	Delete facilitator

🧑‍🎓 Students
Method	Endpoint	Description
GET	/students	Get all students
POST	/students	Create new student

🧮 Allocations
Method	Endpoint	Description
GET	/allocations	Get all allocations
POST	/allocations	Assign course to facilitator
GET	/allocations/:id	Get allocation by ID
PUT	/allocations/:id	Update allocation
DELETE	/allocations/:id	Delete allocation

📊 Activity Logs (Module 2: FAT)
Method	Endpoint	Description
GET	/activities	Manager: Get all activities
POST	/activities	Facilitator: Create activity log
GET	/activities/self	Facilitator: View own logs
PUT	/activities/:id	Facilitator: Update own log
DELETE	/activities/:id	Facilitator: Delete own log

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

🔔 Notification System
Redis-backed notification queue

Reminders sent to facilitators who haven't submitted weekly logs.

Alerts sent to managers on submission or missed deadlines.

Background worker script: backgroundWorker.js

Run background worker:

bash
Copy code
node backgroundWorker.js
✅ Assumptions
Roles are either manager or facilitator, and protected routes are accessed via JWT tokens.

A facilitator can only view/update/delete their own logs.

Redis is used only for notification queuing.

Notification delivery (email/SMS) is simulated by logging to the console.

⚠️ Limitations
No frontend UI is included in this repo.

Email/push notification integration is not yet implemented (only console logs).

No pagination/filtering on all endpoints.

No rate limiting or request throttling in place.

Basic validation; no schema validation library used.

🧪 Running Tests
bash
Copy code
npm test
Tests are written using Jest and Supertest.

💡 Future Enhancements
Add pagination, search & filters to all endpoints.

Full email and push notification integration.

Admin dashboard for managers.

UI frontend using React or another JS framework.