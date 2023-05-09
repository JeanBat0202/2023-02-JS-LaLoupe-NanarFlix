import React, { useState } from "react";

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-8 text-[#9EBA9B]">NANARFLIX</h1>
      <div className="text-center md:w-2/5">
        <h2 className="text-2xl font-bold mb-4 text-white">Contactez-nous</h2>
        {isSubmitted ? (
          <div className="bg-[#9EBA9B] rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Merci pour votre message !
            </h3>
            <p className="text-white">
              Nous avons bien reçu votre message et nous vous répondrons dès que
              possible.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white font-bold mb-2">
                Pseudo:
              </label>
              <input
                type="text"
                required
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-white font-bold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                required
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-white font-bold mb-2"
              >
                Objet:
              </label>
              <input
                type="text"
                required
                id="subject"
                name="subject"
                className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-white font-bold mb-2"
              >
                Message:
              </label>
              <textarea
                required
                id="message"
                name="message"
                className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-[#9EBA9B] text-white font-bold py-2 px-4 rounded mt-5"
            >
              Envoyer
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactForm;
