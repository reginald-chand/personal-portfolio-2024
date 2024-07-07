"use client";

import { formValidator } from "@/app/components/utils/error/form-validation";
import { ChangeEvent, ReactElement, memo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactSection = memo((): ReactElement => {
  const [firstName, setFirstName] = useState<string | null>("");
  const [lastName, setLastName] = useState<string | null>("");
  const [email, setEmail] = useState<string | null>("");
  const [message, setMessage] = useState<string | null>("");

  const handleFirstNameInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event && event) {
      const value = event.currentTarget.value;
      setFirstName(value.charAt(0).toUpperCase() + value.slice(1));
    }
  };

  const handleLastNameInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event && event) {
      const value = event.currentTarget.value;
      setLastName(value.charAt(0).toUpperCase() + value.slice(1));
    }
  };

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event && event) {
      const value = event.currentTarget.value;
      setEmail(value.toLowerCase());
    }
  };

  const handleMessageInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (event && event) {
      const value = event.currentTarget.value;
      setMessage(value.charAt(0).toUpperCase() + value.slice(1));
    }
  };

  const handleContactFormDataSubmission = async (event: any) => {
    event.preventDefault();

    const firstNameValidationFailed = formValidator({
      formInputElement: firstName,
      formInputElementName: "First Name",
      toast: toast,
    });

    const lastNameValidationFailed = formValidator({
      formInputElement: lastName,
      formInputElementName: "Last Name",
      toast: toast,
    });

    const emailValidationFailed = formValidator({
      formInputElement: email,
      formInputElementName: "Email",
      toast: toast,
    });

    const messageValidationFailed = formValidator({
      formInputElement: message,
      formInputElementName: "Message",
      toast: toast,
    });

    const contactFormData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
    };

    try {
      if (
        !firstNameValidationFailed &&
        !lastNameValidationFailed &&
        !emailValidationFailed &&
        !messageValidationFailed
      ) {
        toast.info("Submitting your message! Please Wait 😁", {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

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

        setTimeout(() => {
          if (!response.ok) {
            toast.error(responseData.responseMessage, {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          } else {
            toast.success(responseData.responseMessage, {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        }, 2500);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full min-h-screen p-5 flex flex-row-reverse items-center justify-center xl:justify-evenly">
      <ToastContainer />
      <form className="w-full xl:w-1/3 p-5 grid lg:grid-cols-2 gap-5 border-2 border-dashed border-gray-900 rounded-md">
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
            onChange={handleFirstNameInput}
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
            onChange={handleLastNameInput}
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
            onChange={handleEmailInput}
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
            onChange={handleMessageInput}
            className="w-full min-h-60 p-5 block border-2 border-dashed border-gray-900 rounded-md resize-none bg-transparent outline-none hover:border-brand-primary focus:border-blue-800 transition-colors duration-300 ease-linear"
          ></textarea>
        </div>

        <button
          type="submit"
          onClick={handleContactFormDataSubmission}
          className="p-5 lg:col-span-2 inline-block rounded-md border-2 border-dashed border-transparent cursor-pointer bg-brand-primary hover:bg-transparent hover:border-gray-900 active:scale-95 group transition-all duration-300 ease-linear"
        >
          Submit your message
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
