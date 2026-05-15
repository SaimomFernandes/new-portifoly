import { IoMailOutline, IoLogoWhatsapp } from 'react-icons/io5';
import { FiMapPin } from 'react-icons/fi';

 const contactData = [
  {
    type: "E-mail",
    value: "mkprogramador320@gmail.com",
    href: "mailto:mkprogramador320@gmail.com",
    icon: IoMailOutline,
    buttonText: "Enviar e-mail"
  },
  {
    type: "WhatsApp / Telefone",
    value: "+55 (11) 6526-1983",
    href: "https://wa.me/551165261983",
    icon: IoLogoWhatsapp,
    buttonText: "Chamar no Whats"
  },
  {
    type: "Localização",
    value: "Guarulhos, SP - Brasil",
    href: null, // Não precisa de link para clique
    icon: FiMapPin,
    buttonText: null
  }
];

export default contactData;