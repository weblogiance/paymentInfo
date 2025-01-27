import React from 'react';


const App = () => {
  const billServices = [
    { title: 'Electricity Bills', description: 'Pay your electricity bills easily and securely.', image: 'https://i.pinimg.com/736x/ac/08/73/ac0873b5009b5b23663d5e5228566903.jpg' },
    { title: 'Water Bills', description: 'Quick and hassle-free water bill payments.', image: 'https://i.pinimg.com/736x/09/40/78/094078c356b33df954bdd20fd809af19.jpg' },
    { title: 'Internet Bills', description: 'Stay connected with seamless internet bill payments.', image: 'https://i.pinimg.com/736x/4e/63/86/4e6386b13a53c14cbd596a2d3174f08d.jpg' },
    { title: 'Gas Bills', description: 'Convenient gas bill payments at your fingertips.', image: 'https://i.pinimg.com/736x/8a/39/52/8a39526f65cea849f178e12d77d6ab75.jpg' },
    {title:'OTT Bills',description:'Pay your OTT bills easily and securely.',image:'https://i.pinimg.com/736x/83/50/e5/8350e590f77a630d5b04f5d69b26b47e.jpg'}
  ];

  const billFactures = [
    { title: 'Electricity Facture', description: 'View and download detailed electricity bill factures.', image: 'https://i.pinimg.com/736x/32/db/d5/32dbd56a57875922139164f4fdee3a80.jpg' },
    { title: 'Water Facture', description: 'Access comprehensive water bill factures anytime.', image: 'https://i.pinimg.com/236x/c4/3b/73/c43b73b8e893b8156ca34584544ce052.jpg' },
    { title: 'Internet Facture', description: 'Check and keep track of your internet bill factures.', image: 'https://i.pinimg.com/736x/3a/7e/3a/3a7e3ac7eac22a5bc2df81d220b86b84.jpg' },
    { title: 'Gas Facture', description: 'Stay informed with your gas bill factures easily.', image: 'https://i.pinimg.com/736x/02/dd/60/02dd60a02645b9de5bfb42f3baa7b908.jpg' },
    {title:'OTT Facture',description:'View and download detailed OTT bill factures.',image:'https://i.pinimg.com/736x/30/35/16/303516b3d848265807856338aabd9572.jpg'},
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-11/12 mx-auto mt-10 h-[600px] overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 p-4">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src="https://i.pinimg.com/736x/4c/06/6b/4c066b34ccba92279b04221146070311.jpg" 
              alt="Luxury Hotel"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src="https://i.pinimg.com/736x/90/43/de/9043de332750b618ca52749aa60612be.jpg" 
              alt="Flight Travel"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src="https://i.pinimg.com/236x/19/bf/e2/19bfe2b77bea524c472f63df71c2bd5d.jpg" 
              alt="Train Journey"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src="https://i.pinimg.com/736x/4f/0f/c9/4f0fc919cec66689429d432ebe1a67f0.jpg" 
              alt="Bus Travel"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Utility Bill Payment Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
                 Pay all your utility bills conveniently with exciting cashback and rewards!
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="w-full py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg md:text-xl mb-6">Explore a variety of services tailored to your needs.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {billServices.map((service, index) => (
              <div key={index} className="p-6 bg-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factures Section */}
      <section className="w-full py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Factures of Bills</h2>
          <p className="text-lg md:text-xl mb-6">Manage all your bills in one place with detailed factures.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {billFactures.map((facture, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <img src={facture.image} alt={facture.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold mb-2">{facture.title}</h3>
                <p>{facture.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cashback Component */}
      <section className="w-full py-12 px-6 relative bg-gradient-to-r from-yellow-200 via-red-200 to-pink-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Exciting Cashback Offers!</h2>
          <p className="text-lg md:text-xl mb-6">Earn cashback on every bill payment. It's easy and rewarding!</p>
          <div 
            className="w-32 h-32 mx-auto bg-yellow-400 rounded-full flex items-center justify-center shadow-md hover:bg-yellow-500 transition-colors duration-300">
            <span className="text-2xl font-semibold">Cashback</span>
          </div>
        </div>
      </section>

      {/* Rewards Component */}
      <section className="w-full py-12 px-6 relative bg-gradient-to-r from-green-200 via-blue-200 to-purple-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Rewards Await You!</h2>
          <p className="text-lg md:text-xl mb-6">Redeem your points for amazing rewards and discounts.</p>
          <div 
            className="w-32 h-32 mx-auto bg-green-400 rounded-full flex items-center justify-center shadow-md hover:bg-green-500 transition-colors duration-300">
            <span className="text-2xl font-semibold">Rewards</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
