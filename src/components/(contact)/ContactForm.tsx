"use client"

const ContactForm = () => {
  return (
    <div className="bg-white p-10 rounded-[12px] shadow-xl  w-full">
      <h2 className="text-3xl font-poppins font-semibold leading-[150%] text-dark mb-3">Just Say Hello!</h2>
      <p className="text-gray-500 font-poppins font-normal mb-8 text-sm leading-[150%] max-w-[486px]">
        Do you fancy saying hi to me or you want to get started with your 
        project and you need my help? Feel free to contact me.
      </p>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Template Cookie"
            className="w-full font-poppins px-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#00B207] focus:border-[#00B207] placeholder:text-gray-400"
          />
          <input
            type="email"
            placeholder="zakirsoft@gmail.com"
            className="w-full font-poppins px-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#00B207] focus:border-[#00B207] placeholder:text-gray-400"
          />
        </div>

        {/* Highlighted Input */}
        <input
          type="text"
          defaultValue="Write something..."
          className="w-full font-poppins px-4 py-3.5 border-2 border-gray-200 rounded-lg focus:outline-none text-gray-700 font-medium"
        />

        <textarea
          placeholder="Subjects"
          rows={4}
          className="w-full font-poppins px-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#00B207] focus:border-[#00B207] placeholder:text-gray-400 resize-none"
        ></textarea>

        <div className="pt-2">
          <button
            type="submit"
            className="bg-primary font-poppins font-semibold cursor-pointer hover:bg-[#009906] text-white py-3.5 px-10 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 text-base"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;