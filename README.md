# Kiran Public School Website Dashboard

Production-ready Next.js + Tailwind CSS school website for **Kiran Public School**, built with the App Router and TypeScript.

## Folder Structure

```text
KPS/
├── app/
│   ├── book-list/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── books/
│   │   └── book-dashboard.tsx
│   ├── layout/
│   │   ├── site-footer.tsx
│   │   ├── site-header.tsx
│   │   └── site-nav.tsx
│   └── sections/
│       ├── contact-card.tsx
│       ├── dashboard-cards.tsx
│       ├── enquiry-form.tsx
│       ├── future-ready-section.tsx
│       └── hero-section.tsx
├── data/
│   ├── books.ts
│   └── site.ts
├── lib/
│   └── utils.ts
├── public/
│   └── images/
│       └── saraswati-logo.jpg
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Vercel Deployment Steps

1. Push this project to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com/).
3. Click **Add New Project** and import the GitHub repository.
4. Keep the default framework preset as **Next.js**.
5. Click **Deploy**.
6. After deployment, Vercel will provide a temporary `*.vercel.app` URL.

## Connect `kiranpublicschool.com`

1. Open the deployed project in Vercel.
2. Go to **Settings > Domains**.
3. Add `kiranpublicschool.com`.
4. Add `www.kiranpublicschool.com` as well.
5. In your domain registrar DNS panel, add the DNS records shown by Vercel.
6. Usually this includes:
   - An `A` record for the root domain pointing to Vercel's IP.
   - A `CNAME` record for `www` pointing to Vercel's cname target.
7. Wait for DNS propagation.
8. In Vercel, mark the preferred production domain.

## Future Expansion Ideas

- Connect the enquiry form to a backend API route or CRM.
- Add admissions workflow pages.
- Add a notice board CMS.
- Add student result search.
- Add gallery and event management.
