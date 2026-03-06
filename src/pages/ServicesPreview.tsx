import { Link } from "react-router-dom";
import ServiceCard from "../components/home/Servicecard";

const ServicesPreview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* LEFT DARK CARD */}
      <div className="bg-[#1f1f1f] text-white rounded-3xl p-8 flex flex-col justify-between">
        <h3 className="text-2xl font-bold tracking-tight">
          OUR SERVICES
        </h3>

        <Link
          to="/services"
          className="text-sm underline underline-offset-4 opacity-80 hover:opacity-100 transition"
        >
          View all our services
        </Link>
      </div>

      {/* DESIGN */}
      <ServiceCard
        title="DESIGN"
        description="We create user-centered interfaces and visually stunning experiences..."
      />

      {/* AI */}
      <ServiceCard
        title="AI"
        description="We develop intelligent AI solutions for automation, insights, and growth..."
      />

      {/* DEVELOPMENT */}
      <ServiceCard
        title="DEVELOPMENT"
        description="Our expert team builds scalable applications with MERN, .NET, LAMP..."
      />
    </div>
  );
};

export default ServicesPreview;