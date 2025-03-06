import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Apps() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      text: "Safely360 gives me peace of mind knowing where my teenagers are at all times. The interface is intuitive and the alerts are reliable.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      text: "This app has been a game-changer for our family. We can coordinate pickups and know when everyone arrives safely at their destinations.",
      rating: 5,
    },
    {
      id: 3,
      name: "Jessica Williams",
      text: "I appreciate how battery-efficient this app is compared to others I've tried. The geofencing feature is particularly useful for our family.",
      rating: 4,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-base-100 to-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Applications
            </h1>
            <p className="max-w-2xl mx-auto text-lg">
              Discover the magical digital solutions crafted by TechWizard Labs.
            </p>
          </div>
        </div>
      </section>

      {/* Safely360 Section */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2" data-aos="fade-right">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Safely360-s7LTpjsaDNpqddn7eQxEkB4xoaQT4A.png"
                alt="Safely360 App"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>

            <div className="lg:w-1/2" data-aos="fade-left">
              <div className="mb-4">
                <span className="badge badge-primary mb-2">Flagship App</span>
                <h2 className="text-3xl md:text-4xl font-bold">Safely360</h2>
              </div>

              <p className="text-lg mb-6">
                Safely360 is a comprehensive family locator app designed to help
                families and friends stay connected through real-time location
                tracking. With an intuitive interface and powerful features, it
                provides peace of mind in an increasingly busy world.
              </p>

              <h3 className="text-xl font-semibold mb-3">Key Features:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Real-time location tracking with high accuracy
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Customizable geofence alerts for arrivals and departures
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Battery-efficient design for all-day tracking
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Secure, private location sharing with end-to-end encryption
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Emergency SOS button with location sharing
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Location history and travel routes
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn btn-primary">Download Now</button>
                <button className="btn btn-outline">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4">What Users Are Saying</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Hear from our satisfied users who rely on Safely360 to keep their
              loved ones connected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="card bg-base-100 shadow-xl"
                data-aos="fade-up"
                data-aos-delay={testimonial.id * 100}
              >
                <div className="card-body">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${
                          i < testimonial.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-4">"{testimonial.text}"</p>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Categories */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4">App Categories</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Explore our current and upcoming applications across different
              categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="card bg-base-200 shadow-xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card-body">
                <h3 className="card-title">Family Safety</h3>
                <p className="mb-4">
                  Applications designed to keep families connected and safe.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Safely360 - Family Locator
                  </li>
                  <li className="flex items-center text-base-content/70">
                    <span className="w-2 h-2 bg-base-content/30 rounded-full mr-2"></span>
                    HomeGuard - Coming Soon
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="card bg-base-200 shadow-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card-body">
                <h3 className="card-title">Productivity</h3>
                <p className="mb-4">
                  Tools to enhance your daily productivity and organization.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-base-content/70">
                    <span className="w-2 h-2 bg-base-content/30 rounded-full mr-2"></span>
                    TaskWizard - Coming Soon
                  </li>
                  <li className="flex items-center text-base-content/70">
                    <span className="w-2 h-2 bg-base-content/30 rounded-full mr-2"></span>
                    FocusTime - Coming Soon
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="card bg-base-200 shadow-xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card-body">
                <h3 className="card-title">Health & Wellness</h3>
                <p className="mb-4">
                  Applications to support your health and wellbeing journey.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-base-content/70">
                    <span className="w-2 h-2 bg-base-content/30 rounded-full mr-2"></span>
                    MindfulMoment - Coming Soon
                  </li>
                  <li className="flex items-center text-base-content/70">
                    <span className="w-2 h-2 bg-base-content/30 rounded-full mr-2"></span>
                    SleepWell - Coming Soon
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-content">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to experience the magic?
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Download Safely360 today and stay connected with your loved ones.
          </p>
          <button className="btn btn-secondary btn-lg">Download Now</button>
        </div>
      </section>
    </div>
  );
}

export default Apps;
