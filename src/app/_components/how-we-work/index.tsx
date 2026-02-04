import Tag from "@/components/globals/Tag";

import Cards from "./cards";


const HowWeWork = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col items-center gap-y-5">
          <Tag text="How We Work" variant="orange" />
          <h2 className="max-w-lg text-3xl text-center font-medium">Simple and Effective 3-step Process that works for everytime</h2>
        </div>

        <div className="mt-20">
          <Cards />
        </div>
      </div>
    </section>
  )
}

export default HowWeWork