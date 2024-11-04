export const handleWhatsApp_ES = () => {
    const phone = "+5541992416343";
    const message = "¡Hola! Me gustaría obtener más información sobre sus servicios.";
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
};

export const handleScheduleWhatsApp_ES = () => {
    const phone = "+5541992416343";
    const message = "¡Hola! Me gustaría agendar una cita.";
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
};
