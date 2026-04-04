# 🟠 Granny's Hideaway

**Retro Chalet STR — Mancelona, Northern Michigan**

> Stuck in time. Perfectly on purpose.

---

## Status: Coming Summer 2026 🌲

Live site: [grannyshideaway.com](https://grannyshideaway.com) (DNS pending)

---

## Stack

- **Next.js 14** + TypeScript
- **Tailwind CSS**
- **Google Fonts** — Righteous (display), Boogaloo (accent), Lato (body)
- **Vercel** — static deploy, no backend required

---

## Deploy to Vercel

Since this is a static site with no env vars needed:

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import `dealdesk365/grannys-hideaway` from GitHub
3. Set Project Name: `grannys-hideaway`
4. Framework: **Next.js** (auto-detected)
5. Click **Deploy** — done!

> Auto-deploys on every push to `main`.

---

## Local Dev

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## TypeScript Check

```bash
npx tsc --noEmit
```

---

## DNS (Namecheap → Vercel)

Once deployed, add in Namecheap DNS:

| Type  | Host | Value                    |
|-------|------|--------------------------|
| A     | @    | 216.150.1.1              |
| CNAME | www  | cname.vercel-dns.com     |

Then add `grannyshideaway.com` as a custom domain in Vercel project settings.

---

## Contact

📧 [grannyshideaway@gmail.com](mailto:grannyshideaway@gmail.com)
