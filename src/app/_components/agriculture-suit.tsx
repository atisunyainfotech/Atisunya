// Import necessary components and assets
import Image from "next/image";
import agricultureNetsuite from "@/assets/agriculture-netsuite.jpg"; // New image

// A reusable component that renders a grid of core values with icons
const ValuesGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-lg font-medium text-gray-900">
      {[
        "Passion & Commitment",
        "Honesty & Openness",
        "Dedicated Team",
        "Practical Approach",
      ].map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <span className="text-yellow-500 text-xl">🔸</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

// Main component: AgricultureSuit
const AgricultureSuit = () => {
  return (
    <section className="pt-24">
      <div className="container">

        {/* Main content grid */}
        <div className="pt-14 relative">
          <div className="grid md:grid-cols-2 gap-y-10 gap-x-20 items-center">

            {/* Image block */}
            <figure className="max-md:order-last w-full flex justify-center items-center">
              <Image
                alt="Agriculture NetSuite"
                src={agricultureNetsuite}
                width={600}
                height={400}
                className="object-contain rounded-xl"
              />
            </figure>

            {/* Text content block */}
            <div className="text-muted-foreground text-balance">
              <h2 className="text-4xl md:text-5xl font-semibold text-blue">
                What Makes Us Different?
              </h2>
              <div className="space-y-5 font-secondary text-base md:text-lg text-gray-800 mt-7">
                <p>
                  When it comes to growing a business, most entrepreneurs tend to get stuck at a certain point and become frustrated, as they don&apos;t know what to do or how to fix it. We help implement a proven system to break through that growth ceiling and reach the next level—offering better control, increased cash flow, and a more valuable, smoother-running business.
                </p>

                {/* Core values */}
                <ValuesGrid />
              </div>

             
            
            </div>

          </div>
        </div>
      </div>
    </section>
    
  );
};

export default AgricultureSuit;
