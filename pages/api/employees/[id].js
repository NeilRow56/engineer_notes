import nc from 'next-connect'
import dbConnect from '../../../lib/dbConnect'

import { getSingleEmployee, updateSingleEmployee, deleteSingleEmployee } from '../../../controllers/employeeControllers'



const handler = nc()

dbConnect()

handler.get(getSingleEmployee)

handler.put(updateSingleEmployee)
handler.patch(updateSingleEmployee)

handler.delete(deleteSingleEmployee)



export default handler