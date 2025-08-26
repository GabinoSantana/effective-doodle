Code Challenge
Challenge Title: Design and Implement a Scalable, Secure RESTful API Service with Distributed System Considerations

\*\*Challenge Description:
You are tasked with designing and implementing a simplified backend service for a hypothetical "Task Management" system that supports multiple users. The service should expose a RESTful API to create, read, update, and delete (CRUD) tasks. Each task has the following attributes:

id (UUID)

userId (UUID)

title (string)

description (string)

status (enum: "pending", "in-progress", "completed")

createdAt (timestamp)

updatedAt (timestamp)

\*\*Requirements:
API Implementation:

Implement the RESTful API endpoints for CRUD operations on tasks.

The API should be built using Node.js with TypeScript.

Use Express.js or a similar lightweight framework.

Validate inputs and handle errors gracefully.

Implement basic authentication using JWT tokens (you can mock token verification for this challenge).

\*\*Data Storage:

Use an in-memory data store (e.g., a Map or an array) to simulate persistence.

Design the data model considering NoSQL style (document-based) storage.

Demonstrate how you would structure the data for efficient querying by userId and status.

\*\*Scalability & Distributed System Considerations:

Provide a brief explanation (in comments or a separate section) on how you would scale this service in a distributed environment.

Discuss how you would handle data consistency, fault tolerance, and load balancing.

Suggest how you would integrate AWS services (e.g., S3, EC2) or Kubernetes for deployment and scaling.

\*\*Security:

Implement secure coding practices such as input sanitization.

Show how you would protect the API endpoints using JWT authentication.

Briefly describe how you would implement encryption and secure storage of sensitive data.

Bonus (Optional):

Demonstrate how you would write a simple CI/CD pipeline script (e.g., a GitHub Actions YAML snippet) to automate testing and deployment.

Show a Terraform snippet to provision a simple AWS EC2 instance or S3 bucket for this service.

Constraints:
The entire challenge should be solvable within 30 minutes.

Use only free, publicly available tools and libraries.

No actual database or cloud deployment is required; focus on design and code.

You may mock or stub external dependencies.

\*\*Technologies Relevant to the Challenge
Node.js (v14+)
TypeScript
Express.js (or similar)
JSON Web Tokens (JWT)
In-memory data structures (Map, Array)
REST API design principles
Basic security best practices
AWS concepts (EC2, S3) - conceptual knowledge
CI/CD basics (GitHub Actions or Jenkins)
