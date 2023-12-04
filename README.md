# Product Inventory Management API

This Node.js application provides a Product Inventory Management API with basic authentication using JWT. The API allows you to perform CRUD operations on product information. Additionally, a Terraform script is included for setting up the required cloud infrastructure.

# Setup Instructions

## Prerequisites

* Node.js and npm installed
* MongoDB installed and running
* Terraform installed

## Steps

### 1. Clone the Repository

```sh
$ git clone https://github.com/tahmid09/Nodejs-Terraform-Scripts.git
$ cd Nodejs-Terraform-Scripts
```
### 2. Install Dependencies

```sh
$ npm install
```

### 3. Configure MongoDB

* Make sure MongoDB is installed and running.
* Update MongoDB connection details in /src/config/db.js.

### 4. Start the Application

```sh
$ npm start
```
The server will start on http://localhost:3000.

### 5. Run Terraform Script

```sh
$ cd terraform
$ terraform init
$ terraform apply
```
Follow the prompts to apply the Terraform configuration.

# API Documentation

## Authentication

* Endpoint: /users/login
* Method: POST
* Payload: { "username": "your-username", "password": "your-password" }
* Response: { "accessToken": "your-generated-jwt-token" }

* Endpoint: /users/register
* Method: POST
* Payload: { "username": "your-username", "password": "your-password" }
* Response: { "accessToken": "your-generated-jwt-token" }

## Product Endpoints

* Get All Products

    1. Endpoint: /products
    2. Method: GET
    3. Authentication: Required
    4. Response: Array of products

* Create a Product

    1. Endpoint: /products
    2. Method: POST
    3. Authentication: Required
    4. Payload: { "name": "Product Name", "price": 10.99, "description": "Product Description" }
    5. Response: Created product

* Update a Product

    1. Endpoint: /products/:id
    2. Method: PUT
    3. Authentication: Required
    4. Payload: { "name": "Updated Product Name", "price": 15.99, "description": "Updated Product Description" }
    5. Response: Updated product
* Delete a Product

    1. Endpoint: /products/:id
    2. Method: DELETE
    3. Authentication: Required
    4. Response: Success message

## Terraform Script 

The Terraform script (/terraform/main.tf) sets up the following resources on AWS:

* EC2 Instance for the Node.js application server.
* MongoDB instance using Amazon DocumentDB.

## Configuration
* Update AWS region, access key, and secret key in /terraform/provider.tf.
* Review and customize variables in /terraform/variables.tf.

## Apply Terraform

```sh
$ cd terraform
$ terraform init
$ terraform apply
```

Follow the prompts to apply the Terraform configuration.

