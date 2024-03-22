import React from 'react';
import queryString from 'query-string';
import "./whatsapp.css"

const WhatsAppButton = ({ phoneNumber, message }) => {
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?${queryString.stringify({ text: message })}`;
    window.location.href = whatsappUrl;
  };

  return (
    <button className='whatsappbut' onClick={handleClick}>
      Start WhatsApp Chat
    </button>
  );
};

export default WhatsAppButton;
