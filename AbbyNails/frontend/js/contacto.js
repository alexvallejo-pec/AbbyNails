// AbbyNails — contacto directo por WhatsApp.
// Número confirmado por el negocio: Colombia (+57) 302 393 4515.
// Formato internacional requerido por wa.me: solo dígitos, sin + ni espacios.
const WHATSAPP_NUMBER = '573023934515';

const whatsappMessages = {
  nails: 'Hola, AbbyNails. Estoy interesado/a en los servicios de uñas. Quisiera conocer las técnicas disponibles, diseños, precios y disponibilidad para una cita.',
  massage: 'Hola, AbbyNails. Estoy interesado/a en los servicios de masajes. Quisiera conocer los tratamientos disponibles, precios y disponibilidad para solicitar una cita.'
};

function configureWhatsAppLink(elementId, message) {
  const link = document.getElementById(elementId);
  if (!link) return;

  const encodedMessage = encodeURIComponent(message);
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  link.setAttribute('aria-label', `${link.textContent.trim()} para ${elementId === 'whatsapp-nails' ? 'servicios de uñas' : 'servicios de masajes'}`);
}

configureWhatsAppLink('whatsapp-nails', whatsappMessages.nails);
configureWhatsAppLink('whatsapp-massage', whatsappMessages.massage);
