import React, { useState } from 'react';

export default function WhatsappPrototype() {
  // Estado para manejar el flujo de la conversación interactiva
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: '👋 ¡Hola! Bienvenido a INACAP-Contigo. Sabemos que balancear el estudio y el trabajo es un tremendo esfuerzo físico y mental. Reconocemos tu garra y estamos aquí para hacerte el camino más liviano. 💙', time: '22:15' },
    { id: 2, sender: 'bot', text: 'Aquí tienes información en formato "snack" (directa y al grano) para apoyarte sin saturar tu mente. ¿En qué te podemos ayudar hoy?', time: '22:15', isMenu: true }
  ]);
  
  const [activeOption, setActiveOption] = useState(null);

  const handleOptionClick = (option) => {
    if (activeOption) return; // Evita doble clic continuo en el prototipo demo
    
    let userMsg = '';
    let botResponse = [];

    if (option === 1) {
      userMsg = '🚀 ¿Qué es INACAP-CONECTA?';
      botResponse = [
        { id: Date.now() + 1, sender: 'bot', text: 'Es una red de apoyo institucional de bajo roce, diseñada especialmente para los estudiantes trabajadores de la sede Maipú (Gastronomía, Minas, Analista Programador).', time: '22:16' },
        { id: Date.now() + 2, sender: 'bot', text: '💡 Nuestro objetivo es reducir el distrés y el "agotamiento híbrido" en un 20%, ofreciéndote soluciones asincrónicas 24/7 sin que tengas que navegar por portales complejos.', time: '22:16' }
      ];
    } else if (option === 2) {
      userMsg = '📅 Agendar apoyo (Psicólogo/Tutor)';
      botResponse = [
        { id: Date.now() + 1, sender: 'bot', text: '¡Excelente decisión! Priorizar tu salud mental y académica es clave para ganarle al "Efecto Esponja" (saturación cognitiva).', time: '22:16' },
        { id: Date.now() + 2, sender: 'bot', text: 'Para completar tu agendamiento express con nuestro equipo de psicopedagogía o tutores de la sede Maipú, por favor confímanos tu carrera y jornada.', time: '22:17' }
      ];
    } else if (option === 3) {
      userMsg = '🔍 ¿Cómo funciona el experimento de validación?';
      botResponse = [
        { id: Date.now() + 1, sender: 'bot', text: 'Estamos en fase de "Prueba de Humo". Buscamos validar si la señalética física en los espejos de los baños y zonas de carga de INACAP Maipú rompe la invisibilidad de los servicios de apoyo.', time: '22:17' },
        { id: Date.now() + 2, sender: 'bot', text: '📈 Criterio de éxito: Si logramos que al menos 50 estudiantes interactúen con este bot en la primera semana, expandiremos el modelo a nivel nacional.', time: '22:18' }
      ];
    }

    // Agregar mensaje del usuario
    setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: userMsg, time: '22:16' }]);
    
    // Simular tipeo del bot
    setTimeout(() => {
      setMessages(prev => [...prev, ...botResponse]);
    }, 800);
  };

  const resetChat = () => {
    setMessages([
      { id: 1, sender: 'bot', text: '👋 ¡Hola! Bienvenido a INACAP-Contigo. Sabemos que balancear el estudio y el trabajo es un tremendo esfuerzo físico y mental. Reconocemos tu garra y estamos aquí para hacerte el camino más liviano. 💙', time: '22:15' },
      { id: 2, sender: 'bot', text: 'Aquí tienes información en formato "snack" (directa y al grano) para apoyarte sin saturar tu mente. ¿En qué te podemos ayudar hoy?', time: '22:15', isMenu: true }
    ]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4 font-sans antialiased text-gray-200">
      
      {/* Título e Info del Proyecto */}
      <div className="text-center mb-6 max-w-xl">
        <h1 className="text-3xl font-bold text-emerald-400 mb-2">Prototipo de Validación de Bajo Roce</h1>
        <p className="text-sm text-gray-400">
          Diseñado por: <span className="text-gray-300">V. Espinoza, F. Tagle</span> <br />
          Sede: <span className="text-emerald-500 font-semibold">INACAP Maipú</span> | Versión: 1.0 (27/04/2026)
        </p>
      </div>

      {/* Contenedor del iPhone */}
      <div className="relative w-[360px] h-[740px] bg-black rounded-[50px] shadow-2xl border-[10px] border-gray-800 overflow-hidden flex flex-col">
        
        {/* Isla Dinámica / Notch del iPhone */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-black rounded-2xl z-50 flex items-center justify-between px-3">
          <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
          <div className="w-10 h-1 bg-gray-950 rounded-full"></div>
        </div>

        {/* Barra de Estado (Top Bar Teléfono) */}
        <div className="bg-[#f0f2f5] dark:bg-[#202c33] text-black dark:text-white pt-3 px-6 pb-1 flex justify-between items-center text-xs font-semibold z-40">
          <span>22:15</span>
          <div className="flex items-center space-x-1">
            <span>LTE</span>
            <div className="w-5 h-2.5 border border-current rounded-sm p-0.5 flex items-center">
              <div className="w-full h-full bg-current rounded-2xs"></div>
            </div>
          </div>
        </div>

        {/* Header de WhatsApp */}
        <div className="bg-[#f0f2f5] dark:bg-[#202c33] px-3 py-2 flex items-center justify-between border-b border-gray-300 dark:border-gray-700 shadow-sm text-gray-800 dark:text-gray-100">
          <div className="flex items-center space-x-2">
            <span className="text-emerald-500 font-bold text-lg">←</span>
            {/* Avatar del Bot */}
            <div className="w-10 h-10 bg-gradient-to-tr from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-black text-sm tracking-tighter">
              IN
            </div>
            <div>
              <div className="font-bold text-sm flex items-center">
                Inacap-Contigo 
                <span className="ml-1 text-emerald-500 text-[10px]">✔</span>
              </div>
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium block -mt-0.5">Bot Institucional</span>
            </div>
          </div>
          <div className="flex space-x-3 text-gray-500 text-xs">
            <span>📹</span>
            <span>📞</span>
          </div>
        </div>

        {/* Cuerpo del Chat (Fondo clásico de WhatsApp) */}
        <div 
          className="flex-1 overflow-y-auto p-3 space-y-3 flex flex-col bg-[#efeae2] dark:bg-[#0b141a]"
          style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,0.04) 1px, transparent 0)', backgroundSize: '16px 16px' }}
        >
          {/* Cifrado de extremo a extremo aviso */}
          <div className="self-center bg-[#ffeecd] dark:bg-[#182229] text-[11px] text-gray-600 dark:text-amber-200/70 text-center px-2 py-1 rounded-md max-w-[85%] shadow-sm">
            🔒 Los mensajes están cifrados. Este prototipo mitiga la ansiedad y el "Efecto Esponja".
          </div>

          {/* Renderizado Dinámico de Mensajes */}
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`max-w-[85%] rounded-lg p-2.5 text-xs shadow-xs relative ${
                msg.sender === 'bot' 
                  ? 'bg-white dark:bg-[#202c33] text-gray-800 dark:text-gray-100 self-start rounded-tl-none' 
                  : 'bg-[#d9fdd3] dark:bg-[#005c4b] text-gray-800 dark:text-emerald-50 self-end rounded-tr-none'
              }`}
            >
              <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
              
              {/* Si el mensaje tiene el menú interactivo */}
              {msg.isMenu && (
                <div className="mt-3 space-y-1.5 border-t border-gray-100 dark:border-gray-700 pt-2">
                  <button 
                    onClick={() => handleOptionClick(1)}
                    className="w-full text-left bg-emerald-50 dark:bg-[#111b21] hover:bg-emerald-100 dark:hover:bg-emerald-900/30 p-2 rounded text-emerald-700 dark:text-emerald-400 font-medium transition-colors border border-emerald-200/50 dark:border-emerald-800/30"
                  >
                    1. 🚀 ¿Qué es INACAP-CONECTA?
                  </button>
                  <button 
                    onClick={() => handleOptionClick(2)}
                    className="w-full text-left bg-emerald-50 dark:bg-[#111b21] hover:bg-emerald-100 dark:hover:bg-emerald-900/30 p-2 rounded text-emerald-700 dark:text-emerald-400 font-medium transition-colors border border-emerald-200/50 dark:border-emerald-800/30"
                  >
                    2. 📅 Agendar apoyo (Psicólogo/Tutor)
                  </button>
                  <button 
                    onClick={() => handleOptionClick(3)}
                    className="w-full text-left bg-emerald-50 dark:bg-[#111b21] hover:bg-emerald-100 dark:hover:bg-emerald-900/30 p-2 rounded text-emerald-700 dark:text-emerald-400 font-medium transition-colors border border-emerald-200/50 dark:border-emerald-800/30"
                  >
                    3. 🔍 Información del Experimento
                  </button>
                </div>
              )}
              
              <span className="block text-[9px] text-gray-400 text-right mt-1">{msg.time}</span>
            </div>
          ))}
        </div>

        {/* Input Bar Inferior (Falsa entrada de texto) */}
        <div className="bg-[#f0f2f5] dark:bg-[#202c33] p-2 flex items-center space-x-2 pb-4">
          <div className="flex-1 bg-white dark:bg-[#2a3942] rounded-full px-3 py-1.5 flex items-center justify-between text-xs text-gray-400">
            <span>Escribe un mensaje...</span>
            <span>😀📎</span>
          </div>
          <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm">
            🎙
          </div>
        </div>
      </div>

      {/* Botón de reinicio */}
      <button 
        onClick={resetChat}
        className="mt-4 px-4 py-1.5 bg-gray-800 hover:bg-gray-700 text-xs font-semibold text-gray-300 rounded-lg transition-colors border border-gray-700 shadow-sm"
      >
        🔄 Reiniciar Conversación
      </button>
    </div>
  );
}