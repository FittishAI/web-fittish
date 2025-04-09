import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  Mail,
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  CheckCircle,
} from "lucide-react";
import Reveal from "@/components/animations/reveal";
import FadeIn from "@/components/animations/fade-in";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us | Fittish - Fitness App",
  description:
    "Get in touch with the Fittish team. We're here to help with any questions about our fitness and health management app.",
  keywords: [
    "contact",
    "support",
    "fitness help",
    "customer service",
    "Fittish app",
  ],
  alternates: {
    canonical: "https://fittish.ai/contact",
  },
  openGraph: {
    title: "Contact Us | Fittish - Fitness App",
    description:
      "Get in touch with the Fittish team. We're here to help with any questions about our fitness and health management app.",
    url: "https://fittish.ai/contact",
    siteName: "Fittish",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Fittish Support Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Fittish - Fitness App",
    description:
      "Get in touch with the Fittish team. We're here to help with any questions about our fitness and health management app.",
    images: ["/og-contact.jpg"],
  },
};

export default function GetInTouch() {
  return (
    <section id="getintouch">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-indigo-50 to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-[30%] -right-[10%] w-[50%] h-[80%] rounded-full bg-indigo-100/50 blur-3xl"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[40%] h-[60%] rounded-full bg-indigo-100/50 blur-3xl"></div>
        </div>
        <div className="container relative">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              Get in Touch
            </h1>
            <p className="mt-4 text-xl text-center text-gray-600 max-w-2xl mx-auto">
              Have questions or need help? Our team is ready to assist you with
              any inquiries.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-1 place-items-center">
            {/* Contact Information */}
            <div>
              <FadeIn delay={0.1} direction="none">
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 justify-center">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Contact Information
                  </h2>
                  <p className="mt-4 text-gray-600">
                    Our support team is available Monday through Friday from 9am
                    to 5pm EST. We strive to respond to all inquiries within 24
                    hours.
                  </p>

                  <div className="mt-8 space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          Our Location
                        </h3>
                        <p className="mt-1 text-gray-600">
                          12338 Jasper Pointe Way, Castle Pines, CO 80108
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          Email Us
                        </h3>
                        <p className="mt-1 text-gray-600">
                          <a
                            href="mailto:contact@fittish.ai"
                            className="hover:text-indigo-600 transition-colors"
                          >
                            contact@fittish.ai
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          Call Us
                        </h3>
                        <p className="mt-1 text-gray-600">
                          <a
                            href="tel:+16306967705"
                            className="hover:text-indigo-600 transition-colors"
                          >
                            +1 630-696-7705
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          Business Hours
                        </h3>
                        <p className="mt-1 text-gray-600">
                          Monday - Friday: 9am - 5pm EST
                        </p>
                        <p className="text-gray-600">
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-lg font-medium text-gray-900">
                      Connect With Us
                    </h3>
                    <div className="mt-4 flex space-x-4">
                      <a
                        href="#"
                        className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-200 transition-colors"
                        aria-label="Facebook"
                      >
                        <svg
                          className="h-5 w-5 text-indigo-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-200 transition-colors"
                        aria-label="Twitter"
                      >
                        <svg
                          className="h-5 w-5 text-indigo-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-200 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg
                          className="h-5 w-5 text-indigo-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-200 transition-colors"
                        aria-label="Instagram"
                      >
                        <svg
                          className="h-5 w-5 text-indigo-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Location</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Visit our office in the heart of San Francisco's tech district.
            </p>
          </Reveal>

          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/location.png?height=400&width=1200&text=Map+Location"
              alt="Fittish office location map"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-indigo-900/10"></div>
            <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900">Fittish Headquarters</h3>
              <p className="text-gray-600">
                12338 Jasper Pointe Way, Castle Pines, CO 80108
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="container">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our services.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                question: "How quickly will I receive a response?",
                answer:
                  "We aim to respond to all inquiries within 24 business hours. For urgent matters, we recommend using our live chat feature during business hours.",
              },
              {
                question: "Do you offer phone support?",
                answer:
                  "Yes, our customer support team is available by phone Monday through Friday from 9am to 5pm EST. You can reach us at +1 (555) 123-4567.",
              },
              {
                question: "Can I schedule a demo of your product?",
                answer:
                  "You can request a demo through our contact form or by emailing info@Fittishapp.com. One of our product specialists will get in touch to schedule a convenient time.",
              },
              {
                question:
                  "What information should I include in my support request?",
                answer:
                  "To help us assist you more efficiently, please include your account email, a detailed description of the issue, any error messages you've received, and steps to reproduce the problem if applicable.",
              },
              {
                question: "Do you have an office I can visit?",
                answer:
                  "Yes, our headquarters is located in San Francisco. Visits are by appointment only, so please contact us in advance to schedule a meeting.",
              },
              {
                question: "How can I report a bug or suggest a feature?",
                answer:
                  "We welcome your feedback! You can report bugs or suggest features through our contact form, by emailing support@Fittishapp.com, or through the feedback option in your account dashboard.",
              },
            ].map((faq, index) => (
              <FadeIn
                key={index}
                delay={0.1 * index}
                direction="up"
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
