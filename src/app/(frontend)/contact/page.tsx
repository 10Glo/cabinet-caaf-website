// src/app/(frontend)/contact/page.tsx
import { ContactFaq } from "@/components/ui/contact-faq"
import { ContactForm } from "@/components/ui/contact-form"
import { ContactHero } from "@/components/ui/contact-hero"
import { ContactOffices } from "@/components/ui/contact-offices"

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactOffices />
      <ContactFaq/>
    </>
  )
}