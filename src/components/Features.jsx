import img from "../assets/img/gambar.jpeg";
import {FeaturesData} from "../data/Data";

const Features = () => {
  const features = FeaturesData;

  return (
    <section id="features" className="py-10 bg-slate-50">
      <h2 className="text-5xl font-bold mb-10 text-center">Features</h2>
      <div className="flex flex-wrap bg-gray-100">
        <div className="w-full md:w-1/2">
          <img
            src={img}
            alt="Feature image"
            className="w-full h-full object-cover rounded-e-full"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`flex ${
                i % 2 === 0 ? "flex-col-reverse" : "flex-col"
              } items-center`}
            >
              <div className="max-w-sm rounded overflow-hidden py-5 flex">
                <span className="text-2xl font-bold text-orange-500 px-5">
                  {i + 1}
                </span>
                <div>
                  <div className="font-bold text-xl text-orange-500"> {feature.title}</div>
                  <p className="text-gray-700 text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
