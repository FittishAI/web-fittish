import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy - Fittish App",
  description: "Learn how Fittish collects, uses, and protects your data.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="pt-20 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Last updated: April 9, 2025
          </p>

          <div className="prose prose-gray max-w-none space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 mt-8">Introduction</h2>
            <p className="text-xl text-gray-600">
              Fittish (the "App") is a mobile application that provides personalized fitness recommendations, including workouts, meal plans, and sleep schedules. We are committed to protecting your privacy and safeguarding your personal information. This Privacy Policy explains what information we collect through Fittish, how we use and share that information, and the choices you have regarding your data. By using Fittish, you agree to the collection and use of your information as described in this Privacy Policy. If you do not agree with our practices, please do not use the App. This policy applies to information collected through our mobile application and any related services, features, or content we provide.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-8">Information We Collect</h2>
            <p className="text-xl text-gray-600">
              We collect various types of information to provide and improve our services. This includes information you provide directly, information collected automatically, and information from third parties. The types of information we may collect include:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-xl text-gray-600">
              <li>
                <strong>Account and Contact Info:</strong> When you register or fill out a contact form, we collect personal details such as your name, email address, username, and password. This also includes any contact information you provide when reaching out to us for support or inquiries.
              </li>
              <li>
                <strong>Fitness Info:</strong> You may provide information about your fitness profile, goals, and preferences. This can include data such as your fitness goals (e.g. weight loss, muscle gain), workout preferences, dietary restrictions, age, weight, height, and other health or wellness information you choose to share. Providing this information is optional but enables us to tailor recommendations to you.
              </li>
              <li>
                <strong>Usage and Device Data:</strong> When you use the App, we automatically collect information about your activity and the device you use. This includes your interactions with the App (e.g. the workouts or meal plans you view or complete, features you use, and time spent), device information (such as device model, operating system, unique device identifiers, and app version), log information (IP address, access times, crashes, and error reports), and general location information (e.g. city or region based on IP address). We collect this data to analyze usage, fix bugs, and improve the user experience.
              </li>
              <li>
                <strong>Communications:</strong> If you contact us directly (for example, via email, support chat, or a contact form), we will receive the information you provide in your message. This may include your name, email address, and the content of your communication. We retain these communications to respond to your inquiries and improve our services.
              </li>
              <li>
                <strong>Payment Info:</strong> If you make a purchase or subscribe to a premium service through Fittish, we (or our third-party payment processor) may collect information related to your purchase. This can include your payment method details (such as credit card type, expiration date, and billing address) and transaction details. Note: We do not store full credit card numbers or financial account information on our servers; such data is handled securely by our payment processing partners.
              </li>
              <li>
                <strong>Third-Party Services:</strong> Fittish may allow you to connect with third-party services (for example, signing in via Google/Apple ID or linking to a fitness tracker). If you choose to connect a third-party account or service, we may receive certain information from that provider (such as your name, email, or profile information from a social login, or exercise/health data from a connected device). We will handle any information received from third parties in accordance with this Privacy Policy.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-800 mt-8">How We Use Your Information</h2>
            <ul className="list-disc ml-6 space-y-2 text-xl text-gray-600">
              <li>Provide personalized workouts, meals, and sleep suggestions</li>
              <li>Support your account and respond to messages</li>
              <li>Send updates and respond to support requests</li>
              <li>Analyze how users interact with the app to improve features</li>
              <li>Protect app integrity and comply with legal requests</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-800 mt-8">Sharing Your Information</h2>
            <ul className="list-disc ml-6 space-y-2 text-xl text-gray-600">
              <li>We don’t sell or rent your data</li>
              <li>
                We share data only with services that help run the app (analytics, payments, hosting)
              </li>
              <li>We may share with law enforcement when legally required</li>
              <li>
                In the case of a merger or acquisition, data may be transferred securely
              </li>
              <li>
                We may share de-identified or aggregated data for research or reporting
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-800 mt-8">Cookies and Tracking</h2>
            <p className="text-xl text-gray-600">
              We use cookies and similar tools to keep you logged in, remember preferences, and improve the experience. These tools help us analyze app usage and performance.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-8">Data Security</h2>
            <p className="text-xl text-gray-600">
              We use encryption and access control to keep your information safe. No system is 100% secure, so we also rely on you to protect your login info.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-8">Your Rights</h2>
            <ul className="list-disc ml-6 space-y-2 text-xl text-gray-600">
              <li>Access and update your info through the app</li>
              <li>Request account deletion</li>
              <li>Unsubscribe from marketing emails anytime</li>
              <li>Adjust permissions like location access from your device settings</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-800 mt-8">Children's Privacy</h2>
            <p className="text-xl text-gray-600">
              Fittish is not for users under 13. We don’t knowingly collect data from children. Contact us if you think a child has submitted data.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-8">Third-Party Services</h2>
            <p className="text-xl text-gray-600">
              We may link to or integrate with services we don’t control (e.g., fitness trackers, login providers). Those services have their own privacy policies.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-8">Changes to This Policy</h2>
            <p className="text-xl text-gray-600">
              We may update this policy. If we do, we’ll update the "Last Updated" date and notify you in the app or by email.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-8">Contact Us</h2>
            <p className="text-xl text-gray-600">
              Email: <strong>privacy@fittishapp.com</strong>
              <br />
              Mail: Fittish Privacy Team, 123 Fitness Avenue, Suite 100,
              Wellness City, CA 90210, USA
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
