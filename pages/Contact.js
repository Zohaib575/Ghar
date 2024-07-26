import Link from 'next/link';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    )
      .then((result) => {
        console.log(result.text);
        toast.success('Successfully Sent Email');
      }, (error) => {
        console.log(error.text);
        toast.error('Error during Send Email');
      });
  };

  return (
    <>
      <div className="uppercase text-orange-500 text-4xl font-bold text-center py-10">
        Contact Us
      </div>
      <div className="text-center text-lg overflow-auto">
        Connect with us 😊<br />
        Tell us your problem. We are available for our customers 24x7.
      </div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-20 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              frameBorder="0"
              style={{ border: "0" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.633470603786!2d74.33780301511895!3d31.475812558333015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919068fbd5ec79d%3A0x8ff08b333a16ab5a!2sYour%20Location!5e0!3m2!1sen!2sus!4v1629927347889!5m2!1sen!2sus"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>

            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  LAHORE - PNY ARFA TOWER LOCATION FLOOR 14.
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <Link href="mailto:allahdita9280836@gmail.com" passHref>
                  <div className="text-red-500 cursor-pointer leading-relaxed">
                    allahdita....6@gmail.com
                  </div>
                </Link>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">+92 323...4</p>
              </div>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feel free to contact us! 😊
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Let's connect with us, we are waiting for more new identities!
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                required
                type="text"
                id="name"
                name="to_name"
                placeholder="Please enter a Name"
                className="w-full bg-white rounded-e-3xl border-b-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                name="to_email"
                className="w-full bg-white rounded-e-3xl border-b-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                required
                id="message"
                name="message"
                className="w-full bg-white rounded-e-3xl border-b-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button type='submit' className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
              🚀 SUBMIT
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
