 A Node.js-based FAQ management system with multilingual support, caching, and WYSIWYG editor capabilities.

 ## Directory Structure

``` bash 
├── backend/  
│   ├── controllers/  
│   │   ├── faqcontroller.js            # faq crud operations  
│   ├── db/  
│   │   └── connectdb.js                #Connect to database  
│   ├── models/  
│   │   └── faq.js                      # FAQ MongoDB model    
│   ├── public/  
│   └──  javascript/  
│   │   |    └── adminscript.js         # admin ejs javascript file  
│   │   |    └── userscript.js          # user ejs javascript file  
│   └──  stylesheet/   
│   │   |    └── styles.css             # styles for ejs files  
│   ├── routes/
│   │   └── index.js                    # API routes
│   ├── services/
│   │   └── config/
│   |   │   └── translatekey.json       # translate api key.json file to be updated     
│   │   └── translate.js                # text translation operations    
├── ├── tests/  
│   |   └── faq.test.js                 # Unit tests  
├── .dockerignore                       # Docker ignore files  
├── .env                                # Environment variables  
├── .gitignore  
├── app.js                              #  server\  
├── docker-compose.yml  
├── Dockerfile  
├── package.json  
├── package-lock.json  

```


## ⚙️Tech Stack
- NodeJs  
- ExpressJs  
- MongoDB  
- Redis  

## Features
- FAQ management with multilingual support  
- Automated translations using Google Translate API  
- Redis caching for improved performance  
- RESTful API endpoints  
- Docker support for easy deployment  
- Comprehensive test coverage  

## Installation  

1. Clone the repository
``` bash
    git clone https://github.com/Arif20484423/bharatfd-backend.git
    cd bharatfd-backend

```

2. Create and .env file in root as specified in directory Structure
``` bash
    DB_URL="Your_database_url"
```

3. For setting up google translate api do the following
``` bash
Go to Google Cloud Console
->  Create a New Project (or use an existing one).

Enable Google Cloud Translation API
->  Go to APIs & Services 
->  Library
->  Search for Cloud Translation API
->  Click Enable
Create a Service Account Key
->  Go to IAM & Admin 
->  Service Accounts
->  Click Create Service Account
->  Type project id in Service accont id
Assign the role Editor
In Grant this service account access to project
->  Assign editor
Click Create and Continue

From actions in the service account
->  Select Manage Keys
->  Add Key
->  Create New Key
Select JSON and Download the file
Move the file to your project ( /services/config/translatekey.json)

    
```

4. Install Dependencies
``` bash
    npm install
```

5. turn on redis server on your wsl terminal
``` bash
    redis-server
```

6. Start the server
``` bash
    npm start
```

## API endpoints

Fetch Faqs
``` bash
    # Get FAQs in English (default)
    GET http://localhost:3000/api/faqs

    # Get FAQs in Hindi
    GET http://localhost:3000/api/faqs?lang=hi

    # Get FAQs in Bengali
    GET http://localhost:3000/api/faqs?lang=bn
```

User UI with create Faq Functionality
``` bash
    UI at
    GET http://localhost:3000/

    uses 
    POST http://localhost:3000/api/createfaq
    to create faq
```
- Body: JSON object containing question and answer.
- Response: Confirmation message.


Admin UI with Faq management and translation Functionality
``` bash
    UI at
    GET http://localhost:3000/admin

    uses 
    POST http://localhost:3000/api/gettranslation
    to get translated faq
    
    uses 
    DELETE http://localhost:3000/api/deletefaq
    to delete faq
    
```
For translation
- Body: JSON object containing id and Language.
- Response: Translated faq object.

For deletion
- Body: JSON object containing id.
- Response: Confirmation message.

## Cache Implementation

- Redis caches FAQ responses for 1 hour  
- Language-specific caching with ?lang= parameter  
- Improved response times for frequently accessed  FAQs  




