import React from 'react';
import { Shield, Zap, Globe, CreditCard, Wallet, Users, LinkedinIcon, TwitterIcon, Mail } from 'lucide-react';
import { Star, Download, Smartphone } from 'lucide-react';
import Android from '../assets/Photos/Android.svg';
import AppleStore from '../assets/Photos/Apple.svg';

function Aboutus() {

    const handleAppStoreClick = () => {
        window.open('https://apps.apple.com/your-app', '_blank');
      };
    
      const handlePlayStoreClick = () => {
        window.open('https://play.google.com/store/apps/your-app', '_blank');
      };

    const features = [
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Secure Payments",
            description: "Bank-grade encryption and advanced security protocols protect every transaction"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Instant Transfers",
            description: "Send and receive money instantly, anywhere in the world"
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Global Reach",
            description: "Operating in over 150 countries with multi-currency support"
        },
        {
            icon: <CreditCard className="w-6 h-6" />,
            title: "Smart Cards",
            description: "Virtual and physical cards with customizable limits"
        }
    ];

    const leaders = [
        {
            name: "Sarah Johnson",
            role: "Chief Executive Officer",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            bio: "Former VP at Goldman Sachs with 15+ years in fintech"
        },
        {
            name: "Michael Chen",
            role: "Chief Technology Officer",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            bio: "Ex-Google engineer, built payment systems for Fortune 500 companies"
        },
        {
            name: "Elena Rodriguez",
            role: "Chief Product Officer",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            bio: "Product veteran with experience at Square and PayPal"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <div className="bg-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="flex items-center space-x-2">
                                <Wallet className="w-8 h-8 text-blue-200" />
                                <span className="text-blue-200 font-medium">PayFlow</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                                Revolutionizing Digital Payments for Everyone
                            </h1>
                            <p className="text-xl text-blue-100">
                                We're building the future of financial transactions with cutting-edge technology and unmatched security.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Digital Payment"
                                className="rounded-lg shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl">
                                <div className="flex items-center space-x-2">
                                    <Users className="w-6 h-6 text-blue-600" />
                                    <span className="text-blue-600 font-semibold">10M+ Users Worldwide</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">Why Choose PayFlow?</h2>
                    <p className="mt-4 text-xl text-gray-600">Experience the next generation of payment solutions</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Leadership Section */}
            <div className="bg-blue-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Meet Our Leadership</h2>
                        <p className="mt-4 text-xl text-gray-600">Experienced professionals driving innovation in fintech</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {leaders.map((leader, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900">{leader.name}</h3>
                                    <p className="text-blue-600 font-medium mb-2">{leader.role}</p>
                                    <p className="text-gray-600 mb-4">{leader.bio}</p>
                                    <div className="flex space-x-4">
                                        <a href="#" className="text-gray-400 hover:text-blue-600 transition">
                                            <LinkedinIcon className="w-5 h-5" />
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-blue-600 transition">
                                            <TwitterIcon className="w-5 h-5" />
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-blue-600 transition">
                                            <Mail className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="p-4 flex items-center bg-blue-50 justify-center py-10">
                {/* Main Banner */}
                <div className="w-full max-w-7xl mx-auto">
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
                                    <div onClick={handlePlayStoreClick} className='cursor-pointer'>
                                        <img src={Android} alt="Android" className='w-[200px]' />
                                    </div>
                                    <div onClick={handleAppStoreClick} className='cursor-pointer'>
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

            {/* Stats Section */}
            <div className="bg-blue-600 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">$10B+</div>
                            <div className="text-blue-200">Transactions Processed</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">150+</div>
                            <div className="text-blue-200">Countries Served</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">10M+</div>
                            <div className="text-blue-200">Active Users</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">99.99%</div>
                            <div className="text-blue-200">Uptime</div>
                        </div>
                    </div>
                </div>
            </div>

           
        </div>
    );
}

export default Aboutus;