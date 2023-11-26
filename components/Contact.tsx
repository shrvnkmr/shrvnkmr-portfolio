import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { textContent } from "@/content/textContent";

const Contact = () => {
  const initState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formState, setFormState] = useState(initState);
  const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>(false);
  const {
    sectionTitle,
    name,
    email,
    subject,
    subjectPlaceholder,
    message,
    messagePlaceholder,
    submitText,
    toastSuccess,
    toastFail,
  } = textContent.contact;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    setIsBtnDisabled(true);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });
      if (res.status === 200) {
        setFormState(initState);
        toast.success(toastSuccess);
      } else {
        setIsBtnDisabled(false);
        toast.error(toastFail);
      }
    } catch (error) {
      setIsBtnDisabled(false);
      toast.error(toastFail);
    }
  };

  useEffect(() => {
    setIsBtnDisabled(Object.values(formState).some((v) => v === ""));
  }, [formState]);

  return (
    <section
      id="contact"
      className="m-auto p-10 text-slate-600 dark:text-slate-100 md:max-w-2xl md:px-14"
    >
      <h3 className="flex items-center justify-center pb-6 text-2xl font-medium leading-[2rem] text-slate-600 dark:text-slate-100">
        {sectionTitle}
      </h3>
      <form
        onSubmit={submitForm}
        className="text-sm text-slate-600 dark:text-slate-100"
      >
        <div className="flex flex-col gap-2 pb-4">
          <label htmlFor="name">{name}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState?.name}
            autoComplete="off"
            placeholder="John Doe"
            onChange={handleChange}
            className="rounded-md border border-sky-500 bg-slate-50 p-3 text-xs focus:shadow-sm focus:shadow-sky-500 focus:outline-none dark:border-sky-800 dark:bg-slate-800 md:text-sm"
          />
        </div>
        <div className="flex flex-col gap-2 pb-4">
          <label htmlFor="email">{email}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState?.email}
            autoComplete="off"
            placeholder="abc@xyz.com"
            onChange={handleChange}
            className="rounded-md border border-sky-500 bg-slate-50 p-3 text-xs focus:shadow-sm focus:shadow-sky-500 focus:outline-none dark:border-sky-800 dark:bg-slate-800 md:text-sm"
          />
        </div>
        <div className="flex flex-col gap-2 pb-4">
          <label htmlFor="subject">{subject}</label>
          <input
            type="subject"
            id="subject"
            name="subject"
            value={formState?.subject}
            autoComplete="off"
            placeholder={subjectPlaceholder}
            onChange={handleChange}
            className="rounded-md border border-sky-500 bg-slate-50 p-3 text-xs focus:shadow-sm focus:shadow-sky-500 focus:outline-none dark:border-sky-800 dark:bg-slate-800 md:text-sm"
          />
        </div>
        <div className="flex flex-col gap-2 pb-4">
          <label htmlFor="message">{message}</label>
          <textarea
            id="message"
            name="message"
            value={formState?.message}
            autoComplete="off"
            placeholder={messagePlaceholder}
            rows={8}
            onChange={handleChange}
            className="resize-none rounded-md border border-sky-500 bg-slate-50 p-3 text-xs focus:shadow-sm focus:shadow-sky-500 focus:outline-none dark:border-sky-800 dark:bg-slate-800 md:p-4 md:text-sm"
          />
        </div>
        <div className="flex items-center justify-center pt-2">
          <button
            type="submit"
            disabled={isBtnDisabled}
            className="group flex h-10 w-32 items-center justify-center gap-2 rounded-md border border-blue-600 font-medium text-blue-600 shadow-md hover:bg-blue-600 hover:text-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span className="rotate-45 transition-all duration-300 group-hover:translate-x-[0.075rem]">
              <svg
                className="text-blue-600 group-hover:text-slate-100"
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 4L3 11L10 14M20 4L13 21L10 14M20 4L10 14" />
              </svg>
            </span>
            <span>{submitText}</span>
          </button>
        </div>
      </form>
    </section>
  );
};
export default Contact;
