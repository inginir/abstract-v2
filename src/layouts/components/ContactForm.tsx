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

  export default ContactForm