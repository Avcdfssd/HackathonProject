Project Name : Rare Connect 
Rare diseases identification and management service in nepal 

Some backend features are not fully optimized and there might be errors during certain processes 

Languages And Frameworks used 
HTML,CSS,JS and jQuery(framework) for frontend, UI, event handling and small API calls 
PHP for backend, connection with database , sending and retrieving information between frontend and database
mysql for storing user credentials and other necessary information


The application includes various user roles such as patients, doctors, researchers, NGOs, and administrators. Each role has specific functionalities and interfaces tailored to their needs.

Key Features
User Authentication and Role Management:

Login Pages: Separate login pages for different user roles (users, doctors, researchers, NGOs, and administrators).
Session Management: Uses sessionStorage to manage user sessions and roles.
Dynamic Content Loading:

AJAX Requests: Uses AJAX to fetch and display content dynamically without reloading the page.
Page Routing: JavaScript functions to load external HTML content into specific containers based on user actions.
Dashboard and Navigation:

Sidebar Navigation: A sidebar with navigation links tailored to the user's role, allowing easy access to different sections of the application.
Responsive Design: The layout adapts to different screen sizes, hiding the sidebar on smaller screens.
User-Specific Functionalities:

Patients: Can report symptoms, check report status, and request help from NGOs.
Doctors: Can report new diseases and view upload history.
Researchers: Can connect with doctors and view research-related content.
NGOs: Can submit reports and check the status of submitted reports.
Administrators: Have access to admin-specific functionalities and panels.
Content Management:

Dynamic Content Display: Uses JavaScript to display different content based on user actions and roles.
Database Interaction: PHP scripts to interact with the database, handling tasks like creating tables, inserting records, and fetching data.
Contact and About Us Pages:

Contact Us: Provides contact information and social media links for users to connect with the organization.
About Us: Describes the mission, activities, and benefits of the organization.
File Uploads:

Report Submission: Forms for users to submit reports with file uploads.
Upload History: Sections to view the history of submitted reports.






Since this project is not available in the public domain if one wishes to use this or view its visual contents then one can simply do it by installing a local server such as : Apache, TomCat etc, 
php, and mysql server . If one has already installed these servers on their local machine then they can just place the folder in the htdocs directory of the local server (C.../Apache24/htdocs/.......) if installed here

Alternative method:
 Or if one doesn't want to go through all the hassle of installing each and every thing individually then one can also get softwares like xampp which installs all these features and services directly itself and
 one can just get started with by placing the project folder in the directory (C:xampp/htdocs/...... )


 After placing the folder one can just go to the browser and navigate (localhost/HackathonProject/index.html) to view the webPage.


