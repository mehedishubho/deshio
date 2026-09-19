'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, ChevronDown, Clock3, Mail, Menu, Phone, ShieldCheck, Sparkles, Store, X } from 'lucide-react'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-q6Q8qIRyS3v046zCmjamCFg37V30Oc.png'
const showcaseUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GBe9EF0VloJ9ehKZqrd7qzBbXTvI6G.png'

function SocialIcon({ kind }: { kind: 'facebook' | 'instagram' | 'linkedin' | 'whatsapp' }) {
  if (kind === 'facebook') return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a22 22 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.2V10H7.3v3h2.8v8h3.4Z" /></svg>
  if (kind === 'instagram') return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.7" r="1" fill="currentColor" /></svg>
  if (kind === 'linkedin') return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 8H2V21h3V8Zm.2-4.1A1.8 1.8 0 1 0 1.6 4a1.8 1.8 0 0 0 3.6 0ZM22 13.6c0-3.9-2.1-5.9-5-5.9-2.3 0-3.3 1.3-3.8 2.2V8H10v13h3.2v-6.4c0-1.7.3-3.4 2.5-3.4s2.2 2 2.2 3.5V21H21l1-7.4Z" /></svg>
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.5 3.5A11.8 11.8 0 0 0 12 0a11.9 11.9 0 0 0-10.3 18L0 24l6.2-1.6A12 12 0 0 0 24 12a11.8 11.8 0 0 0-3.5-8.5ZM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8Zm5.4-7.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.6-.8-2.7-1.4-3.8-3.2-.3-.5.3-.5.8-1.7.1-.2.1-.4 0-.6l-.9-2.1c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.8 5.1 2.2.9 2.2.6 2.6.6.4 0 1.7-.7 1.9-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z" /></svg>
}

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

      <footer id="যোগাযোগ"><div className="footer-brand"><img src={logoUrl} alt="দেশিও প্লাটফর্ম" /><div><strong>দেশিও প্লাটফর্ম</strong><span>আপনার ডিজিটাল প্রবৃদ্ধির সঙ্গী</span></div></div><div className="contact-links"><a href="tel:+8801721328992"><Phone size={16} /> ০১৭২১-৩২৮৯৯২</a><a href="mailto:hello@deshioplatform.com"><Mail size={16} /> hello@deshioplatform.com</a></div><div className="socials"><a href="#ফেসবুক" aria-label="ফেসবুক"><SocialIcon kind="facebook" /></a><a href="#ইনস্টাগ্রাম" aria-label="ইনস্টাগ্রাম"><SocialIcon kind="instagram" /></a><a href="#লিংকডইন" aria-label="লিংকডইন"><SocialIcon kind="linkedin" /></a><a href="#হোয়াটসঅ্যাপ" aria-label="হোয়াটসঅ্যাপ"><SocialIcon kind="whatsapp" /></a></div></footer>
      <div className="footer-bottom"><span>© ২০২৬ দেশিও প্লাটফর্ম। সর্বস্বত্ব সংরক্ষিত।</span><span>বাংলাদেশের ব্যবসার জন্য, বাংলাদেশেই তৈরি।</span></div>
    </main>
  )
}
