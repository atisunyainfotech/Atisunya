/**
import ButtonLink from "@/components/ButtonLink";

const Testimonial = () => {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
    <div className="flex flex-col gap-3 font-primary">
      <span className="font-bold uppercase text-yellow/70 text-center">Testimonials</span>
      <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
        What our clients say
      </h2>
    </div>
    <div className="mt-6">
      <TestimonialCard />
    </div>
  </section>
  )
}

export default Testimonial;



// interface TestimonialCardProps {
//   name: string;
//   username: string;
//   image: string;
//   text: string;
// }

export function TestimonialCard() {
  return (
    <article className={"shadow-lg bg-yellow rounded-2xl text-white pb-7 font-secondary border border-gray-100 text-lg leading-7 md:text-xl md:leading-8"}>
      <div className="flex flex-col items-start gap-5 p-7 ">
        <p className="">
          “The other reason that we chose NetSuite + Crafted ERP was Doozy Solutions, the team that
          supports Crafted. Both from their industry experience and their overall talent and
          objectives helping us get our jobs done effectively was a win-win for us. They help us get
          whatever we need done, and if there&apos;s something we have not implemented, they&apos;re the first
          to jump in and help us out.”
        </p>
      </div>
      <div className="flex flex-col items-end pr-7 space-y-1">
        <h5>- John Valdes</h5>
        <h6>Vice President, Planning &amp; Operations</h6>
        <h6>Samson &amp; Surrey</h6>
      </div>
      <div className="flex justify-center mt-5">
        <ButtonLink href="" variant="white">Watch the story</ButtonLink>
      </div>
    </article>
  );
}

 */