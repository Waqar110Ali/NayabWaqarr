import PortfolioColumn from "../components/home/PortfolioColumn";
import shehwaImg from "../assets/shehwa.jpg";

const PortfolioPreview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <PortfolioColumn
        icon={shehwaImg}
        title="MERN STACK"
        items={[
          { label: "Subscription Based Wellness Web App", href: "#" },
          { label: "Sports Streaming Platform", href: "#" },
          { label: "Car Auction Platform", href: "#" },
        ]}
      />

      <PortfolioColumn
        icon={shehwaImg}
        title="LAMP STACK"
        items={[
          { label: "SaaS Based Trip Itinerary Planning Platform", href: "#" },
          { label: "Ecommerce Platform", href: "#" },
          { label: "Event Management Software", href: "#" },
        ]}
      />

      <PortfolioColumn
        icon={shehwaImg}
        title="AI & AUTOMATION"
        items={[
          { label: "E-commerce & Retail Technology", href: "#" },
          { label: "Data Visualization / Business Intelligence", href: "#" },
        ]}
      />

      <PortfolioColumn
        icon={shehwaImg}
        title="GRAPHIC DESIGN"
        items={[
          { label: "Learning Management System", href: "#" },
          { label: "Interactive Design for AI Product", href: "#" },
        ]}
      />

      <PortfolioColumn
        icon={shehwaImg}
        title="REACT NATIVE"
        items={[
          { label: "Service Booking Platform (SaaS)", href: "#" },
          { label: "Freelance & Gig Economy Marketplace", href: "#" },
        ]}
      />

      <PortfolioColumn
        icon={shehwaImg}
        title="FLUTTER"
        items={[
          { label: "SaaS Based Mobile App", href: "#" },
          { label: "Personal Relationship / Lifestyle App", href: "#" },
        ]}
      />

      <PortfolioColumn
        icon={shehwaImg}
        title="HEADLESS CMS"
        items={[
          { label: "WordPress Based Informational Site", href: "#" },
          { label: "Shopify Ice Skating Rink Website", href: "#" },
        ]}
      />

      <PortfolioColumn
        icon={shehwaImg}
        title=".NET FINTECH"
        items={[
          { label: "Electronic Document Signature", href: "#" },
          { label: "Somali Language Learning Platform", href: "#" },
        ]}
      />

      <PortfolioColumn
        icon={shehwaImg}
        title="GOLANG SERVER SIDE"
        items={[{ label: "Coming Soon", href: "#" }]}
      />
    </div>
  );
};

export default PortfolioPreview;
