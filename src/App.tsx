import React from 'react';
import { Calculator, BarChart3, FileText } from 'lucide-react';
import { Header } from './components/Header';
import { ServiceCard } from './components/ServiceCard';
import { ContactForm } from './components/ContactForm';

function App() {
  // Replace this URL with your desired logo image
  const logoUrl = 'https://your-logo-url.com/logo.png';

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          'url("https://media.theresanaiforthat.com/g/best-free-image-generator@2816931-6ac13dfe-1413-4e0a-b9fe-dd1e94a58e40.png?width=800")',
      }}
    >
      <Header logoUrl={logoUrl} />

      {/* Hero Section */}
      <div className="bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 pt-32 pb-24 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 text-shadow">
            Small Business Accountant
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8 text-shadow-sm">
            Precision accounting services tailored to your business needs
          </p>
          <a
            href="#contact"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="container mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center text-white mb-16 text-shadow">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ServiceCard
            icon={Calculator}
            title="Bookkeeping"
            description="Each week we will review your business transactions and classify them to the correct accounts. Monthly we will reconcile bank accounts and generate financial statements."
            imageUrl="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=800"
          />

          <ServiceCard
            icon={BarChart3}
            title="Accounts Payable"
            description="From invoice processing to payment processing and vendor management, we provide efficient and accurate accounts payable services. Our goal is to help our clients stay current on their bills."
            imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
          />

          <ServiceCard
            icon={FileText}
            title="Other Business Services"
            description="Multiple months/years bookkeeping, new business formation and notary public"
            imageUrl="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
          />
        </div>
      </div>

      {/* About Us Section */}
      <div id="about" className="bg-black/50 backdrop-blur-sm py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-16 text-shadow">
            About Us
          </h2>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-200 leading-relaxed mb-8 text-shadow-sm">
              At Versed Accounting, we believe that technology and innovation
              are essential for delivering the best accounting services
              possible. Our mission is to provide accurate, efficient, and
              secure financial solutions that leverage the latest technology and
              software to help our clients achieve their financial goals. We
              specialize in providing high-quality accounting to small
              businesses. We will work closely with our clients to develop
              customized solutions that meet their unique needs.
            </p>

            <p className="text-xl text-gray-200 leading-relaxed mb-8 text-shadow-sm">
              From business formation to bookkeeping and financial reporting, we
              offer a wide range of services designed to help our clients stay
              on top of their finances and make informed business decisions. We
              also offer other business services, including accounts payable and
              notary services, to help our clients grow and succeed in the long
              term.
            </p>

            <p className="text-xl text-gray-200 leading-relaxed text-shadow-sm">
              At Versed Accounting, we pride ourselves on our commitment to
              providing exceptional client service. We take the time to get to
              know our clients and their businesses, and we work tirelessly to
              ensure that they receive the support and guidance they need to
              achieve their financial goals. If you're looking for a trusted
              partner to help you manage your finances and achieve your business
              objectives, look no further than Versed Accounting. Contact us
              today to schedule a consultation and learn more about how we can
              help you succeed.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-black/70 backdrop-blur-sm py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-16 text-shadow">
            Contact Us
          </h2>
          <ContactForm />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/70 backdrop-blur-sm text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-300 text-shadow-sm">
            © 2024 Versed Accounting. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
