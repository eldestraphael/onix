import React, { useState } from 'react';
import { PageRoute } from '../utils/routes';
import { Calendar, Video, MapPin, CheckCircle2, Clock, ShieldCheck, Send, Users, ArrowRight } from 'lucide-react';

interface BookATourPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const BookATourPage: React.FC<BookATourPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    tourType: 'in-person' as 'in-person' | 'live-video',
    preferredDate: '',
    notes: '',
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
      setErrorMsg('Please enter a valid work email.');
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
              See it for yourself
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A guided tour takes about 60 minutes. You&apos;ll see the power systems, the data hall, and the Meet-Me Room, and meet the engineers who run them. Can&apos;t travel to Accra? We&apos;ll walk you through on a live video call.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + What to Expect + Map */}
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
                    Tour Request Confirmed
                  </h3>
                  <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                    Thanks, <span className="font-semibold text-slate-900">{formData.name}</span>. An engineer will confirm your tour within 24 working hours. You&apos;ll get directions, what to bring (photo ID), and the name of the person meeting you.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
                    >
                      Book Another Date
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-xl font-bold text-slate-900 font-['Montserrat',sans-serif] mb-2">
                    Request Your Facility Tour
                  </h2>

                  {errorMsg && (
                    <div className="p-3 bg-red-50 border border-red-200 text-xs text-red-700 rounded-lg">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Name <span className="text-[#B12D24]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Samuel Ansah"
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
                        placeholder="Company or Government Body"
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
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      Tour Type <span className="text-[#B12D24]">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, tourType: 'in-person' })}
                        className={`p-3 rounded-lg border text-left flex items-start gap-2.5 transition-all ${
                          formData.tourType === 'in-person'
                            ? 'border-[#B12D24] bg-[#FDF2F1] text-slate-900 ring-1 ring-[#B12D24]'
                            : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <MapPin className="w-4 h-4 text-[#B12D24] shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-bold">In-person Tour</div>
                          <div className="text-[11px] text-slate-500">Accra facility walkthrough</div>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, tourType: 'live-video' })}
                        className={`p-3 rounded-lg border text-left flex items-start gap-2.5 transition-all ${
                          formData.tourType === 'live-video'
                            ? 'border-[#B12D24] bg-[#FDF2F1] text-slate-900 ring-1 ring-[#B12D24]'
                            : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <Video className="w-4 h-4 text-[#243F87] shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-bold">Live Video Walkthrough</div>
                          <div className="text-[11px] text-slate-500">For international & remote teams</div>
                        </div>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Anything you&apos;d like to see or ask? <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. We want our risk team to inspect the generator switchboard and verify Bank of Ghana CISD compliance logs..."
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24] resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-4 bg-[#B12D24] hover:bg-black active:bg-neutral-900 text-white font-semibold rounded-lg text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Request my tour</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar: What to Expect & Next Open Day */}
            <div className="lg:col-span-5 space-y-6">
              {/* What to expect in 3 steps */}
              <div className="bg-white rounded-3xl p-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B12D24]">
                  Tour Itinerary
                </span>
                <h3 className="text-lg font-bold text-slate-900 font-['Montserrat',sans-serif]">
                  What to expect in 60 minutes
                </h3>
                <div className="space-y-4 text-xs">
                  <div className="p-3 bg-slate-50 rounded-2xl space-y-1">
                    <div className="font-bold text-slate-900 flex items-center gap-2">
                      <span className="text-[#B12D24] font-['Source_Sans_3',sans-serif] font-bold">STEP 1</span>
                      <span>Arrive & Security Sign-In</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      Present your government photo ID at the entrance guard post, pass through biometric access control, and receive your visitor credentials.
                    </p>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-2xl space-y-1">
                    <div className="font-bold text-slate-900 flex items-center gap-2">
                      <span className="text-[#B12D24] font-['Source_Sans_3',sans-serif] font-bold">STEP 2</span>
                      <span>The Physical Infrastructure Walk</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      Inspect the 2,200-panel solar farm, 3×456 kW generator hall, static 2N+1 UPS banks, CRAC units, and the carrier-neutral Meet-Me Room.
                    </p>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-2xl space-y-1">
                    <div className="font-bold text-slate-900 flex items-center gap-2">
                      <span className="text-[#B12D24] font-['Source_Sans_3',sans-serif] font-bold">STEP 3</span>
                      <span>Q&A With Operations Engineers</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      Sit down in our disaster-recovery office with our operations lead to review power logs, audit checklists, and rack density requirements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Next Open Day & Location Map info */}
              <div className="bg-[#151515] text-white rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs uppercase font-bold text-slate-400">Next Scheduled Open Day</span>
                  <span className="text-xs font-['Source_Sans_3',sans-serif] font-semibold text-emerald-400">Open Registration</span>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-bold text-white">Thursday, November 12, 2026</div>
                  <div className="text-xs text-slate-400">10:00 GMT – 14:00 GMT (Lunch provided)</div>
                </div>

                <div className="pt-2 border-t border-slate-800 text-xs text-slate-300 space-y-2">
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#B12D24]" />
                    <span>How to reach the facility:</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-[11px]">
                    Located along the Dodowa Road corridor at Amrahia-Katamanso, 25 km north of central Accra. Secure parking is provided inside the facility perimeter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
