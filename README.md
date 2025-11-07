## Hi there 👋
[index.html](https://github.com/user-attachments/files/23427104/index.html)<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Peter Kernohan - Robotics & Intelligent Devices Engineer Portfolio">
    <title>Peter Kernohan | Engineering Portfolio</title>
    <style>
        /* Design System */
        :root {
            --font-serif: "Georgia", "Times New Roman", Times, serif;
            --font-sans: "Inter", "FKGroteskNeue", "Geist", "Segoe UI", "Helvetica Neue", Arial, sans-serif;
            --font-heading: var(--font-serif);
            --font-body: var(--font-sans);

            --color-white: rgba(255, 255, 255, 1);
            --color-black: rgba(0, 0, 0, 1);
            --color-cream-50: rgba(252, 252, 249, 1);
            --color-cream-100: rgba(255, 255, 253, 1);
            --color-gray-200: rgba(245, 245, 245, 1);
            --color-gray-300: rgba(167, 169, 169, 1);
            --color-gray-400: rgba(119, 124, 124, 1);
            --color-slate-500: rgba(98, 108, 113, 1);
            --color-brown-600: rgba(94, 82, 64, 1);
            --color-charcoal-700: rgba(31, 33, 33, 1);
            --color-charcoal-800: rgba(38, 40, 40, 1);
            --color-slate-900: rgba(19, 52, 59, 1);
            --color-teal-300: rgba(50, 184, 198, 1);
            --color-teal-400: rgba(45, 166, 178, 1);
            --color-teal-500: rgba(33, 128, 141, 1);
            --color-teal-600: rgba(29, 116, 128, 1);
            --color-teal-700: rgba(26, 104, 115, 1);
            --color-teal-800: rgba(41, 150, 161, 1);
            --color-red-400: rgba(255, 84, 89, 1);
            --color-red-500: rgba(192, 21, 47, 1);
            --color-orange-400: rgba(230, 129, 97, 1);
            --color-orange-500: rgba(168, 75, 47, 1);
            --color-brown-600-rgb: 94, 82, 64;
            --color-teal-500-rgb: 33, 128, 141;
            --color-slate-900-rgb: 19, 52, 59;
            --color-slate-500-rgb: 98, 108, 113;
            --color-red-500-rgb: 192, 21, 47;
            --color-red-400-rgb: 255, 84, 89;
            --color-orange-500-rgb: 168, 75, 47;
            --color-orange-400-rgb: 230, 129, 97;
            --color-bg-1: rgba(59, 130, 246, 0.08);
            --color-bg-2: rgba(245, 158, 11, 0.08);
            --color-bg-3: rgba(34, 197, 94, 0.08);
            --color-bg-4: rgba(239, 68, 68, 0.08);
            --color-bg-5: rgba(147, 51, 234, 0.08);
            --color-bg-6: rgba(249, 115, 22, 0.08);
            --color-bg-7: rgba(236, 72, 153, 0.08);
            --color-bg-8: rgba(6, 182, 212, 0.08);
            --color-background: var(--color-cream-50);
            --color-surface: var(--color-cream-100);
            --color-text: var(--color-slate-900);
            --color-text-secondary: var(--color-slate-500);
            --color-primary: var(--color-teal-500);
            --color-primary-hover: var(--color-teal-600);
            --color-primary-active: var(--color-teal-700);
            --color-secondary: rgba(var(--color-brown-600-rgb), 0.12);
            --color-secondary-hover: rgba(var(--color-brown-600-rgb), 0.2);
            --color-secondary-active: rgba(var(--color-brown-600-rgb), 0.25);
            --color-border: rgba(var(--color-brown-600-rgb), 0.2);
            --color-btn-primary-text: var(--color-cream-50);
            --color-card-border: rgba(var(--color-brown-600-rgb), 0.12);
            --color-card-border-inner: rgba(var(--color-brown-600-rgb), 0.12);
            --color-error: var(--color-red-500);
            --color-success: var(--color-teal-500);
            --color-warning: var(--color-orange-500);
            --color-info: var(--color-slate-500);
            --color-focus-ring: rgba(var(--color-teal-500-rgb), 0.4);
            --color-select-caret: rgba(var(--color-slate-900-rgb), 0.8);
            --focus-ring: 0 0 0 3px var(--color-focus-ring);
            --focus-outline: 2px solid var(--color-primary);
            --font-family-base: "FKGroteskNeue", "Geist", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            --font-size-xs: 11px;
            --font-size-sm: 12px;
            --font-size-base: 14px;
            --font-size-md: 14px;
            --font-size-lg: 16px;
            --font-size-xl: 18px;
            --font-size-2xl: 20px;
            --font-size-3xl: 24px;
            --font-size-4xl: 30px;
            --font-weight-normal: 400;
            --font-weight-medium: 500;
            --font-weight-semibold: 550;
            --font-weight-bold: 600;
            --line-height-tight: 1.2;
            --line-height-normal: 1.5;
            --letter-spacing-tight: -0.01em;
            --space-0: 0;
            --space-1: 1px;
            --space-2: 2px;
            --space-4: 4px;
            --space-6: 6px;
            --space-8: 8px;
            --space-10: 10px;
            --space-12: 12px;
            --space-16: 16px;
            --space-20: 20px;
            --space-24: 24px;
            --space-32: 32px;
            --radius-sm: 6px;
            --radius-base: 8px;
            --radius-md: 10px;
            --radius-lg: 12px;
            --radius-full: 9999px;
            --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.02);
            --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
            --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02);
            --duration-fast: 150ms;
            --duration-normal: 250ms;
            --ease-standard: cubic-bezier(0.16, 1, 0.3, 1);

            /* Custom Portfolio Colors */
            --color-navy: #0F172A;
            --color-cyan: #22D3EE;
            --color-gray: #64748B;
            --color-light-gray: #F4F4F4;
        }

        @media (prefers-color-scheme: dark) {
            :root {
                --color-gray-400-rgb: 119, 124, 124;
                --color-teal-300-rgb: 50, 184, 198;
                --color-gray-300-rgb: 167, 169, 169;
                --color-gray-200-rgb: 245, 245, 245;
                --color-bg-1: rgba(29, 78, 216, 0.15);
                --color-bg-2: rgba(180, 83, 9, 0.15);
                --color-bg-3: rgba(21, 128, 61, 0.15);
                --color-bg-4: rgba(185, 28, 28, 0.15);
                --color-bg-5: rgba(107, 33, 168, 0.15);
                --color-bg-6: rgba(194, 65, 12, 0.15);
                --color-bg-7: rgba(190, 24, 93, 0.15);
                --color-bg-8: rgba(8, 145, 178, 0.15);
                --color-background: var(--color-charcoal-700);
                --color-surface: var(--color-charcoal-800);
                --color-text: var(--color-gray-200);
                --color-text-secondary: rgba(var(--color-gray-300-rgb), 0.7);
                --color-primary: var(--color-teal-300);
                --color-primary-hover: var(--color-teal-400);
                --color-primary-active: var(--color-teal-800);
                --color-secondary: rgba(var(--color-gray-400-rgb), 0.15);
                --color-secondary-hover: rgba(var(--color-gray-400-rgb), 0.25);
                --color-secondary-active: rgba(var(--color-gray-400-rgb), 0.3);
                --color-border: rgba(var(--color-gray-400-rgb), 0.3);
                --color-error: var(--color-red-400);
                --color-success: var(--color-teal-300);
                --color-warning: var(--color-orange-400);
                --color-info: var(--color-gray-300);
                --color-focus-ring: rgba(var(--color-teal-300-rgb), 0.4);
                --color-btn-primary-text: var(--color-slate-900);
                --color-card-border: rgba(var(--color-gray-400-rgb), 0.2);
                --color-card-border-inner: rgba(var(--color-gray-400-rgb), 0.15);
            }
        }

        @font-face {
            font-family: 'FKGroteskNeue';
            src: url('https://r2cdn.perplexity.ai/fonts/FKGroteskNeue.woff2') format('woff2');
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
            font-size: var(--font-size-base);
        }

        body {
            font-family: var(--font-body);
            font-size: 1.17rem;
            letter-spacing: -0.005em;

            line-height: var(--line-height-normal);
            color: var(--color-text);
            background-color: var(--color-background);
            -webkit-font-smoothing: antialiased;
            overflow-x: hidden;
        }

        /* Navigation */
        nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: var(--color-surface);
            padding: var(--space-20) var(--space-32);
            z-index: 1000;
            transition: all var(--duration-normal) var(--ease-standard);
            border-bottom: 1px solid var(--color-card-border);
        }

        nav.scrolled {
            background: rgba(255, 255, 253, 0.95);
            backdrop-filter: blur(10px);
            box-shadow: var(--shadow-sm);
        }

        @media (prefers-color-scheme: dark) {
            nav.scrolled {
                background: rgba(38, 40, 40, 0.95);
            }
        }

        .nav-container {
            max-width: 1280px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-family: var(--font-heading);
            font-size: 2rem;
            font-weight: 700;
            color: var(--color-text);
            text-decoration: none;
            letter-spacing: -0.02em;
        }

        .nav-links {
            display: flex;
            gap: var(--space-32);
            list-style: none;
        }

        .nav-links a {
            color: var(--color-text-secondary);
            text-decoration: none;
            font-weight: 600;
            font-family: var(--font-sans);
            letter-spacing: 0.02em;
            transition: color var(--duration-fast) var(--ease-standard);
            position: relative;
        }

        .nav-links a:hover,
        .nav-links a.active {
            color: var(--color-primary);
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--color-primary);
            transition: width var(--duration-normal) var(--ease-standard);
        }

        .nav-links a:hover::after,
        .nav-links a.active::after {
            width: 100%;
        }

        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            font-size: 24px;
            color: var(--color-text);
            cursor: pointer;
        }

        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            padding: var(--space-32);
            background: var(--color-background);
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 30% 40%, var(--color-bg-1), transparent 55%),
                        radial-gradient(circle at 70% 60%, var(--color-bg-8), transparent 55%);
            opacity: 0.3;
        }

        

        .hero-content {
            max-width: 1280px;
            margin: 0 auto;
            text-align: center;
            position: relative;
            z-index: 1;
            animation: fadeInUp 0.8s var(--ease-standard);
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .hero h1 {
            font-family: var(--font-heading);
            font-size: 4rem;
            font-weight: 800;
            margin-bottom: var(--space-16);
            line-height: 1.1;
            letter-spacing: -0.04em;
        }

        .hero .subtitle {
            font-family: var(--font-sans);
            font-size: 1.4rem;
            color: var(--color-primary);
            font-weight: 700;
            letter-spacing: 0.05em;
            margin-bottom: var(--space-8);
        }

        .hero .location {
            font-family: var(--font-sans);
            font-size: 1.08rem;
            font-weight: 500;
            letter-spacing: 0.015em;
            color: var(--color-text-secondary);
            margin-bottom: var(--space-32);
        }

        .cta-button {
            display: inline-block;
            padding: var(--space-16) var(--space-32);
            background: var(--color-primary);
            color: var(--color-btn-primary-text);
            text-decoration: none;
            border-radius: 6px;
            font-weight: var(--font-weight-semibold);
            font-size: var(--font-size-lg);
            transition: all var(--duration-normal) var(--ease-standard);
            box-shadow: var(--shadow-md);
        }

        .cta-button:hover {
            background: var(--color-primary-hover);
            transform: translateY(-1px);
            box-shadow: 0 8px 24px rgba(var(--color-teal-500-rgb), 0.25);
        }

        .social-links {
            display: flex;
            gap: var(--space-24);
            justify-content: center;
            margin-top: var(--space-32);
        }

        .social-links a {
            color: var(--color-text-secondary);
            font-size: 24px;
            transition: all 0.3s var(--ease-standard);
        }

        .social-links a:hover {
            color: var(--color-primary);
            transform: translateY(-2px);
        }

        /* Section Styles */
        section {
            padding: 100px var(--space-32);
            max-width: 1280px;
            margin: 0 auto;
        }

        .section-title {
            font-family: var(--font-heading);
            font-size: 2.8rem;
            font-weight: 800;
            margin-bottom: var(--space-16);
            text-align: center;
            letter-spacing: -0.03em;
        }

        .section-subtitle {
            text-align: center;
            color: var(--color-text-secondary);
            font-family: var(--font-sans);
            font-size: 1.1rem;
            font-weight: 500;
            letter-spacing: 0.01em;
            margin-bottom: var(--space-32);
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        /* About Section */
        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--space-32);
            align-items: start;
            margin-top: var(--space-32);
        }

        .about-text {
            font-family: var(--font-sans);
            font-size: 1.12rem;
            line-height: 1.75;
            color: var(--color-text);
            letter-spacing: -0.002em;
        }

        .interests-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-16);
        }

        .interest-item {
            padding: var(--space-16);
            background: var(--color-surface);
            border: 1px solid var(--color-card-border);
            border-radius: 6px;
            font-weight: var(--font-weight-medium);
            transition: all var(--duration-normal) var(--ease-standard);
        }

        .interest-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
            border-color: rgba(var(--color-teal-500-rgb), 0.3);
        }

        /* Projects Section */
        .projects {
            background: var(--color-background);
            padding: 100px var(--space-32);
            border-top: 1px solid var(--color-card-border);
        }

        .projects-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: var(--space-32);
            margin-top: var(--space-32);
        }

        .project-card {
            background: var(--color-surface);
            border: 1px solid var(--color-card-border);
            border-radius: 6px;
            overflow: hidden;
            transition: all var(--duration-normal) var(--ease-standard);
            cursor: pointer;
        }

        .project-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
            border-color: rgba(var(--color-teal-500-rgb), 0.25);
        }

        .project-image {
            width: 100%;
            height: 200px;
            background: var(--color-bg-1);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 48px;
            position: relative;
            overflow: hidden;
        }

        .project-image::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, transparent 60%, rgba(0, 0, 0, 0.04));
        }

        .project-content {
            padding: var(--space-24);
        }

        .project-category {
            display: inline-block;
            padding: var(--space-6) var(--space-16);
            background: var(--color-bg-8);
            color: var(--color-primary);
            border-radius: 4px;
            font-family: var(--font-sans);
            font-size: 0.8rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            margin-bottom: var(--space-12);
        }

        .project-title {
            font-family: var(--font-heading);
            font-size: 1.35rem;
            font-weight: 700;
            letter-spacing: -0.015em;
            margin-bottom: var(--space-12);
        }

        .project-description {
            font-family: var(--font-sans);
            color: var(--color-text-secondary);
            font-size: 0.97rem;
            line-height: 1.7;
            margin-bottom: var(--space-16);
            letter-spacing: -0.003em;
        }

        .project-tags {
            display: flex;
            flex-wrap: wrap;
            gap: var(--space-8);
        }

        .project-tag {
            padding: var(--space-6) var(--space-12);
            background: var(--color-secondary);
            border-radius: 4px;
            font-family: var(--font-sans);
            font-size: 0.8rem;
            font-weight: 500;
            letter-spacing: 0.02em;
            color: var(--color-text);
        }

        /* Skills Section */
        .skills-content {
            margin-top: var(--space-32);
        }

        .skills-category {
            margin-bottom: var(--space-32);
        }

        .skills-category h3 {
            font-family: var(--font-heading);
            font-size: 1.6rem;
            font-weight: 700;
            letter-spacing: -0.02em;
            margin-bottom: var(--space-20);
            color: var(--color-primary);
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: var(--space-16);
        }

        .skill-item {
            padding: var(--space-20);
            background: var(--color-surface);
            border: 1px solid var(--color-card-border);
            border-radius: 6px;
            text-align: center;
            transition: all var(--duration-normal) var(--ease-standard);
        }

        .skill-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
            border-color: rgba(var(--color-teal-500-rgb), 0.3);
        }

        .skill-name {
            font-family: var(--font-sans);
            font-weight: 700;
            font-size: 1.02rem;
            letter-spacing: -0.01em;
            margin-bottom: var(--space-8);
        }

        .skill-level {
            font-family: var(--font-sans);
            font-size: 0.88rem;
            font-weight: 500;
            letter-spacing: 0.02em;
            color: var(--color-text-secondary);
        }

        /* Contact Section */
        .contact {
            background: var(--color-background);
            padding: 100px var(--space-32);
            border-top: 1px solid var(--color-card-border);
        }

        .contact-content {
            max-width: 600px;
            margin: 0 auto;
        }

        .contact-form {
            margin-top: var(--space-32);
        }

        .form-group {
            margin-bottom: var(--space-20);
        }

        .form-group label {
            display: block;
            margin-bottom: var(--space-8);
            font-family: var(--font-sans);
            font-weight: 600;
            font-size: 0.97rem;
            letter-spacing: 0.015em;
            color: var(--color-text);
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: var(--space-12);
            border: 1px solid var(--color-border);
            border-radius: 6px;
            font-family: var(--font-family-base);
            font-size: var(--font-size-base);
            background: var(--color-surface);
            color: var(--color-text);
            transition: all var(--duration-fast) var(--ease-standard);
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--color-primary);
            box-shadow: var(--focus-ring);
        }

        .form-group textarea {
            min-height: 150px;
            resize: vertical;
        }

        .submit-button {
            width: 100%;
            padding: var(--space-16);
            background: var(--color-primary);
            color: var(--color-btn-primary-text);
            border: none;
            border-radius: 6px;
            font-size: var(--font-size-lg);
            font-weight: var(--font-weight-semibold);
            cursor: pointer;
            transition: all var(--duration-normal) var(--ease-standard);
        }

        .submit-button:hover {
            background: var(--color-primary-hover);
            transform: translateY(-1px);
            box-shadow: 0 8px 24px rgba(var(--color-teal-500-rgb), 0.2);
        }

        .contact-info {
            margin-top: var(--space-32);
            text-align: center;
        }

        .contact-info p {
            margin-bottom: var(--space-12);
            font-family: var(--font-sans);
            font-size: 1rem;
            color: var(--color-text-secondary);
        }

        .contact-info a {
            color: var(--color-primary);
            text-decoration: none;
            font-family: var(--font-sans);
            font-weight: 600;
            letter-spacing: 0.01em;
        }

        .contact-info a:hover {
            text-decoration: underline;
        }

        /* Footer */
        footer {
            background: var(--color-surface);
            padding: var(--space-32);
            text-align: center;
            border-top: 1px solid var(--color-card-border);
        }

        .footer-content {
            max-width: 1280px;
            margin: 0 auto;
        }

        .footer-tagline {
            color: var(--color-text-secondary);
            margin-top: var(--space-12);
            font-style: italic;
            font-family: 'Georgia', 'Times New Roman', Times, serif;
        }

        /* Animations */
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s var(--ease-standard), transform 0.5s var(--ease-standard);
        }

        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
            .projects-grid {
                grid-template-columns: repeat(2, 1fr);
            }

            .about-content {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 768px) {
            .nav-links {
                position: fixed;
                top: 70px;
                left: -100%;
                flex-direction: column;
                background: var(--color-surface);
                width: 100%;
                padding: var(--space-32);
                gap: var(--space-16);
                transition: left var(--duration-normal) var(--ease-standard);
                box-shadow: var(--shadow-lg);
            }

            .nav-links.active {
                left: 0;
            }

            .mobile-menu-btn {
                display: block;
                font-size: 1.4rem;
            }

            .hero h1 {
                font-size: 40px;
            }

            .hero .subtitle {
                font-size: var(--font-size-xl);
            }

            .projects-grid {
                grid-template-columns: 1fr;
            }

            .interests-grid {
                grid-template-columns: 1fr;
            }

            section {
                padding: 60px var(--space-20);
            }
        }

        @media (max-width: 480px) {
            .hero h1 {
                font-size: 32px;
            }

            .section-title {
                font-size: var(--font-size-2xl);
            }
        }

        /* Form Success Message */
        .form-message {
            padding: var(--space-16);
            border-radius: 6px;
            margin-top: var(--space-16);
            text-align: center;
            font-weight: var(--font-weight-medium);
            display: none;
        }

        .form-message.success {
            background: var(--color-bg-3);
            color: var(--color-success);
            border: 1px solid var(--color-success);
        }

        .form-message.error {
            background: var(--color-bg-4);
            color: var(--color-error);
            border: 1px solid var(--color-error);
        }
    
/* Sophisticated Premium SVG Icons */
.icon {
    display: inline-block;
    vertical-align: middle;
    width: 24px;
    height: 24px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.6;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: color 0.25s var(--ease-standard);
}
.icon svg {
    display: block;
    width: 100%;
    height: 100%;
    stroke: currentColor;
    fill: none;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
}
.icon-github svg path,
.icon-linkedin svg path,
.icon-envelope svg path,
.icon-menu svg line,
.icon-close svg line {
    stroke: currentColor;
}
.social-links .icon {
    width: 20px;
    height: 20px;
}
.project-image .icon {
    width: 44px;
    height: 44px;
}


</style>

</head>
<body>
    <!-- Navigation -->
    <nav id="nav">
        <div class="nav-container">
            <a href="#hero" class="logo">Peter Kernohan</a>
            <ul class="nav-links" id="navLinks">
                <li><a href="#hero" class="nav-link active">Home</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#projects" class="nav-link">Projects</a></li>
                <li><a href="#skills" class="nav-link">Skills</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
            <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle menu"><span class="icon icon-menu" aria-hidden="true"></span></button>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="hero">
        <div class="hero-content">
            <p class="subtitle">Robotics &amp; Intelligent Devices Engineer</p>
            <h1>Peter Kernohan</h1>
            <p class="location">Maynooth University, Ireland</p>
            <a href="#projects" class="cta-button">View Projects</a>
<div class="social-links">
    <a href="https://github.com/peterkernohan" target="_blank" rel="noopener" aria-label="GitHub"><span class="icon icon-github" aria-hidden="true"></span></a>
    <a href="https://linkedin.com/in/peterkernohan" target="_blank" rel="noopener" aria-label="LinkedIn"><span class="icon icon-linkedin" aria-hidden="true"></span></a>
    <a href="mailto:peterkernohan@gmail.com" aria-label="Email"><span class="icon icon-envelope" aria-hidden="true"></span></a>
</div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="fade-in">
        <h2 class="section-title">About Me</h2>
        <p class="section-subtitle">Building innovative solutions through robotics, electronics, and intelligent systems</p>
        <div class="about-content">
            <div>
                <p class="about-text">
                    I'm a second-year Robotics and Intelligent Devices student at Maynooth University with a passion for building intelligent systems that bridge hardware and software. My work spans battle bot construction, computer vision projects, and Arduino-based electronics. When I'm not engineering, you'll find me producing hard techno music or training Brazilian Jiu-Jitsu.
                </p>
            </div>
            <div class="interests-grid">
    <div class="interest-item">Battle Bot Construction</div>
    <div class="interest-item">Computer Vision &amp; AI</div>
    <div class="interest-item">Arduino &amp; Raspberry Pi Projects</div>
    <div class="interest-item">PCB Design &amp; Electronics</div>
    <div class="interest-item">Music Production</div>
    <div class="interest-item">Brazilian Jiu-Jitsu</div>
</div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects fade-in">
        <h2 class="section-title">Featured Projects</h2>
        <p class="section-subtitle">Explore my engineering work across robotics, computer vision, and electronics</p>
        <div class="projects-grid">
            <div class="project-card">
                <div class="project-image" style="background: var(--color-bg-1);"><span class="icon icon-battlebot" aria-hidden="true"></span></div>
                <div class="project-content">
                    <span class="project-category">Robotics</span>
                    <h3 class="project-title">Autonomous Battle Bot</h3>
                    <p class="project-description">Arduino-powered combat robot featuring computer vision for autonomous opponent tracking and engagement. Includes custom motor controllers and impact-resistant chassis design.</p>
                    <div class="project-tags">
                        <span class="project-tag">Arduino</span>
                        <span class="project-tag">C++</span>
                        <span class="project-tag">Computer Vision</span>
                        <span class="project-tag">Motor Control</span>
                    </div>
                </div>
            </div>

            <div class="project-card">
                <div class="project-image" style="background: var(--color-bg-5);"><span class="icon icon-vision" aria-hidden="true"></span></div>
                <div class="project-content">
                    <span class="project-category">Computer Vision</span>
                    <h3 class="project-title">Facial Recognition System</h3>
                    <p class="project-description">Real-time facial recognition system built with Raspberry Pi and OpenCV. Capable of identifying and tracking multiple faces with high accuracy for security applications.</p>
                    <div class="project-tags">
                        <span class="project-tag">Raspberry Pi</span>
                        <span class="project-tag">Python</span>
                        <span class="project-tag">OpenCV</span>
                        <span class="project-tag">Machine Learning</span>
                    </div>
                </div>
            </div>

            <div class="project-card">
                <div class="project-image" style="background: var(--color-bg-6);"><span class="icon icon-chip" aria-hidden="true"></span></div>
                <div class="project-content">
                    <span class="project-category">Electronics</span>
                    <h3 class="project-title">Motor Control Interface</h3>
                    <p class="project-description">Custom PCB design for precise motor control with programmable speed curves and position feedback. Designed for robotics applications requiring high precision.</p>
                    <div class="project-tags">
                        <span class="project-tag">PCB Design</span>
                        <span class="project-tag">Arduino</span>
                        <span class="project-tag">C</span>
                        <span class="project-tag">Electronics</span>
                    </div>
                </div>
            </div>

            <div class="project-card">
                <div class="project-image" style="background: var(--color-bg-7);"><span class="icon icon-music" aria-hidden="true"></span></div>
                <div class="project-content">
                    <span class="project-category">Music Tech</span>
                    <h3 class="project-title">Hard Techno Synthesizer</h3>
                    <p class="project-description">Arduino-based synthesizer hardware for electronic music production. Features MIDI integration, custom waveform generation, and tactile control interface.</p>
                    <div class="project-tags">
                        <span class="project-tag">Arduino</span>
                        <span class="project-tag">Audio DSP</span>
                        <span class="project-tag">Electronics</span>
                        <span class="project-tag">MIDI</span>
                    </div>
                </div>
            </div>

            <div class="project-card">
                <div class="project-image" style="background: var(--color-bg-3);"><span class="icon icon-cv" aria-hidden="true"></span></div>
                <div class="project-content">
                    <span class="project-category">Computer Vision</span>
                    <h3 class="project-title">Computer Vision Tracker</h3>
                    <p class="project-description">Real-time object tracking system using advanced computer vision algorithms. Capable of tracking multiple objects simultaneously with adaptive learning.</p>
                    <div class="project-tags">
                        <span class="project-tag">Python</span>
                        <span class="project-tag">OpenCV</span>
                        <span class="project-tag">TensorFlow</span>
                        <span class="project-tag">Raspberry Pi</span>
                    </div>
                </div>
            </div>

            <div class="project-card">
                <div class="project-image" style="background: var(--color-bg-2);"><span class="icon icon-iot" aria-hidden="true"></span></div>
                <div class="project-content">
                    <span class="project-category">IoT</span>
                    <h3 class="project-title">Smart Electronics Lab</h3>
                    <p class="project-description">IoT-enabled laboratory equipment monitoring system. Tracks temperature, humidity, and equipment usage with remote access and automated alerts.</p>
                    <div class="project-tags">
                        <span class="project-tag">Raspberry Pi</span>
                        <span class="project-tag">IoT</span>
                        <span class="project-tag">Python</span>
                        <span class="project-tag">Web Dashboard</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="fade-in">
        <h2 class="section-title">Skills &amp; Technologies</h2>
        <p class="section-subtitle">Technical expertise spanning hardware and software development</p>
        <div class="skills-content">
            <div class="skills-category">
                <h3>Programming Languages</h3>
                <div class="skills-grid">
                    <div class="skill-item">
                        <div class="skill-name">Java</div>
                        <div class="skill-level">Intermediate</div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-name">C</div>
                        <div class="skill-level">Intermediate</div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-name">Python</div>
                        <div class="skill-level">Advanced</div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-name">Arduino</div>
                        <div class="skill-level">Advanced</div>
                    </div>
                </div>
            </div>

            <div class="skills-category">
                <h3>Hardware &amp; Electronics</h3>
                <div class="skills-grid">
                    <div class="skill-item">
                        <div class="skill-name">Raspberry Pi</div>
                        <div class="skill-level">Advanced</div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-name">Arduino</div>
                        <div class="skill-level">Advanced</div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-name">PCB Design</div>
                        <div class="skill-level">Intermediate</div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-name">Electronics</div>
                        <div class="skill-level">Advanced</div>
                    </div>
                </div>
            </div>

            <div class="skills-category">
                <h3>Software &amp; Tools</h3>
                <div class="skills-grid">
                    <div class="skill-item">
                        <div class="skill-name">Computer Vision</div>
                        <div class="skill-level">Advanced</div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-name">CAD</div>
                        <div class="skill-level">Intermediate</div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-name">FL Studio</div>
                        <div class="skill-level">Advanced</div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-name">Git</div>
                        <div class="skill-level">Intermediate</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact fade-in">
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-subtitle">Let's collaborate on your next engineering project</p>
        <div class="contact-content">
            <form class="contact-form" id="contactForm">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" class="submit-button">Send Message</button>
            </form>
            <div id="formMessage" class="form-message"></div>
            <div class="contact-info">
                <p>Or reach out directly:</p>
                <p><strong>Email:</strong> <a href="mailto:peterkernohan@gmail.com">peterkernohan@gmail.com</a></p>
                <p><strong>GitHub:</strong> <a href="https://github.com/peterkernohan" target="_blank" rel="noopener">github.com/peterkernohan</a></p>
                <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/peterkernohan" target="_blank" rel="noopener">linkedin.com/in/peterkernohan</a></p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <p>&copy; 2025 Peter Kernohan. All rights reserved.</p>
            <p class="footer-tagline">Built with passion for engineering</p>
            <div class="social-links" style="margin-top: var(--space-16);">
                <a href="https://github.com/peterkernohan" target="_blank" rel="noopener" aria-label="GitHub">⚡</a>
                <a href="https://linkedin.com/in/peterkernohan" target="_blank" rel="noopener" aria-label="LinkedIn">💼</a>
                <a href="mailto:peterkernohan@gmail.com" aria-label="Email"><span class="icon icon-envelope" aria-hidden="true"></span></a>
            </div>
        </div>
    </footer>

    <script>
        // Navigation scroll effect
        const nav = document.getElementById('nav');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }

            // Update active nav link
            let current = '';
            document.querySelectorAll('section').forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinksMenu = document.getElementById('navLinks');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinksMenu.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinksMenu.classList.contains('active') ? '<span class="icon icon-close" aria-hidden="true"></span>' : '<span class="icon icon-menu" aria-hidden="true"></span>';
        });

        // Close mobile menu when link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinksMenu.classList.remove('active');
                mobileMenuBtn.innerHTML = '<span class="icon icon-menu" aria-hidden="true"></span>';
            });
        });

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Contact form handling
        const contactForm = document.getElementById('contactForm');
        const formMessage = document.getElementById('formMessage');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Validate
            if (!name || !email || !message) {
                showMessage('Please fill in all fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission
            showMessage('Thank you! Your message has been sent successfully.', 'success');
            contactForm.reset();
        });

        function showMessage(text, type) {
            formMessage.textContent = text;
            formMessage.className = `form-message ${type}`;
            formMessage.style.display = 'block';
            
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }

        // Smooth scroll for all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    </script>
<script>
// Insert SVG icon markup for all .icon elements dynamically as pure inline SVG
function injectSvgIcons() {
    const icons = {
        github: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.166 6.84 9.489.5.091.682-.217.682-.483 0-.239-.009-.869-.014-1.707-2.782.604-3.37-1.343-3.37-1.343-.455-1.157-1.111-1.465-1.111-1.465-.908-.62.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.528 2.341 1.087 2.91.831.091-.647.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.944 0-1.091.39-1.983 1.029-2.682-.104-.254-.447-1.275.098-2.656 0 0 .84-.268 2.75 1.024A9.564 9.564 0 0112 6.844c.85.004 1.71.115 2.512.337C16.424 5.89 17.262 6.156 17.262 6.156c.548 1.381.206 2.402.102 2.656.642.699 1.028 1.591 1.028 2.682 0 3.842-2.338 4.687-4.566 4.936.36.311.682.927.682 1.87 0 1.35-.013 2.437-.013 2.77 0 .27.18.579.688.481C19.13 20.163 22 16.421 22 12c0-5.52-4.48-10-10-10z"/></svg>`,
        linkedin: `<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0v3"/></svg>`,
        envelope: `<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg>`,
        menu: `<svg viewBox="0 0 24 24"><line x1="4" y1="8" x2="20" y2="8"/><line x1="4" y1="16" x2="20" y2="16"/></svg>`,
        close: `<svg viewBox="0 0 24 24"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>`,
        battlebot: `<svg viewBox='0 0 44 44'><rect x='6' y='20' width='32' height='12' rx='3.5' fill='none' stroke='currentColor' stroke-width='2'/><circle cx='14' cy='36' r='3' fill='none' stroke='currentColor' stroke-width='2'/><circle cx='30' cy='36' r='3' fill='none' stroke='currentColor' stroke-width='2'/><rect x='13' y='15' width='18' height='7' rx='2' fill='none' stroke='currentColor' stroke-width='2'/></svg>`,
        vision: `<svg viewBox='0 0 44 44'><ellipse cx='22' cy='22' rx='16' ry='10' fill='none' stroke='currentColor' stroke-width='2'/><circle cx='22' cy='22' r='4' fill='none' stroke='currentColor' stroke-width='2'/></svg>`,
        chip: `<svg viewBox='0 0 44 44'><rect x='12' y='12' width='20' height='20' rx='4' fill='none' stroke='currentColor' stroke-width='2'/><path d='M22 6v6M22 38v-6M6 22h6M38 22h-6M10 10l4.2 4.2M34 34l-4.2-4.2M34 10l-4.2 4.2M10 34l4.2-4.2' stroke='currentColor' stroke-width='2'/></svg>`,
        music: `<svg viewBox='0 0 44 44'><rect x='15' y='9' width='12' height='20' rx='2' fill='none' stroke='currentColor' stroke-width='2'/><circle cx='18' cy='33' r='3' fill='none' stroke='currentColor' stroke-width='2'/><path d='M27 29v-11' stroke='currentColor' stroke-width='2'/></svg>`,
        cv: `<svg viewBox='0 0 44 44'><rect x='8' y='12' width='28' height='20' rx='5' fill='none' stroke='currentColor' stroke-width='2'/><circle cx='22' cy='22' r='5' fill='none' stroke='currentColor' stroke-width='2'/></svg>`,
        iot: `<svg viewBox='0 0 44 44'><rect x='12' y='17' width='20' height='10' rx='3' fill='none' stroke='currentColor' stroke-width='2'/><circle cx='22' cy='27' r='3' fill='none' stroke='currentColor' stroke-width='2'/><path d='M11 15a11 11 0 0 1 22 0' stroke='currentColor' stroke-width='2' fill='none'/></svg>`
    };
    document.querySelectorAll('.icon').forEach(function(el) {
        var iconName = Array.from(el.classList).find(cls => cls.startsWith('icon-') && cls !== 'icon');
        if (iconName && icons[iconName.replace('icon-', '')]) {
            el.innerHTML = icons[iconName.replace('icon-', '')];
        }
    });
}
injectSvgIcons();
</script>
</body>
</html>

<!--
**peterk05/peterk05** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
