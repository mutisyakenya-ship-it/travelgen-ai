function Privacy() {
  return (
    <div className="min-h-screen bg-slate-50">

      <div className="mx-auto max-w-5xl px-6 py-16">

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            Privacy Policy
          </span>

          <h1 className="mt-6 text-5xl font-bold text-slate-900">
            Your Privacy Matters
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Last Updated: July 2026
          </p>

        </div>

        <div className="mt-16 space-y-10 rounded-3xl bg-white p-10 shadow-xl">

          <Section
            title="1. Introduction"
            text="TravelGen AI respects your privacy and is committed to protecting your personal information. This Privacy Policy explains what information we collect, how we use it, and the choices you have regarding your data."
          />

          <Section
            title="2. Information We Collect"
            text="When you create an account, we collect information such as your name, email address, travel preferences, and the itineraries you choose to save."
          />

          <Section
            title="3. How We Use Your Information"
            text="Your information is used to authenticate your account, generate personalized AI travel itineraries, save your trips, improve your experience, and provide customer support."
          />

          <Section
            title="4. AI Generated Content"
            text="TravelGen AI uses Google's Gemini AI to generate travel recommendations based on the information you provide. While we strive for accuracy, we recommend verifying important travel information before making reservations."
          />

          <Section
            title="5. Data Storage"
            text="Your account information and itineraries are securely stored using Firebase Authentication and Cloud Firestore. We take reasonable steps to protect your information from unauthorized access."
          />

          <Section
            title="6. Sharing Your Information"
            text="We never sell your personal information. Trips are only shared with other users when you choose to make them publicly shareable."
          />

          <Section
            title="7. Cookies"
            text="TravelGen AI may use browser storage and cookies to improve performance, remember your preferences, and keep you signed in."
          />

          <Section
            title="8. Your Rights"
            text="You may update your profile information, edit your itineraries, remove shared trips, or delete your saved trips at any time through your account."
          />

          <Section
            title="9. Third-Party Services"
            text="TravelGen AI integrates trusted third-party services including Firebase Authentication, Cloud Firestore, and Google Gemini AI to provide secure authentication, data storage, and AI-powered itinerary generation."
          />

          <Section
            title="10. Contact Us"
            text="If you have questions regarding this Privacy Policy, please contact us through the Contact page. We're happy to help."
          />

        </div>

        <div className="mt-12 rounded-3xl bg-green-700 p-10 text-center text-white">

          <h2 className="text-3xl font-bold">
            Travel With Confidence
          </h2>

          <p className="mt-4 text-lg">
            We value your trust and are committed to keeping your information
            secure while helping you discover amazing destinations.
          </p>

        </div>

      </div>

    </div>
  );
}

type SectionProps = {
  title: string;
  text: string;
};

function Section({ title, text }: SectionProps) {
  return (
    <section>

      <h2 className="text-2xl font-bold text-slate-800">
        {title}
      </h2>

      <p className="mt-4 leading-8 text-slate-600">
        {text}
      </p>

    </section>
  );
}

export default Privacy;