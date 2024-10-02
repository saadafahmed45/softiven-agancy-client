import {
  CheckCircle,
  Globe,
  Laptop,
  Rocket,
  Server,
  Shield,
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom web applications tailored to your business needs.",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning"],
    },
    {
      icon: Laptop,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps for iOS and Android.",
      features: [
        "User-Centric Design",
        "Offline Functionality",
        "Push Notifications",
      ],
    },
    {
      icon: Rocket,
      title: "Cloud Solutions",
      description:
        "Scalable and secure cloud infrastructure for your applications.",
      features: ["Auto-scaling", "Load Balancing", "Disaster Recovery"],
    },
    {
      icon: Server,
      title: "DevOps",
      description: "Streamline your development and operations processes.",
      features: [
        "Continuous Integration",
        "Automated Deployment",
        "Infrastructure as Code",
      ],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your digital assets with our security solutions.",
      features: [
        "Vulnerability Assessment",
        "Penetration Testing",
        "Security Audits",
      ],
    },
  ];

  return (
    <>
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-white px-2 md:px-16"
        id="services"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Our Services
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Comprehensive software solutions to drive your business forward.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 px-2 md:px-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col p-6 bg-white rounded-lg shadow-md"
              >
                <service.icon className="h-10 w-10 mb-2 text-secondery" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-500 mb-4">{service.description}</p>
                <ul className="space-y-2 mt-auto">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white px-2 md:px-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Need a Custom Solution?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We specialize in creating bespoke software solutions tailored to
                your unique business requirements.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primaryBg hover:bg-secondery h-10 px-4 py-2 w-full"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
