import { useState } from 'react';
import { Sparkles, Instagram, Clock, Award } from 'lucide-react';

interface Procedure {
  name: string;
  price: string;
  image: string;
}

function App() {
  const [selectedProcedure, setSelectedProcedure] = useState('');
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const procedures: Procedure[] = [
    { name: 'Volume Brasileiro', price: 'R$ 165,00', image: '/images/WhatsApp Image 2025-11-29 at 20.21.39.jpeg' },
    { name: 'Volume Fox', price: 'R$ 165,00', image: '/images/WhatsApp Image 2025-11-29 at 20.21.38.jpeg' },
    { name: 'Volume Fox Marrom', price: 'R$ 165,00', image: '/images/WhatsApp Image 2025-11-29 at 20.21.39 (1).jpeg' },
    { name: 'Volume Europeu', price: 'R$ 165,00', image: '/images/WhatsApp Image 2025-11-29 at 20.21.38 (1).jpeg' },
    { name: 'Mega Volume', price: 'R$ 180,00', image: '/images/WhatsApp Image 2025-11-29 at 20.21.39.jpeg' },
    { name: 'Mega Volume', price: 'R$ 180,00', image: '/images/WhatsApp Image 2025-11-29 at 20.21.38 (1).jpeg' },
  ];

  const handleWhatsAppClick = () => {
    if (!selectedProcedure) {
      alert('Por favor, selecione um procedimento antes de agendar.');
      return;
    }
    const message = encodeURIComponent(`Olá Bianca! Quero agendar esse procedimento: ${selectedProcedure}.`);
    window.open(`https://wa.me/5531991028853?text=${message}`, '_blank');
  };

  const openGallery = (image: string) => {
    setSelectedImage(image);
    setShowGalleryModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-stone-50 to-neutral-100">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="text-amber-600" size={24} />
            <h1 className="text-2xl font-serif text-neutral-800">Bianca Moura</h1>
          </div>
          <a
            href="https://instagram.com/biancamoura"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-600 hover:text-amber-600 transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>
      </header>

      <main className="pt-20">
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="flex justify-center animate-float">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-3xl"></div>
                <img
                  src="/images/WhatsApp Image 2025-11-29 at 21.16.18.jpeg"
                  alt="Bianca Moura - Lash Designer"
                  className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 animate-slide-in">
              <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full">
                <Award className="text-amber-600" size={20} />
                <span className="text-amber-800 font-medium">Lash Designer Certificada</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-serif text-neutral-800 leading-tight">
                Realce a beleza do seu <span className="text-amber-600">olhar</span>
              </h2>

              <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>

              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p className="text-lg">
                  <strong className="text-amber-700">Sobre mim:</strong> Sou Bianca Moura, Lash Designer especializada em realçar a beleza do olhar com técnica, segurança e personalização.
                </p>
                <p className="text-lg">
                  Meu objetivo é entregar resultados leves, duradouros e adaptados para cada cliente.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-serif text-neutral-800 mb-4">
                Catálogo de Procedimentos
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {procedures.map((procedure, index) => (
                <div
                  key={index}
                  className="group cursor-pointer animate-swing"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openGallery(procedure.image)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <img
                      src={procedure.image}
                      alt={procedure.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-semibold mb-2">{procedure.name}</h3>
                      <p className="text-2xl font-bold text-amber-400">{procedure.price}</p>
                    </div>
                  </div>
                  <div className="mt-4 text-center md:hidden">
                    <h3 className="text-lg font-semibold text-neutral-800">{procedure.name}</h3>
                    <p className="text-xl font-bold text-amber-600">{procedure.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 space-y-6 animate-slide-in">
              <div className="inline-flex items-center gap-2 bg-stone-100 px-4 py-2 rounded-full">
                <Clock className="text-amber-600" size={20} />
                <span className="text-neutral-800 font-medium">Manutenção Regular</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-neutral-800">
                Mantenha seu olhar sempre <span className="text-amber-600">impecável</span>
              </h2>

              <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-stone-50 to-rose-50 p-6 rounded-xl border border-amber-200">
                  <p className="text-xl font-semibold text-neutral-800 mb-2">Manutenções dos Volumes</p>
                  <p className="text-3xl font-bold text-amber-700">R$ 110,00</p>
                </div>

                <div className="bg-gradient-to-r from-rose-50 to-stone-50 p-6 rounded-xl border border-amber-200">
                  <p className="text-xl font-semibold text-neutral-800 mb-2">Manutenção Mega Volume</p>
                  <p className="text-3xl font-bold text-amber-700">R$ 120,00</p>
                </div>
              </div>

              <p className="text-neutral-600 italic">
                Recomendamos manutenção a cada 15-20 dias para manter o resultado perfeito.
              </p>
            </div>

            <div className="order-1 md:order-2 flex justify-center animate-float">
              <div className="relative">
                <div className="absolute inset-0 bg-rose-400/20 rounded-full blur-3xl"></div>
                <img
                  src="/images/WhatsApp Image 2025-11-29 at 20.21.39 (1).jpeg"
                  alt="Manutenção de cílios"
                  className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-stone-100 via-rose-50 to-stone-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 animate-fade-in">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-serif text-neutral-800 mb-4">
                  Agende seu Procedimento
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto"></div>
              </div>

              <div className="space-y-6">
                <div>
                  <label htmlFor="procedure" className="block text-lg font-medium text-neutral-700 mb-3">
                    Escolha seu procedimento:
                  </label>
                  <select
                    id="procedure"
                    value={selectedProcedure}
                    onChange={(e) => setSelectedProcedure(e.target.value)}
                    className="w-full px-4 py-4 text-lg border-2 border-stone-200 rounded-xl focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all bg-stone-50"
                  >
                    <option value="">Selecione um procedimento...</option>
                    <option value="Volume Brasileiro R$165,00">Volume Brasileiro - R$ 165,00</option>
                    <option value="Volume Fox R$165,00">Volume Fox - R$ 165,00</option>
                    <option value="Volume Fox Marrom R$165,00">Volume Fox Marrom - R$ 165,00</option>
                    <option value="Volume Europeu R$165,00">Volume Europeu - R$ 165,00</option>
                    <option value="Mega Volume R$180,00">Mega Volume - R$ 180,00</option>
                  </select>
                </div>

                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white text-xl font-semibold py-5 px-8 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Agendar via WhatsApp
                </button>

                <p className="text-center text-sm text-neutral-500 mt-4">
                  Respondemos rapidamente! Horário de atendimento: Seg-Sáb, 9h-18h
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-neutral-800 text-neutral-300 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-amber-500" size={24} />
            <h3 className="text-2xl font-serif text-white">Bianca Moura</h3>
          </div>
          <p className="text-lg mb-2">Lash Designer</p>
          <p className="text-neutral-400 mb-6">Beleza com técnica e personalização</p>

          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://wa.me/5531991028853"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              WhatsApp: (31) 9 9102-8853
            </a>
          </div>

          <div className="h-px bg-neutral-700 max-w-md mx-auto my-6"></div>

          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} Bianca Moura - Lash Designer. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {showGalleryModal && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowGalleryModal(false)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-amber-400 transition-colors"
            onClick={() => setShowGalleryModal(false)}
          >
            &times;
          </button>
          <img
            src={selectedImage}
            alt="Procedimento"
            className="max-w-full max-h-[90vh] object-contain rounded-lg animate-swing-modal"
          />
        </div>
      )}
    </div>
  );
}

export default App;
