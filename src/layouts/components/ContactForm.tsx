import config from "@/config/config.json";

export const ContactForm = () => {
  const { contact_form_action } = config.params;
  return (
    <form action={contact_form_action} method="POST">
      <div className="mb-6">
        <label htmlFor="name" className="form-label">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          className="form-input"
          placeholder="John Doe"
          type="text"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="form-label">
          Working Mail <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          className="form-input"
          placeholder="john.doe@email.com"
          type="email"
        />
      </div>
      <div className="flex flex-col  mb-4">
        <label htmlFor="email" className="form-label">
          Services <span className="text-red-500">*</span>
        </label>
        <div className="flex  items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-darkmode-lightbody bg-gray-100 border-gray-300 focus:ring-light dark:focus:ring-light dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ms-2 text-md font-medium dark:text-light">
            Maketing Strategy
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-darkmode-lightbody bg-gray-100 border-gray-300 focus:ring-light dark:focus:ring-light dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ms-2 text-md font-medium dark:text-light">
            Paid Social Advertisement
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-darkmode-lightbody bg-gray-100 border-gray-300 focus:ring-light dark:focus:ring-light dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ms-2 text-md font-medium dark:text-light">
            Social Media Management
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-darkmode-lightbody bg-gray-100 border-gray-300 focus:ring-light dark:focus:ring-light dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ms-2 text-md font-medium dark:text-light">
            Consulting
          </label>
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="form-label">
          Anything else? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          className="form-input"
          placeholder="Message goes here..."
          rows={8}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
