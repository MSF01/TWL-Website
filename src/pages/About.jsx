import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-base-100 to-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About TechWizard Labs
            </h1>
            <p className="max-w-2xl mx-auto text-lg">
              The story of a solo developer with a passion for creating magical
              digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2" data-aos="fade-right">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about1-vp9RG4UH79OA2mZEgFXBAxjksLfRW9.png"
                alt="Wizard in moonlight"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>

            <div className="lg:w-1/2" data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-4">
                At TechWizard Labs, our mission is to craft intuitive, powerful
                mobile applications that solve real-world problems and enhance
                people's lives. We believe in the power of technology to
                connect, protect, and empower.
              </p>
              <p className="text-lg mb-4">
                As a solo developer operation, we pride ourselves on agility,
                attention to detail, and a personal touch that larger
                development teams often lack. Every line of code is written with
                purpose and care.
              </p>
              <p className="text-lg">
                We're committed to creating applications that are not only
                functional but also delightful to use, with a focus on security,
                privacy, and user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Bio */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2" data-aos="fade-left">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about2-OL9nH66Eh3CUtexnVHuXb9jBPF5o4y.png"
                alt="Colorful wizard illustration"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>

            <div className="lg:w-1/2" data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-6">The Founder's Journey</h2>
              <p className="text-lg mb-4">
                TechWizard Labs was born from a passion for coding and a desire
                to create meaningful applications that make a difference in
                people's lives.
              </p>
              <p className="text-lg mb-4">
                What inspired the creation of TechWizard Labs was a personal
                experience with family members struggling to stay connected and
                ensure each other's safety. This led to the development of our
                flagship app, Safely360, which has since helped countless
                families maintain peace of mind.
              </p>
              <p className="text-lg mb-4">Our core values include:</p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-lg">
                <li>Innovation with purpose</li>
                <li>User privacy and security</li>
                <li>Simplicity in design</li>
                <li>Continuous improvement</li>
              </ul>
              <p className="text-lg">
                Notable achievements include launching Safely360 to positive
                user reviews and building a growing community of satisfied users
                who rely on our applications daily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values and Vision */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4">Our Values & Vision</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Guided by strong principles and a clear vision for the future of
              mobile applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className="card bg-base-200 shadow-xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card-body">
                <h3 className="card-title">Innovation</h3>
                <p>
                  Constantly exploring new technologies and approaches to create
                  better solutions.
                </p>
              </div>
            </div>

            <div
              className="card bg-base-200 shadow-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card-body">
                <h3 className="card-title">Privacy</h3>
                <p>
                  Respecting user data and implementing strong security measures
                  in all our applications.
                </p>
              </div>
            </div>

            <div
              className="card bg-base-200 shadow-xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card-body">
                <h3 className="card-title">Simplicity</h3>
                <p>
                  Creating intuitive interfaces that make powerful features
                  accessible to everyone.
                </p>
              </div>
            </div>

            <div
              className="card bg-base-200 shadow-xl"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="card-body">
                <h3 className="card-title">Quality</h3>
                <p>
                  Maintaining high standards in code quality, performance, and
                  user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
