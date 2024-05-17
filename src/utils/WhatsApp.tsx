export const handleWhatsApp = () => {
    const phone = "+5541992416343";
    const message = "Olá! Gostaria de mais informações sobre os serviços do escritório!";
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
};

export const handleScheduleWhatsApp = () => {
    const phone = "+5541992416343";
    const message = "Olá! Gostaria de agendar uma consulta!";
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
};
