export const isMobileDevice = (): boolean => {
  return /Mobi|Android/i.test(navigator.userAgent);
};

export const makePhoneCall = (phoneNumber: string): void => {
  if (isMobileDevice()) {
    window.location.href = `tel:${phoneNumber}`;
  } else {
    console.warn("Phone call feature is only available on mobile devices.");
  }
};

export const openWhatsapp = (phoneNumber: string): void => {
  window.open(`https://api.whatsapp.com/send/?phone=${phoneNumber}`);
};
