import { useState } from 'react'
import { Student, Teacher, Clerk } from "./index.jsx";
import sayNo, { sayHello, sayYes } from "./serve.jsx"
import './App.css'

function App() {
  sayHello();
  sayNo();

  const student = new Student(1001, "akshay", 10);
  const teacher = new Teacher(1, "Jaya", 28);
  const clerk = new Clerk(1, "ajay", 40);
  student.display_Data();
  teacher.display_Data();
  clerk.display_Data();
  return (
    <>

    </>
  )
}

export default App
