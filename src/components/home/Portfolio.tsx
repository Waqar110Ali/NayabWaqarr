import { useEffect, useState } from "react";
import SectionTitle from "../common/SectionTitle";
import { PortfolioAPI } from "../../services/portfolio.api";
import { type Portfolio } from "../../types/portfolio.type";

export default function PortfolioSection() {
  const [projects, setProjects] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const data = await PortfolioAPI.getAll();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load portfolio");
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  return (
    <section className="section-white">
      <div className="container">
        <SectionTitle title="Our Work" />

        {loading && <p className="text-center">Loading portfolio...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <div key={project._id} className="card">
                <div className="image-placeholder h-52 mb-5">
                  IMAGE
                </div>

                <h3>{project.title}</h3>
                <p className="mt-2">{project.description}</p>

                <span className="badge mt-4">
                  {project.category}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
