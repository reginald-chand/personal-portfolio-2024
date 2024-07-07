export const formValidator = ({
  formInputElement,
  formInputElementName,
  toast,
}: {
  formInputElement: string | null;
  formInputElementName: string;
  toast: any;
}) => {
  if (
    formInputElement === undefined ||
    formInputElement === null ||
    formInputElement === "" ||
    formInputElement.length === 0
  ) {
    toast.error(`${formInputElementName} is required 😟`, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    return true;
  } else if (formInputElement.length <= 3) {
    toast.error(`${formInputElementName} must be more than 3 characters! 😟`, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    return true;
  }

  return false;
};
