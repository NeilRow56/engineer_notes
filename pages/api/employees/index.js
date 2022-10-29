import dbConnect from '../../../lib/dbConnect'
import nc from "next-connect";
import { allEmployees, newEmployee } from '../../../controllers/employeeControllers'
 
 
const handler = nc()
 
dbConnect()
 
handler.get(allEmployees)

handler.post(newEmployee)

export default handler