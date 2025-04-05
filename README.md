

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


# Milestone 15 - Navbar Component

## Overview
In this milestone, we implemented a **Navbar** component for our application, ensuring smooth navigation between different pages. The Navbar is designed to be reusable and responsive across all screen sizes.

## Learning Goals 🎯
- Understand how to create a **Navbar** component.
- Learn how to reuse the same component across multiple pages.
- Implement responsive design for the Navbar.

## Steps Implemented 📝
1. **Created a new Nav component** with links to the following pages:
   - Home
   - My Products
   - Add Product
   - Cart
2. **Made the Navbar responsive** for different screen sizes using CSS and media queries.
3. **Integrated the Navbar** into all pages to enable smooth navigation.

## Technologies Used 🛠️
- React.js
- React Router for navigation
- CSS for styling and responsiveness

## How to Run the Project 🚀
1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project folder:
   ```sh
   cd project-folder
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

##


# Milestone 16 - Product Info Page

## Overview
In this milestone, we implemented a **Product Info Page** that displays detailed information about each product. The page allows users to choose a quantity and add the product to the cart.

## Learning Goals 🎯
- Understand how to create a **new page** to display product details.
- Implement a quantity selector.
- Add an **Add to Cart** button for seamless shopping experience.

## Steps Implemented 📝
1. **Created a new product info page** that displays product details such as:
   - Product Name
   - Description
   - Price
   - Image
2. **Added a quantity selector** to allow users to choose the number of items they want to purchase.
3. **Implemented an Add to Cart button** to add the selected product and quantity to the cart.

## Technologies Used 🛠️
- React.js
- React Router for navigation
- State management for handling quantity selection
- CSS for styling the product info page

## How to Run the Project 🚀
1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project folder:
   ```sh
   cd project-folder
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

---
# Milestone 17 - Add to Cart Functionality
---
##Overview
In this milestone, we implemented an API endpoint to add products to the cart and store them in the database.

Features Implemented
Updated the User Schema to include a cart field.
Created a Cart Schema to store product details.
Developed an API endpoint to add products to the cart.
Steps Taken
Defined the Mongoose Cart Schema.
Modified the User Schema to store cart items.
Created an API route to receive product details and store them in the database.

---
#Milestone 18 - Fetch Cart Products
---
##Overview
In this milestone, we created a backend endpoint to retrieve all products inside a user's cart for display on the cart page.

Features Implemented
Developed an API endpoint to fetch cart products using the user's email.
Retrieved and returned cart items from the database.
Steps Taken
Created an endpoint to receive requests from the cart page.
Queried the database to fetch all cart items associated with the user.
Returned the cart data in the response.


E-Commerce Cart Functionality (Milestone 19)

Overview:
This milestone focuses on building the Cart Page UI and implementing backend endpoints to increase or decrease the quantity of products in the cart.

Learning Goals:
By completing this milestone, I have:

Created a Cart Page to display products inside the cart.
Added "+" (increase) and "-" (decrease) buttons for each product to update quantity.
Built backend API endpoints to handle quantity changes dynamically.
Features Implemented:

Frontend:

Designed a Cart Page UI displaying all cart items.
Added "+" and "-" buttons to modify product quantity.
Used API calls to dynamically update cart data.
Backend:

Created API endpoints to increase and decrease product quantity in the cart.
Integrated these endpoints with the frontend for real-time updates.
Handled edge cases (e.g., quantity not going below 1).
Project Structure:

ecommerce-cart
│── backend
│ ├── routes/cartRoutes.js - API endpoints for quantity update
│ ├── controllers/cartController.js - Business logic for cart operations
│ └── models/cartModel.js - MongoDB schema for cart
│
│── frontend
│ ├── src/components/Cart.jsx - Cart Page UI
│ ├── src/components/CartItem.jsx - Individual Cart Item Component
│ ├── src/App.js - Main application entry point
│ └── src/services/api.js - API calls for cart actions
│
└── README.md - This documentation

API Endpoints:

Increase Quantity
Endpoint: PUT /api/cart/increase/:productId
Increases the quantity of a product in the cart.
Decrease Quantity
Endpoint: PUT /api/cart/decrease/:productId
Decreases the quantity of a product (minimum 1).
Setup & Installation:

Clone the repository:
git clone https://github.com/<your_username>/ecommerce-cart.git
cd ecommerce-cart

Install dependencies:
npm install

Start the backend:
cd backend
npm run dev

Start the frontend:
cd frontend
npm start

Submission:

Code pushed to GitHub repository.
Updated README with milestone details.
Submitted the repository link.
GitHub Repository: https://github.com/<your_username>/ecommerce-cart

Future Improvements:

Implement discounts & offers on cart products.
Add checkout & payment integration.
Improve cart UI/UX with animations.
Feedback & Learnings:

Understanding state management for cart updates.
Writing REST API endpoints to modify database records.
Handling frontend-backend integration efficiently.
Excited for the next milestone!


E-Commerce Profile Page (Milestone 20)

Overview:
This milestone focuses on creating a Profile Page UI and implementing a backend endpoint to retrieve and display user data, including profile photo, name, email, and addresses.

Learning Goals:
By completing this milestone, I have:

Created a backend API endpoint to send user data.
Developed a Profile Page UI to display user details.
Implemented sections for profile photo, name, email, and addresses.
Added a button to add a new address if none exist.
Features Implemented:

Frontend:

Designed a Profile Page UI with user details.
Displayed profile photo, name, and email in one section.
Displayed addresses in another section.
Showed "No address found" if no address exists.
Added an "Add Address" button to update addresses.
Backend:

Created an API endpoint to send user data via email.
Integrated the backend API with the frontend.
Project Structure:

ecommerce-profile
│── backend
│ ├── routes/userRoutes.js - API endpoint for user data
│ ├── controllers/userController.js - Business logic for user data retrieval
│ ├── models/userModel.js - MongoDB schema for user
│
│── frontend
│ ├── src/components/Profile.jsx - Profile Page UI
│ ├── src/components/AddressList.jsx - Address display component
│ ├── src/App.js - Main application entry point
│ └── src/services/api.js - API calls for user data
│
└── README.md - This documentation

API Endpoint:

Get User Data
Endpoint: GET /api/user/profile
Retrieves user profile details including name, email, photo, and addresses.
Setup & Installation:

Clone the repository:
git clone https://github.com/<your_username>/ecommerce-profile.git
cd ecommerce-profile

Install dependencies:
npm install

Start the backend:
cd backend
npm run dev

Start the frontend:
cd frontend
npm start

Submission:

Code pushed to GitHub repository.
Updated README with milestone details.
Submitted the repository link.
GitHub Repository: https://github.com/<your_username>/ecommerce-profile

Future Improvements:

Allow users to edit profile details.
Implement profile photo upload.
Improve UI design with animations and styling.
Feedback & Learnings:

Understanding how to fetch and display user data.
Writing REST API endpoints for user profiles.
Managing frontend-backend communication effectively.
Excited for the next milestone! 🚀


# Livebooks - Full Stack Web Development (v3)

## Milestone 21: Using Your Component to View All of the List of Entities (v3)

### 📌 Overview
This milestone focuses on creating a frontend form for address input. The form allows users to enter their address details, including country, city, address lines, zip code, and address type.

### 🎯 Learning Goals
By completing this milestone, I have:
- Created a frontend form to capture address details.
- Implemented state management to store the address input.
- Enabled navigation from the profile page to the address form when clicking "Add Address."

### 🛠️ Steps Implemented
1. **Created Address Form Component**
   - Developed a form UI using React.
   - Included input fields for:
     - Country
     - City
     - Address Line 1
     - Address Line 2
     - Zip Code
     - Address Type (Dropdown)

2. **Managed State Using React State Hook**
   - Utilized `useState` to handle form input values dynamically.

3. **Navigation Integration**
   - Configured routing to navigate from the profile page to the address form upon clicking the "Add Address" button.

### 🚀 Technologies Used
- React.js
- React Router
- TailwindCSS (for styling)
- useState Hook (for state management)

### 📂 Repository Details
- **Repository Name**: `livebooks-milestone21`
- **Branch**: `main`
- **Public Access**: ✅ Yes
- **Repository Link**: [GitHub Repository](#) *(Replace with actual repo link)*

### 📥 Submission Guidelines
- ✅ Pushed the code to GitHub.
- ✅ Ensured the repository is publicly accessible.
- ✅ Updated the README file with details about Milestone 21.
- ✅ Submitted the repository link in the assignment submission section.

✨ **Milestone 21 Completed Successfully!** ✨

# Livebooks - Full Stack Web Development (v3)

## Milestone 22: Backend Endpoint for Storing Address in User Profile

### Welcome to Milestone 22! 🌟

In this milestone, we will focus on creating a backend endpoint that stores the address inside the user's profile in the database.

---

## Learning Goals 🎯
By the end of this milestone, you will:
- Create a backend endpoint that receives an address from the frontend address form.
- Store the received address inside the user's profile in the database.
- Add the address to the `address` array inside the user collection.

---

## Steps for Milestone 22 📝

1. **Create a Backend Endpoint**
   - Develop an API route to receive address data from the frontend.
   - Use `POST /users/:userId/address` to accept address details.

2. **Validate Input Data**
   - Ensure all required fields (country, city, address1, address2, zip code, address type) are received correctly.

3. **Store Address in User Profile**
   - Fetch the user from the database using `userId`.
   - Append the new address to the user's `address` array.
   - Save the updated user profile back to the database.

4. **Test the Endpoint**
   - Use Postman or an API client to send test requests.
   - Verify if the address is successfully stored in the database.

---

## Submission Guidelines 📥

1. Push your code to your **GitHub repository**.
2. Ensure your repository is **publicly accessible**.
3. Update the **README.md** file to summarize your progress for Milestone 22.
4. Share the repository link in the **assignment submission section**.

---

### Example Submission Format:
```
https://github.com/<your_username>/<repository_name>
```

Good luck, Kalvians! ✨
Milestone 23: Address Selection for Orders 🛒
✅ Cart Page Enhancement

Added a "Place Order" button inside the cart page.
Navigated to the "Select Address" page when clicked.
✅ Address Selection Page

Displayed all available addresses of the user.
Provided an option to select one address for the order.
✅ Backend API Implementation

Created an endpoint to fetch and send all saved addresses of the user.
Ensured authentication and proper error handling.

# Milestone 25 - Place Order Endpoint

## Overview
In this milestone, we created a backend endpoint to handle order placement. This endpoint receives product details, user information, and address details, then processes the order by storing the relevant information in MongoDB.

## Learning Goals 🎯
By completing this milestone, we achieved the following:
- Created a backend endpoint to facilitate order placement.
- Retrieved the user's `_id` using their email.
- Processed multiple orders for different products with the same address.
- Stored order details in the MongoDB `orders` collection.

## Implementation Steps 🛠️
1. **Receive Order Data**: The endpoint accepts an order request containing products, user email, and address details.
2. **Retrieve User ID**: Using the email provided, the system fetches the `_id` of the user from the database.
3. **Process Orders**: Each product is stored as a separate order while maintaining the same address details.
4. **Store in MongoDB**: The processed orders are saved in the `orders` collection using the pre-defined order schema.

## Technologies Used 🖥️
- **Node.js** with **Express.js** for backend development
- **MongoDB** for database management
- **Mongoose** for schema handling

## API Endpoint Details 🔗
- **Endpoint:** `POST /api/orders`
- **Request Body Example:**
  ```json
  {
    "email": "user@example.com",
    "address": "123 Main Street, City, Country",
    "products": [
      { "productId": "12345", "quantity": 2 },
      { "productId": "67890", "quantity": 1 }
    ]
  }
  ```
- **Response Example:**
  ```json
  {
    "message": "Order placed successfully",
    "orders": [
      { "orderId": "abc123", "status": "Confirmed" },
      { "orderId": "def456", "status": "Confirmed" }
    ]
  }
  ```

## Submission Details 📥
- Code pushed to GitHub repository ✅
- README updated with milestone details ✅
- Repository link submitted for evaluation ✅

---

### 🚀 Happy Coding, Kalvians! ✨

# Milestone 26 - Get User Orders Endpoint

## Overview
In this milestone, we created a backend endpoint to retrieve all orders placed by a specific user. The endpoint receives the user's email, fetches their `_id`, and then retrieves all corresponding orders from MongoDB.

## Learning Goals 🎯
By completing this milestone, we achieved the following:
- Created a backend endpoint to fetch all orders of a user.
- Retrieved the user's `_id` using their email.
- Fetched all orders associated with the user from the `orders` collection.
- Sent the retrieved orders as a response.

## Implementation Steps 🛠️
1. **Receive User Email**: The endpoint accepts a request containing the user's email.
2. **Retrieve User ID**: Using the email, the system fetches the `_id` of the user from the database.
3. **Fetch Orders**: The system queries the `orders` collection to get all orders linked to the user's `_id`.
4. **Send Response**: The retrieved orders are sent back to the client.

## Technologies Used 🖥️
- **Node.js** with **Express.js** for backend development
- **MongoDB** for database management
- **Mongoose** for schema handling

## API Endpoint Details 🔗
- **Endpoint:** `GET /api/orders`
- **Request Body Example:**
  ```json
  {
    "email": "user@example.com"
  }
  ```
- **Response Example:**
  ```json
  {
    "orders": [
      { "orderId": "abc123", "status": "Confirmed", "items": [...] },
      { "orderId": "def456", "status": "Shipped", "items": [...] }
    ]
  }
  ```

## Submission Details 📥
- Code pushed to GitHub repository ✅
- README updated with milestone details ✅
- Repository link submitted for evaluation ✅

---

### 🚀 Happy Coding, Kalvians! ✨
📘 Livebooks – Milestone #27: My Orders Page
🧩 Milestone Overview
Milestone 27: Adding My Orders Page (Frontend)
This milestone focuses on creating a frontend page that displays all orders placed by a user. We integrate it with our backend API using a GET request to fetch orders using the user's email.

🎯 Learning Goals
By completing this milestone, we have:

Created a dedicated my-orders page in the frontend.

Connected to the my-orders backend endpoint via a GET request.

Passed the user's email to fetch relevant order data.

Displayed the fetched orders in a structured layout.

Added the My Orders page to the navbar for easier navigation.

🛠️ Steps Completed
Built a new my-orders route and component in the frontend.

Implemented a GET request using fetch/axios to hit the /my-orders endpoint.

Sent the user’s email as a query parameter to retrieve their orders.

Rendered the list of orders in a user-friendly UI.

Linked the My Orders page from the main navbar.

📦 Tech Stack
Frontend: React.js

Backend: Node.js + Express.js

Database: MongoDB

API Testing Tool: Bruno

📬 Submission Checklist
 Code pushed to GitHub

 Publicly accessible repo

 README updated with milestone summary

 Bruno used for API testing

 Repository link submitted via assignment portal






