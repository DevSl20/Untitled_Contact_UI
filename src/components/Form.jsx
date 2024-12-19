import { useForm } from "react-hook-form";
import { TbFlareFilled } from "react-icons/tb";
import Intro from "@/components/Intro";
import utils from "@/lib/utils";

const services = [
  "Website Design",
  "Content",
  "UX Design",
  "Strategy",
  "User Research",
  "Other",
];

function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    const formData = new FormData();
    formData.append(utils.fullname, data.fullname);
    formData.append(utils.email, data.email);
    formData.append(utils.message, data.message);
    formData.append(utils.services, data.services);
    fetch(utils.submitUrl, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    }).then(() => {
      console.log("Form Submitted Successfully", utils.entriesUrl);
    });
  };

  return (
    <>
      <Intro />
      <form
        className="flex flex-col gap-1"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {/* Input */}
        <input
          type="text"
          {...register("fullname", { required: "Idiot, You forgot your name" })}
          id="fullname"
          placeholder="Your name"
          className="border-b border-stone-700 bg-zinc-50 p-2 placeholder-slate-700 md:bg-lime-400"
        />
        {errors.fullname && (
          <p className="bold text-xs text-red-500">{errors.fullname.message}</p>
        )}

        <input
          type="email"
          {...register("email", {
            required: "You Dumb, Enter your email",
            pattern: {
              value: /[\w]*@*[a-z]*\.*[\w]{5,}(\.)*(com)*(@gmail\.com)/g,
              message: "Please enter a valid email address",
            },
          })}
          id="email"
          placeholder="your@company.com"
          className="border-b border-stone-700 bg-zinc-50 p-2 placeholder-slate-700 md:bg-lime-400"
        />
        {errors.email && (
          <p className="bold text-xs text-red-500">{errors.email.message}</p>
        )}

        <input
          type="text"
          {...register("message", {
            required: "Be a good boy, Give some feedback!",
            pattern: {
              value: /^[a-zA-Z0-9\s]{5,}$/g,
              message: "Please enter a valid message",
            },
          })}
          id="message"
          placeholder="Tell us a bit about your project..."
          className="h-24 border-b border-stone-700 bg-zinc-50 p-2 placeholder-slate-700 md:bg-lime-400"
        />
        {errors.message && (
          <p className="bold text-xs text-red-500">{errors.message.message}</p>
        )}

        {/* Checkbox */}
        <section className="mb-12 grid grid-cols-2 gap-1 md:max-w-96">
          {services.map((service, idx) => {
            return (
              <label
                key={service + idx}
                className="flex cursor-pointer items-center gap-1"
              >
                <input
                  type="checkbox"
                  {...register("services")}
                  value={service}
                  className="size-6"
                />
                {service}
              </label>
            );
          })}
        </section>
        <button
          type="submit"
          className="flex justify-center gap-2 rounded-lg bg-stone-950 p-2 text-white"
        >
          Let's get started
          <TbFlareFilled size={20} className="text-lime-500" />
        </button>
      </form>
    </>
  );
}

export default Form;
