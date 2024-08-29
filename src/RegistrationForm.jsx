import React, { useState } from 'react';

const RegistrationForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        mobile: '',
        email: '',
        gender: '',
        dob: '',
        course: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate input fields
        const { name, address, mobile, email, gender, dob, course } = formData;
        if (!name || !address || !mobile || !email || !gender || !dob || !course) {
            alert('Please fill out all required fields.');
            return;
        }

        // Display alert with user inputted data
        alert(`Data stored successfully:\n\nName: ${name}\nAddress: ${address}\nMobile: ${mobile}\nE-mail: ${email}\nGender: ${gender}\nDate of Birth: ${dob}\nCourse: ${course}`);

        // Reset form
        setFormData({
            name: '',
            address: '',
            mobile: '',
            email: '',
            gender: '',
            dob: '',
            course: ''
        });
    };

    const handleCancel = () => {
        // Reset all fields in the form
        setFormData({
            name: '',
            address: '',
            mobile: '',
            email: '',
            gender: '',
            dob: '',
            course: ''
        });
    };


    return (

        <div style={styles.container}>
            <h2>Higher Secondary Admission Form</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label><br />
                <input type="text" name="name" value={formData.name} onChange={handleChange} required /><br /><br />

                <label>Address:</label><br />
                <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows="5"
                    cols="40"
                /><br /><br />
                <label>Mobile:</label><br />
                <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required /><br /><br />

                <label>E-mail:</label><br />
                <input type="email" name="email" value={formData.email} onChange={handleChange} required /><br /><br />

                <label>Gender:</label><br />
                <select name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select><br /><br />

                <label>Date of Birth:</label><br />
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} required /><br /><br />

                <label>Course:</label><br />
                <select name="course" value={formData.course} onChange={handleChange} required>
                    <option value="">Select Course</option>
                    <option value="Biology">Biology</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Humanities">Humanities</option>
                </select><br /><br />

                <button type="submit" style={styles.registerButton}>Register</button>
                <button type="button" onClick={handleCancel} style={styles.cancelButton}>Cancel</button>
            </form>
        </div>
    );

}

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f0f0f0',
        padding: '20px',
        maxWidth: '400px',
        margin: 'auto',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    registerButton: {
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        marginRight: '10px',
        borderRadius: '4px',
    },
    cancelButton: {
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        borderRadius: '4px',
    }
};


export default RegistrationForm