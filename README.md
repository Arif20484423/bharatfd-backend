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
NodeJs  
ExpressJs  
MongoDB  
Redis  

## Features
-> FAQ management with multilingual support  
-> Automated translations using Google Translate API  
-> Redis caching for improved performance  
-> RESTful API endpoints  
-> Docker support for easy deployment  
-> Comprehensive test coverage  

## Installation  

1. Clone the repository
``` bash
    git clone https://github.com/Arif20484423/bharatfd-backend.git

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
Assign the role Editor
Click Create and Continue
In the Keys tab, click "Add Key" > "Create New Key"
Select JSON and Download the file
Move the file to your project (e.g., config/translate-key.json)

    
```
