import dbConnect from '../../../lib/dbConnect'
import nc from "next-connect";
import { allNotes, newNote } from '../../../controllers/noteControllers'
 
 
const handler = nc()
 
dbConnect()
 
handler.get(allNotes)

handler.post(newNote)

export default handler