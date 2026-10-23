import React, { useState } from 'react';
import { PageRoute } from '../utils/routes';
import { Phone, Mail, MessageCircle, MapPin, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ContactPageProps {
  initialNotes?: string;
  onNavigate: (page: PageRoute) => void;
  onOpenTourModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialNotes = '',
  onNavigate,
  onOpenTourModal,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    interest: 'Colocation',
    message: initialNotes || '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.organisation.trim() || !formData.email.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    if (!formData.email.includes('@')) {
      setErrorMsg('Please provide a valid work email.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-white pt-12 pb-14 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-['Montserrat',sans-serif] tracking-tight text-balance">
              Talk to a person, not a call centre
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              An engineer or account manager replies within 4 working hours. Prefer WhatsApp? Message us directly on +233 50 086 5266.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Process + Details */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                    Message Dispatched to Onix Operations
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. An engineer or account manager will reply to <span className="font-semibold text-slate-900">{formData.email}</span> within 4 working hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-xl font-bold text-slate-900 font-['Montserrat',sans-serif] mb-2">
                    Send an Enquiry to the Onix Team
                  </h2>

                  {errorMsg && (
                    <div className="p-3 bg-red-50 border border-red-200 text-xs text-red-700 rounded-lg">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Full Name <span className="text-[#B12D24]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ama Darko"
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Organisation <span className="text-[#B12D24]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organisation}
                        onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                        placeholder="Company or Institution"
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Work Email <span className="text-[#B12D24]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Phone or WhatsApp <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+233 50 000 0000"
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      I&apos;m interested in <span className="text-[#B12D24]">*</span>
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24] bg-white"
                    >
                      <option value="Colocation">Colocation (Racks, Pods, or Private Cages)</option>
                      <option value="Interconnection">Interconnection & Carrier-Neutral Meet-Me Room</option>
                      <option value="Disaster recovery">Disaster Recovery & Furnished Recovery Office</option>
                      <option value="Moving to Onix">Moving to Onix (Migration Planning)</option>
                      <option value="Audit visit">Audit & Compliance Visit (BoG / ISO)</option>
                      <option value="Dakar Colocation">Dakar 2Africa Cable Landing Station</option>
                      <option value="Something else">Something else</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Message or Project Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us roughly what you need (power kW, rack count, cross-connects, timelines)..."
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24] resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-4 bg-[#B12D24] hover:bg-[#96221A] active:bg-[#7e1c15] text-white font-semibold rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send to the Onix team</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center pt-2">
                    In compliance with Ghana&apos;s Data Protection Act, 2012 (Act 843).
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar: What Happens Next & Direct Contact */}
            <div className="lg:col-span-5 space-y-6">
              {/* What happens next */}
              <div className="bg-white rounded-3xl p-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B12D24]">
                  Our Commitment
                </span>
                <h3 className="text-lg font-bold text-slate-900 font-['Montserrat',sans-serif]">
                  What happens next
                </h3>
                <div className="space-y-3.5 text-xs">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center shrink-0">1</span>
                    <span className="text-slate-700 leading-relaxed font-medium">
                      We reply within 4 working hours with a dedicated engineering or account contact.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center shrink-0">2</span>
                    <span className="text-slate-700 leading-relaxed font-medium">
                      A 30-minute discovery call to understand your rack densities and redundancy requirements.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center shrink-0">3</span>
                    <span className="text-slate-700 leading-relaxed font-medium">
                      A facility tour, in person or by live video walkthrough.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#B12D24] text-white font-bold flex items-center justify-center shrink-0">4</span>
                    <span className="text-slate-700 leading-relaxed font-medium">
                      A full written proposal within 2 working days, with every recurring charge clearly itemized.
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Details Block */}
              <div className="bg-[#151515] text-white rounded-2xl p-6 space-y-5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Direct Contact & Locations
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <div className="text-slate-400 font-medium">Accra, Ghana:</div>
                    <div className="flex items-center gap-3 mt-1">
                      <a
                        href="tel:+233500865266"
                        className="text-white hover:text-[#dd625a] font-['Source_Sans_3',sans-serif] text-sm font-bold"
                      >
                        +233 50 086 5266
                      </a>
                      <a
                        href="https://wa.me/233500865266"
                        target="_blank"
                        rel="noreferrer"
                        className="px-2 py-0.5 bg-[#25D366]/20 text-[#25D366] rounded border border-[#25D366]/30 text-[11px] font-semibold"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="text-slate-400 font-medium">Dakar, Senegal:</div>
                    <a
                      href="tel:+221776684110"
                      className="text-white hover:text-[#dd625a] font-['Source_Sans_3',sans-serif] text-sm font-bold block mt-1"
                    >
                      +221 77 668 41 10
                    </a>
                  </div>

                  <div>
                    <div className="text-slate-400 font-medium">Email:</div>
                    <a
                      href="mailto:info@onixdatacentres.com"
                      className="text-white hover:text-[#dd625a] block mt-0.5"
                    >
                      info@onixdatacentres.com
                    </a>
                  </div>

                  <div className="pt-2 border-t border-slate-800 space-y-2">
                    <div>
                      <span className="text-slate-400 font-semibold block">Facility Address:</span>
                      <span className="text-slate-200">Amrahia-Katamanso, towards Dodowa, Greater Accra, Ghana.</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-semibold block">Head Office:</span>
                      <span className="text-slate-200">Shalom Villas, 3d, Onyasia Crescent, Accra, Ghana.</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-semibold block">Operating Hours:</span>
                      <span className="text-slate-200">08:00 – 17:00 GMT office hours. The data centre facility is staffed 24/7/365.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Existing clients:</span>
                  <a
                    href="mailto:support@onixdatacentres.com"
                    className="text-xs font-semibold text-[#dd625a] hover:underline"
                  >
                    Direct NOC Support →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
