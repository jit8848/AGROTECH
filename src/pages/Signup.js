import React, { useState } from 'react';
import '../styles/Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: '',
    phoneNumber: '',
    address: '',
    dateOfBirth: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (!formData.role) newErrors.role = 'Role is required';
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone Number must be 10 digits';
    }
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log('Form submitted successfully', formData);
      alert('Signup successful!');
    }
  };

  return (
    <div className="signup-container">
      <h2>Create Your Account</h2>
      <p>Join our B2B agriculture network and connect with suppliers and buyers.</p>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={errors.fullName ? 'error-input' : ''}
          />
          {errors.fullName && <span className="error-message">{errors.fullName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error-input' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? 'error-input' : ''}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className={errors.role ? 'error-input' : ''}
          >
            <option value="">Select Role</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
            <option value="supplier">Supplier</option>
            <option value="distributor">Distributor</option>
          </select>
          {errors.role && <span className="error-message">{errors.role}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={errors.phoneNumber ? 'error-input' : ''}
          />
          {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={errors.address ? 'error-input' : ''}
          />
          {errors.address && <span className="error-message">{errors.address}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className={errors.dateOfBirth ? 'error-input' : ''}
          />
          {errors.dateOfBirth && <span className="error-message">{errors.dateOfBirth}</span>}
        </div>

        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
