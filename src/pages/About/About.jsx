import HeroImg from "@/assets/images/photo.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Mohd Shoyab, a passionate Software Developer specializing in building modern, responsive web and mobile applications. With 1.3+ years of hands-on experience in React and React Native, I’ve worked on real-world, production-level apps—most notably contributing to <span className="font-semibold text-white">SportsBaazi</span>, a live fantasy sports platform.
              </p>

              <p className="text-white">
                My focus is on creating fast, scalable, and user-friendly interfaces using the latest frontend technologies and design systems. I'm also expanding into backend development to become a well-rounded full-stack developer, capable of building complete, end-to-end solutions.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner and innovator, driven by a desire to contribute to the developer community with tools and ideas that deliver real value.
                    I'm pushing the boundaries of JavaScript frameworks to empower developers worldwide.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Mohd Shoyab, Software Developer
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">Delhi,India</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
