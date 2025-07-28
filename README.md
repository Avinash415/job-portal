# Job Portal

A full-stack Job Portal application for students and recruiters to interact, apply, and manage jobs. Built using **React**, **Redux**, **Node.js**, **Express**, **MongoDB**, and **Tailwind CSS**.

---

## Overview

This platform enables:

- Students to browse and apply for jobs
- Recruiters/Admins to post jobs and manage applicants
- Secure user authentication with role-based access
- Admin dashboard for managing companies and listings

---

## Project Structure

### Backend – `Express` + `MongoDB`
```
backend/
├── controllers/ # Business logic (e.g., job application logic)
├── middlewares/ # Auth middleware
├── models/ # Mongoose schemas (User, Job, Application)
├── routes/ # REST API routes
├── utils/ # DB connection utility
├── index.js # Express server entry point
```
---
### Frontend – `React` + `Redux` + `Tailwind` + `Vite`
```
frontend/
├── public/ # Static assets
├── src/
│ ├── components/ # Shared and feature-based UI
│ ├── pages/ # Route-based views
│ ├── redux/ # Global state (jobs, auth)
│ ├── App.js # Main app + routes
│ └── index.js # React root entry
├── tailwind.config.js # Tailwind customization
├── vite.config.js # Vite configuration
```
---

## Getting Started

### Prerequisites
```
- Node.js v18+
- MongoDB (local or Atlas)
- npm or yarn
```
### Installation

```bash
git clone https://github.com/Avinash415/job-portal.git
cd job-portal
```
### Install Backend
```bash
cd backend
npm install
```
Create a `.env` file inside `backend/`:

```ini
PORT=5000
CLIENT_URL=http://localhost:5173
MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_jwt_secret
```
### Install Frontend
```bash
cd ../frontend
npm install
```
### Run the App
Start Backend Server
```bash
cd backend
npm run dev
```
Start Frontend Client
```bash
cd frontend
npm run dev
```
Visit: http://localhost:5173

---
## Authentication & Roles
* JWT-based login
* `isAuthenticated` middleware protects routes
* Two roles:
  - Student: Browse & apply for jobs
  - Recruiter/Admin: Post jobs, view applicants, manage companies

---

## API Routes
### Job Application Routes (examples)
| Method	| Endpoint	 | Description| 
|-----------|------------|------------|
|POST	| /api/v1/application/apply/:id	 | Apply to a job |
|GET	| /api/v1/application/get	| Get jobs applied by current user |
|GET	| /api/v1/application/:id/applicants	| Get applicants for a job |
|POST	| /api/v1/application/status/:id/update	| Update application status |


> All routes are protected by middleware and user roles.
---
### UI Screens
UI built with:

* `Tailwind CSS` for styling
* `Framer Motion` for animations
* `React Router` for navigation
* Responsive and admin-friendly layout
---
### Contribution Guide
We welcome contributions! ✨

Steps
* Fork the repo
* Create a new branch: `feature/my-feature`
* Commit your changes: `git commit -m "Add: My Feature"`
* Push to GitHub: `git push origin feature/my-feature`
* Open a Pull Request
---
#### Guidelines
* Keep components modular
* Follow existing folder structure
* Add comments for clarity
* Test before pushing

---
### .gitignore
Make sure these are ignored:

```bash
node_modules/
.env
dist/
build/
.vscode/
```
---
## Tech Stack
|Layer	| Tech |
|-------|------|
|Frontend |	React, Redux, Tailwind CSS|
|Backend	| Node.js, Express, MongoDB |
|Auth	| JWT, Cookie-based sessions |
|Tools	| Vite, Postman, ESLint|

---
### Future Improvements
* Add resume upload (Cloudinary integration exists)
* Pagination for job listings
* Filtering by tags/skills
* Unit tests with Jest
---

### Contact
##### Maintainer: @Avinash415
##### Open an issue for support, questions, or feature requests.
---
**HAPPY CODING**
