import React from "react";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";

function App() {
  return (
    <div>
      <h1>Student Management</h1>
      <StudentList />
      <StudentForm/>
    </div>
  );
}

export default App;
