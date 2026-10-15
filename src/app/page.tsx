import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Areas from "@/components/Areas";
import Results from "@/components/Results";
import Reviews from "@/components/Reviews";
import Doctoralia from "@/components/Doctoralia";
import Contact from "@/components/Contact";
import Clinic from "@/components/Clinic";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { clinic, doctor, faqs } from "@/data/site";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    medicalSpecialty: "Otolaryngologic",
    image: "/images/dr-augusto-retrato.jpg",
    telephone: "+55 34 99646-1300",
    sameAs: [doctor.instagram, doctor.doctoralia],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${clinic.street}, ${clinic.room}`,
      addressLocality: "Uberlândia",
      addressRegion: "MG",
      postalCode: clinic.cep,
      addressCountry: "BR",
    },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: doctor.googleReviews },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main>
        <Hero />
        <About />
        <Areas />
        <Results />
        <Reviews />
        <Doctoralia />
        <Contact />
        <Clinic />
        <Faq />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
