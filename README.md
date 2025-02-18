# Cloud Developer: Image Processing Microservice

## Project purpose: Help Find Missing People
This application will help the FBI find missing people. The application will upload images to the FBI cloud database hosted in AWS. This will allow the FBI to run facial recognition software on the images to detect a match. It be developed in a NodeJS server and deployed on AWS Elastic Beanstalk. A REST API endpoint in a backend service that processes incoming image URLs.

## Getting Started

### Installation
- Set up node environment
> cd app
> npm install

- Run application locally
> node .\server.js

- Verify the app work properly in local:
> http://localhost:8082/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/800px-Cat_November_2010-1a.jpg

![alt text](image.png)

### Deploye the application on AWS Elastic Beanstalk

(see detail in `eb.log` file please)
> eb init
> eb create
> eb deploy

### Verify the app run by endpoint `/filteredimage?image_url={{}}`

http://image-processing-nd9990-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/800px-Cat_November_2010-1a.jpg

http://image-processing-nd9990-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=600

![alt text](image-1.png)
![alt text](image-2.png)

---
Thank you for reading