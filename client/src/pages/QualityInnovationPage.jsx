import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Check, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

// Asset imports
import heroImg from '../assets/Innovation Header.webp';
import qualityDetail from '../assets/quality assurance img.webp';
import innovationDetail from '../assets/Innovation.webp';
import benefit1 from '../assets/customer benefits final.webp';
import benefit2 from '../assets/framework_tech.webp';
import benefit3 from '../assets/framework_sustainability.webp';
import benefit4 from '../assets/framework_efficiency.webp';

const QualityInnovationPage = () => {
  const [activeBenefit, setActiveBenefit] = React.useState(0);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const benefits = [
    {
      title: "Consistent Performance Standards",
      description: "Every product undergoes stringent evaluation protocols to ensure reliability, uniformity, and compliance with domestic and international specifications.",
      image: benefit1
    },
    {
      title: "Flexible Product Capabilities",
      description: "With diversified grades and coating technologies, NRAIL adapts to specific branding, packaging, and performance requirements.",
      image: benefit2
    },
    {
      title: "Sustainable Competitive Edge",
      description: "Recycling-led manufacturing and resource-efficient processes support customers’ environmental commitments without compromising quality.",
      image: benefit3
    },
    {
      title: "Confidence in Every Delivery",
      description: "Strong manufacturing scale, digital integration, and structured governance ensure timely supply, transparency, and long-term partnership reliability.",
      image: benefit4
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <style>{`
        @media (max-width: 1023px) {
            .qi-hero-mobile {
                height: auto !important;
                aspect-ratio: 16 / 9 !important;
                min-height: unset !important;
                margin-top: 70px !important;
            }
            .qi-breadcrumb-mobile { margin-bottom: 24px !important; margin-top: 16px !important; }
            .qi-breadcrumb-flex-mobile { flex-wrap: wrap !important; font-size: 14px !important; }
            .qi-section-mobile { padding-top: 48px !important; padding-bottom: 48px !important; }
            .qi-gap-mobile { gap: 32px !important; }
            .qi-title-mobile { font-size: 28px !important; }
            .qi-badge-mobile { margin-bottom: 24px !important; }
        }
      `}</style>
      
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden qi-hero-mobile">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Quality & Innovation Hero" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </section>

      {/* Breadcrumbs Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 qi-breadcrumb-mobile" style={{ marginTop: '5px', marginBottom: '50px' }}>
        <div className="flex flex-wrap items-center text-lg text-gray-500 font-normal qi-breadcrumb-flex-mobile">
          <Link to="/" className="hover:text-[#8b0000] transition-colors hover:bg-gray-50 px-2 py-1 rounded-md">Home</Link>
          <ChevronRight className="w-4 h-4 mx-1 text-gray-400 shrink-0" />
          <span className="text-gray-500 px-2 py-1">Manufacturing Excellence</span>
          <ChevronRight className="w-4 h-4 mx-1 text-gray-400 shrink-0" />
          <span className="text-[#8b0000] font-medium px-2 py-1">Quality & Innovation</span>
        </div>
      </div>

      {/* Quality Assurance Section */}
      <section id="quality-assurance" className="bg-white qi-section-mobile" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start qi-gap-mobile">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-6 py-2 bg-[#8b0000]/10 border-l-4 border-[#8b0000] text-[#8b0000] font-['Outfit'] text-2xl font-medium tracking-wide qi-badge-mobile" style={{ marginBottom: '40px' }}>
                Quality Assurance
              </div>
              <h2 className="font-['Outfit'] font-light text-[#111] leading-tight tracking-wide qi-title-mobile" style={{ fontSize: '28px', fontWeight: 300, margin: 0 }}>
                Delivering Confidence Through <span className="font-normal text-[#8b0000]">Quality</span>
              </h2>
              <div className="space-y-6 font-['Outfit'] font-light text-gray-700 text-lg leading-relaxed text-justify" style={{ marginTop: '8px' }}>
                <p>
                  At NRAIL, quality defines our promise. Every product is manufactured under stringent supervision, supported by advanced laboratory testing and intelligent monitoring systems that ensure uniform performance and reliability.
                </p>
                <p>
                  From raw material validation to final inspection, our structured quality control framework safeguards product integrity at every step. Precision measurement tools and compliance-driven processes ensure accurate specifications, superior surface finish, and dependable strength characteristics.
                </p>
                <p>
                  Aligned with global certifications and supported by disciplined operational controls, NRAIL’s quality assurance systems deliver products that consistently meet customer expectations—ensuring performance without compromise.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square lg:aspect-square rounded-none overflow-hidden"
            >
              <img 
                src={qualityDetail} 
                alt="Quality Testing Detail" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section id="innovation" className="bg-gray-50 overflow-hidden qi-section-mobile" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start qi-gap-mobile">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:order-2"
            >
              <div className="inline-block px-6 py-2 bg-[#8b0000]/10 border-l-4 border-[#8b0000] text-[#8b0000] font-['Outfit'] text-2xl font-medium tracking-wide qi-badge-mobile" style={{ marginBottom: '40px' }}>
                Sustainable Innovation
              </div>
              <h2 className="font-['Outfit'] font-light text-[#111] leading-tight tracking-wide qi-title-mobile" style={{ fontSize: '28px', fontWeight: 300, margin: 0 }}>
                Shaping Tomorrow’s Packaging with <span className="font-normal text-[#8b0000]">Sustainable Innovation</span>
              </h2>
              <div className="space-y-6 font-['Outfit'] font-light text-gray-700 text-lg leading-relaxed text-justify" style={{ marginTop: '8px' }}>
                <p>
                  Innovation at NRAIL is guided by market insight and manufacturing expertise. Our product development efforts focus on creating advanced paper and board solutions that deliver strength, smoothness, print fidelity, and consistency—while maintaining environmental responsibility.
                </p>
                <p>
                  From high-quality FBB, SBS, and Duplex boards to Writing & Printing and specialty grades, NRAIL addresses the evolving demands of packaging-intensive industries. Through continuous improvement in coating systems, fibre chemistry, and production efficiency, we enhance both performance and sustainability outcomes.
                </p>
                <p>
                  Our innovation philosophy is simple: develop solutions that empower customers, meet regulatory expectations, and contribute to a more sustainable packaging ecosystem.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:order-1 relative aspect-square lg:aspect-square rounded-none overflow-hidden"
            >
              <img 
                src={innovationDetail} 
                alt="Sustainability Innovation" 
                className="w-full h-full object-cover object-right"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Simplified Benefits Section */}
      <section className="bg-white qi-section-mobile" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start qi-gap-mobile">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-6 py-2 bg-[#8b0000]/10 border-l-4 border-[#8b0000] text-[#8b0000] font-['Outfit'] text-2xl font-medium tracking-wide qi-badge-mobile" style={{ marginBottom: '40px' }}>
                Customer Benefits
              </div>
              <h2 className="font-['Outfit'] font-light text-[#111] leading-tight tracking-wide qi-title-mobile" style={{ fontSize: '28px', fontWeight: 300, margin: 0 }}>
                Delivering Measurable <span className="font-normal text-[#8b0000]">customer Benefits</span>
              </h2>
              <div className="space-y-8 font-['Outfit'] font-light text-gray-700 text-lg leading-relaxed text-justify" style={{ marginTop: '24px' }}>
                <div>
                  <h3 className="font-bold text-[#111] mb-2">Consistent Performance Standards</h3>
                  <p>Every product undergoes stringent evaluation protocols to ensure reliability, uniformity, and compliance with domestic and international specifications.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#111] mb-2">Flexible Product Capabilities</h3>
                  <p>With diversified grades and coating technologies, NRAIL adapts to specific branding, packaging, and performance requirements.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#111] mb-2">Sustainable Competitive Edge</h3>
                  <p>Recycling-led manufacturing and resource-efficient processes support customers’ environmental commitments without compromising quality.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#111] mb-2">Confidence in Every Delivery</h3>
                  <p>Strong manufacturing scale, digital integration, and structured governance ensure timely supply, transparency, and long-term partnership reliability.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square lg:aspect-square rounded-none overflow-hidden"
            >
              <img 
                src={benefit1} 
                alt="NRAIL Customer Benefits" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QualityInnovationPage;
