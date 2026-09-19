'use client'

import { useState } from 'react'
import { ArrowUpRight, BarChart3, Check, ChevronDown, Clock3, CreditCard, Headphones, Mail, Megaphone, Menu, Phone, ShieldCheck, Sparkles, Store, Truck, X } from 'lucide-react'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { AnimatedFooter } from '@/components/ui/animated-footer'
import SocialFlipButton, { type SocialItem } from '@/components/ui/social-flip-button'
import { FlipText } from '@/components/ui/flip-text'
import { AsciiGlitchRipple } from '@/components/ui/ascii-glitch-ripple'
import { SolarSystem, type SolarSystemPlanet } from '@/components/ui/solar-system'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-q6Q8qIRyS3v046zCmjamCFg37V30Oc.png'
const showcaseUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GBe9EF0VloJ9ehKZqrd7qzBbXTvI6G.png'

const socialItems: SocialItem[] = [
  { letter: 'D', icon: <FaFacebook />, label: 'Facebook', href: 'https://facebook.com/deshioplatform' },
  { letter: 'E', icon: <FaInstagram />, label: 'Instagram', href: 'https://instagram.com/deshioplatform' },
  { letter: 'S', icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://linkedin.com/company/deshioplatform' },
  { letter: 'H', icon: <FaWhatsapp />, label: 'WhatsApp', href: 'https://wa.me/8801721328992' },
  { letter: 'I', icon: <FaEnvelope />, label: 'Email', href: 'mailto:hello@deshioplatform.com' },
  { letter: 'O', icon: <FaPhoneAlt />, label: 'Phone', href: 'tel:+8801721328992' },
]

const ecosystemPlanets: SolarSystemPlanet[] = [
  { name: 'অনলাইন স্টোর', icon: <Store size={18} />, color: '#ff8a3d', orbit: 0, angle: 0, duration: 26 },
  { name: 'পেমেন্ট', icon: <CreditCard size={18} />, color: '#4da3ff', orbit: 0, angle: 180, duration: 26 },
  { name: 'ডেলিভারি', icon: <Truck size={18} />, color: '#35c48f', orbit: 1, angle: 60, duration: 38 },
  { name: 'মার্কেটিং', icon: <Megaphone size={18} />, color: '#ff5f7e', orbit: 1, angle: 240, duration: 38 },
  { name: 'অ্যানালিটিক্স', icon: <BarChart3 size={18} />, color: '#b684ff', orbit: 2, angle: 120, duration: 52 },
  { name: 'সাপোর্ট', icon: <Headphones size={18} />, color: '#ffc44d', orbit: 2, angle: 300, duration: 52 },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="site-shell">
      <nav className="navbar" aria-label="প্রধান নেভিগেশন">
        <a className="brand" href="#শুরু" aria-label="দেশিও প্লাটফর্ম হোম">
          <img src={logoUrl} alt="দেশিও প্লাটফর্ম লোগো" />
          <span>দেশিও <b>প্লাটফর্ম</b></span>
        </a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#সমাধান" onClick={() => setMenuOpen(false)}>সমাধান</a>
          <a href="#কীভাবে" onClick={() => setMenuOpen(false)}>কীভাবে কাজ করে</a>
          <a href="#যোগাযোগ" onClick={() => setMenuOpen(false)}>যোগাযোগ</a>
          <a className="nav-cta" href="#আগাম-সুযোগ" onClick={() => setMenuOpen(false)}>আগাম সুযোগ নিন <ArrowUpRight size={16} /></a>
        </div>
        <button className="menu-button" type="button" aria-label="মেনু খুলুন" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <section className="hero" id="শুরু">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15} /> বাংলাদেশের ব্যবসার জন্য তৈরি</div>
          <h1>আপনার ব্যবসার<br /><span>ডিজিটাল ভবিষ্যৎ</span><br />শুরু হোক আজই।</h1>
          <p>দেশিও প্লাটফর্মের সঙ্গে আপনার ব্যবসাকে নিয়ে যান অনলাইনে—সহজ, দ্রুত এবং সম্পূর্ণ বাংলায়।</p>
          <div className="hero-actions">
            <a className="primary-button" href="#আগাম-সুযোগ">আগাম সুযোগ নিন <ArrowUpRight size={18} /></a>
            <a className="text-button" href="#সমাধান">আরও জানুন <span>↓</span></a>
          </div>
          <div className="trust-line"><span className="trust-avatars"><span>র</span><span>স</span><span>ম</span><span>+</span></span><span>বাংলাদেশের উদ্যোক্তাদের আস্থার সঙ্গী</span></div>
        </div>
        <div className="hero-visual">
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          <div className="image-frame"><img src={showcaseUrl} alt="দেশিও প্লাটফর্মের অনলাইন ব্যবসা সমাধানের নমুনা" /></div>
          <div className="floating-card card-top"><span className="status-dot" />সফলতার পথে</div>
          <div className="floating-card card-bottom"><div className="mini-icon"><Store size={16} /></div><div><strong>অনলাইন স্টোর</strong><small>এক জায়গায় সবকিছু</small></div></div>
        </div>
      </section>

      <section className="stats-strip" id="সমাধান">
        <div><strong>সহজ</strong><span>জটিলতা ছাড়াই শুরু করুন</span></div><div><strong>দ্রুত</strong><span>আপনার সময়, আমাদের প্রযুক্তি</span></div><div><strong>বাংলায়</strong><span>নিজের ভাষায় নিজের ব্যবসা</span></div>
      </section>

      <section className="access-section" id="আগাম-সুযোগ">
        <div className="section-heading"><div className="eyebrow"><Clock3 size={15} /> সীমিত আগাম সুযোগ</div><h2>সবার আগে জানুন,<br /><span>সবার আগে এগিয়ে থাকুন।</span></h2><p>আমাদের প্ল্যাটফর্ম চালু হওয়ার আগেই আপনার জায়গা নিশ্চিত করুন। লঞ্চের খবর ও বিশেষ সুবিধা সবার আগে পেতে ফর্মটি পূরণ করুন।</p></div>
        <form className="access-form" onSubmit={handleSubmit}>
          {submitted ? <div className="success-message"><div className="success-icon"><Check size={26} /></div><h3>ধন্যবাদ!</h3><p>আপনার আগ্রহ আমরা পেয়েছি। খুব শিগগিরই আপনার সঙ্গে যোগাযোগ করা হবে।</p><button type="button" className="text-button" onClick={() => setSubmitted(false)}>আবার পূরণ করুন</button></div> : <>
            <div className="form-row"><label>আপনার নাম<input name="name" placeholder="নাম লিখুন" required /></label><label>মোবাইল নম্বর<input name="phone" type="tel" placeholder="০১৭XXXXXXXX" pattern="[0-9০-৯+ -]{8,}" required /></label></div>
            <div className="form-row"><label>আপনার ব্যবসার ধরন<select name="business" defaultValue="" required><option value="" disabled>নির্বাচন করুন</option><option>খুচরা ব্যবসা</option><option>পাইকারি ব্যবসা</option><option>উৎপাদন</option><option>সেবা</option><option>অন্যান্য</option></select><ChevronDown className="select-icon" size={17} /></label><label>যোগাযোগের পছন্দের সময়<select name="time" defaultValue="" required><option value="" disabled>সময় বেছে নিন</option><option>সকাল (৯টা–১২টা)</option><option>দুপুর (১২টা–৩টা)</option><option>বিকেল (৩টা–৬টা)</option><option>সন্ধ্যা (৬টার পর)</option></select><ChevronDown className="select-icon" size={17} /></label></div>
            <label>ইমেইল ঠিকানা <span className="optional">(ঐচ্ছিক)</span><input name="email" type="email" placeholder="আপনার ইমেইল" /></label>
            <button className="submit-button" type="submit">আমার জায়গা নিশ্চিত করুন <ArrowUpRight size={18} /></button><small className="privacy-note"><ShieldCheck size={14} /> আপনার তথ্য সম্পূর্ণ নিরাপদ এবং গোপনীয় থাকবে।</small>
          </>}
        </form>
      </section>

      <section className="ecosystem-section" id="ইকোসিস্টেম">
        <div className="section-heading ecosystem-heading">
          <div className="eyebrow"><Sparkles size={15} /> এক প্ল্যাটফর্মেই সবকিছু</div>
          <h2>আপনার ব্যবসার পুরো ইকোসিস্টেম,<br /><span>এক কেন্দ্রেই ঘোরে।</span></h2>
          <FlipText className="ecosystem-flip">DeshioPlatform Ecosystem</FlipText>
          <p>কেন্দ্রে আপনার ব্যবসা, চারপাশে দেশিও প্ল্যাটফর্মের সব সেবা—স্টোর, পেমেন্ট, ডেলিভারি, মার্কেটিং ও অ্যানালিটিক্স। গ্রহগুলোতে কার্সর রাখুন, পুরো ঘটনা দেখুন।</p>
        </div>
        <SolarSystem
          title="দেশিও অরবিট"
          description="আপনার ব্যবসাকে কেন্দ্র করেই ঘোরে আমাদের প্রতিটি সেবা—সবকিছু একসঙ্গে, সবটাই বাংলায়।"
          planets={ecosystemPlanets}
          centerImage={logoUrl}
        />
      </section>

      <div className="site-footer" id="যোগাযোগ">
        <AnimatedFooter
          className="site-footer-canvas"
          headingLines={['DeshioPlatform']}
          background="#02254b"
          textColor="#ffffff"
          charColor="#16436f"
          hoverColor="#ff5f09"
          hoverCharColor="#02254b"
        />
        <div className="footer-overlay">
          <span className="footer-copy">© ২০২৬ দেশিও প্ল্যাটফর্ম। সর্বস্বত্ব সংরক্ষিত। · বাংলাদেশের ব্যবসার জন্য, বাংলাদেশেই তৈরি।</span>
          <div className="footer-brand"><img src={logoUrl} alt="দেশিও প্ল্যাটফর্ম" /><div><strong>দেশিও প্ল্যাটফর্ম</strong><span>আপনার ডিজিটাল প্রবৃদ্ধির সঙ্গী</span></div></div>
          <div className="contact-links">
            <a href="tel:+8801721328992"><Phone size={15} /> ০১৭২১-৩২৮৯৯২</a>
            <a href="mailto:hello@deshioplatform.com"><Mail size={15} /><AsciiGlitchRipple as="span" dur={900} spread={1.2} className="font-semibold">hello@deshioplatform.com</AsciiGlitchRipple></a>
          </div>
          <SocialFlipButton className="footer-social" items={socialItems} />
        </div>
      </div>
    </main>
  )
}
