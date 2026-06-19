CHANGELOG.md 

Version 1.0.0 - June 2026 

Added 

Created Home page (index.html). 

Created About page. 

Created Services page. 

Created Enquiry page. 

Created Contact page. 

Added navigation menu linking all pages. 

Added business information section. 

Added business hours button with JavaScript functionality. 

Added image gallery section. 

Added Back-to-Top button functionality. 

Added lay-by agreement enquiry form. 

Added installment calculator to calculate monthly payments. 

Added Emailjs integration for form submissions. 

Improved 

Implemented form validation using JavaScript. 

Added email validation using regular expressions. 

Added phone number validation. 

Added amount and installment validation. 

Improved user feedback using alert messages. 

Improved page structure and readability. 

Fixed 

Removed duplicate JavaScript variable declarations. 

Removed duplicate form submit event listeners. 

Fixed form reset functionality. 

Fixed installment calculator updates. 

Fixed navigation consistency across pages. 

Fixed JavaScript execution order using DOM Content Loaded. 

Corrected Emailjs form submission implementation. 

Known Issues 

One image uses a local computer file path and should be replaced with a relative project path. 

Emaijs configuration should be verified before deployment. 

 

Added 

Created Services page (service.html). 

Added navigation menu linking all website pages. 

Added "Our Products" section. 

Added Grocery product card with image and description. 

Added Clothing product card with image and description. 

Added Furniture product card with image and description. 

Added footer section with copyright information. 

Linked external stylesheet (style.css). 

Linked JavaScript functionality through script.js. 

Added Emailjs library support. 

Improved 

Organized products using a product card layout. 

Improved content structure using semantic HTML elements. 

Enhanced user experience with clear product descriptions. 

Improved visual presentation through image-based product cards. 

Fixed 

Ensured image paths use relative directory structure. 

Standardized navigation links across all pages. 

Maintained consistent page layout with the rest of the website. 

Known Issues 

The HTML document declaration should be corrected from: 

!DOCTYPE html 
 

to: 

<!DOCTYPE html> 
 

Product information is currently static and not connected to a database. 

Additional responsive styling may be required for smaller device 

SAVELESS Store - Services Page 

Overview 

The Services Page forms part of the SAVELESS Store website. It showcases the products offered by the business and provides customers with information about available product categories. 

Features 

Product showcase section 

Grocery category display 

Clothing category display 

Furniture category display 

Product images and descriptions 

Website navigation menu 

Footer section 

External CSS styling 

JavaScript integration 

Technologies Used 

HTML5 

CSS3 

JavaScript 

EmailJS 

Products Offered 

Grocery 

Fresh groceries and household essentials at affordable prices. 

Clothing 

Quality clothing for men, women, and children. 

Furniture 

Modern furniture available with free local delivery. 

File Structure 

project-folder/ 
│ 
├── service.html 
│ 
├── css/ 
│   └── style.css 
│ 
├── javascript/ 
│   └── script.js 
│ 
└── images/ 
   ├── 10-ways-to-save-money-on-your-next-grocery-run (2).jpeg 
   ├── Convoy1-e1649069170721-1024x538.jpg 
   └── kloss-furniture-south-county-store_900xx1280-720-0-120.jpg 
 

Installation 

Open the project folder in Visual Studio Code. 

Ensure all images are stored in the images folder. 

Verify that style.css is located inside the css folder. 

Verify that script.js is located inside the javascript folder. 

Launch the project using Live Server. 

Future Enhancements 

Add pricing information for products. 

Add product search functionality. 

Add shopping cart functionality. 

Connect products to a database. 

Add product filtering and sorting options. 

Improve mobile responsiveness. 

Author 

Nolwandle Mazibuko 

Copyright 

© 2026 SAVELESS Store. All Rights Reserved. 

 

  

CHANGELOG.md 

Version 1.0.0 - June 2026 

Added 

Created Enquiry page (enquiry.html). 

Added navigation menu linking all website pages. 

Added Lay-By Agreement form. 

Added fields for: 

Name 

Surname 

Email 

Address 

Phone Number 

Product 

Amount 

Number of Installments 

Added installment calculation display section. 

Added submit button for form submission. 

Added Terms and Conditions heading. 

Added Back-to-Top button. 

Added Email integration for email submissions. 

Improved 

Implemented JavaScript form validation. 

Added email address validation. 

Added phone number validation. 

Added amount validation. 

Added installment validation. 

Added automatic monthly installment calculation. 

Improved user interaction through JavaScript alerts. 

Fixed 

Removed duplicate variable declarations. 

Removed duplicate form submission event listeners. 

Corrected form reset functionality. 

Corrected installment calculation updates. 

Improved JavaScript structure using DOM Content Loaded. 

Fixed Email initialization and submission workflow. 

Security Improvements 

Client-side validation prevents empty submissions. 

Email format validation reduces invalid enquiries. 

Numeric validation ensures valid amount and installment values. 

Known Issues 

Emails credentials should be secured before production deployment. 

Client-side validation should be supplemented with server-side validation in a production environment. 

Terms and Conditions content still needs to be added. 

SAVELESS Store - Enquiry Page 

Overview 

The Enquiry Page allows customers to submit Lay-By Agreement requests to SAVELESS Store. The page collects customer details, product information, payment amounts, and installment preferences. Form submissions are processed using EmailJS. 

Features 

Lay-By Agreement form 

Customer information collection 

Product enquiry submission 

Installment calculator 

EmailJS email integration 

Form validation 

Navigation menu 

Back-to-Top button 

Responsive layout 

Technologies Used 

HTML5 

CSS3 

JavaScript 

EmailJS 

Form Fields 

The enquiry form collects the following information: 

Name 

Surname 

Email Address 

Address 

Phone Number 

Product Name 

Purchase Amount 

Number of Installments 

Validation Rules 

The form validates: 

Required fields 

Valid email address format 

Valid phone number format 

Amount greater than zero 

Installments greater than zero 

Installment Calculator 

The calculator automatically determines the monthly payment amount using: 

Monthly Installment = Total Amount ÷ Number of Installments 
 

The calculated amount is displayed below the installment field. 

EmailJS Integration 

The form uses EmailJS to send enquiry information directly to the business email address. 

Configuration required in JavaScript: 

emailjs.init("PUBLIC_KEY"); 
 
emailjs.sendForm( 
   "SERVICE_ID", 
   "TEMPLATE_ID", 
   enquiryForm 
); 
 

Replace: 

PUBLIC_KEY 

SERVICE_ID 

TEMPLATE_ID 

with your EmailJS account credentials. 

File Structure 

project-folder/ 
│ 
├── enquiry.html 
│ 
├── css/ 
│   └── style.css 
│ 
├── javascript/ 
│   └── script.js 
│ 
└── images/ 
 

Installation 

Open the project in Visual Studio Code. 

Verify all files are in their correct folders. 

Configure EmailJS credentials. 

Launch using Live Server. 

Test form submission functionality. 

Future Enhancements 

Add Terms and Conditions content. 

Add form success page. 

Store enquiries in a database. 

Generate PDF Lay-By Agreements. 

Add SMS notifications. 

Add customer account management. 

Business Information 

Business Name: SAVELESS Store 

Location: 

Durban Central, South Africa 

Services: 

Grocery Sales 

Clothing Sales 

Furniture Sales 

Lay-By Agreements 

Free Furniture Delivery 

Operating Hours: 

Monday to Saturday: 09:00 – 18:00 

Sunday: Closed 

Author 

Nolwandle Mazibuko 

Copyright 

© 2026 SAVELESS Store. All Rights Reserved. 

 

 

CHANGELOG.md 

Version 1.0.0 - June 2026 

Added 

Created Contact page (contact.html). 

Added navigation menu linking all website pages. 

Added Contact Us heading. 

Embedded Google Maps location for Durban Central. 

Added business address information. 

Added business email address. 

Added business contact number. 

Added customer information section. 

Added footer section with copyright information. 

Linked external stylesheet (style.css). 

Linked JavaScript file (script.js). 

Added EmailJS library support. 

Improved 

Improved accessibility through semantic HTML structure. 

Provided customers with physical location details. 

Integrated map functionality for easier navigation. 

Maintained consistent navigation and layout across all pages. 

Fixed 

Standardized navigation links with other website pages. 

Ensured contact information is displayed clearly. 

Linked external resources correctly. 

Known Issues 

The element: 

is not currently used and can be removed if no contact form exists on the page. 

Google Maps embed requires an internet connection to display correctly. 

Business contact information should be updated if details change. 

SAVELESS Store - Contact Page 

Overview 

The Contact Page provides customers with the business location, contact details, and map directions to SAVELESS Store. It allows visitors to easily find the store and communicate with the business. 

Features 

Contact information display 

Embedded Google Maps location 

Business address 

Business email address 

Business phone number 

Navigation menu 

Footer section 

External CSS styling 

JavaScript integration 

Technologies Used 

HTML5 

CSS3 

JavaScript 

Google Maps Embed 

EmailJS Library 

Contact Information 

Business Name: 

SAVELESS Store 

Address: 

385 Anton Lembede Street 

Durban Central 

Durban, 4001 

Email: 

Businesshub249@gmail.com 

Phone: 

011 556 2889 

Google Maps Integration 

The page includes an embedded Google Map showing the Durban Central area to help customers locate the business more easily. 

Features: 

Interactive map 

Zoom controls 

Mobile-friendly display 

Location reference for customers 

File Structure 

project-folder/ 

├── contact.html 

├── css/ 

│ └── style.css 

├── javascript/ 

│ └── script.js 

└── images/ 

Installation 

Download or clone the project. 

Open the project folder in Visual Studio Code. 

Verify that style.css is inside the css folder. 

Verify that script.js is inside the javascript folder. 

Launch the website using Live Server. 

Future Enhancements 

Add a contact form. 

Add direct email functionality. 

Add WhatsApp contact integration. 

Add social media links. 

Add business operating hours. 

Add location directions feature. 

Add online support chat. 

Author 

Nolwandle Mazibuko 

Copyright 

© 2026 SAVELESS Store. All Rights Reserved. 

CHANGELOG.md 

Version 1.0.0 - June 2026 

Added 

Created About page (about.html). 

Added navigation menu linking all website pages. 

Added "About Us" section describing the business. 

Added company background and history information. 

Added image gallery showcasing business products and services. 

Added information about groceries, clothing, and furniture products. 

Added information about lay-by agreement services. 

Added community involvement and customer service information. 

Added footer section with copyright information. 

Added Back-to-Top button. 

Linked external stylesheet (style.css). 

Linked JavaScript functionality through script.js. 

Added EmailJS library support. 

Improved 

Enhanced user understanding of the business through detailed descriptions. 

Improved website presentation with multiple images. 

Improved content organization using semantic HTML elements. 

Maintained consistent navigation and design across all website pages. 

Fixed 

Standardized page structure with the rest of the website. 

Ensured image references use relative file paths. 

Improved readability through clear content sections. 

Known Issues 

Some image file names contain spaces, which may cause deployment issues on some web servers. 

EmailJS library is linked but not currently used on this page. 

Additional responsive image styling may be required for smaller devices. 

SAVELESS Store - About Page 

Overview 

The About Page provides information about SAVELESS Store, its history, services, products, and commitment to the local community. It helps visitors understand the purpose of the business and the value it provides to customers. 

Features 

Business introduction 

Company history 

Product information 

Community involvement information 

Image gallery 

Navigation menu 

Back-to-Top button 

Footer section 

External CSS styling 

JavaScript integration 

Technologies Used 

HTML5 

CSS3 

JavaScript 

EmailJS Library 

Business Background 

SAVELESS Store was established in 2020 with the objective of providing affordable and quality products to customers in Durban. 

The business specializes in: 

Groceries 

Clothing 

Furniture 

Additional services include: 

Lay-by agreements 

Customer support 

Furniture delivery services 

Image Gallery 

The About Page includes images representing: 

Grocery products 

Furniture products 

Clothing products 

Store promotional content 

File Structure 

project-folder/ 

├── about.html 

├── css/ 

│ └── style.css 

├── javascript/ 

│ └── script.js 

└── images/ 

├── 10-ways-to-save-money-on-your-next-grocery-run (2).jpeg 

├── furniture store business plan.png 

├── Convoy1-e1649069170721-1024x538.jpg 

└── Website-Cover-Image-56.png 

Installation 

Download or clone the project. 

Open the project folder in Visual Studio Code. 

Verify all image files are located inside the images folder. 

Ensure style.css is located in the css folder. 

Ensure script.js is located in the javascript folder. 

Launch the website using Live Server. 

Future Enhancements 

Add staff profiles. 

Add customer testimonials. 

Add business milestones timeline. 

Add awards and achievements section. 

Add video content about the business. 

Improve image gallery interactivity. 

Author 

Nolwandle Mazibuko 

Copyright 

© 2026 SAVELESS Store. All Rights Reserved. 

 

CHANGELOG.md 

Version 1.0.0 - June 2026 

Added 

Created global stylesheet for the SAVELESS Store website. 

Added CSS reset for margin, padding, and box-sizing. 

Added gradient background for the website body. 

Added navigation bar styling. 

Added navigation hover effects. 

Added main content container styling. 

Added heading styles (H1, H2, H3). 

Added paragraph formatting. 

Added image gallery layout using Flexbox. 

Added image hover effects. 

Added image pop animation class. 

Added product card design and layout. 

Added product card hover animation. 

Added form styling. 

Added input and text area styling. 

Added focus effects for form controls. 

Added button styling and hover animations. 

Added Google Maps iframe styling. 

Added contact information styling. 

Added footer styling. 

Added Back-to-Top button styling. 

Added responsive design using media queries. 

Improved 

Improved visual appearance using gradients and shadows. 

Enhanced user experience with hover effects and animations. 

Improved readability through spacing and typography. 

Improved layout consistency across pages. 

Enhanced responsiveness for mobile devices. 

Fixed 

Standardized component styling across all website pages. 

Improved image presentation using object-fit. 

Prevented layout inconsistencies through box-sizing reset. 

Improved form usability with focus indicators. 

Responsive Features 

Mobile navigation layout. 

Responsive image gallery. 

Responsive product cards. 

Responsive content container. 

Responsive typography. 

Known Issues 

The universal selector is missing at the beginning of the file. 

Current: 

{ 

margin: 0; 

padding: 0; 

box-sizing: border-box; 

} 

Should be: 

{ 

margin: 0; 

padding: 0; 

box-sizing: border-box; 

} 

Additional responsive breakpoints could be added for larger screens. 

Dark mode support has not yet been implemented. 

 

CHANGELOG.md 

Version 1.0.0 - June 2026 

Added 

Added DOM Content Loaded event listener. 

Added console logging for script loading verification. 

Added business information button functionality. 

Added dynamic display of business operating hours. 

Added installment payment calculator. 

Added real-time calculation based on amount and installments. 

Added form validation for enquiry submissions. 

Added validation for: 

Name 

Surname 

Email 

Address 

Phone Number 

Product 

Amount 

Installments 

Added email format validation using regular expressions. 

Added phone number validation using regular expressions. 

Added amount validation. 

Added installment validation. 

Added EmailJS integration. 

Added email submission functionality using EmailJS. 

Added success notification alerts. 

Added error handling for failed submissions. 

Added automatic form reset after successful submission. 

Added Back-to-Top button functionality. 

Added smooth scrolling effect. 

Added image click animation using the pop class. 

Improved 

Improved user experience through client-side validation. 

Improved form usability with real-time feedback. 

Improved navigation through Back-to-Top functionality. 

Enhanced visual interaction through image enlargement effects. 

Fixed 

Removed duplicate event listeners. 

Removed duplicate variable declarations. 

Corrected Emails initialization placement. 

Improved form submission workflow. 

Improved code organization inside DOM Content Loaded. 

Security Improvements 

Prevented empty form submissions. 

Implemented email validation checks. 

Implemented phone number format validation. 

Implemented positive number validation for financial values. 

Known Issues 

Emails credentials are currently visible in the JavaScript file. 

Validation messages currently use alert() and could be replaced with inline error messages. 

Form validation only runs on the client side and should be supplemented by server-side validation in production. 

SAVELESS Store - JavaScript Functionality 

Overview 

This JavaScript file provides the interactive functionality for the SAVELESS Store website. It manages form validation, installment calculations, EmailJS integration, image interactions, business information display, and navigation enhancements. 

Features 

Business Information Display 

Displays store operating hours when the user clicks the business information button. 

Example: 

SAVELESS Store is open Monday to Saturday from 9:00 AM to 6:00 PM and closed on Sundays. 

 

Installment Calculator 

Calculates monthly installment payments based on: 

Monthly Installment = Amount ÷ Number of Installments 

The result updates automatically whenever the user changes the amount or installment values. 

 

Form Validation 

Validates the following fields: 

Name 

Surname 

Email 

Address 

Phone Number 

Product 

Amount 

Installments 

Validation Rules: 

All fields are required. 

Email must follow a valid format. 

Phone number must contain 10–15 valid characters. 

Amount must be greater than zero. 

Installments must be greater than zero. 

 

Emails Integration 

The enquiry form is connected to EmailJS for email delivery. 

Configuration: 

```javascript emailjs.init("PUBLIC_KEY"); 

emailjs.sendForm( "SERVICE_ID", "TEMPLATE_ID", enquiryForm ); 

 
