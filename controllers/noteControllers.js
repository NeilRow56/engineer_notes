import Employee from "../models/Employee"
import Note from '../models/Note'



//GET all notes = http://localhost:3000/api/notes

const allNotes = async (req, res) => {

    const notesCount = await Note.countDocuments();

   try {

       const notes = await Note.find().lean()

             // If no notes 
    if (!notes?.length) {
        return res.status(400).json({ message: 'No notes found' })
    }
 
     // Add employeeName to each note before sending the response 
    // See Promise.all with map() here: https://youtu.be/4lqJBBEpjRE 
    // You could also do this with a for...of loop
    const notesWithEmployee = await Promise.all(notes.map(async (note) => {
        const employee = await Employee.findById(note.employee).lean().exec()
        return {...note, employeeName:employee.employeeName}
        }))
       res.status(200).json({
           success: true,
            notesCount,
            notesWithEmployee
       })
     
   } catch (error)
   
   {

       res.status(400).json({
           success: false,
           error: error.message
       })
   }
     
}
 
// // Create new Note = http://localhost:3000/api/notes

 
const newNote = async (req, res) => {
 
   try {
    //    const employee = await Employee.create(req.body);
    const { employee, title, text } = req.body;
   
    // Confirm data
    if (!employee || !title || !text) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate title
    const duplicate = await Note.findOne({ title }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate note title' })
    }

     // Create and store new note 
    const note = await Note.create({employee, title, text })

    if ( note ) { //created 
        res.status(201).json({ message: 'New note created '})
    } 
               
      
      } catch (error) {
       res.status(400).json({
           success: false,
           message: 'Invalid note data received'
       })
   }
   
}


 //GET single Note details => api/notes/:id

 const getSingleNote = async (req, res) => {
 
    try {
        const singleNote = await Note.findById(req.query.id);
  
        if(!singleNote) {
            return res.status(404).json({
                success: false,
                error: "Note not found with this ID"
            })
  
        }
  
        res.status(200).json({
            success: true,
            singleNote
        })
       
   
       
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
            
    }
 }
 
 //UPDATE single Note details => api/notes/:id
 const updateSingleNote = async (req, res) => {
    try {
        const { id, employee, title, text, completed } = await Note.findById(req.query.id);

        
          // Confirm data
    if (!id || !employee || !title || !text || typeof completed !== 'boolean') {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Confirm note exists to update
    const note = await Note.findById(id).exec()

    if (!note) {
        return res.status(400).json({ message: 'Note not found' })
    }

  
       // Check for duplicate title
    const duplicate = await Note.findOne({ title }).lean().exec()

    // Allow renaming of the original note 
    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({ message: 'Duplicate note title' })
    }

    note.employee = employee
    note.title = title
    note.text = text
    note.completed = completed

    const updatedNote = await note.save()


         res.status(200).json(
            
            {
            success: true,
            updatedNote,
            message: `'${updatedNote.title}' updated`
            
        })
      
  
      
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
           
    }
 }
 
  
   
 
    
// DELETE images associated with Employee

 //DELETE single Note details => api/notes/:id

 const deleteSingleNote = async (req, res) => {
 
    try {
        const { id } = await Note.findById(req.query.id);

       

        // Confirm data
    if (!id) {
        return res.status(400).json({ message: 'Note ID Required' })
    }

    

    // Does the note exist to delete?
    const note = await Note.findById(id).exec()
  
        if(!note) {
            return res.status(404).json({
                success: false,
                error: "Note not found with this ID"
            })
  
        }

        const result = await note.deleteOne()

    const reply = `Note ${result.title} with ID ${result._id} deleted`

    res.json(reply)
       
   
       
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
            
    }
 }
 
 
export {
allNotes,
newNote,
getSingleNote,
updateSingleNote,
deleteSingleNote
}