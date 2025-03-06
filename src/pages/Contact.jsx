import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
    });

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // In a real application, you would send the form data to a server here
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-base-100 to-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="max-w-2xl mx-auto text-lg">
              Have questions or feedback? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2" data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg mb-8">
                Whether you have a question about our apps, need technical
                support, or want to share your feedback, we're here to help.
                Fill out the form and we'll get back to you as soon as possible.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>
                <div className="flex items-start mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:support@techwizardlabs.org"
                      className="text-primary hover:underline"
                    >
                      support@techwizardlabs.org
                    </a>
                  </div>
                </div>
              </div>

              {/* <div
                className="p-6 bg-base-200 rounded-lg shadow-md"
                data-aos="fade-up"
              >
                <h3 className="text-xl font-semibold mb-4">Support Hours</h3>
                <p className="mb-2">
                  Our support team is available to assist you during the
                  following hours:
                </p>
                <ul className="space-y-2">
                  <li>Monday - Friday: 9:00 AM - 6:00 PM EST</li>
                  <li>Saturday: 10:00 AM - 2:00 PM EST</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div> */}
            </div>

            <div className="lg:w-1/2" data-aos="fade-left">
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body">
                  {formStatus.submitted ? (
                    <div className="text-center py-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 text-success mx-auto mb-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-lg">{formStatus.message}</p>
                      <button
                        className="btn btn-primary mt-6"
                        onClick={() =>
                          setFormStatus({
                            submitted: false,
                            success: false,
                            message: "",
                          })
                        }
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <h2 className="card-title text-2xl mb-6">
                        Send Us a Message
                      </h2>

                      <div className="form-control mb-4">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="input input-bordered"
                          required
                        />
                      </div>

                      <div className="form-control mb-4">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email"
                          className="input input-bordered"
                          required
                        />
                      </div>

                      <div className="form-control mb-4">
                        <label className="label">
                          <span className="label-text">Subject</span>
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Subject"
                          className="input input-bordered"
                          required
                        />
                      </div>

                      <div className="form-control mb-6">
                        <label className="label">
                          <span className="label-text">Message </span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Your message"
                          className="textarea textarea-bordered h-32"
                          required
                        ></textarea>
                      </div>

                      <div className="form-control">
                        <button type="submit" className="btn btn-primary">
                          Send Message
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="max-w-2xl mx-auto text-lg">
              Find answers to common questions about our apps and services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div
              className="collapse collapse-plus bg-base-100 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <input type="radio" name="faq-accordion" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                How does Safely360 protect my privacy?
              </div>
              <div className="collapse-content">
                <p>
                  Safely360 uses end-to-end encryption to secure your location
                  data. We never share your information with third parties, and
                  you have complete control over who can see your location and
                  when.
                </p>
              </div>
            </div>

            <div
              className="collapse collapse-plus bg-base-100 mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                Will Safely360 drain my battery?
              </div>
              <div className="collapse-content">
                <p>
                  Safely360 is designed to be battery-efficient. It uses
                  intelligent algorithms to minimize battery usage while still
                  providing accurate location tracking. You can also adjust the
                  tracking frequency in the app settings to further optimize
                  battery life.
                </p>
              </div>
            </div>

            <div
              className="collapse collapse-plus bg-base-100 mb-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                How accurate is the location tracking?
              </div>
              <div className="collapse-content">
                <p>
                  Safely360 provides highly accurate location tracking using a
                  combination of GPS, Wi-Fi, and cellular data. In optimal
                  conditions, the accuracy can be within a few meters. The app
                  will always show you the accuracy level of the current
                  location.
                </p>
              </div>
            </div>

            <div
              className="collapse collapse-plus bg-base-100 mb-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                Is there a limit to how many people I can track?
              </div>
              <div className="collapse-content">
                <p>
                  The free version of Safely360 allows you to connect with up to
                  5 family members or friends. The premium version removes this
                  limit and provides additional features like extended location
                  history and enhanced alerts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
