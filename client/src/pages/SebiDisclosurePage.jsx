import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import kmpPdf from '../assets/1.Shareholder Information/1.Shareholder Information/Shareholder Information/KMP for determining Materiality-Regulation 30(5) SEBI LODR.pdf';

const SebiDisclosurePage = () => {
    return (
        <div className="bg-white min-h-screen font-['Outfit'] antialiased text-black selection:bg-[#8b0000] selection:text-white">
            <Navbar />

            <style>{`
                @media (max-width: 1023px) {
                    .sebi-title-mobile { font-size: 32px !important; line-height: 1.1 !important; }
                    .sebi-breadcrumb-mobile { margin-bottom: 24px !important; gap: 8px !important; font-size: 14px !important; }
                    .sebi-content-mobile { padding-top: 40px !important; padding-bottom: 40px !important; }
                    .sebi-spacer-mobile { height: 70px !important; }
                    .sebi-list-item-mobile { padding: 12px !important; gap: 12px !important; }
                    .sebi-list-number-mobile { width: 32px !important; height: 32px !important; font-size: 14px !important; min-width: 32px !important; }
                    .sebi-list-text-mobile { font-size: 14px !important; line-height: 1.4 !important; }
                    .sebi-sublist-container-mobile { padding-left: 12px !important; }
                }
            `}</style>
            <div className="h-20 md:h-28 w-full bg-white sebi-spacer-mobile"></div>

            <div className="pt-16 pb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#8b0000]/[0.02] to-transparent pointer-events-none"></div>

                <div className="container mx-auto px-6 md:px-24 relative z-10">
                    <div className="flex flex-wrap items-center gap-1.5 text-lg mb-16 font-normal sebi-breadcrumb-mobile">
                        <Link to="/" className="text-[#2d6ca2] hover:text-[#800000] transition-colors px-1">Home</Link>
                        <span className="text-gray-400 font-light mx-0.5">&gt;</span>
                        <span className="text-[#2d6ca2] px-1 pointer-events-none">Investors</span>
                        <span className="text-gray-400 font-light mx-0.5">&gt;</span>
                        <span className="text-[#800000] font-medium px-1 underline underline-offset-8 decoration-1 decoration-[#8b0000]/30">SEBI Disclosure</span>
                    </div>

                    <div className="h-6 md:h-8"></div>

                    <motion.h1
                        className="text-[40px] md:text-[48px] font-extrabold mb-8 leading-[1.1] uppercase max-w-4xl sebi-title-mobile"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <span className="block text-black">Disclosure under Regulation 46</span>
                        <span className="block text-[#8b0000]">of SEBI(LODR) Regulations 2015</span>
                    </motion.h1>

                    <div className="h-8 md:h-12 w-full"></div>
                </div>
            </div>

            <div className="py-24 md:py-32 bg-[#fafafa]/50 sebi-content-mobile">
                <div className="container mx-auto px-6 md:px-24 max-w-7xl">
                    <div className="space-y-4">
                        {[
                            "Details of its business",
                            "MOA and AOA",
                            "Brief profile of Board of Directors including directorship and full time positions in body corporates",
                            "Terms and conditions of appointment of Independent Directors",
                            "Composition of various committees of Board of Directors",
                            "Code of conduct of Board of Directors and Senior Management Personnel",
                            "Whistle Blower Policy",
                            "Criteria of making payments to Non-executive directors - Not Applicable",
                            "Policy on Materiality of Related Party Transactions and on Dealing with Related Party Transactions",
                            "Policy for determining ‘Material’ subsidiaries - Not Applicable",
                            "Details of familiarization programs imparted to Independent Directors",
                            "Email address for grievance redressal and other relevant details",
                            "Contact information of the designated officials of the listed entity who are responsible for assisting and handling investor grievances",
                            { title: "Financial information includes:", subItems: [
                                "Notice of meeting of the board of directors where financial results shall be discussed",
                                "Financial Results",
                                "Annual Report"
                            ]},
                            "Shareholding Pattern",
                            "Details of agreements entered into with the Media companies and/or their associates - NIL",
                            "Schedule of Analyst or institutional investor meet and presentations made to analysts or institutional investors - NIL",
                            "New name and the old name of the listed entity for a continuous period of one year, from the date of the last name change - Not Applicable",
                            "All credit ratings obtained by the entity for all its outstanding instruments",
                            "Audited Financial Statements of Subsidiaries Companies - Not Applicable",
                            "Advertisements in Newspapers as per Regulation 47(1)",
                            "Secretarial Compliance Report under Regulation 24A",
                            "Disclosure of the policy for determination of materiality of events or information",
                            "Disclosure of Contact Details of Key Managerial Personnel as required under sub-regulation (5) of Regulation 30",
                            "Disclosures under sub-regulation (8) of regulation 30 of these regulations",
                            "Statement of Deviation (s) or Variation (s) as specified in Regulation 32 - Not Applicable",
                            "Dividend Distribution Policy under Regulation 43A",
                            "Annual Return as provided under section 92 of the Companies Act, 2013"
                        ].map((item, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                {typeof item === 'string' ? (
                                    (() => {
                                        const to = 
                                            item === "Details of its business" ? "/our-story" : 
                                            item === "MOA and AOA" ? "/other-compliances/moa-and-aoa" :
                                            item === "Brief profile of Board of Directors including directorship and full time positions in body corporates" ? "/leadership" :
                                            item === "Terms and conditions of appointment of Independent Directors" ? "/independent-directors" : 
                                            item === "Composition of various committees of Board of Directors" ? "/committees-of-board" :
                                            item === "Code of conduct of Board of Directors and Senior Management Personnel" ? "/policies?category=Company%20Policy" :
                                            item === "Whistle Blower Policy" ? "/policies?category=Company%20Policy" :
                                            item === "Policy on Materiality of Related Party Transactions and on Dealing with Related Party Transactions" ? "/policies?category=Company%20Policy" :
                                            item === "Disclosure of the policy for determination of materiality of events or information" ? "/policies?category=Company%20Policy" :
                                            item === "Dividend Distribution Policy under Regulation 43A" ? "/policies?category=Company%20Policy" :
                                            item === "Details of familiarization programs imparted to Independent Directors" ? "/other-compliances/familiarization-programme" :
                                            item === "Email address for grievance redressal and other relevant details" ? "/shareholder-information/nodal-officer" :
                                            item === "Contact information of the designated officials of the listed entity who are responsible for assisting and handling investor grievances" ? "/shareholder-information/investor-grievances" :
                                            item === "Secretarial Compliance Report under Regulation 24A" ? "/other-compliances?category=secretarial Compliance Report" :
                                            item === "Disclosure of Contact Details of Key Managerial Personnel as required under sub-regulation (5) of Regulation 30" ? kmpPdf :
                                            item === "Annual Return as provided under section 92 of the Companies Act, 2013" ? "/other-compliances?category=Annual Return" :
                                            item === "Shareholding Pattern" ? "/shareholder-information?view=shareholding-pattern" :
                                            item === "All credit ratings obtained by the entity for all its outstanding instruments" ? "/newsroom" :
                                            item === "Advertisements in Newspapers as per Regulation 47(1)" ? "/newsroom" :
                                            item === "Disclosures under sub-regulation (8) of regulation 30 of these regulations" ? "/newsroom" :
                                            null;

                                        const isPdf = to && to.includes('.pdf');
                                        const Component = to ? (isPdf ? 'a' : Link) : 'div';
                                        const extraProps = to ? (isPdf ? { href: to, target: "_blank", rel: "noopener noreferrer" } : { to }) : {};

                                        return (
                                            <Component 
                                                {...extraProps}
                                                className={`group flex items-center gap-4 p-4 rounded-xl border border-black/5 bg-white transition-all ${to ? 'hover:border-[#8b0000]/30 hover:shadow-md cursor-pointer' : ''} block sebi-list-item-mobile`}
                                            >
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${to ? 'bg-[#8b0000]/5 text-[#8b0000] group-hover:bg-[#8b0000] group-hover:text-white' : 'bg-gray-50 text-gray-400'} sebi-list-number-mobile`}>
                                                    {(index + 1).toString().padStart(2, '0')}
                                                </div>
                                                <span className={`text-xl font-medium transition-colors flex-1 ${to ? 'text-black/80 group-hover:text-[#8b0000]' : 'text-gray-400'} sebi-list-text-mobile`}>{item}</span>
                                                {to && <span className="text-gray-300 group-hover:text-[#8b0000] transition-colors">&rarr;</span>}
                                            </Component>
                                        );
                                    })()
                                ) : (
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 p-4 rounded-xl border border-black/5 bg-white font-bold text-xl text-black/90 sebi-list-item-mobile sebi-list-text-mobile">
                                            <div className="w-10 h-10 rounded-full bg-[#8b0000]/10 flex items-center justify-center text-[#8b0000] sebi-list-number-mobile">
                                                {(index + 1).toString().padStart(2, '0')}
                                            </div>
                                            {item.title}
                                        </div>
                                        <div className="pl-14 space-y-3 sebi-sublist-container-mobile">
                                            {item.subItems.map((sub, sIdx) => {
                                                const subLink = 
                                                    sub === "Notice of meeting of the board of directors where financial results shall be discussed" ? "/newsroom" : 
                                                    sub === "Financial Results" ? "/financial-reports" :
                                                    sub === "Annual Report" ? "/nrail-annual-reports" :
                                                    "#";
                                                return (
                                                    <Link 
                                                        key={sIdx} 
                                                        to={subLink}
                                                        className="group flex items-center gap-4 p-3 rounded-lg border border-black/5 bg-white hover:border-[#8b0000]/20 hover:shadow-sm transition-all cursor-pointer block sebi-list-item-mobile"
                                                    >
                                                        <div className="flex items-center gap-4 flex-1">
                                                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#8b0000]/10 group-hover:text-[#8b0000] transition-colors text-sm sebi-list-number-mobile">
                                                                {String.fromCharCode(97 + sIdx)})
                                                            </div>
                                                            <span className="text-lg font-medium text-black/70 group-hover:text-[#8b0000] transition-colors flex-1 sebi-list-text-mobile">{sub}</span>
                                                            <span className="text-gray-200 group-hover:text-[#8b0000] transition-colors">&rarr;</span>
                                                        </div>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="h-20 md:h-32 bg-white"></div>

            <Footer />
        </div>
    );
};

export default SebiDisclosurePage;
