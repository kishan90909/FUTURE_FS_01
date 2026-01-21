import React, { useState } from 'react';
import { sendContact } from '../api';
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentAlt } from 'react-icons/fa'; // Icons for professional look

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle Input Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            // Sends data to Backend (or Netlify/Mock if you used the "Easy Way")
            await sendContact(formData);
            
            setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
            setFormData({ name: '', email: '', message: '' }); // Clear form
        } catch (error) {
            setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="page-section">
            <h2 className="section-title">Get In Touch</h2>
            
            {/* NOTE: If you are using the "Netlify Drop" (No Backend) method, 
                keep 'data-netlify="true"'. 
                If using the real Node.js backend, these attributes are ignored.
            */}
            <form 
                className="contact-form" 
                onSubmit={handleSubmit}
                name="contact" 
                method="post" 
                data-netlify="true"
            >
                {/* Hidden input for Netlify Form Handling */}
                <input type="hidden" name="form-name" value="contact" />

                <div className="form-group">
                    <label>
                        <FaUser style={{ marginRight: '8px', color: '#4f46e5' }} />
                        Your Name
                    </label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="John Doe"
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label>
                        <FaEnvelope style={{ marginRight: '8px', color: '#4f46e5' }} />
                        Email Address
                    </label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="john@example.com"
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label>
                        <FaCommentAlt style={{ marginRight: '8px', color: '#4f46e5' }} />
                        Message
                    </label>
                    <textarea 
                        name="message" 
                        rows="5" 
                        placeholder="How can I help you?"
                        value={formData.message} 
                        onChange={handleChange} 
                        required
                    ></textarea>
                </div>

                <button type="submit" className="btn primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : (
                        <>
                            Send Message <FaPaperPlane style={{ marginLeft: '10px' }} />
                        </>
                    )}
                </button>

                {/* Status Message */}
                {status.message && (
                    <p style={{ 
                        marginTop: '1.5rem', 
                        textAlign: 'center', 
                        color: status.type === 'success' ? 'green' : 'red',
                        fontWeight: 'bold',
                        padding: '10px',
                        background: status.type === 'success' ? '#dcfce7' : '#fee2e2',
                        borderRadius: '8px'
                    }}>
                        {status.message}
                    </p>
                )}
            </form>
        </div>
    );
};

export default Contact;