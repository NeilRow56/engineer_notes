import nc from 'next-connect'
import dbConnect from '../../../lib/dbConnect'

import { getSingleNote, updateSingleNote, deleteSingleNote } from '../../../controllers/noteControllers'



const handler = nc()

dbConnect()

handler.get(getSingleNote)

handler.put(updateSingleNote)
handler.patch(updateSingleNote)

handler.delete(deleteSingleNote)



export default handler