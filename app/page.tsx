"use client";

// Import necessary React and Next.js components
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import the Footer and Navbar components
import Footer from '/app/components/Footer';
import Navbar from '/app/components/Navbar';

const Page = () => {
  return (
    <div className="min-h-screen bg-primary flex flex-col">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow mt-16">
        {/* Hero Section */}
        <section className="relative h-screen">
          <Image
            src="/sexual-violence-sm.jpg"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="brightness-50"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl font-bold">Empower, Educate, Protect</h1>
            <p className="mt-4 text-xl">Join us in the fight against sexual violence in Uganda.</p>
            <button className="mt-6 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
              Donate Now
            </button>
          </div>
        </section>

        {/* SDG Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto flex justify-center">
            <Image
              src="/sdg5.png"
              alt="SDG Image"
              width={500}
              height={300}
              objectFit="contain"
            />
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <i className="fas fa-book-open text-4xl text-blue-600 mb-4"></i>
                <h3 className="text-xl font-semibold">Educational Resources</h3>
                <p className="mt-2">Empowering individuals with knowledge on consent, abuse, and self-protection.</p>
              </div>
              <div>
                <i className="fas fa-hands-helping text-4xl text-blue-600 mb-4"></i>
                <h3 className="text-xl font-semibold">Support Community</h3>
                <p className="mt-2">Connect with others who share your experiences in a safe space.</p>
              </div>
              <div>
                <i className="fas fa-smile-beam text-4xl text-blue-600 mb-4"></i>
                <h3 className="text-xl font-semibold">Fun & Engaging Content</h3>
                <p className="mt-2">Interactive content to keep you informed and entertained.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Inspirational Image Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-8 md:mb-0">
              <Image
                src="/happy-woman.jpg"
                alt="Happy Woman"
                width={600}
                height={400}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="flex-1 md:ml-8 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">Empowerment through Connection</h2>
              <p className="text-lg">Join our community of strong, resilient women who support each other through every step of their journey.</p>
            </div>
          </div>
        </section>

        {/* Our Cause Section with Countdown */}
        <section className="py-16 bg-white text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Cause</h2>
            <p className="text-lg mb-4">We are committed to ending violence against women worldwide. Help us make a difference.</p>
            <div className="flex justify-center items-center space-x-8">
              <div>
                <h3 className="text-4xl font-bold text-red-600">#CountDown1</h3>
                <p className="text-sm">Women facing violence worldwide</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-red-600">#CountDown2</h3>
                <p className="text-sm">Other relevant stats</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
