import React from 'react'
import NotesList from '../../../features/notes/NotesList'
import DashLayout from '../../../components/DashLayout'

const Notes = () => {
  return (
    <DashLayout >
      <section className='h-screen text-red-600'>
        <NotesList  />
      </section>
    
    </DashLayout>
  )
}

export default Notes
