export const handleWhatsApp_EN = () => {
    const phone = "+5541992416343";
    const message = "Hello! I Would like more information about your services!";
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
};

export const handleScheduleWhatsApp_EN = () => {
    const phone = "+5541992416343";
    const message = "Hello! I would like to schedule an appointment!";
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
};
