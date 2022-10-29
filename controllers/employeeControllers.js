import Employee from "../models/Employee"
import Note from '../models/Note'
import bcrypt from 'bcrypt'


//GET all employees = http://localhost:3000/api/employees

const allEmployees = async (req, res) => {

    const employeesCount = await Employee.countDocuments();

   try {

       const employees = await Employee.find().select('-password').lean()

             // If no employees 
    if (!employees?.length) {
        return res.status(400).json({ message: 'No employees found' })
    }
 
 
       res.status(200).json({
           success: true,
            employeesCount,
           employees
       })
     
   } catch (error)
   
   {

       res.status(400).json({
           success: false,
           error: error.message
       })
   }
     
}
 
// // Create new Employee = http://localhost:3000/api/employees

 
const newEmployee = async (req, res) => {
 
   try {
    //    const employee = await Employee.create(req.body);
    const { employeeName, password, roles } = req.body;
   
    // Confirm data
    if (!employeeName || !password || !Array.isArray(roles) || !roles.length) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate employee name
    const duplicate = await Employee.findOne({ employeeName }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate employee Name' })
    }


    // Hash password 
    const hashedPwd = await bcrypt.hash(password, 10) // salt rounds

    const employeeObject = { employeeName, "password": hashedPwd, roles }

     // Create and store new user 
    const employee = await Employee.create(employeeObject)

    if (employee) { //created 
        res.status(201).json({ message: `New employee ${ employeeName } created` })
    } 
               
      
      } catch (error) {
       res.status(400).json({
           success: false,
           message: 'Invalid employeeData received'
       })
   }
   
}


 //GET single Employee details => api/Employees/:id

 const getSingleEmployee = async (req, res) => {
 
    try {
        const singleEmployee = await Employee.findById(req.query.id);
  
        if(!singleEmployee) {
            return res.status(404).json({
                success: false,
                error: "Employee not found with this ID"
            })
  
        }
  
        res.status(200).json({
            success: true,
            singleEmployee
        })
       
   
       
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
            
    }
 }
 
 //UPDATE single Employee details => api/Employees/:id
 const updateSingleEmployee = async (req, res) => {
    try {
        let singleEmployee = await Employee.findById(req.query.id);

     

         if(!singleEmployee) {
            return res.status(404).json({
                success: false,
                error: "Employee not found with this ID"
            })
         }
  
        singleEmployee = await Employee.findByIdAndUpdate(req.query.id, req.body, {
            new: true,
            runValidators: true
  
        })
         res.status(200).json({
            success: true,
            singleEmployee
        })
      
  
      
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
           
    }
 }
 
  
   
 
    
// DELETE images associated with Employee

 //DELETE single Employee details => api/Employees/:id

 const deleteSingleEmployee = async (req, res) => {
 
    try {
        const { id } = await Employee.findById(req.query.id);

       

        // Confirm data
    if (!id) {
        return res.status(400).json({ message: 'Employee ID Required' })
    }

    // Does the employee still have assigned notes?
    const note = await Note.findOne({ employee: id }).lean().exec()
    if (note) {
        return res.status(400).json({ message: 'Employee has assigned notes' })
    }

    // Does the employee exist to delete?
    const employee = await Employee.findById(id).exec()
  
        if(!employee) {
            return res.status(404).json({
                success: false,
                error: "Employee not found with this ID"
            })
  
        }

        const result = await employee.deleteOne()

    const reply = `Empoyee ${result.employeeName} with ID ${result._id} deleted`

    res.json(reply)
       
   
       
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
            
    }
 }
 
 
export {
allEmployees,
newEmployee,
getSingleEmployee,
updateSingleEmployee,
deleteSingleEmployee
}