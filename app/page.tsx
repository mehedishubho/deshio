'use client'

import { useRef, useState } from 'react'
import { ArrowUpRight, BarChart3, Check, ChevronDown, ChevronRight, Clock3, CreditCard, Headphones, Mail, Megaphone, Phone, ShieldCheck, Sparkles, Store, Truck } from 'lucide-react'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { AnimatedFooter } from '@/components/ui/animated-footer'
import SocialFlipButton, { type SocialItem } from '@/components/ui/social-flip-button'
import { FlipText } from '@/components/ui/flip-text'
import { AsciiGlitchRipple } from '@/components/ui/ascii-glitch-ripple'
import { SolarSystem, type SolarSystemPlanet } from '@/components/ui/solar-system'
import { TimelineAnimation } from '@/components/ui/timeline-animation'
import MotionDrawer from '@/components/ui/motion-drawer'
import { useMediaQuery } from '@/hooks/use-media-query'
import { ClippedAreaChart } from '@/components/ui/charts'

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

const kpis = [
  { label: 'আগাম নিবন্ধন', value: '১,২৫০+', change: '+১২.৫%', status: 'up' },
  { label: 'অংশীদার ব্যবসা', value: '৩৪০+', change: '+৪.২%', status: 'up' },
  { label: 'গড় সাড়া দেওয়ার সময়', value: '১৮৪ মি.সে.', change: '-৮.১%', status: 'down' },
  { label: 'বাতিলের হার', value: '১.২%', change: '-০.৪%', status: 'down' },
]

export default function Page() {
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="site-shell">
      <section
        ref={heroRef}
        id="শুরু"
        className="relative flex min-h-screen flex-col items-center overflow-hidden bg-[#f7f9fc] text-[#02254b]"
      >
        {/* Decorative light streaks */}
        <svg width="358" height="483" viewBox="0 0 358 483" className="absolute left-0 top-0 z-1" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <g filter="url(#filter0_f_0_1)">
            <rect x="-86.9961" y="-33.114" width="72" height="541" rx="36" transform="rotate(-30.8182 -86.9961 -33.114)" fill="url(#paint0_linear_0_1)" />
          </g>
          <g filter="url(#filter1_f_0_1)">
            <rect x="-17" y="-135.113" width="50.0937" height="541" rx="25.0469" transform="rotate(-30.8182 -17 -135.113)" fill="url(#paint1_linear_0_1)" />
          </g>
          <defs>
            <filter id="filter0_f_0_1" x="-137.641" y="-120.646" width="440.285" height="602.787" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="32" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter1_f_0_1" x="-71.707" y="-215.486" width="429.598" height="599.69" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="32" result="effect1_foregroundBlur_0_1" />
            </filter>
            <linearGradient id="paint0_linear_0_1" x1="-50.9961" y1="-33.114" x2="-50.9961" y2="507.886" gradientUnits="userSpaceOnUse">
              <stop stop-color="#ffb26b" />
              <stop offset="1" stop-color="#E6F1FF" />
            </linearGradient>
            <linearGradient id="paint1_linear_0_1" x1="8.04686" y1="-135.113" x2="8.04686" y2="405.887" gradientUnits="userSpaceOnUse">
              <stop stop-color="#ff9a4d" />
              <stop offset="1" stop-color="#ffd9bd" />
            </linearGradient>
          </defs>
        </svg>

        {/* Soft background gradient */}
        <TimelineAnimation
          timelineRef={heroRef}
          animationNum={5}
          className="absolute left-0 top-0 h-[600px] w-full bg-linear-to-b from-orange-50 via-orange-100/70 to-transparent opacity-100"
        />

        {isMobile && (
          <div className="relative z-10 flex w-full items-center justify-between gap-4 px-5 pt-4">
            <MotionDrawer
              direction="left"
              width={300}
              backgroundColor={'#ffffff'}
              clsBtnClassName="bg-[#02254b] border-r border-[#013764] text-white"
              contentClassName="bg-white border-r border-neutral-200 text-[#02254b]"
              btnClassName="bg-white text-black relative w-fit p-2 left-0 top-0 rounded-full shadow-xs border border-neutral-200"
            >
              <nav className="space-y-2 p-2">
                <a href="#শুরু" className="mb-3 flex items-center gap-2">
                  <img src={logoUrl} alt="দেশিও প্ল্যাটফর্ম" className="h-8 w-8 rounded-full" />
                  <span className="font-bold">দেশিও <span className="text-[#ff5f09]">প্ল্যাটফর্ম</span></span>
                </a>
                <a href="#সমাধান" className="block rounded-sm p-2 hover:bg-neutral-200 hover:text-black">সমাধান</a>
                <a href="#আগাম-সুযোগ" className="block rounded-sm p-2 hover:bg-neutral-200 hover:text-black">আগাম সুযোগ</a>
                <a href="#ইকোসিস্টেম" className="block rounded-sm p-2 hover:bg-neutral-200 hover:text-black">ইকোসিস্টেম</a>
                <a href="#যোগাযোগ" className="block rounded-sm p-2 hover:bg-neutral-200 hover:text-black">যোগাযোগ</a>
              </nav>
            </MotionDrawer>
            <a
              href="#আগাম-সুযোগ"
              className="relative z-2 flex items-center gap-1 rounded-xl bg-[#02254b] px-3 py-3 text-sm font-bold text-white shadow-[inset_2px_2px_5px_0px_rgba(0,0,0,0.5),inset_-2px_-2px_6px_1px_rgba(46,84,122,0.5)] transition hover:bg-black"
            >
              আগাম সুযোগ নিন <ChevronRight size={20} />
            </a>
          </div>
        )}

        {/* Header */}
        {!isMobile && (
          <header className="relative z-10 mx-auto mt-4 w-full max-w-7xl p-2">
            <TimelineAnimation
              animationNum={1}
              timelineRef={heroRef}
              className="flex items-center justify-between rounded-xl border border-white bg-white/80 p-2 shadow-sm backdrop-blur-xl"
            >
              <a href="#শুরু" className="flex items-center gap-2" aria-label="দেশিও প্ল্যাটফর্ম হোম">
                <img src={logoUrl} alt="দেশিও প্ল্যাটফর্ম লোগো" className="h-9 w-9 rounded-full object-cover" />
                <span className="text-xl font-bold tracking-tight text-slate-900">
                  দেশিও <span className="text-[#ff5f09]">প্ল্যাটফর্ম</span>
                </span>
              </a>
              <nav className="hidden items-center gap-10 text-sm font-semibold text-neutral-500 md:flex">
                <a href="#সমাধান" className="transition hover:text-[#ff5f09]">সমাধান</a>
                <a href="#আগাম-সুযোগ" className="transition hover:text-[#ff5f09]">আগাম সুযোগ</a>
                <a href="#ইকোসিস্টেম" className="transition hover:text-[#ff5f09]">ইকোসিস্টেম</a>
                <a href="#যোগাযোগ" className="transition hover:text-[#ff5f09]">যোগাযোগ</a>
              </nav>
              <a
                href="#আগাম-সুযোগ"
                className="flex items-center gap-1 rounded-xl bg-[#02254b] px-3 py-3 text-sm font-bold text-white shadow-[inset_2px_2px_5px_0px_rgba(0,0,0,0.5),inset_-2px_-2px_6px_1px_rgba(46,84,122,0.5)] transition hover:bg-black"
              >
                আগাম সুযোগ নিন <ChevronRight size={20} />
              </a>
            </TimelineAnimation>
          </header>
        )}

        {/* Hero content */}
        <div className="relative z-10 flex flex-col gap-6 px-4 pb-16 pt-24 text-center">
          <TimelineAnimation
            animationNum={1}
            timelineRef={heroRef}
            className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border-2 border-white bg-white px-1.5 py-1 text-black shadow-lg shadow-orange-500/20"
          >
            <span className="rounded-full bg-linear-to-br from-[#ff5f09] to-[#ffb26b] px-2 py-0.5 text-xs font-medium tracking-widest text-white">নতুন</span>
            <span className="text-sm font-medium">দেশিও প্ল্যাটফর্ম শীঘ্রই আসছে</span>
          </TimelineAnimation>

          <TimelineAnimation
            as="h1"
            animationNum={2}
            timelineRef={heroRef}
            className="max-w-6xl text-5xl font-medium tracking-tight text-neutral-900 sm:text-6xl md:text-7xl"
          >
            আপনার ব্যবসার <span className="text-[#ff5f09]">ডিজিটাল ভবিষ্যৎ</span> <br className="hidden sm:block" /> শুরু হোক আজই।
          </TimelineAnimation>

          <TimelineAnimation
            as="p"
            animationNum={3}
            timelineRef={heroRef}
            className="mx-auto max-w-3xl px-4 text-xl font-medium leading-relaxed text-neutral-500 md:text-2xl"
          >
            দেশিও প্ল্যাটফর্মের সঙ্গে আপনার ব্যবসাকে নিয়ে যান অনলাইনে—সহজ, দ্রুত এবং সম্পূর্ণ বাংলায়।
          </TimelineAnimation>

          <div className="flex justify-center gap-4">
            <TimelineAnimation
              as="a"
              href="#আগাম-সুযোগ"
              animationNum={4}
              timelineRef={heroRef}
              className="rounded-lg border border-orange-300 bg-linear-to-br from-[#ff5f09] via-[#ff7a33] to-[#ffb26b] px-4 py-2.5 text-xl text-white shadow-sm transition"
            >
              আগাম সুযোগ নিন
            </TimelineAnimation>
            <TimelineAnimation
              as="a"
              href="#সমাধান"
              animationNum={5}
              timelineRef={heroRef}
              className="rounded-lg border border-neutral-300 bg-linear-to-br from-neutral-50 via-neutral-100 to-neutral-300 px-4 py-2.5 text-xl text-black shadow-sm transition"
            >
              আরও জানুন
            </TimelineAnimation>
          </div>
        </div>

        {/* Dashboard frame */}
        <div className="relative mx-auto mt-10 w-full max-w-7xl rounded-xl">
          <TimelineAnimation
            animationNum={6}
            timelineRef={heroRef}
            className="rounded-2xl bg-white/50 p-4 backdrop-blur-lg"
          >
            <TimelineAnimation animationNum={7} timelineRef={heroRef} className="relative z-4 overflow-hidden rounded-2xl bg-white">
              <img src={showcaseUrl} alt="দেশিও প্ল্যাটফর্মের ড্যাশবোর্ড নমুনা" className="w-full" />
            </TimelineAnimation>
          </TimelineAnimation>
        </div>
      </section>

      <section
        id="সমাধান"
        ref={statsRef}
        className="flex min-h-screen flex-col justify-center gap-8 bg-white px-5 py-10 md:px-0"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Main chart */}
            <TimelineAnimation
              animationNum={1}
              timelineRef={statsRef}
              className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 lg:col-span-2"
            >
              <ClippedAreaChart />
            </TimelineAnimation>

            {/* Breakdown */}
            <div className="flex flex-col gap-4">
              <TimelineAnimation
                animationNum={2}
                timelineRef={statsRef}
                className="flex h-full flex-col justify-between rounded-3xl bg-[#02254b] p-6 text-white shadow-lg"
              >
                <div>
                  <p className="mb-2 text-[10px] font-bold tracking-[0.2em] text-white/50">মূল লক্ষ্য</p>
                  <h4 className="text-xl font-bold tracking-tight">বাংলাদেশের ব্যবসার ডিজিটালাইজেশন</h4>
                </div>
                <div className="mt-8">
                  <div className="mb-2 flex items-end justify-between">
                    <span className="text-3xl font-semibold tracking-tighter">৮২%</span>
                    <span className="mb-1 text-xs font-medium text-white/60">লক্ষ্য: ৯০%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/15">
                    <div className="h-full w-[82%] rounded-full bg-[#ff5f09]" />
                  </div>
                </div>
              </TimelineAnimation>

              <TimelineAnimation
                animationNum={3}
                timelineRef={statsRef}
                className="h-full rounded-3xl border border-zinc-200 bg-zinc-50 p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-lg border border-zinc-100 bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z" />
                      <path d="M16 4C17.6569 4 19 5.34315 19 7C19 8.22309 18.2681 9.27523 17.2183 9.7423" />
                      <path d="M13.7143 14H10.2857C7.91876 14 5.99998 15.9188 5.99998 18.2857C5.99998 19.2325 6.76749 20 7.71426 20H16.2857C17.2325 20 18 19.2325 18 18.2857C18 15.9188 16.0812 14 13.7143 14Z" />
                      <path d="M17.7143 13C20.0812 13 22 14.9188 22 17.2857C22 18.2325 21.2325 19 20.2857 19" />
                      <path d="M8 4C6.34315 4 5 5.34315 5 7C5 8.22309 5.73193 9.27523 6.78168 9.7423" />
                      <path d="M3.71429 19C2.76751 19 2 18.2325 2 17.2857C2 14.9188 3.91878 13 6.28571 13" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-zinc-900">ব্যবহারকারী প্রবৃদ্ধি</h4>
                </div>
                <p className="text-sm text-zinc-500">
                  গত কোয়ার্টারের তুলনায় অর্গানিক অর্জন বেড়েছে <span className="font-semibold text-zinc-900">২৪%</span>।
                </p>
              </TimelineAnimation>
            </div>
          </div>

          {/* KPI row */}
          <div className="grid grid-cols-2 gap-4 pt-6 md:grid-cols-4">
            {kpis.map((kpi, index) => (
              <TimelineAnimation
                animationNum={4 + index}
                timelineRef={statsRef}
                key={kpi.label}
                className={
                  kpi.status === 'up'
                    ? 'rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition-colors hover:border-emerald-400 hover:bg-emerald-50'
                    : 'rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition-colors hover:border-rose-400 hover:bg-rose-50'
                }
              >
                <p className="mb-2 text-xs font-bold tracking-widest text-zinc-400">{kpi.label}</p>
                <div className="flex items-baseline justify-between">
                  <p className="text-2xl font-black tracking-tighter text-zinc-900">{kpi.value}</p>
                  <span
                    className={
                      kpi.status === 'up'
                        ? 'rounded px-1.5 py-0.5 text-xs font-bold text-emerald-600 bg-emerald-50'
                        : 'rounded px-1.5 py-0.5 text-xs font-bold text-rose-600 bg-rose-50'
                    }
                  >
                    {kpi.change}
                  </span>
                </div>
              </TimelineAnimation>
            ))}
          </div>
        </div>
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
