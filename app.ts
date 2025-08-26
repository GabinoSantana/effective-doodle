/*Scalability & Distributed System Considerations:
    - I like to implement this on separeted lambdas one lambda for one usecase
    - In front of the lambdas I use an Api Gateway to handling all the request manage the security 
    (If the solution is a new solution to handling user I recommend use cognito or other serverless component) 
    with this the users could be passed in the request so you don't need to build another thing.
    - loadbalancing with Api Gateway.
    - with DynamoDB we can store all the data we need and get it quickly with a good access pattern
    - it's possible to store secure data in DynamoDB using KMS.
    - for this to manage the infrastructure I'd like to use CDK and use it in the pipelines for each environment
    - we can add an WAF to api gateway to add an extra layer of security.
*/

const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
const data = {};

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const user = data[id];
  res.json(user);
});

app.post("/user", (req, res) => {
  console.log(req.body);
  const id = uuidv4();
  const user = {
    ...req.body,
    id,
    userId: uuidv4(),
    status: "pending",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  data[id] = user;
  res.json(user);
});
app.patch("/user/:id", (req, res) => {
  const id = req.params.id;
  let user = data[id];
  user = { ...user, ...req.body };
  data[id] = user;
  console.log(data);

  res.json({ message: "user updated", user });
});

app.delete("/user/:id", (req, res) => {
  const id = req.params.id;
  delete data[id];
  res.json({ message: "user deleted" });
});

app.listen(3000);
