"use client";

import { formValidator } from "@/app/components/utils/error/form-validation";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  ReactElement,
  SetStateAction,
  memo,
  useState,
} from "react";
import HashLoader from "react-spinners/HashLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactSection = memo((): ReactElement => {
  const [firstName, setFirstName] = useState<string | null>("");
  const [lastName, setLastName] = useState<string | null>("");
  const [email, setEmail] = useState<string | null>("");
  const [message, setMessage] = useState<string | null>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange =
    (inputElementState: Dispatch<SetStateAction<string | null>>) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (event && event) {
        const value = event.currentTarget.value;
        inputElementState(value.charAt(0).toUpperCase() + value.slice(1));
      }
    };

  const showToast = (
    type: "info" | "error" | "success" | "warn",
    message: string
  ) => {
    toast[type](message, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleContactFormDataSubmission = async (
    event: FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    if (!navigator.onLine) {
      showToast("error", "Seems like you are offline. 😟 Form not sent!");
      return null;
    }

    if (loading) {
      showToast("warn", "Please wait! form is sending! 🥸");
      return null;
    }

    const validations = [
      { element: firstName, name: "First Name" },
      { element: lastName, name: "Last Name" },
      { element: email, name: "Email" },
      { element: message, name: "Message" },
    ].map(({ element, name }) =>
      formValidator({
        formInputElement: element,
        formInputElementName: name,
        toast,
      })
    );

    if (validations.some((validation) => validation)) return;

    const contactFormData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
    };

    try {
      showToast("info", "Submitting your message! Please Wait 😁");
      setLoading(true);

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const response: Response = await fetch(
        "https://user-form-submission-backend.onrender.com/form-submission",
        {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify(contactFormData),
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        showToast("error", responseData.responseMessage);
      } else {
        showToast("success", responseData.responseMessage);
      }
    } catch (error) {
      showToast("error", "An error occurred! Check your network connection 🤔");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen p-5 flex flex-row-reverse items-center justify-center xl:justify-evenly">
      <ToastContainer />
      <form className="w-full xl:w-1/3 md:p-5 grid lg:grid-cols-2 gap-5 md:border-2 border-dashed border-gray-900 rounded-md">
        <div>
          <label htmlFor="firstName" className="mb-2 block">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            autoComplete="given-name"
            placeholder="Reginald"
            required
            onChange={handleInputChange(setFirstName)}
            className="w-full p-5 block border-2 border-dashed border-gray-900 rounded-md bg-transparent outline-none hover:border-brand-primary focus:border-blue-800 transition-colors duration-300 ease-linear"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="mb-2 block">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            autoComplete="family-name"
            placeholder="Chand"
            required
            onChange={handleInputChange(setLastName)}
            className="w-full p-5 block border-2 border-dashed border-gray-900 rounded-md bg-transparent outline-none hover:border-brand-primary focus:border-blue-800 transition-colors duration-300 ease-linear"
          />
        </div>

        <div className="lg:col-span-2">
          <label htmlFor="email" className="mb-2 block">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="reginald-chand@outlook.com"
            required
            onChange={handleInputChange(setEmail)}
            className="w-full p-5 block border-2 border-dashed border-gray-900 rounded-md bg-transparent outline-none hover:border-brand-primary focus:border-blue-800 transition-colors duration-300 ease-linear"
          />
        </div>

        <div className="lg:col-span-2">
          <label htmlFor="message" className="mb-2 block">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message here"
            required
            onChange={handleInputChange(setMessage)}
            className="w-full min-h-60 p-5 block border-2 border-dashed border-gray-900 rounded-md resize-none bg-transparent outline-none hover:border-brand-primary focus:border-blue-800 transition-colors duration-300 ease-linear"
          ></textarea>
        </div>

        <button
          type="submit"
          onClick={handleContactFormDataSubmission}
          className="p-5 lg:col-span-2 flex items-center justify-center rounded-md border-2 border-dashed border-transparent cursor-pointer bg-brand-primary disabled:pointer-events-none disabled:bg-red-500 hover:bg-transparent hover:border-gray-900 active:scale-95 group transition-all duration-300 ease-linear"
          disabled={loading ? true : false}
        >
          <span>Submit your message</span>
          <span className="ml-5">
            <HashLoader
              color="#ffffff"
              loading={loading}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </span>
        </button>
      </form>

      <div className="hidden xl:block max-w-[500px]">
        <div className="mb-2 text-4xl uppercase font-black">
          Let&apos;s Connect
        </div>
        <p className="text-sm leading-tight font-extralight text-justify">
          Whether you&apos;re looking to collaborate on an exciting project,
          need help with a complex technical challenge, or are interested in
          hiring a dedicated full-time engineer, I&apos;d love to hear from you.
          I&apos;m passionate about crafting efficient and scalable software
          solutions and always eager to connect with like-minded individuals.
          Reach out, and let&apos;s explore how we can work together to achieve
          great things!
        </p>
      </div>
    </section>
  );
});

ContactSection.displayName = "Contact Section";
