Here's a basic `README.md` file for your Makersharks project, excluding the test setup. This file provides instructions on how to set up, run, and interact with your API.

```markdown
# Makersharks Supplier Search API

This project is a proof of concept for a search API that allows buyers to search for manufacturers based on customized requirements, such as location, nature of business, and manufacturing processes.

## Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Error Handling](#error-handling)
- [Documentation](#documentation)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/makersharks.git
   cd makersharks
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```

   Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

## Running the Application

1. To start the application in development mode, use:

   ```bash
   npm run dev
   ```

2. To start the application in production mode, use:

   ```bash
   npm start
   ```

The server will start on the port specified in the `.env` file (default is 3000).

## API Endpoints

### 1. Search for Suppliers

- **URL:** `/api/supplier/query`
- **Method:** `POST`
- **Description:** Retrieves a list of manufacturers based on the given location, nature of business, and manufacturing processes.

#### Request Body

```json
{
  "location": "CityName",
  "natureOfBusiness": "small_scale",
  "manufacturingProcesses": "3d_printing",
  "limit": 10
}
```

- `location` (string): City name to search in.
- `natureOfBusiness` (string): One of `small_scale`, `medium_scale`, `large_scale`.
- `manufacturingProcesses` (string): One of `moulding`, `3d_printing`, `casting`, `coating`.
- `limit` (number, optional): Number of results to return (default is 10).

#### Example Request

Using Postman or Curl, you can make a request like this:

```bash
curl -X POST http://localhost:3000/api/supplier/query \
  -H 'Content-Type: application/json' \
  -d '{
        "location": "India",
        "natureOfBusiness": "small_scale",
        "manufacturingProcesses": "3d_printing",
        "limit": 5
      }'
```

#### Expected Response

```json
[
  {
    "supplier_id": "123",
    "companyName": "ABC Manufacturing",
    "website": "https://www.abcmanufacturing.com",
    "location": "India",
    "natureOfBusiness": "small_scale",
    "manufacturingProcesses": "3d_printing"
  },
  ...
]
```

## Error Handling

- The API uses custom middleware to handle errors.
- Common errors include validation errors, database connection errors, and internal server errors.
- Error responses are in the following format:

  ```json
  {
    "success": false,
    "message": "Error message"
  }
  ```

## Documentation

The API is documented using Swagger. You can access the API documentation by navigating to:

```
http://localhost:3000/api-docs
```

This will provide a detailed view of all available endpoints, request/response formats, and parameters.

---

## Notes

- Ensure that your MongoDB service is running and accessible before starting the application.
- For production deployment, use environment variables to manage sensitive data like `MONGO_URI`.
```

### Explanation

- **Installation:** Details on how to clone the repository and install dependencies.
- **Configuration:** Instructions for setting up environment variables, especially for the MongoDB connection string.
- **Running the Application:** Commands to start the application in development or production mode.
- **API Endpoints:** Describes the main API endpoint, expected request body, and example requests using curl.
- **Error Handling:** Information about how the API handles errors and the format of error responses.
- **Documentation:** Brief info on where to access the Swagger API documentation.

This `README.md` file gives a clear and concise overview of the project, making it easier for others to understand and use your API.