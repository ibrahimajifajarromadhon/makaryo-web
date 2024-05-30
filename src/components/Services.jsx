import {ServicesData} from "../data/Data";

const Services = () => {
  const services = ServicesData;

  return (
    <section id="services" className="py-10 bg-slate-50 pl-20 pr-20">
      <h2 className="text-5xl font-bold mb-10 text-center">Our Services</h2>
      <div className="container mx-auto flex flex-wrap justify-center">
        {services.map((service, i) => (
          <div
            key={i}
            className="max-w-72 rounded-3xl overflow-hidden hover:bg-orange-500 hover:text-white transition-transform duration-500 ease-in-out hover:scale-105"
          >
            <div className="flex flex-col p-7">
              <img
                src={service.image}
                alt={service.title}
                className="my-5 mx-16"
              />
              <h1 className="font-bold text-md mb-2">{service.title}</h1>
              <p className="text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
