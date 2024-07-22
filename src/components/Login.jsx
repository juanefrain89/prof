import React from 'react';

const ShareOnWhatsApp = () => {
  const phoneNumber = '+528135654041';
  const message = encodeURIComponent('Este lugar es recomendado');

  const handleShare = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <h1>Compartir en WhatsApp</h1>
      <button onClick={handleShare}>Compartir</button>
    </div>
  );
};

export default ShareOnWhatsApp;
