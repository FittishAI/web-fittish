import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service - Fittish App",
  description: "View our Terms of Service related to Fittish App",
}

export default function TermsOfService() {
  return (
    <>
      <Header />
      <div className="pt-20 pb-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">
            Terms of Service
          </h1>
          <p className="mt-4 text-xl text-center text-gray-600 max-w-2xl mx-auto">
            Simple, transparent pricing plans designed to fit your fitness goals and lifestyle.
          </p>

          <div className="prose prose-gray max-w-none space-y-8 mt-12">
            <h2 className="text-3xl font-bold text-gray-800">Acceptance of Terms</h2>
            <p className="text-xl text-gray-600">
              By accessing and using Fittish (the "App"), you agree to these Terms of Service. If you do not agree, please refrain from using the App.
            </p>

            <h2 className="text-3xl font-bold text-gray-800">Account Registration and Use</h2>
            <p className="text-xl text-gray-600">
              To access certain features, you may be required to create an account. You agree to provide accurate and up-to-date information and to keep your login credentials secure.
            </p>

            <h2 className="text-3xl font-bold text-gray-800">Services Provided</h2>
            <p className="text-xl text-gray-600">
              Fittish offers personalized fitness recommendations, including workouts, meal plans, and sleep schedules. Our content is tailored to your input, but it is not a substitute for professional medical advice.
            </p>

            <h2 className="text-3xl font-bold text-gray-800">Payment and Refunds</h2>
            <p className="text-xl text-gray-600">
              We offer both free and premium services. Premium subscriptions are processed securely through third-party providers. All purchases are subject to our refund policy, which may be updated periodically.
            </p>

            <h2 className="text-3xl font-bold text-gray-800">User Responsibilities and Conduct</h2>
            <p className="text-xl text-gray-600">
              You agree to use the App only for lawful purposes. You must not engage in any activity that disrupts or interferes with the App’s proper functioning. You are solely responsible for any content you post or share.
            </p>

            <h2 className="text-3xl font-bold text-gray-800">Intellectual Property</h2>
            <p className="text-xl text-gray-600">
              All content provided by Fittish is owned by us or our licensors and protected by intellectual property laws. You agree not to copy, modify, distribute, or create derivative works without our prior consent.
            </p>

            <h2 className="text-3xl font-bold text-gray-800">GDPR Compliance</h2>
            <p className="text-xl text-gray-600">
              We are committed to protecting the personal data of our users in the European Union. In compliance with the General Data Protection Regulation (GDPR), you have rights regarding access, correction, and deletion of your personal data as described in our Privacy Policy.
            </p>

            <h2 className="text-3xl font-bold text-gray-800">HIPAA Compliance</h2>
            <p className="text-xl text-gray-600">
              If you share any health information through Fittish, we handle such data in accordance with the Health Insurance Portability and Accountability Act (HIPAA). However, Fittish is not a healthcare provider. Please consult a qualified professional for medical advice.
            </p>

            <h2 className="text-3xl font-bold text-gray-800">Termination</h2>
            <p className="text-xl text-gray-600">
              We reserve the right to terminate or suspend your account if you breach these Terms of Service or engage in activities that could harm the App or its users.
            </p>

            <h2 className="text-3xl font-bold text-gray-800">Modifications to the Terms</h2>
            <p className="text-xl text-gray-600">
              These Terms of Service may be updated from time to time. We will notify you of any material changes by updating the "Last Updated" date and, if necessary, via email or in-app notifications. Your continued use constitutes acceptance of the updated terms.
            </p>

            <h2 className="text-3xl font-bold text-gray-800">Disclaimer of Warranties</h2>
            <p className="text-xl text-gray-600">
              Fittish is provided "as is" and without warranties of any kind, whether express or implied. We do not guarantee uninterrupted or error-free operation of the App.
            </p>

            <h2 className="text-3xl font-bold text-gray-800">Limitation of Liability</h2>
            <p className="text-xl text-gray-600">
              Under no circumstances shall Fittish be liable for any indirect, incidental, or consequential damages arising out of or in connection with your use of the App.
            </p>

            <h2 className="text-3xl font-bold text-gray-800">Governing Law</h2>
            <p className="text-xl text-gray-600">
              These Terms of Service are governed by and construed in accordance with the laws of the jurisdiction in which Fittish operates, without regard to conflict of law provisions.
            </p>

            <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
            <p className="text-xl text-gray-600">
              If you have any questions or concerns regarding these Terms of Service, please contact us at <strong>contact@fittish.ai</strong>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
