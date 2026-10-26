import React, { useState } from 'react';
import { PageRoute } from '../utils/routes';
import { Network, ShieldCheck, MapPin, Phone, Mail, MessageCircle, Calendar, ArrowRight, Check } from 'lucide-react';

interface SenegalPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenTourModal: () => void;
}

export const SenegalPage: React.FC<SenegalPageProps> = ({
  onNavigate,
  onOpenTourModal,
}) => {
  const [formData, setFormData] = useState({
    nom: '',
    organisation: '',
    email: '',
    telephone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nom && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="space-y-0" lang="fr">
      {/* 1. En-tête / Bannière Sénégal */}
      <section className="bg-white pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#243F87] uppercase tracking-wider">
              <span>🇸🇳</span>
              <span>Dakar, Sénégal · Station d&apos;atterrissement 2Africa</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-['Montserrat',sans-serif] text-balance">
              Colocation neutre au cœur de la station d&apos;atterrissement de 2Africa, à Dakar
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Accédez directement aux câbles sous-marins 2Africa, ACE et MainOne depuis un seul site, strictement neutre vis-à-vis des opérateurs télécoms.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenTourModal}
                className="px-6 py-3.5 bg-[#B12D24] hover:bg-black active:bg-neutral-900 text-white font-semibold rounded-lg transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Planifier une visite à Dakar</span>
              </button>

              <a
                href="tel:+221776684110"
                className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-slate-600" />
                <span>Parler à notre équipe à Dakar (+221 77 668 41 10)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Ce que vous trouverez à Dakar */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 font-['Montserrat',sans-serif]">
              Ce que vous trouverez à Dakar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#243F87] flex items-center justify-center">
                <Network className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base font-['Montserrat',sans-serif]">
                Station d&apos;atterrissement 2Africa
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Des baies et espaces de colocation dédiés installés directement à l&apos;intérieur du point d&apos;atterrissement stratégique de Dakar.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base font-['Montserrat',sans-serif]">
                Interconnexions directes
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Liaisons transversales directes vers les systèmes de câbles sous-marins et l&apos;ensemble des opérateurs réseau régionaux.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base font-['Montserrat',sans-serif]">
                Disponibilité de 99,98 %
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Garantie contractuelle stricte de 99,98 %, soit un engagement formel de moins de 1 h 45 d&apos;interruption maximale par an.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-[#B12D24] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base font-['Montserrat',sans-serif]">
                Opérateur 100% Neutre
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Vous choisissez vos fournisseurs de connectivité en toute indépendance et sans dépendance propriétaire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Accra et Dakar, un seul partenaire */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#151515] text-white rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B12D24]">
                  Présence Régionale en Afrique de l&apos;Ouest
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-['Montserrat',sans-serif]">
                  Accra et Dakar, un seul partenaire de confiance
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Onix exploite également à Accra le premier centre de données certifié Tier IV par l&apos;Uptime Institute en Afrique de l&apos;Ouest. Deux points d&apos;atterrissement majeurs en Afrique de l&apos;Ouest, un seul interlocuteur neutre et pérenne.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('the-facility')}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-[#dd625a] transition-colors"
                  >
                    <span>Découvrir le centre d&apos;Accra Tier IV (EN)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white/10 rounded-xl p-5 border border-white/10 space-y-3 font-['Source_Sans_3',sans-serif] text-xs">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Hub 1:</span>
                  <span className="text-white font-bold">Accra, Ghana (Tier IV)</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Hub 2:</span>
                  <span className="text-white font-bold">Dakar, Sénégal (2Africa)</span>
                </div>
                <div className="flex justify-between text-emerald-400">
                  <span>Actionnariat:</span>
                  <span>100% Africain & Indépendant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact & Formulaire Dakar */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8">
              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 border border-emerald-200">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                    Demande envoyée avec succès
                  </h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Merci {formData.nom}. Notre représentant à Dakar vous contactera par téléphone ou e-mail dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                    Planifier une visite ou contacter l&apos;équipe de Dakar
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nom}
                        onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                        placeholder="Ex. Mamadou Diallo"
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Organisation *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organisation}
                        onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                        placeholder="Entreprise ou Opérateur"
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        E-mail professionnel *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nom@entreprise.sn"
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Téléphone ou WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.telephone}
                        onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                        placeholder="+221 77 000 00 00"
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Votre projet à Dakar
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Nombre de baies, interconnexion aux câbles sous-marins, date souhaitée..."
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#B12D24] hover:bg-black active:bg-neutral-900 text-white font-semibold rounded-lg text-sm transition-colors cursor-pointer"
                  >
                    Envoyer ma demande à l&apos;équipe Onix Dakar
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    Conformément à la Loi sénégalaise n° 2008-12 relative à la protection des données à caractère personnel.
                  </p>
                </form>
              )}
            </div>

            <div className="lg:col-span-5 bg-[#151515] text-white rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Coordonnées Directes · Dakar
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <div className="text-slate-400">Téléphone et WhatsApp direct:</div>
                  <a
                    href="tel:+221776684110"
                    className="text-white hover:text-[#dd625a] font-['Source_Sans_3',sans-serif] text-base font-bold block mt-1"
                  >
                    +221 77 668 41 10
                  </a>
                </div>

                <div>
                  <div className="text-slate-400">Courriel officiel:</div>
                  <a
                    href="mailto:info@onixdatacentres.com"
                    className="text-white hover:text-[#dd625a] block mt-1"
                  >
                    info@onixdatacentres.com
                  </a>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <div className="text-slate-400 font-semibold mb-1">Implantation:</div>
                  <p className="text-slate-300 leading-relaxed">
                    Station d&apos;atterrissement 2Africa, Dakar, Sénégal.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <a
                  href="https://wa.me/221776684110"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] rounded-lg font-semibold text-xs flex items-center justify-center gap-2 border border-[#25D366]/30 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Échanger sur WhatsApp avec l&apos;équipe de Dakar</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bloc de fin de page en français */}
      <section className="bg-[#151515] text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-3xl font-bold font-['Montserrat',sans-serif]">
            Venez constater par vous-même.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Planifiez une visite sur place à Dakar ou participez à une visite virtuelle en direct avec nos ingénieurs.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={onOpenTourModal}
              className="px-6 py-3 bg-[#B12D24] hover:bg-black active:bg-neutral-900 text-white font-semibold rounded-lg text-sm transition-colors cursor-pointer"
            >
              Planifier une visite
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
