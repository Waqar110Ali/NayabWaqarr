import { useEffect, useState } from "react";
import SectionTitle from "../common/SectionTitle";
import { ServiceAPI } from "../../services/service.api";
import { type Service } from "../../types/service.type";

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await ServiceAPI.getAll();
        setServices(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load services");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="section-light">
      <div className="container">
        <SectionTitle title="Our Services" />

        {loading && <p className="text-center">Loading services...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service._id} className="card text-center">
                <div className="image-placeholder h-32 mb-6">
                  ICON
                </div>

                <h3>{service.title}</h3>
                <p className="mt-3">{service.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
