/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Calendar, 
  Clock, 
  Users, 
  Award, 
  Briefcase, 
  Cpu, 
  UserCheck, 
  Video, 
  Share2, 
  PenTool, 
  GraduationCap, 
  Building2, 
  Rocket, 
  Phone, 
  Globe, 
  MapPin,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function App() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900">
      {/* Header/Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
              <Rocket className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight">EVD Technology</span>
          </div>
          <button 
            onClick={scrollToContact}
            className="hidden md:block bg-slate-900 text-white px-5 py-2 rounded-full font-medium hover:bg-slate-800 transition-colors"
          >
            Register Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-grid">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-orange-600 uppercase bg-orange-50 rounded-full border border-orange-100">
              First Time in Korba!
            </span>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-slate-900 mb-8 uppercase">
              Advanced <br />
              <span className="text-orange-600">Digital Marketing</span> <br />
              Course
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
              Master the art of digital growth. From social media strategies to AI-powered content creation, build your digital empire today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={scrollToContact}
                className="w-full sm:w-auto px-8 py-4 bg-orange-600 text-white rounded-2xl font-bold text-lg hover:bg-orange-700 transition-all shadow-xl shadow-orange-200 flex items-center justify-center gap-2 group"
              >
                Claim Your Seat Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-2 text-slate-500 font-medium">
                <Users className="w-5 h-5 text-orange-500" />
                <span>Only 10 Seats Per Batch!</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-slate-200 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className="flex items-center gap-2 text-orange-600 font-bold mb-4">
                  <span className="animate-pulse">🔥</span>
                  <span className="uppercase tracking-widest text-sm">Limited-Time Offer!</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Early Bird Special <br />
                  <span className="text-orange-600">Save ₹2,000 Today</span>
                </h2>
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="text-5xl font-black text-slate-900">₹10,000</span>
                  <span className="text-2xl text-slate-400 line-through">₹12,000</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <Calendar className="w-6 h-6 text-orange-600" />
                    <div>
                      <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Batch Starts</p>
                      <p className="text-lg font-bold text-slate-900">01 May 2026</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <Clock className="w-6 h-6 text-orange-600" />
                    <div>
                      <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Duration</p>
                      <p className="text-lg font-bold text-slate-900">30 Days Intensive</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, label: "Certificate", desc: "On Completion" },
                  { icon: Briefcase, label: "Job Support", desc: "Placement Assistance" },
                  { icon: Cpu, label: "AI Tools", desc: "Latest Tech" },
                  { icon: UserCheck, label: "Expert Faculty", desc: "Industry Pros" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center text-center"
                  >
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4">
                      <item.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <p className="font-bold text-slate-900">{item.label}</p>
                    <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Practical Skills You'll Master</h2>
            <p className="text-slate-500 text-lg">Real-world techniques used by top digital agencies.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Video, 
                title: "Post & Video Creation", 
                desc: "Design eye-catching visuals and professional videos that stop the scroll.",
                color: "bg-blue-50 text-blue-600"
              },
              { 
                icon: Share2, 
                title: "SMM Mastery", 
                desc: "Dominate Instagram, Facebook, and LinkedIn with advanced marketing strategies.",
                color: "bg-purple-50 text-purple-600"
              },
              { 
                icon: PenTool, 
                title: "Content Marketing", 
                desc: "Learn the art of 'Stories That Sell' and turn followers into loyal customers.",
                color: "bg-orange-50 text-orange-600"
              }
            ].map((skill, i) => (
              <div key={i} className="group p-8 rounded-[2rem] border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-50 transition-all duration-300 bg-white">
                <div className={`w-14 h-14 ${skill.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <skill.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{skill.title}</h3>
                <p className="text-slate-600 leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Who Is This <br />
                <span className="text-orange-500 text-glow">Course Perfect For?</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: GraduationCap, label: "Students" },
                  { icon: Building2, label: "Business Owners" },
                  { icon: Rocket, label: "Entrepreneurs" },
                  { icon: Users, label: "Anyone" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <span className="font-semibold text-lg">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 to-orange-700 p-1 rounded-[2.5rem] rotate-3">
                <div className="bg-slate-900 rounded-[2.4rem] p-8 md:p-12">
                  <h3 className="text-3xl font-bold mb-6">Act NOW – Your Digital Empire Awaits!</h3>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Hands-on practical training",
                      "Live project experience",
                      "Lifetime community access",
                      "1-on-1 mentorship sessions"
                    ].map((text, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={scrollToContact}
                    className="w-full py-4 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-colors"
                  >
                    Secure Your Spot
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Get In Touch</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-widest font-bold mb-1">Call Us</p>
                    <p className="text-xl font-bold text-slate-900">+91-62327 78223</p>
                    <p className="text-xl font-bold text-slate-900">+91-62617 43903</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-widest font-bold mb-1">Website</p>
                    <a href="https://www.evdtechnology.com" className="text-xl font-bold text-slate-900 hover:text-orange-600 transition-colors">
                      www.evdtechnology.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-widest font-bold mb-1">Location</p>
                    <p className="text-lg text-slate-900 leading-relaxed">
                      Plot No. 667/7, Mini Hosiery House, <br />
                      Second Floor, Ward-02, DDM Rd, <br />
                      Korba, CG - 495677
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Quick Registration</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" placeholder="Enter your number" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Interested In</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all bg-white">
                    <option>Digital Marketing Course</option>
                    <option>SMM Mastery</option>
                    <option>Content Creation</option>
                  </select>
                </div>
                <button className="w-full py-4 bg-orange-600 text-white rounded-xl font-bold text-lg hover:bg-orange-700 transition-all shadow-lg shadow-orange-100 mt-4">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500">© 2026 EVD Technology. All rights reserved.</p>
        </div>
      </footer>

      {/* Mobile Floating CTA */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
        <button 
          onClick={scrollToContact}
          className="w-full py-4 bg-orange-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-orange-300 flex items-center justify-center gap-2"
        >
          Register Now
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
