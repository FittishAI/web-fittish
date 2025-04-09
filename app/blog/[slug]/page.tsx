import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, ArrowLeft, Calendar, User, Clock } from "lucide-react"

// Add this navigation object before the blogPosts array
const navigation = {
  social: [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "LinkedIn", href: "#", icon: Linkedin },
  ],
}

// This would typically come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "5 Tips for Better Fitness and Nutrition",
    excerpt: "Learn how to improve your fitness and nutrition strategy with these 5 simple tips.",
    content: `
      <p>Fitness and nutrition are key components of a healthy lifestyle. Here are 5 tips to help you improve your fitness routine and nutritional habits:</p>
      
      <h2>1. Set Realistic Goals</h2>
      <p>Start with small, achievable goals and gradually increase the intensity. This helps you stay motivated and track progress.</p>
      
      <h2>2. Plan Your Meals</h2>
      <p>Meal planning ensures you're consuming balanced nutrition. Focus on whole foods like fruits, vegetables, lean proteins, and healthy fats.</p>
      
      <h2>3. Stay Hydrated</h2>
      <p>Drink plenty of water throughout the day to stay hydrated. Hydration is essential for overall health and helps with energy levels during workouts.</p>
      
      <h2>4. Mix Cardio and Strength Training</h2>
      <p>Incorporating both cardio and strength training into your workout routine will help you build muscle and improve cardiovascular health.</p>
      
      <h2>5. Get Enough Sleep</h2>
      <p>Sleep is crucial for muscle recovery and mental well-being. Aim for 7-9 hours of quality sleep each night to support your fitness progress.</p>
      
      <p>By following these tips, you can build a sustainable fitness and nutrition routine that works for you. Remember, consistency is key!</p>
    `,
    date: "April 12, 2023",
    author: "Sarah Johnson",
    readTime: "6 min read",
    image: "/placeholder.svg?height=600&width=1200&text=Blog+Post+1",
    slug: "5-tips-for-better-fitness-and-nutrition",
    categories: ["Fitness", "Nutrition"],
  },
  {
    id: 2,
    title: "How to Build a Workout Routine for Beginners",
    excerpt: "Step-by-step guide on how to create a workout routine that fits your fitness level and goals.",
    content: `
      <p>Creating a workout routine is an essential part of staying fit. Here's how you can build a routine that's tailored to your fitness level:</p>
      
      <h2>1. Start with a Warm-Up</h2>
      <p>A proper warm-up prepares your body for exercise and reduces the risk of injury. Try dynamic stretches and light cardio to get your muscles ready.</p>
      
      <h2>2. Include Compound Movements</h2>
      <p>Compound movements, such as squats, deadlifts, and push-ups, work multiple muscle groups at once, helping you build strength efficiently.</p>
      
      <h2>3. Focus on Form</h2>
      <p>Ensure you're performing exercises with correct form to avoid injury and maximize effectiveness. Start with lighter weights or bodyweight exercises to master your technique.</p>
      
      <h2>4. Allow for Rest and Recovery</h2>
      <p>Rest days are essential for muscle recovery. Make sure to include rest days in your workout routine to allow your body to repair and grow stronger.</p>
      
      <h2>5. Progress Gradually</h2>
      <p>As you get stronger, gradually increase the intensity of your workouts by adding more sets, reps, or weight. Challenge yourself, but listen to your body.</p>
      
      <p>By following these steps, you'll be on your way to building a solid and sustainable workout routine. Start small and stay consistent!</p>
    `,
    date: "March 28, 2023",
    author: "Michael Chen",
    readTime: "7 min read",
    image: "/placeholder.svg?height=600&width=1200&text=Blog+Post+2",
    slug: "how-to-build-a-workout-routine-for-beginners",
    categories: ["Fitness", "Workout"],
  },
]

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} - Fittish Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return (
      <main>
        <Header />
        <div className="container py-20">
          <h1 className="text-3xl font-bold">Blog Post Not Found</h1>
          <p className="mt-4">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link href="/blog" className="mt-8 inline-flex items-center text-indigo-500 hover:text-indigo-600">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  // Get related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .filter((p) => p.categories.some((cat) => post.categories.includes(cat)))
    .slice(0, 2)

  return (
    <main>
      <Header />
      <div className="pt-20 pb-8 bg-gray-50">
        <div className="container">
          <Link href="/blog" className="inline-flex items-center text-indigo-500 hover:text-indigo-600 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-gray-600">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.categories.map((category) => (
              <span
                key={category}
                className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl mb-8">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>

            <article className="prose prose-indigo max-w-none lg:prose-lg">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            <div className="mt-12 border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold">Share this post</h3>
              <div className="mt-4 flex space-x-4">
                {navigation.social.map((item) => (
                  <Link key={item.name} href={item.href} className="text-gray-400 hover:text-indigo-500">
                    <span className="sr-only">Share on {item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold">Related Posts</h3>
              <div className="mt-6 space-y-6">
                {relatedPosts.length > 0 ? (
                  relatedPosts.map((relatedPost) => (
                    <div key={relatedPost.id} className="group">
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <div className="relative h-40 w-full overflow-hidden rounded-lg">
                          <Image
                            src={relatedPost.image || "/placeholder.svg"}
                            alt={relatedPost.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <h4 className="mt-3 text-base font-semibold group-hover:text-indigo-500">
                          {relatedPost.title}
                        </h4>
                        <p className="mt-1 text-sm text-gray-600">{relatedPost.date}</p>
                      </Link>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">No related posts found.</p>
                )}
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold">Categories</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {Array.from(new Set(blogPosts.flatMap((p) => p.categories))).map((category) => (
                  <Link
                    key={category}
                    href={`/blog?category=${encodeURIComponent(category)}`}
                    className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 hover:bg-indigo-100 hover:text-indigo-800"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold">Subscribe to our newsletter</h3>
              <p className="mt-2 text-sm text-gray-600">Get the latest posts delivered right to your inbox.</p>
              <form className="mt-4">
                <div className="flex flex-col space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
