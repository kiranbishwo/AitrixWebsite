import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin 
} from "lucide-react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram
} from 'react-icons/fa';
import '@/assets/styles/styles.css'

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const ContactInfo = ({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary">
      <Icon className="h-5 w-5 text-white" />
    </div>
    <div>
      <h4 className="font-medium text-gray-900">{title}</h4>
      <div className="text-gray-600 mt-1">{children}</div>
    </div>
  </div>
);

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: React.ElementType }) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition-colors"
  >
    <Icon size={16} />
  </a>
);

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.email.includes('@') || formData.message.trim() === '') {
      return;
    }
    
    // Show success message
    setSuccessMessage("Your message has been sent successfully!");
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    });
    
    // Remove success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in <span className="text-primary">Touch</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to revolutionize your educational approach with AI-powered solutions? Connect with our team of AI specialists and educational technology experts.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Whether you're an educational institution looking to implement adaptive learning systems, or a developer interested in our AI education APIs, we're here to guide your transformation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="reveal">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <ContactInfo icon={Phone} title="Phone">
                    +977 9843019821
                  </ContactInfo>
                  
                  <ContactInfo icon={Mail} title="Email">
                    aitrixlabs@gmail.com
                  </ContactInfo>
                  
                  <ContactInfo icon={MapPin} title="Location">
                    Bagbazar near Ghantaghar<br />Kathmandu Nepal
                  </ContactInfo>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <SocialIcon href="#" icon={FaTwitter} />
                    <SocialIcon href="#" icon={FaLinkedinIn} />
                    <SocialIcon href="#" icon={FaFacebookF} />
                    <SocialIcon href="#" icon={FaInstagram} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="reveal">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                    placeholder="john.doe@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                  >
                    <option value="" disabled>Please select a subject</option>
                    <option value="ai-implementation">AI Implementation Consultation</option>
                    <option value="demo">Request AI Learning Demo</option>
                    <option value="integration">LMS Integration Services</option>
                    <option value="custom">Custom AI Model Development</option>
                    <option value="pilot">Educational Institution Pilot Program</option>
                    <option value="api">AI Education API Access</option>
                    <option value="research">Research Collaboration</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full py-3 bg-primary text-white font-medium rounded-lg hover:bg-secondary transition-colors">
                  Send Message
                </button>
                
                {successMessage && (
                  <div className="mt-4 p-3 bg-green-500 bg-opacity-20 text-green-500 rounded-lg">
                    {successMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
