import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, Contact } from 'lucide-react';
import { Apple,Star, Download, Smartphone } from 'lucide-react';
import Android from '../assets/Photos/Android.svg';
import AppleStore from '../assets/Photos/Apple.svg';
import home from '../assets/Photos/Slash screen.png'
import signup from '../assets/Photos/Sign up screen.png'
import login from '../assets/Photos/Log in screen.png'
import cashback1 from '../assets/Photos/Home screen.png'
function Contactus() {
    const [currentStep, setCurrentStep] = useState(1);


    const handleAppStoreClick = () => {
        window.open('https://apps.apple.com/your-app', '_blank');
      };
    
      const handlePlayStoreClick = () => {
        window.open('https://play.google.com/store/apps/your-app', '_blank');
      };

    const handleStepChange = (step) => {
        setCurrentStep(step);
    };

     const steps = [
       {
         id: 1,
         title: "click on app store icon",
   
         image:home,
       },
       {
         id: 2,
         title: "Install the app",
   
         image: "https://i.pinimg.com/736x/b5/2c/ae/b52cae6879e991d1683081de523c2825.jpg",
       },
       {
         id: 3,
         title: "Open the app and Sign in",
   
         image: signup,
       },
       {
         id: 4,
         title: "login to your account",
   
         image: login,
       },
       {
         id: 5,
         title: "use the app and get the cashback and rewards",
   
         image:cashback1,
       },
     ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
        alert('Message sent successfully!');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-b mt-16 from-blue-50 to-white">
            {/* Hero Section */}
            <div className="bg-blue-600 text-white py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg md:text-xl text-blue-100">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                </div>
            </div>

            {/* Contact Section */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-blue-800 mb-6">Get in Touch</h2>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <Mail className="w-6 h-6 text-blue-600 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Email</h3>
                                        <p className="text-gray-600">weblogiance@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <Phone className="w-6 h-6 text-blue-600 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Phone</h3>
                                        <p className="text-gray-600">+91 99965 65865</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Address</h3>
                                        <p className="text-gray-600">C-2 1014 Pragati IT Park Near Sudama Chowk Mota Varachha <br />Surat - 394101.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Contact Center"
                                className="w-full h-48 object-cover rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-blue-800 mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="How can we help?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Your message here..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center space-x-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Steps Section */}
            <div className="flex flex-col bg-gradient-to-r from-blue-50 to-white mx-auto items-center justify-center   ">
                <div className="w-11/12 mx-auto   p-6 rounded-lg ">
                    <div className="flex flex-col gap-y-5 mb-20">
                        <h1 className=" text-5xl mx-auto w-full text-center font-bold tracking-wide max-w-4xl leading-tight">How to Install App<span className=" text-blue-500"> Your Device</span></h1>
                        <p className=" text-gray-500 text-center text-lg max-w-xl mx-auto">PhonePe offers you a convenient platform to get or renew your Health Insurance plan. Here are the steps on how you can get a Health Insurance span plan from [App Name]:</p>
                    </div>
                    <div className="flex lg:w-10/12 w-full mx-auto justify-between  flex-col lg:flex-row gap-24">
                        {/* Steps Navigation */}
                        <div className=" flex lg:w-[50%] w-full flex-col gap-4">
                            <div className="relative h-2 bg-gray-200 rounded-full mb-6">
                                <div
                                    className="absolute top-0 left-0 h-2 bg-blue-600 rounded-full transition-all duration-300"
                                    style={{ width: `${(currentStep / steps.length) * 100}%` }}
                                ></div>
                            </div>
                            {steps.map((step) => (
                                <button
                                    key={step.id}
                                    className={`p-4 text-left rounded-lg border transition-all duration-300 ease-in-out ${currentStep === step.id
                                        ? "border-blue-600 bg-blue-50"
                                        : "border-gray-200"
                                        }`}
                                    onClick={() => handleStepChange(step.id)}
                                >
                                    <h2 className="font-semibold text-lg text-blue-600">
                                        Step {step.id}/5
                                    </h2>
                                    <p className="text-gray-600">{step.title}</p>
                                </button>
                            ))}
                        </div>

                        {/* Step Details */}
                        <div className="lg:w-[50%] w-full  items-center justify-center flex flex-col gap-6">
                            {steps.map((step) => (
                                <div
                                key={step.id}
                                className={`transition-opacity w-[240px] outline outline-4 rounded-md overflow-hidden outline-offset-8 duration-500 ease-in-out ${currentStep === step.id ? "opacity-100" : "opacity-0 hidden"
                                  }`}
                              >
              
                                <img
                                  src={step.image}
                                  alt={`Step ${step.id}`}
                                  className="w-full  max-w-sm"
                                />
                              </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className=" flex items-center justify-center py-10">
                {/* Main Banner */}
                <div className="w-full max-w-7xl  mx-auto">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl overflow-hidden shadow-2xl">
                        <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                            {/* Left Content */}
                            <div className="space-y-6">
                                <div className="flex items-center space-x-2">
                                    <Smartphone className="w-6 h-6 text-blue-200" />
                                    <span className="text-blue-200 font-medium">Mobile App</span>
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                    Download Our App Today
                                </h1>

                                <p className="text-blue-100 text-lg">
                                    Experience the best features on your mobile device. Available for both iOS and Android.
                                </p>

                                <div className="flex gap-x-5 ">
                                    <div>
                                        <img src={Android} alt="Android" className='w-[200px]' />
                                    </div>
                                    <div>
                                        <img src={AppleStore} alt="Apple Store" className=' w-[200px]' />
                                    </div>

                                </div>

                                {/* Stats */}
                                <div className="flex flex-wrap gap-6 pt-4">
                                    <div className="flex items-center space-x-2">
                                        <Download className="w-5 h-5 text-blue-200" />
                                        <span className="text-white">1M+ Downloads</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Star className="w-5 h-5 text-blue-200" />
                                        <span className="text-white">4.8 Rating</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="relative hidden md:block">
                                <img
                                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Mobile App Interface"
                                    className="w-full max-w-md mx-auto transform hover:scale-105 transition duration-500 rounded-lg shadow-2xl"
                                />

                                {/* Floating Elements */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                                    <div className="flex items-center space-x-1">
                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contactus;