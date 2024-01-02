import Image from "next/image";
import { GoDotFill } from "react-icons/go";
const SecondPage = () => {
  return (
    <div className="mx-auto px-20 py-4 mt-20 pb-20 bg-slate-50 dark:bg-gray-700 flex-col">
      <div className="mx-auto flex justify-center mt-[64px] md:mt-[96px]">
        <div className="bg-slate-300 dark:bg-gray-500 w-[100px] h-[30px] rounded-lg flex justify-center">
          About me
        </div>
      </div>
      <div className="flex gap-[48px] md:gap-[200px]  flex-col md:flex-row items-center md:items-start">
        <div className="relative flex mt-20 md:mt-40">
          <div className="w-[300px] md:w-[380px] h-[340px] md:h-[460px] bg-gray-300 dark:bg-gray-600" />
          <div className="absolute z-10 -top-5 md:-top-10 left-1/2 md:left-[50px] -translate-x-1/2 md:translate-x-0">
            <div className="w-[260px] md:w-[360px] h-[340px] md:h-[460px] ">
              <Image
                fill
                src="/ultra.jpeg"
                className="border-l-8 border-b-8 border-r-8 border-white"
              />
            </div>
          </div>
        </div>
        <div className=" text-[30px] mt-[10px] md:mt-[110px] ">
          <div>
            <strong>Curious about me? Here you have it:</strong>
          </div>

          <div className="text-[16px] text-gray-600 dark:text-gray-400 leading-[24px] flex flex-col gap-[16px] mt-[24px]">
            <div>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </div>
            <div>
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </div>
            <div>
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </div>
            <div>
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </div>
            <p>Finally, some quick bits about me.</p>
            <div>
              <ul className="flex gap-[50px]">
                <div className="leading-[30px]">
                  <li className="flex items-center">
                    <GoDotFill /> B.E. in Computer Engineering
                  </li>
                  <li className="flex items-center">
                    <GoDotFill />
                    Full time freelancer
                  </li>
                </div>
                <div className="leading-[30px]">
                  <li className="flex items-center">
                    <GoDotFill />
                    Avid learner
                  </li>
                  <li className="flex items-center">
                    <GoDotFill />
                    Aspiring indie hacker
                  </li>
                </div>
              </ul>
            </div>
            <div>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SecondPage;
