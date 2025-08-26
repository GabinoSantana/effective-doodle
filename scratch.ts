// You have the following TypeScript function that fetches user data asynchronously. There is a bug causing unhandled promise rejections. Identify and fix the issue:
async function getUserData(userId: string): Promise<string> {
  const response = fetch(`https://api.example.com/users/${userId}`);
  const data = (await response).json()
  return data.name;
}

//-----------------------------------------------------------------------------------------------------------------------
// Given the following Python function intended to process a list of user IDs asynchronously, identify the issue and provide a corrected version:
/*import asyncio

def fetch_user(user_id):
    # Simulate async fetch
    return f"User {user_id}"

async def process_users(user_ids):
    results = []
    for user_id in user_ids:
        results.append(fetch_user(user_id))
    return results*/

//-----------------------------------------------------------------------------------------------------------------------
// Rank the sales people by their aggregate sales while providing their name, position, salary and aggregate sales amount
select tsp.name, tsp.salary, sum(tas.amount)
from t_sales_person tsp, t_aggregate_sales tas
where tsp.sales_person_id = tas.sales_person_id
group by tsp.name, tsp.salary


select 
    tsp.name, 
    tsp.salary, 
    (select sum(amount) from t_aggregate_sales tas where tas.sales_person_id = tsp.sales_person_id)
from t_sales_person tsp

/*
t_sales_person
| sales_person_id | name   | position     | salary |
| --------------- | ------ | ------------ | ------ |
| 1               | Steve  | Senior       | 80000  |
| 2               | Bill   | Intermediate | 60000  |
| 3               | Alan   | Intermediate | 62000  |
| 4               | Gordon | Junior       | 30000  |
| 5               | Robert | Junior       | 25000  |

t_aggregate_sales
| sales_id | month  | amount | sales_person_id |
| -------- | ------ | ------ | --------------- |
| 1        | 202312 | 1000   | 1               |
| 2        | 202312 | 5000   | 2               |
| 3        | 202312 | 2000   | 3               |
| 4        | 202312 | 100    | 4               |
| 5        | 202312 | 2500   | 5               |
| 6        | 202401 | 6500   | 1               |
| 7        | 202401 | 8000   | 2               |
| 8        | 202401 | 10000  | 5               |
| 9        | 202401 | 100    | 4               |
| 10       | 202401 | 300    | 3               |
*/

//-----------------------------------------------------------------------------------------------------------------------

// Fetch and display data with loading and error states.

const [loading, setLoading] = useState(false)
const [errors, setErrors] = useState({})

async function fetchData(){
    fetch
}
    
useEffect(() => {
    setLoading(true)
    fetchData().then(data=>setData(data) ).catch(setErrors)
    setLoading(false)
}, []);

// What's wrong with this? : useEffect(() => fetchData(), []);


// Create a custom hook that toggles a boolean value.
// function(){
    
//     return {value, setValue}
// }
// Write a simple Express.js route to create a new user.
app.route('POST','/user',(req, res)=>{
    res.send({statusCode: 200, data})
})
// Write a simple Terraform configuration snippet to create an AWS S3 bucket named my-app-bucket.
