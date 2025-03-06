import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero min-h-[90vh] bg-gradient-to-br from-base-100 to-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse container mx-auto px-4 py-16">
          <div className="lg:w-1/2" data-aos="fade-left">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-iatauvFgwUEpsMfmE1gIURfiRzzxY7.png"
              alt="TechWizard Labs Logo"
              className="max-w-sm mx-auto lg:mx-0 w-full h-auto"
            />
          </div>
          <div
            className="lg:w-1/2 text-center lg:text-left"
            data-aos="fade-right"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Code, innovate, launch.</span>
              <span className="block text-primary">All by one wizard.</span>
            </h1>
            <p className="py-6 text-lg md:text-xl max-w-md mx-auto lg:mx-0">
              Crafting digital solutions that transform ideas into reality, one
              line of code at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/apps" className="btn btn-primary">
                Explore Apps
              </Link>
              <Link to="/about" className="btn btn-outline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Welcome to TechWizard Labs
            </h2>
            <p className="max-w-2xl mx-auto text-lg">
              Where innovation meets practicality. We specialize in creating
              mobile applications that solve real-world problems and enhance
              everyday experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="card bg-base-200 shadow-xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card-body">
                <h3 className="card-title">Innovative Solutions</h3>
                <p>
                  Creating cutting-edge applications that address modern
                  challenges with elegant solutions.
                </p>
              </div>
            </div>

            <div
              className="card bg-base-200 shadow-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card-body">
                <h3 className="card-title">User-Centered Design</h3>
                <p>
                  Focusing on intuitive interfaces and seamless experiences that
                  delight users.
                </p>
              </div>
            </div>

            <div
              className="card bg-base-200 shadow-xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card-body">
                <h3 className="card-title">Continuous Improvement</h3>
                <p>
                  Constantly refining our products based on user feedback and
                  emerging technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured App Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2" data-aos="fade-right">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Safely360-s7LTpjsaDNpqddn7eQxEkB4xoaQT4A.png"
                alt="Safely360 App"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>

            <div className="lg:w-1/2" data-aos="fade-left">
              <div className="mb-4">
                <span className="badge badge-primary mb-2">Featured App</span>
                <h2 className="text-3xl md:text-4xl font-bold">Safely360</h2>
              </div>

              <p className="text-lg mb-6">
                Stay connected with your loved ones through real-time location
                tracking. Safely360 helps families and friends maintain peace of
                mind by knowing where everyone is, when it matters most.
              </p>

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
                  Real-time location tracking
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
                  Geofence alerts
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
                  Battery-efficient design
                </li>
              </ul>

              <Link to="/apps" className="btn btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-content">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to explore our magical creations?
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 opacity-90">
            Discover how our apps can enhance your daily life with innovative
            features and intuitive design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apps" className="btn btn-secondary">
              View Our Apps
            </Link>
            <Link to="/contact" className="btn btn-outline btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
