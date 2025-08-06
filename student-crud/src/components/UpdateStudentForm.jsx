import React, { useEffect, useState } from "react";
import { getStudent, updateStudent } from "../api/studentApi";
import { useParams } from "react-router-dom";

function UpdateStudentForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    getStudent(id).then((res) => setFormData(res.data.data));
  }, [id]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent(id, formData)
      .then(() => alert("Student updated!"))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
      <button type="submit">Update</button>
    </form>
  );
}

export default UpdateStudentForm;
