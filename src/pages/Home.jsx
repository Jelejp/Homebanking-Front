import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div id='home' className='bg-gradient-to-b from-[#000000] to-[#63edd8]'>
        <section className="min-h-screen flex flex-col justify-center items-center py-12">
          <div className="container mx-auto p-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              ¡Welcome to Flex<span className='text-[#8EFBEB]'>Bank!</span>
            </h1>
            <p className="text-lg text-[#F2FFFF] mb-8">
            Your online bank for a flexible and secure banking experience.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to= '/login'>
                
              <button className="bg-[#8EFBEB] hover:bg-[#5BF3D3] text-[#002613] font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out">
              Log in
              </button>
              </Link>
              <Link to= '/register'>
              <button className="bg-[#8EFBEB] hover:bg-[#5BF3D3] text-[#002613] font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out">
                Register
              </button>
              </Link>
            </div>
          </div>
        </section>
        {/* ABOUT */}
        <section id='about' className='min-h-screen  bg-[#f5f5f5]'>
          <section className="py-12 ">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-[#002613] mb-6">About FlexBank</h2>
              <p className="text-2xl text-[#005530] mb-4">
              At FlexBank, we offer a modern and flexible banking experience, tailored to your needs.
              </p>
              <p className="text-2xl text-[#005530]">
              Our mission is to provide you with the best financial solutions with the greatest comfort and security.
              </p>
            </div>
          </section>
          <section id='values' className="py-12 bg-[#f5f5f5]">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-[#002613] mb-6">What do we believe in?</h2>
              <p className="text-2xl text-[#005530] mb-4">We have 6 pillars that guide us in every decision we make:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-[#005530]">The mission</h3>
                  <p className="text-xl text-[#002613] mt-2">We are motivated by our social purpose of financial inclusion.</p>
                </div>
                <div className="p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-[#005530]">Commitment</h3>
                  <p className="text-xl text-[#002613] mt-2">With the excellence of our work.</p>
                </div>
                <div className="p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-[#005530]">Innovation</h3>
                  <p className="text-xl text-[#002613] mt-2">Using the best technology to create the best product.</p>
                </div>
                <div className="p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-[#005530]">Trust</h3>
                  <p className="text-xl text-[#002613] mt-2">In the team that we are, to attract and retain the best talent.</p>
                </div>
                <div className="p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-[#005530]">Transparency</h3>
                  <p className="text-xl text-[#002613] mt-2">With integrity for our customers, investors and society.</p>
                </div>
                <div className="p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-[#005530]">User Experience</h3>
                  <p className="text-xl text-[#002613] mt-2">
                  We strive to offer the best user experience in our homebanking, prioritising usability, accessibility and customer satisfaction in every interaction.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>

{/* SECURITY */}
<section id='security' className="py-12 min-h-screen">
  <div className="container mx-auto px-4 flex flex-col justify-center items-center">
    <h2 className="text-3xl font-bold text-[#002613] mb-6">Security</h2>
    <div className="flex flex-col md:flex-row items-center text-center md:text-left">
      <div className="md:w-2/3 pl-4">
        <div className="flex items-start mb-4">
          <span className="text-2xl text-[#005530]">🔒</span>
          <p className="text-2xl text-[#005530] ml-2">
          Your security is our priority. We use state-of-the-art technology to protect your data and transactions.
          </p>
        </div>
        <div className="flex items-start mb-4">
          <span className="text-2xl text-[#005530]">🔒</span>
          <p className="text-2xl text-[#005530] ml-2">
          With FlexBank, you can rest assured that your financial information is in safe hands.
          </p>
        </div>
        <div className="flex items-start mb-4">
          <span className="text-2xl text-[#005530]">🔒</span>
          <p className="text-2xl text-[#005530] ml-2">
          Our infrastructure and security protocols meet the highest industry standards to ensure the confidentiality and integrity of your data.
          </p>
        </div>
      </div>
      <div className="md:w-1/3 mt-6 md:mt-0 md:ml-6 flex justify-center">
        <img className='w-[300px] rounded-lg' src='src/assets/home-Security.png' alt="Seguridad" />
      </div>
    </div>
    {/* Nuevo elemento para ocupar el resto del espacio */}
    <div className="flex-1"></div>
    {/* Contenido adicional */}
    <div className="text-center mt-8">
      <h3 className="text-3xl font-bold text-[#002613] mb-6">Your peace of mind is our goal</h3>
      <p className="text-2xl text-[#005530] ml-2">At FlexBank, we are committed to providing you with maximum security for all your financial transactions. Our infrastructure and security protocols meet the highest industry standards to ensure the confidentiality and integrity of your data.</p>
    </div>
  </div>
</section>


        {/* BENEFITS */}
        <section id='benefits' className="py-12 min-h-screen">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-[#002613] mb-6">Benefits of FlexBank</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-[#005530]">Online Banking</h3>
        <p className="text-xl text-[#002613] mt-2">
        Access your accounts and make transactions from anywhere, anytime.
        </p>
      </div>
      <div className="p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-[#005530]">Credit Cards</h3>
        <p className="text-xl text-[#002613] mt-2">
        Get credit cards with exclusive benefits and competitive rates.
        </p>
      </div>
      <div className="p-6 rounded-lg shadow-lg ">
        <h3 className="text-2xl font-bold text-[#005530]">Personal Loans</h3>
        <p className="text-xl text-[#002613] mt-2">
        Apply for personal loans with favourable terms and fast approval.
        </p>
      </div>
    
    <div className="text-center mt-12">
      <div className="p-6 rounded-lg shadow-lg ">
        <h3 className="text-2xl font-bold text-[#005530]">Commission-Free Debit Card</h3>
        <p className="text-xl text-[#002613] mt-2">
        Conveniently make payments and cash withdrawals without fees.
        </p>
      </div>
    </div>
    <div className="text-center mt-12">
      <div className="p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-[#005530]">Discounts and Promotions</h3>
        <p className="text-xl text-[#002613] mt-2">
        Access exclusive discounts and promotions in a wide range of partner establishments.
        </p>
      </div>
    </div>
    <div className="text-center mt-12">
  <div className="p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-bold text-[#005530]">24/7 Customer Service</h3>
    <p className="text-xl text-[#002613] mt-2">
Our customer service team is available 24/7 to resolve any questions or problems you may have.
    </p>
  </div>
</div>

    </div>
  </div>
</section>

      </div>
    </>
  );
};

export default Home;
