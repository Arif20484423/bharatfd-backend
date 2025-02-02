 A Node.js-based FAQ management system with multilingual support, caching, and WYSIWYG editor capabilities.

 ## Directory Structure


├── backend/  
│   ├── controllers/  
│   │   ├── faqcontroller.js      # faq crud operations  
│   ├── db/  
│   │   └── connectdb.js          #Connect to database  
│   ├── models/  
│   │   └── faq.js          # FAQ MongoDB model    
│   ├── public/  
│   └──  javascript/  
│   │   |    └── adminscript.js          # admin ejs javascript file  
│   │   |    └── userscript.js          # user ejs javascript file  
│   └──  stylesheet/   
│   │   |    └── styles.css             # styles for ejs files  
│   ├── routes/
│   │   └── index.js    # API routes
│   ├── services/
│   │   └── config/
│   |   │   └── translatekey.json      # translate api key.json file to be updated     
│   │   └── translate.js                # text translation operations    
├── ├── tests/  
│   |   └── faq.test.js        # Unit tests  
├── .dockerignore                    # Docker ignore files  
├── .env                    # Environment variables  
├── .gitignore  
├── app.js                  #  server\  
├── docker-compose.yml  
├── Dockerfile  
├── package.json  
├── package-lock.json  



