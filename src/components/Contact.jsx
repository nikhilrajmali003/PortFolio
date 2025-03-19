import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bnlqjzyb", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 py-10 bg-gradient-to-br from-black to-[#0a192f] text-white"
    >
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-[#38BDF8]">
          Contact Me
        </h1>
        <span className="text-gray-400 text-lg block">
          Please fill out the form below to reach out.
        </span>
      </div>

      <div className="flex flex-col items-center justify-center mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#0a192f] border border-gray-700 w-96 px-8 py-6 rounded-xl shadow-lg"
        >
          <h1 className="text-xl font-semibold mb-4 text-[#ffffff] text-center">
            Send Your Message
          </h1>

          {/* Name Field */}
          <div className="flex flex-col mb-4">
            <label className="block text-gray-300">Full Name</label>
            <input
              {...register("name", { required: true })}
              className="shadow rounded-lg appearance-none border border-gray-600 bg-[#0a192f] py-2 px-3 text-white leading-tight focus:outline-none focus:border-[#38BDF8]"
              id="name"
              type="text"
              placeholder="Enter your full name"
            />
            {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
          </div>

          {/* Email Field */}
          <div className="flex flex-col mb-4">
            <label className="block text-gray-300">Email Address</label>
            <input
              {...register("email", { required: true })}
              className="shadow rounded-lg appearance-none border border-gray-600 bg-[#0a192f] py-2 px-3 text-white leading-tight focus:outline-none focus:border-[#38BDF8]"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
            {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
          </div>

          {/* Message Field */}
          <div className="flex flex-col mb-4">
            <label className="block text-gray-300">Message</label>
            <textarea
              {...register("message", { required: true })}
              className="shadow rounded-lg appearance-none border border-gray-600 bg-[#0a192f] py-2 px-3 text-white leading-tight focus:outline-none focus:border-[#38BDF8] h-28"
              id="message"
              placeholder="Enter your message"
            />
            {errors.message && <span className="text-red-500 text-sm">This field is required</span>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#38BDF8] text-white rounded-xl px-4 py-2 hover:bg-[#1E40AF] hover:border-[#38BDF8] border duration-300 w-full font-semibold"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
