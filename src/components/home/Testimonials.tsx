export default function Testimonials() {
  return (
    <section className="section-light">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-12">
          What Our Clients Say
        </h2>

        <div className="row g-4">
          {/* Testimonial 1 */}
          <div className="col-md-4">
            <div className="card shadow-soft text-center">
              <img
                src="https://via.placeholder.com/80"
                alt="Client"
                className="rounded-full mx-auto mb-4"
              />

              <p className="mb-4">
                “They delivered our project on time and exceeded expectations.
                Truly professional and reliable.”
              </p>

              <h6 className="font-semibold">Sarah Johnson</h6>
              <span className="text-sm">CEO, TechCorp</span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="col-md-4">
            <div className="card shadow-soft text-center">
              <img
                src="https://via.placeholder.com/80"
                alt="Client"
                className="rounded-full mx-auto mb-4"
              />

              <p className="mb-4">
                “Clear communication, strong technical skills, and excellent
                execution. Highly recommended.”
              </p>

              <h6 className="font-semibold">Ali Raza</h6>
              <span className="text-sm">Founder, StartupX</span>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="col-md-4">
            <div className="card shadow-soft text-center">
              <img
                src="https://via.placeholder.com/80"
                alt="Client"
                className="rounded-full mx-auto mb-4"
              />

              <p className="mb-4">
                “Best choice for SaaS and enterprise web apps. Reliable,
                experienced, and fast.”
              </p>

              <h6 className="font-semibold">Fatima Khan</h6>
              <span className="text-sm">CTO, WebSol</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
