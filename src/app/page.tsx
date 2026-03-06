"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import MetricCardTen from '@/components/sections/metrics/MetricCardTen';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Award, Brain, Eye, Sparkles, Target, TrendingUp, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="mediumLarge"
      sizing="mediumLargeSizeMediumTitles"
      background="circleGradient"
      cardStyle="outline"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="StudyFlow"
          navItems={[
            { name: "Features", id: "features" },
            { name: "Benefits", id: "about" },
            { name: "Pricing", id: "metrics" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{ text: "Start Tracking", href: "#contact" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          title="Track Your Studies with Purpose"
          description="A clean, minimal study tracker designed for focus. Set goals, monitor progress, and build consistent study habits with beautiful simplicity inspired by Nothing and Apple."
          background={{ variant: "glowing-orb" }}
          kpis={[
            { value: "2.5x", label: "Better Retention" },
            { value: "87%", label: "Goal Completion" },
            { value: "30 Days", label: "Build Habits" }
          ]}
          enableKpiAnimation={true}
          tag="Study Smarter"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Start Free Trial", href: "#features" },
            { text: "See Demo", href: "#about" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aa2cXa2LmffEQPZIIbrTZKfaRM/a-minimalist-study-tracking-dashboard-in-1772816612918-b7d369be.png"
          imageAlt="StudyFlow Dashboard"
          mediaAnimation="slide-up"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Students Love StudyFlow"
          description="Built with the principles of minimalism and focus at heart. StudyFlow removes distractions and helps you concentrate on what matters most: your studies."
          tag="Our Philosophy"
          tagIcon={Target}
          tagAnimation="slide-up"
          bulletPoints={[
            {
              title: "Distraction-Free Design",              description: "Clean interface inspired by Nothing OS eliminates visual clutter. Every element serves a purpose in your study journey.",              icon: Eye
            },
            {
              title: "Smart Goal Setting",              description: "Set realistic daily study goals with AI-powered recommendations based on your learning pace and preferences.",              icon: Brain
            },
            {
              title: "Real-Time Progress",              description: "Watch your progress unfold in real-time with beautiful analytics that motivate you to keep going.",              icon: TrendingUp
            },
            {
              title: "Habit Formation",              description: "Build lasting study habits with streak tracking, reminders, and motivational insights tailored to your goals."
            }
          ]}
          buttons={[
            { text: "Learn More", href: "#features" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aa2cXa2LmffEQPZIIbrTZKfaRM/a-minimalist-goal-setting-interface-show-1772816612158-754ad6ed.png?_wi=1"
          imageAlt="Study Goals Interface"
          mediaAnimation="slide-up"
          imagePosition="left"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentySeven
          title="Powerful Features"
          description="Everything you need to master your studies"
          tag="Features"
          tagIcon={Zap}
          tagAnimation="slide-up"
          features={[
            {
              id: "1",              title: "Analytics Dashboard",              description: "Beautiful charts and graphs showing your study patterns, progress over time, and insights into your learning habits.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aa2cXa2LmffEQPZIIbrTZKfaRM/a-beautiful-analytics-chart-showing-stud-1772816612258-201eaefb.png?_wi=1",              imageAlt: "Analytics Dashboard"
            },
            {
              id: "2",              title: "Focus Timer",              description: "Integrated Pomodoro timer with customizable sessions. Stay focused, track study sessions, and take mindful breaks.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aa2cXa2LmffEQPZIIbrTZKfaRM/a-pomodoro-style-timer-interface-with-a--1772816612951-2d5d5e2e.png",              imageAlt: "Focus Timer"
            },
            {
              id: "3",              title: "Goal Tracking",              description: "Set daily study goals, track completion rates, and celebrate milestones. Visual progress indicators keep you motivated.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aa2cXa2LmffEQPZIIbrTZKfaRM/a-minimalist-goal-setting-interface-show-1772816612158-754ad6ed.png?_wi=2",              imageAlt: "Goal Tracking"
            },
            {
              id: "4",              title: "Subject Management",              description: "Organize your studies by subject. Track time spent on each topic and optimize your study schedule for better balance.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aa2cXa2LmffEQPZIIbrTZKfaRM/a-beautiful-analytics-chart-showing-stud-1772816612258-201eaefb.png?_wi=2",              imageAlt: "Subject Management"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "Explore All Features", href: "#metrics" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTen
          title="Proven Results"
          description="See what StudyFlow users are achieving"
          tag="Impact"
          tagIcon={Award}
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",              title: "50,000+",              subtitle: "Active students tracking their goals daily",              category: "Students",              value: "Growing Fast"
            },
            {
              id: "2",              title: "15 Million+",              subtitle: "Study hours logged across the platform",              category: "Achievement",              value: "Total Hours"
            },
            {
              id: "3",              title: "4.8/5",              subtitle: "Average rating from verified student reviews",              category: "Rating",              value: "Highly Rated"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="StudyFlow completely transformed how I approach my studies. The clean design keeps me focused, and the analytics help me understand where I'm improving. Highly recommend!"
          rating={5}
          author="Sarah Chen, Medical Student"
          avatars={[
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aa2cXa2LmffEQPZIIbrTZKfaRM/portrait-photo-of-a-happy-university-stu-1772816611605-bd924578.png", alt: "Sarah Chen" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aa2cXa2LmffEQPZIIbrTZKfaRM/portrait-photo-of-a-young-male-student-p-1772816611721-59625531.png", alt: "Alex Martinez" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aa2cXa2LmffEQPZIIbrTZKfaRM/portrait-of-a-young-female-student-profe-1772816611346-fa0e7e2f.png", alt: "Emily Watson" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aa2cXa2LmffEQPZIIbrTZKfaRM/portrait-of-a-young-male-student-wearing-1772816612134-0e11d351.png", alt: "James Park" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aa2cXa2LmffEQPZIIbrTZKfaRM/portrait-of-a-young-female-student-profe-1772816611709-b266485c.png", alt: "Lisa Anderson" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aa2cXa2LmffEQPZIIbrTZKfaRM/portrait-of-a-male-student-professional--1772816611830-35b02b0c.png", alt: "Michael Singh" }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Common Questions"
          sideDescription="Everything you need to know about StudyFlow"
          faqs={[
            {
              id: "1",              title: "Is StudyFlow free?",              content: "Yes! StudyFlow offers a free tier with all core features. We also offer premium plans with advanced analytics and AI-powered recommendations for students who want enhanced insights."
            },
            {
              id: "2",              title: "How do I start tracking my studies?",              content: "Simply sign up with your email, set your daily study goals, and start logging your study sessions. The interface is intuitive and guides you through the setup process in minutes."
            },
            {
              id: "3",              title: "Can I use StudyFlow on mobile?",              content: "Absolutely! StudyFlow is fully optimized for mobile devices. You can track your studies, set goals, and view analytics on the go with our mobile app available on iOS and Android."
            },
            {
              id: "4",              title: "How accurate is the analytics?",              content: "Our analytics are powered by precise time-tracking algorithms. Every minute you study is accurately recorded and displayed in your analytics dashboard for you to review."
            },
            {
              id: "5",              title: "Can I export my study data?",              content: "Yes! Premium users can export their study data as CSV or PDF reports. This is useful for tracking progress over semesters or sharing insights with teachers and tutors."
            }
          ]}
          textPosition="left"
          faqsAnimation="slide-up"
          useInvertedBackground={false}
          animationType="smooth"
          showCard={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="StudyFlow"
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Terms of Service", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}
