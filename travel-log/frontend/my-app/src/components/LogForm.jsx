import React, { useState } from "react";
import axios from "axios";

const LogForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        location: "",
        visitDate: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/logs", formData);
            alert("Log created successfully!");
            setFormData({ title: "", description: "", location: "", visitDate: "" }); // Clear form
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                required
            />
            <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                required
            />
            <input
                type="date"
                name="visitDate"
                value={formData.visitDate}
                onChange={handleChange}
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default LogForm;