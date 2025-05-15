import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { SocialLinks } from "@/components/contact/SocialLinks";

export const metadata: Metadata = {
  title: "Contact | Full Stack Developer",
  description: "Get in touch with me for job opportunities, freelance work, or collaborations",
};

export default function ContactPage() {
  return (
    <section className="py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">Contact Me</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          <ContactForm />
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}