  export const convertPhone = (phoneNumber: string) => {
    const cleaned = phoneNumber.replace(/\D/g, "");
    if (cleaned.startsWith("0")) {
      return "62" + cleaned.substring(1);
    }

    return cleaned;
  };