import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog - Fittish",
  description: "Explore the latest tips, workouts, meal planning ideas, and health insights to help you stay in shape.",
}

const blogPosts = [
  {
    id: 1,
    title: "5 Easy Healthy Meals for Busy People",
    excerpt: "Quick and easy healthy meal ideas that fit your busy lifestyle and keep you on track with your fitness goals.",
    date: "April 12, 2023",
    author: "Sarah Johnson",
    image: "/placeholder.svg?height=400&width=600&text=Meal+Post+1",
    slug: "5-easy-healthy-meals-for-busy-people",
  },
  {
    id: 2,
    title: "How to Build a Workout Routine for Beginners",
    excerpt: "Step-by-step guide on how to create a workout routine that fits your fitness level and goals.",
    date: "March 28, 2023",
    author: "Michael Chen",
    image: "/placeholder.svg?height=400&width=600&text=Workout+Post+2",
    slug: "how-to-build-a-workout-routine-for-beginners",
  },
  {
    id: 3,
    title: "The Importance of Sleep for Your Fitness Goals",
    excerpt: "Discover how sleep plays a vital role in achieving your fitness and health goals.",
    date: "February 15, 2023",
    author: "Emily Rodriguez",
    image: "/placeholder.svg?height=400&width=600&text=Health+Post+3",
    slug: "importance-of-sleep-for-fitness-goals",
  },
  {
    id: 4,
    title: "How to Stay Consistent with Your Fitness Journey",
    excerpt: "Tips and strategies for staying consistent with your workouts and health habits over time.",
    date: "January 30, 2023",
    author: "David Kim",
    image: "/placeholder.svg?height=400&width=600&text=Consistency+Post+4",
    slug: "how-to-stay-consistent-with-your-fitness-journey",
  },
]

export default function BlogPage() {
  return (
    <main>
      <Header />
      <div className="pt-20 pb-8 bg-gray-50">
        <div className="container">
          <h1 className="text-4xl font-bold text-center">Blog</h1>
          <p className="mt-4 text-xl text-center text-gray-600 max-w-2xl mx-auto">
            Explore the latest tips, workouts, meal planning ideas, and health insights to help you stay in shape.
          </p>
        </div>
      </div>
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.id} className="overflow-hidden rounded-lg shadow-lg">
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500">
                      {post.date} • by {post.author}
                    </div>
                    <h2 className="mt-2 text-xl font-bold">{post.title}</h2>
                    <p className="mt-2 text-gray-600">{post.excerpt}</p>
                    <div className="mt-4 text-indigo-500 font-medium">Read more →</div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
