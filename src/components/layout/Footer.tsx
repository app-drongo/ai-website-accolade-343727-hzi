'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

const DEFAULT_FOOTER = {
  logoText: 'Accolade',
  companyDescription:
    'Empowering healthcare organizations with innovative technology solutions that improve patient outcomes and streamline operations. Trusted by leading healthcare providers nationwide.',
  contactEmail: 'contact@accolade.com',
  contactPhone: '+1 (888) 822-6523',
  contactAddress: '1201 3rd Avenue, Suite 3200, Seattle, WA 98101',
  newsletterTitle: 'Healthcare Insights',
  newsletterPlaceholder: 'Enter your work email',
  newsletterDisclaimer:
    'Get the latest healthcare technology insights and industry updates. Unsubscribe anytime.',
  section1Title: 'Solutions',
  section2Title: 'Company',
  section3Title: 'Resources',
  section4Title: 'Legal',
  copyrightText: '© 2024 Accolade. All rights reserved.',
  madeWithText: 'with care for better health outcomes',
  socialText: 'Connect with us:',
  social1Href: 'https://twitter.com/accolade',
  social2Href: 'https://facebook.com/accolade',
  social3Href: 'https://instagram.com/accolade',
  social4Href: 'https://linkedin.com/company/accolade',
  social5Href: 'https://github.com/accolade',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };

  // ✅ FIXED: Added editableId to all footer links
  const footerSections = [
    {
      title: config.section1Title,
      links: [
        {
          name: 'Healthcare Navigation',
          href: '/healthcare-navigation',
          editableId: 'link-footer-healthcare-navigation',
        },
        { name: 'Advocacy Services', href: '/advocacy', editableId: 'link-footer-advocacy' },
        {
          name: 'Mental Health Support',
          href: '/mental-health',
          editableId: 'link-footer-mental-health',
        },
        {
          name: 'Care Management',
          href: '/care-management',
          editableId: 'link-footer-care-management',
        },
        { name: 'Provider Network', href: '/providers', editableId: 'link-footer-providers' },
        { name: 'Health Analytics', href: '/analytics', editableId: 'link-footer-analytics' },
      ],
    },
    {
      title: config.section2Title,
      links: [
        { name: 'About Accolade', href: '/about', editableId: 'link-footer-about' },
        { name: 'Leadership Team', href: '/leadership', editableId: 'link-footer-leadership' },
        { name: 'Careers', href: '/careers', editableId: 'link-footer-careers' },
        { name: 'News & Press', href: '/news', editableId: 'link-footer-news' },
        { name: 'Investor Relations', href: '/investors', editableId: 'link-footer-investors' },
        { name: 'Contact Us', href: '/contact', editableId: 'link-footer-contact' },
      ],
    },
    {
      title: config.section3Title,
      links: [
        { name: 'Resource Center', href: '/resources', editableId: 'link-footer-resources' },
        { name: 'Case Studies', href: '/case-studies', editableId: 'link-footer-case-studies' },
        { name: 'White Papers', href: '/whitepapers', editableId: 'link-footer-whitepapers' },
        { name: 'Webinars', href: '/webinars', editableId: 'link-footer-webinars' },
        { name: 'Healthcare Blog', href: '/blog', editableId: 'link-footer-blog' },
        { name: 'Support Center', href: '/support', editableId: 'link-footer-support' },
      ],
    },
    {
      title: config.section4Title,
      links: [
        { name: 'Privacy Policy', href: '/privacy', editableId: 'link-footer-privacy' },
        { name: 'Terms of Service', href: '/terms', editableId: 'link-footer-terms' },
        { name: 'HIPAA Compliance', href: '/hipaa', editableId: 'link-footer-hipaa' },
        { name: 'Security', href: '/security', editableId: 'link-footer-security' },
        { name: 'Accessibility', href: '/accessibility', editableId: 'link-footer-accessibility' },
        { name: 'Cookie Policy', href: '/cookies', editableId: 'link-footer-cookies' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: config.social1Href },
    { name: 'Facebook', icon: Facebook, href: config.social2Href },
    { name: 'Instagram', icon: Instagram, href: config.social3Href },
    { name: 'LinkedIn', icon: Linkedin, href: config.social4Href },
    { name: 'GitHub', icon: Github, href: config.social5Href },
  ];

  // ✅ FIXED: Added editableId to bottom bar links
  const bottomLinks = [
    { name: 'Site Map', href: '/sitemap', editableId: 'link-footer-sitemap' },
    {
      name: 'Accessibility Statement',
      href: '/accessibility',
      editableId: 'link-footer-accessibility-statement',
    },
    {
      name: 'Cookie Preferences',
      href: '/cookie-preferences',
      editableId: 'link-footer-cookie-preferences',
    },
    { name: 'Member Support', href: '/member-support', editableId: 'link-footer-member-support' },
  ];

  return (
    <footer id="footer" className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">
                    {config.logoText.charAt(0)}
                  </span>
                </div>
                <span className="font-bold text-xl" data-editable="logoText">
                  {config.logoText}
                </span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                <span data-editable="companyDescription">{config.companyDescription}</span>
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable="contactEmail">
                  {config.contactEmail}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable="contactPhone">
                  {config.contactPhone}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable="contactAddress">
                  {config.contactAddress}
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm" data-editable="newsletterTitle">
                {config.newsletterTitle}
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={config.newsletterPlaceholder}
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                <span data-editable="newsletterDisclaimer">{config.newsletterDisclaimer}</span>
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm" data-editable={`section${index + 1}Title`}>
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        data-editable-href={link.editableId}
                        data-original-href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span data-editable="copyrightText">{config.copyrightText}</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Made with <Heart className="size-3 text-red-500 fill-current" />
                <span data-editable="madeWithText">{config.madeWithText}</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2" data-editable="socialText">
                {config.socialText}
              </span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                    data-editable-href={`social${index + 1}Href`}
                    data-original-href={social.href}
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            {bottomLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                data-editable-href={link.editableId}
                data-original-href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
