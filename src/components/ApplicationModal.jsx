import React, { useState } from 'react';
import { Icons } from './Icons';

const ApplicationModal = ({ isOpen, onClose, programName }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cnic: '',
    university: '',
    program: programName || 'Web Development',
    resume: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.cnic) {
      newErrors.cnic = 'CNIC is required';
    } else if (!/^\d{5}-\d{7}-\d{1}$/.test(formData.cnic) && !/^\d{13}$/.test(formData.cnic)) {
      newErrors.cnic = 'Format: 00000-0000000-0 or 13 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1500);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>
          <Icons.X />
        </button>

        {!isSubmitted ? (
          <div className="modal-body">
            <div className="modal-header">
              <h2 className="heading-lg" style={{ marginBottom: '0.5rem' }}>Apply for Internship</h2>
              <p className="text-muted">Fill out the form below to join our {formData.program} program.</p>
            </div>

            <form className="application-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    className={`form-control ${errors.fullName ? 'error' : ''}`}
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${errors.email ? 'error' : ''}`}
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className={`form-control ${errors.phone ? 'error' : ''}`}
                    placeholder="+92 300 0000000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">CNIC / ID Number</label>
                  <input
                    type="text"
                    name="cnic"
                    className={`form-control ${errors.cnic ? 'error' : ''}`}
                    placeholder="00000-0000000-0"
                    value={formData.cnic}
                    onChange={handleChange}
                  />
                  {errors.cnic && <span className="error-text">{errors.cnic}</span>}
                </div>

                <div className="form-group full-width">
                  <label className="form-label">University / Institute</label>
                  <input
                    type="text"
                    name="university"
                    className="form-control"
                    placeholder="Your university name"
                    value={formData.university}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group full-width">
                  <label className="form-label">Selected Program</label>
                  <select 
                    name="program" 
                    className="form-control"
                    value={formData.program}
                    onChange={handleChange}
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Backend Development">Backend Development</option>
                    <option value="Frontend Development">Frontend Development</option>
                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Processing...' : 'Submit Application'}
              </button>
            </form>
          </div>
        ) : (
          <div className="success-message">
            <div className="success-icon">
              <Icons.CheckCircle />
            </div>
            <h2 className="heading-lg">Application Submitted!</h2>
            <p className="text-muted">
              Thank you, <strong>{formData.fullName}</strong>. Your application for the <strong>{formData.program}</strong> program has been received. Our team will review it and contact you via email shortly.
            </p>
            <button className="btn btn-primary submit-btn" onClick={handleClose} style={{ marginTop: '2rem', maxWidth: '280px', marginInline: 'auto' }}>
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationModal;
