

## 🛠️ Development Environment Setup
✅ Install tools: **Node.js, npm, MongoDB, VS Code**.  
✅ Initialize the project:
```sh
npm init
```
✅ Install dependencies:
```sh
npm install express mongoose dotenv
```

---

## ⚙️ Backend Development
🛠️ Create REST APIs for:
- 👤 **User Authentication** (Register/Login).  
- 🛍️ **Product Management** (CRUD operations).  
- 📦 **Order Handling** (Orders & Transactions).  

📌 **Database Design:**
- 🏛️ **MongoDB Schemas** for Users, Products, Orders.  
- 🛡️ Implement **middleware** for validation & error handling.  

---

## 🎨 Frontend Development
🖥️ Set up **React project** with `create-react-app` or `Vite`.  
🎨 Build **key UI components**:
- 🔑 **User Pages** (Login, Register, Profile).  
- 🛒 **Product Pages** (Listings, Search, Details).  
- 🛍️ **Order Pages** (Cart, Checkout, History).  
🔀 Use **React Router** for navigation.  
📦 Manage **state** with Redux or Context API.  

---

## 🔗 Integration, Testing & Deployment
🔗 Integrate **Frontend & Backend** using API calls.  
🛠️ Test with **Postman** and fix bugs 🐞.  
🚀 **Deploy** the project:
- 🔥 **Backend** → Heroku, Render, or AWS.  
- 🌐 **Frontend** → Netlify or Vercel.  
🛡️ Ensure **security & performance** before launch!  

---

## 🎯 Final Deliverable
✅ A **fully functional MERN-based** e-commerce app featuring:
- 🔒 **Secure Authentication**.  
- 📦 **Product & Order Management**.  
- 📱 **Responsive & User-Friendly UI**.  
✅ Fully **tested** & **deployed online**! 🚀  

---

🔥 **Let’s build something awesome together!** 💻⚡  

# Milestone 2: Project Structure & Login Page 🚀  

## Overview  
In Milestone 2, we focused on structuring the project, setting up both the frontend and backend, and developing the Login Page for the e-commerce application.  

## Key Accomplishments  

### 📁 Project Structure  
- Organized the project with separate frontend/ and backend/ directories.  

### 🌐 Frontend Setup  
- Initialized a React app for building the user interface.  
- Configured *Tailwind CSS* for utility-based styling.  
- Implemented a fully functional and styled *Login Page*.  

### 🛠 Backend Setup  
- Set up a basic *Node.js + Express* server to prepare for future API integration.  

### 🎯 Learning Outcomes  
By completing this milestone, we learned:  
- How to structure a full-stack project.  
- Setting up a React application with Tailwind CSS.  
- Configuring a Node.js backend.  
- Creating a login page with basic styling and functionality.  

## ✅ Submission Details  
- Code is pushed to the *GitHub repository* created in Milestone 1.  
- The repository includes:  
  - *Proper folder structure* (frontend & backend).  
  - *Functional Login Page*.  
  - *Updated README* summarizing the progress.  

🚀 Ready for the next milestone


📌** Milestone 3** :roject Setup for Backend
In this milestone, we successfully set up the backend for our Ecommerce project using Node.js, Express.js, and MongoDB.

✅ Achievements in this Milestone
Set up a Node.js backend server using Express.
Configured the server to listen on a designated port.
Integrated MongoDB for efficient data storage.
Established a connection between the server and MongoDB to confirm successful integration.


# Milestone 4 - User Model, Controllers & File Uploads

## Introduction 🚀
Welcome to Milestone 4! In this milestone, we will focus on enhancing our backend by implementing a User Model, setting up controllers to handle user-related data, and enabling file uploads using Multer. By the end of this milestone, you will have a structured way to store user data, manage interactions, and support file uploads.

---

## Learning Goals 🎯
By the end of this milestone, you will:
- **Create a User Model**: Define the structure of user data in the database.
- **Create a User Controller**: Manage user-related operations such as adding and retrieving user information.
- **Enable and Configure Multer**: Implement file uploads to store user profile pictures or other files.
- **Update the README file**: Document your progress effectively.

---

## Key Concepts 📌
### 1. What’s a Model?
A **model** is like a blueprint that defines how data is stored in the database. In MongoDB, we use **Schemas** to structure our data.

- Example: A **User Model** may include fields like `name`, `email`, and `password`.
- This ensures consistency in how data is saved and retrieved.

### 2. What’s a Controller?
A **controller** is responsible for handling user interactions with the application. It acts as an intermediary between the user and the database.

- Example: When a user signs up, the controller handles the request, processes the data, and saves it to the database.
- Think of it as a **manager** that directs requests and responses efficiently.

### 3. File Uploads with Multer
Multer is a middleware for handling file uploads in Node.js applications.

- It enables users to upload profile pictures or other documents.
- It stores files in a designated folder and provides access to them when needed.

---

## Steps to Complete Milestone 4 📝
This milestone includes the following steps:

1. **Create the User Model**
   - Define a schema for user data using Mongoose.
   - Ensure fields like `name`, `email`, `password`, and `profilePicture` are included.

2. **Create the User Controller**
   - Implement functions to handle user-related actions such as registering a user and retrieving user data.

3. **Set Up Multer for File Uploads**
   - Configure Multer to allow users to upload files.
   - Store uploaded files in a designated folder.
   
4. **Update the README File**
   - Document the new changes made in this milestone.
   - Provide clear instructions on how to use the new features.

---

## Submission Guidelines 📥
To complete this milestone, follow these submission steps:

✅ Push your code to the same GitHub repository used for previous milestones.
✅ Ensure your repository is **publicly accessible**.
✅ Update your **README file** with a section summarizing Milestone 4.
✅ Submit your repository link as per the assignment requirements.

---

## Next Steps 🚀
In the next milestone, we will introduce **more advanced features** to enhance your app! Keep up the great work, and feel free to reach out for help if needed.

Good luck, Kalvians! ✨

# Livebooks - Backend Web Development [V2]

## Milestone 6: Deploying Your API (Local and Production)

### Introduction 📌
Welcome to Milestone 6! 🌟

In the last lesson, we created the signup page. Now, we will develop a backend endpoint for the Signup page to store user data securely. This involves encrypting the password and ensuring all user details are safely stored in the database.

Let's dive in! 🚀

---

## Learning Goals 🎯
By the end of this milestone, you will:
- Understand how to encrypt passwords before saving them.
- Learn how to securely store user data in the database.

### Why Encrypt Passwords?
✅ **Protect User Data** - Prevents password leaks if the database is compromised.
✅ **Privacy** - Ensures passwords are not visible to anyone, even developers.
✅ **Compliance** - Meets security standards like GDPR and PCI-DSS.
✅ **Prevents Password Theft** - Encrypted passwords are harder to crack or misuse.

---

## Steps for Milestone 6 📝
### 1️⃣ Encrypt the Password
- Use `bcrypt` to hash the user's password during signup.
- Store the hashed password in the database instead of plain text.

### 2️⃣ Store Complete User Data
- Save user details (e.g., name, email, etc.) in the database.
- Ensure that the password remains encrypted.

---

## Submission Guidelines 📥
### ✅ Push Your Code
- Push your code to the **same GitHub repository** used for previous milestones.

### ✅ Public Repository
- Ensure your repository is **publicly accessible**.

### ✅ Update README
- Add a section summarizing your progress for **Milestone 6**.

### ✅ Share the Link
- Submit your **GitHub repository link** in the assignment submission section.

---

## Next Steps 🚀
In the next milestone, we’ll work on building more advanced features for your app!

Keep up the fantastic work, and reach out to your mentor if you need any help.

Good luck, Kalvians! ✨

# Livebooks - Databases [V3]

## Milestone 7: Testing API with API Client & Setting Up Your Database

### Introduction 📌
Welcome to Milestone 7! 🌟

In this milestone, we will create a backend endpoint for user login. The focus is on validating user credentials and verifying the encrypted password stored in the database.

Let's dive in! 🚀

---

## Learning Goals 🎯
By the end of this milestone, you will:
- Understand how to validate user credentials during login.
- Learn how to compare an encrypted password with the user’s input.

### Why Encrypt Passwords?
✅ **Protect User Data** - Keeps passwords safe even if the database is compromised.
✅ **Privacy** - Ensures passwords aren’t stored in plain text.
✅ **Compliance** - Meets security standards like GDPR and PCI-DSS.
✅ **Prevents Password Theft** - Hashed passwords are difficult to decipher, enhancing security.

---

## How Login Authentication Works 🔑
### 1️⃣ User Enters Credentials
- The user provides their email/username and password on the login page.

### 2️⃣ Fetch User Data from Database
- The backend retrieves the user record based on the provided email/username.
- If the user is not found, return an error: **"User does not exist."**

### 3️⃣ Compare Encrypted Passwords
- Process the user's input password using the same hashing algorithm (e.g., bcrypt).
- Compare the resulting hash to the stored hashed password.
- If they match, the user is authenticated; if not, send an error.

---

## Steps for Milestone 7 📝
### ✅ Create Login Endpoint
- Accept user credentials (email/username and password).
- Retrieve the corresponding user from the database.

### ✅ Validate Password
- Use bcrypt to hash the entered password.
- Compare it with the stored hashed password for authentication.

📌 **Note:** Password hashing is a **one-way process**. Instead of decrypting, we compare hashes.

---

## Submission Guidelines 📥
### ✅ Push Your Code
- Commit and push your changes to your **existing GitHub repository**.

### ✅ Public Repository
- Ensure your repository is **publicly accessible**.

### ✅ Update README
- Add a section summarizing your login functionality progress for **Milestone 7**.

### ✅ Share the Link
- Provide your **GitHub repository link** in the assignment submission section.

---

## Next Steps 🚀
In the next milestone, we’ll build more advanced features for your app!

Keep up the fantastic work, and reach out to your mentor if you need any help.

Good luck, Kalvians! ✨

# Livebooks - Frontend Development [V3]

## Milestone 8: Creating a Product Card Component & Homepage Design

### Introduction 📌
Welcome to Milestone 8! 🌟

In this milestone, we will create a frontend card component for products and design a homepage to display these cards dynamically for each product.

Let's dive in! 🚀

---

## Learning Goals 🎯
By the end of this milestone, you will:
- Learn how to create a **card component**.
- Learn how to **display those cards dynamically** on the products page.

### Why Create Card Components?
✅ **Showcase Products Effectively** - Presents product details in a clear and visually appealing way.
✅ **Reusable Design** - Can be used across multiple pages or sections of the app.
✅ **Improved User Experience** - Makes it easy for users to browse and interact with products.
✅ **Organized Layout** - Keeps the homepage clean and structured.

---

## How to Display a Single Card for Multiple Products?
### 1️⃣ Create a Dynamic Component
- Design a **single card component** that accepts product details as props.

### 2️⃣ Use Mapping
- Use **array mapping** to iterate over the product list and render a card for each product.

### 3️⃣ Pass Data Dynamically
- Pass unique product information (e.g., **name, price, image**) to each card.

### 4️⃣ Maintain Consistency
- Ensure the **layout remains uniform** for all products.

---

## Steps for Milestone 8 📝
### ✅ Create the Card Component
- Design a **reusable** card component with props for product details (e.g., name, image, price).

### ✅ Design the Homepage Layout
- Set up a **grid layout** or **flexbox** for displaying multiple cards neatly.

---

## Submission Guidelines 📥
### ✅ Push Your Code
- Commit and push your changes to your **GitHub repository**.

### ✅ Public Repository
- Ensure your repository is **publicly accessible**.

### ✅ Update README
- Add a section summarizing your **progress for Milestone 8**.

### ✅ Share the Link
- Provide your **GitHub repository link** in the assignment submission section.

---

## Next Steps 🚀
In the next milestone, we’ll **enhance the product cards** with additional features like filtering and sorting!

Keep up the fantastic work, and reach out to your mentor if you need any help.

Good luck, Kalvians! ✨

# Livebooks - Databases [V3]

## Milestone 9: Writing Mongoose Schema & Creating Product Input Form

### Introduction 📌
Welcome to Milestone 9! 🌟

In this milestone, we will create a frontend form for product input. This form will collect product details, including multiple images, which will later be stored in the database and displayed on the homepage created in the previous milestone.

Let's dive in! 🚀

---

## Learning Goals 🎯
By the end of this milestone, you will:
- Learn how to **create a form** that collects all product details.
- Learn how to **accept multiple images as input** for each product.

### Why Create a Product Form?
✅ **Efficient Product Data Collection** - Ensures structured product details are gathered.
✅ **Image Upload Support** - Enhances the product listing with multiple images.
✅ **Database Integration** - Saves product details for future display.
✅ **Scalability** - Can be extended with admin roles and shop profiles.

---

## Steps for Milestone 9 📝
### ✅ Create the Product Input Form
- Design a **form component** that accepts product details like **name, description, price, and images**.
- Implement functionality to **upload multiple images**.

📌 **Note:** This milestone covers the basics of product creation. You can expand it further by:
- **Adding Admin Access** - Restrict product uploads to admins only.
- **Creating Shop Profiles** - Allow only shop owners to upload products.

---

## Submission Guidelines 📥
### ✅ Push Your Code
- Commit and push your changes to your **GitHub repository**.

### ✅ Public Repository
- Ensure your repository is **publicly accessible**.

### ✅ Update README
- Add a section summarizing your **progress for Milestone 9**.

### ✅ Share the Link
- Provide your **GitHub repository link** in the assignment submission section.

---

## Next Steps 🚀
In the next milestone, we’ll enhance the product cards with additional features like **filtering and sorting!**

Keep up the great work, and reach out to your mentor if you need any help.

Good luck, Kalvians! ✨

# Follow-Along Project - Milestone 10

## Introduction 📌
Welcome to Milestone 10! 🌟

In this milestone, we will create a **Mongoose schema** for products and build an **endpoint** to store product details in a MongoDB database.

Let’s dive in! 🚀

---

## Learning Goals 🎯
By the end of this milestone, you will:
- Learn how to **write a product schema** using Mongoose.
- Learn how to **create an endpoint** to validate and store product details in MongoDB.

---

## Product Schema 🏗️
Define the structure of product data, including:
- **Name** (String, required)
- **Description** (String, required)
- **Price** (Number, required)
- **Image URL** (String, required)

Ensure each field has proper validation to maintain data integrity.

---

## Endpoint Creation 🌐
- Build a **POST endpoint** to receive product data.
- Validate incoming data before saving it to MongoDB.

### Why Validation?
✅ **Ensures data integrity** – Only valid data gets stored in the database.
✅ **Prevents errors** – Reduces incorrect or incomplete entries.
✅ **Enhances security** – Prevents malicious data inputs.

---

## Additional Features 💡
This milestone covers the basics of product creation. You can experiment with adding:
- **Admin Access** – Restrict product uploads to admins only.
- **Shop Profiles** – Allow only shop owners to upload products.

---

## Submission Guidelines 📥
✅ **Push Your Code** – Commit and push changes to your **GitHub repository**.
✅ **Public Repository** – Ensure your repository is **publicly accessible**.
✅ **Update README** – Summarize your progress for **Milestone 10**.
✅ **Share the Link** – Provide your **GitHub repository link** in the assignment submission section.

---

## Next Steps 🚀
In the next milestone, we’ll enhance product cards with features like **filtering and sorting**.

Keep up the great work, and reach out to your mentor if you need help.

**Good luck, Kalvians!** ✨


Milestone 11: Dynamic Product Display 🚀
✅ Fetching Product Data
Created an endpoint to retrieve all stored products from MongoDB.
Implemented API call logic in the frontend to fetch data dynamically.
✅ Displaying Products
Passed fetched product data to the Product Card component.
Rendered product information dynamically on the homepage.




Milestone 12: My Products Page 🚀
✅ Filtering Products by User Email
Created a backend endpoint to retrieve products associated with the logged-in user's email.
Queried the MongoDB database to fetch only those products matching the user's email.
✅ Fetching Data on the Frontend
Implemented an API call to request user-specific product data from the backend.
Stored the retrieved data in the application state for dynamic rendering.
✅ Displaying User's Products
Passed the fetched data to the Product Card component.
Rendered the products dynamically on the "My Products" page.



📌 Milestone 13: Edit & Update Products in MongoDB
Project Overview
In this milestone, we implemented the functionality to edit and update uploaded products in our e-commerce platform. This includes:
✅ Adding an Edit button for each product.
✅ Auto-filling the form with existing product data.
✅ Allowing users to modify and save changes.
✅ Creating a backend API endpoint to update product details in MongoDB.

🛠️ Technologies Used
Frontend: React, Axios
Backend: Node.js, Express.js, MongoDB
Database: MongoDB Atlas
🚀 Features Implemented
Edit Button: Each product card now has an Edit option.
Auto-Filled Form: Clicking edit will pre-fill the form with existing details.
Update API Endpoint: Created a PUT request in the backend to modify product data.
📂 Setup & Installation
Clone the repository:
sh
Copy
Edit
git clone <repository_link>
cd project-folder
Install dependencies:
sh
Copy
Edit
npm install
Start the backend:
sh
Copy
Edit
npm run server
Start the frontend:
sh
Copy
Edit
npm start
📝 API Endpoints
Method	Endpoint	Description
PUT	/api/products/:id	Updates an existing product
📌 How It Works
Click on the Edit button on any product card.
The form auto-fills with existing data.
Modify the details and click Save.
The product updates in the database and reflects on the UI.


Milestone 14 - Delete Product Functionality
Overview
In this milestone, we implemented the functionality to delete a product from the database. This involved creating a backend endpoint to handle the delete request and adding a delete button in the frontend.

Backend Implementation
Created a DELETE API endpoint to remove a product by its ID from MongoDB.
Used Mongoose to find and delete the product.
Handled errors to ensure smooth operation.
Frontend Implementation
Added a delete button to each product card.
On clicking the button, a DELETE request is sent to the backend with the product ID.
After a successful response, the product is removed from the UI.
Key Takeaways
Learned how to write a DELETE API using Express and MongoDB.
Integrated frontend and backend for delete functionality.
Improved understanding of CRUD operations in a full-stack app.
Next Steps
Implement a confirmation prompt before deleting a product.
Improve UI with loading states and success messages.
GitHub Repository: Ecommerce Follow-Along


