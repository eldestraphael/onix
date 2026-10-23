import React, { useState } from 'react';
import { X, Calendar, Video, CheckCircle, Clock, Shield, MapPin, Users, Send } from 'lucide-react';

interface TourBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TourBookingModal: React.FC<TourBookingModalProps> = ({
  isOpen,
  onClose,
}) => {
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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.organisation.trim() || !formData.email.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    if (!formData.email.includes('@')) {
      setErrorMsg('Please enter a valid work email address.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      organisation: '',
      email: '',
      phone: '',
      tourType: 'in-person',
      preferredDate: '',
      notes: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full border border-slate-200 overflow-hidden my-8">
        {/* Header Bar */}
        <div className="bg-[#151515] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#B12D24]">
              Accra Tier IV Facility & Dakar Colocation
            </span>
            <h2 className="text-xl font-bold font-['Montserrat',sans-serif]">
              Book an On-Site or Live Video Tour
            </h2>
          </div>
          <button
            onClick={resetForm}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close tour modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 border border-emerald-200">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                Tour Request Received
              </h3>
              <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                Thanks, <span className="font-semibold text-slate-900">{formData.name}</span>. An engineer from our operations team will confirm your tour within 24 working hours.
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl max-w-md mx-auto text-left text-xs space-y-2 text-slate-700">
                <div className="font-semibold text-slate-900">What to expect next:</div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-[#B12D24]">1.</span>
                  <span>Confirmation email with driving directions to Amrahia-Katamanso (Dodowa corridor) and facility security access requirements (photo ID required for sign-in).</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-[#B12D24]">2.</span>
                  <span>The named operations engineer who will personally host you across the generator hall, solar farm, Meet-Me Room, and server floor.</span>
                </div>
              </div>
              <div className="pt-4">
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors"
                >
                  Close & Return to Site
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                A guided tour takes about 60 minutes. You&apos;ll see the four-layer power systems, the data halls and the Meet-Me Room, and meet the engineers who run them. Can&apos;t travel? We&apos;ll walk you through on a live video call.
              </p>

              {errorMsg && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-xs text-red-700 rounded-lg">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Your Full Name <span className="text-[#B12D24]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Kwame Mensah"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24] focus:border-transparent"
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
                      placeholder="e.g. Standard Bank / Telecel"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24] focus:border-transparent"
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
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24] focus:border-transparent"
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
                      placeholder="+233 24 000 0000"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Tour Format */}
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
                        <div className="text-xs font-bold">In-person Visit</div>
                        <div className="text-[11px] text-slate-500">Amrahia-Katamanso facility, Accra</div>
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
                        <div className="text-xs font-bold">Live Video Tour</div>
                        <div className="text-[11px] text-slate-500">Interactive remote walkthrough with engineer</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Preferred Date <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24] focus:border-transparent"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Anything you&apos;d like to see or ask? <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Audit checklist for BoG review, Meet-Me Room carrier list, 3kW vs 5kW rack availability..."
                    className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24] focus:border-transparent resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 bg-[#B12D24] hover:bg-[#96221A] active:bg-[#7e1c15] text-white font-semibold rounded-lg text-sm transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#B12D24] focus:ring-offset-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request my tour</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center pt-1">
                  We respect your data privacy in accordance with Ghana&apos;s Data Protection Act, 2012 (Act 843). No spam, ever.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
