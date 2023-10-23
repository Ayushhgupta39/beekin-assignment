# Beekin Job Portal

Beekin Job Portal is a powerful and user-friendly web application designed to simplify the job search and hiring process. It serves as a virtual gateway connecting job seekers and employers, offering a seamless experience for exploring job opportunities and managing applications efficiently.
![landing page](https://github.com/Ayushhgupta39/beekin-assignment/assets/96309609/9def8141-586e-4314-a9a5-07db8b7bbcae)

![jobs page](https://github.com/Ayushhgupta39/beekin-assignment/assets/96309609/53b0bcae-80a0-4631-9193-5806a560696b)


## Technologies Used

1. **React.js**: JavaScript library for building interactive UIs, allowing efficient component-based development and seamless UI updates.

2. **Chakra UI**: React component library simplifying UI development with customizable, accessible, and responsive components, enhancing visual design and user experience.

3. **Node.js**: Server-side JavaScript runtime enabling scalable and high-performance backend development, handling API requests and server-side logic.

4. **Express.js**: Minimalist Node.js framework simplifying API creation, handling HTTP requests, and ensuring efficient backend development.

5. **MongoDB**: NoSQL database storing data in JSON-like format, offering scalability and flexibility for structured data storage in the application.

6. **Axios**: JavaScript library for making HTTP requests, facilitating seamless communication between frontend and backend, ensuring efficient data exchange.

7. **Firebase Authentication**: Secure user authentication service enabling user signup and login using Google accounts, enhancing application security and user experience.

8. **Render**: Cloud platform for deploying backend applications, providing scalable and accessible hosting, ensuring application availability over the internet.

9. **Vercel**: Platform for hosting frontend applications, offering automatic deployments and Git integration, ensuring smooth deployment and accessibility for users.


## Features

### Features

- **Job Listings**: Explore a diverse range of job openings with detailed information about positions, companies, and locations.

- **Job Details**: View comprehensive job descriptions, salary details, benefits, and required experience for each job.

- **User Authentication**: Sign up and log in securely using Google authentication for a personalized experience.

- **One-Tap Apply**: Apply for jobs effortlessly with a single click, streamlining the application process.

- **Application Tracking**: Employers can manage and track job applications efficiently, ensuring a smooth recruitment process.
  ![details page](https://github.com/Ayushhgupta39/beekin-assignment/assets/96309609/179d56fe-44a7-4d4c-997b-b3c2973f9872)

  ![one-tap apply](https://github.com/Ayushhgupta39/beekin-assignment/assets/96309609/4d772288-1591-4985-a79f-83df8cee9c5c)



## How It Works
- **Frontend** : The frontend, built with React.js and Chakra UI, provides an intuitive user interface for job seekers and employers.

- **Backend**: Node.js and Express.js power the backend API, delivering job data and handling user applications. MongoDB stores job listings and applicant information.

- **Authentication**: Firebase Authentication ensures secure user login and signup, integrating seamlessly with Google accounts.

## API Routes

1. **Get Available Job Openings**
`GET /jobs`

This endpoint fetches a list of available job openings.

Example Response:
```
[
  {
    "id": 1,
    "title": "Software Engineer",
    "company": "Example Company",
    "location": "New York, NY"
  },
  {
    "id": 2,
    "title": "Data Analyst",
    "company": "Another Company",
    "location": "San Francisco, CA"
  }
]
```
2. **Apply for a Job**
`POST /jobs/:id/apply`

This endpoint allows users to apply for a job by storing their email in the job's applicants array. Replace :id with the ID of the job you want to apply for.

Example Request:
```
POST /jobs/1/apply
Content-Type: application/json

{
  "email": "applicant@example.com"
}

```
Example Response:
```
{
  "message": "Application submitted successfully. Thank you for applying!"
}

```

## Setup and Deployment

1. **Clone the Repository**:
```
git clone https://github.com/Ayushhgupta39/beekin-assignment.git
cd beekin-assignment
```

2. **Install Dependencies**:
```
cd frontend
npm install
cd ../backend
npm install

```

3. **Configure Environment Variables**:

Create a `.env` file in the `backend` directory.
Add your MongoDB connection URI and other necessary variables.

4. **Set Up Firebase:**
- Create a Firebase project and configure it in your project.
- Enable Google authentication in the Firebase console.
- Update the Firebase configuration in src/firebase.js.

5. **Run the Application Locally**:
``` 
cd backend
npm start
cd ../frontend
npm start
```

## Deployment

The project is deployed on Vercel and can be accessed at [Live Demo](https://beekin-assignment.vercel.app/).

## Contact
For any inquiries, please contact at ayushgupta3902@gmail.com.

***Note***: This project is a part of a assignment for the position of Full Stack Engineer at Beekin. The implementation is based on the provided requirements, showcasing skills in React.js, Node.js, and the development of Full-stack applications.
