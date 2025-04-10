import Image from "next/image";
import Link from "next/link";
import { Apple, Play } from "lucide-react";
import Reveal from "@/components/animations/reveal";
import FloatAnimation from "@/components/animations/float-animation";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white py-16 sm:py-24"
    >
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <Reveal delay={0.1}>
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:leading-tight">
                The best way to stay in shape <br />
                <span className="text-indigo-500">with Fittish.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-6 text-lg text-gray-600">
                Achieve your fitness goals with personalized meal plans,
                workouts, and health tracking powered by AI. Stay on track and
                motivated with Fittish.
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="text-center">
                  <Link
                    href=""
                    className="btn-store hover:scale-105 transition-transform duration-300"
                  >
                    <Apple className="h-6 w-6" />
                    <div className="flex flex-col leading-tight">
                      <span>Appstore</span>
                      <span className="text-xs text-gray-400">
                        Coming soon...
                      </span>
                    </div>{" "}
                  </Link>
                </div>
                <div className="text-center">
                  <Link
                    href=""
                    className="btn-store hover:scale-105 transition-transform duration-300"
                  >
                    <Play className="h-6 w-6" />
                    <div className="flex flex-col leading-tight">
                      <span>Google Play</span>
                      <span className="text-xs text-gray-400">
                        Coming soon...
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </Reveal>
            {/* <Reveal delay={0.7}>
              <div className="mt-8 flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="inline-block h-8 w-8 overflow-hidden rounded-full border-2 border-white">
                      <Image
                        src={`/placeholder.svg?height=32&width=32&text=${i}`}
                        width={32}
                        height={32}
                        alt={`User ${i}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-medium">
                  <span className="text-indigo-500">120+</span> Happy Users
                </div>
              </div>
            </Reveal> */}
          </div>
          <FloatAnimation className="relative flex justify-center">
          <div className="relative h-[440px] w-[450px] rounded-4xl bg-transparent">
          <div className="absolute inset-0 flex items-center justify-center">
          <Image
  src="/image.svg"
  width={300}
  height={300}
  alt="App screenshot"
  className="h-auto w-auto object-cover rounded-xl transition-transform duration-500 hover:scale-105"
  priority
/>


              </div>
            </div>
          </FloatAnimation>
        </div>
      </div>
    </section>
  );
}
