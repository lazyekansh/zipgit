<div align="center">zipgit

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=28&duration=3000&pause=1000&color=FFFFFF&center=true&vCenter=true&multiline=true&repeat=true&width=500&height=80&lines=zipgit;Drop+a+ZIP%2C+get+a+repo." alt="zipgit" /><br/><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=400&size=14&duration=2500&pause=800&color=888888&center=true&vCenter=true&repeat=true&width=460&height=30&lines=No+CLI.+No+manual+commits.+Just+upload+and+push." alt="tagline" /><br/><br/>

""Live Demo" (https://img.shields.io/badge/Live-Demo-black?style=for-the-badge&logo=vercel)" (https://ziptogit.ek4nsh.in)
""Stars" (https://img.shields.io/github/stars/lazyekansh/zipgit?style=for-the-badge&logo=github)" (https://github.com/lazyekansh/zipgit)
""Forks" (https://img.shields.io/github/forks/lazyekansh/zipgit?style=for-the-badge&logo=github)" (https://github.com/lazyekansh/zipgit)
""License" (https://img.shields.io/github/license/lazyekansh/zipgit?style=for-the-badge)" (LICENSE)
""Follow" (https://img.shields.io/github/followers/lazyekansh?style=for-the-badge&logo=github)" (https://github.com/lazyekansh)

<br/><img src="https://komarev.com/ghpvc/?username=lazyekansh&repo=zipgit&style=for-the-badge" /></div>---

Overview

zipgit is a web application that converts a ZIP archive directly into a GitHub repository.

Upload a ZIP file, authenticate with GitHub, choose a repository name, and the application extracts and commits the files automatically.

No Git CLI.
No manual commits.
No local configuration.

---

Live Website

https://ziptogit.ek4nsh.in

---

Workflow

ZIP Upload
   │
   ▼
Extract archive in memory
   │
   ▼
Create GitHub repository
   │
   ▼
Upload blobs using GitHub API
   │
   ▼
Create tree + commit
   │
   ▼
Push to default branch

The system automatically removes archive junk files such as:

.DS_Store
__MACOSX
Thumbs.db

It also flattens unnecessary nested directories created by archive tools.

---

Demo

Add a GIF preview of the app interface here.

Example:

/demo/demo.gif

Then display it like:

![zipgit demo](demo/demo.gif)

---

Features

- ZIP extraction fully in memory
- Automatic GitHub repository creation
- Parallel file uploads
- Atomic commits using GitHub APIs
- OAuth authentication via GitHub
- Secure token handling
- Automatic archive cleanup
- Dark animated UI

---

Architecture

Client (Next.js UI)
      │
      ▼
NextAuth GitHub OAuth
      │
      ▼
ZIP Upload API Route
      │
      ▼
ZIP Extractor (Memory)
      │
      ▼
Octokit GitHub API
      │
      ▼
Create Repo + Commit

---

Tech Stack

Technology| Role
Next.js| Application framework
TypeScript| Type-safe code
Tailwind CSS| Styling
Framer Motion| UI animations
NextAuth.js| GitHub authentication
Octokit| GitHub API integration

---

Installation

Clone the repository.

git clone https://github.com/lazyekansh/zipgit.git
cd zipgit

Install dependencies.

npm install

---

Environment Variables

Create ".env.local"

GITHUB_CLIENT_ID=your_client_id
GITHUB_CLIENT_SECRET=your_client_secret
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000

GitHub OAuth credentials can be created here:

https://github.com/settings/developers

---

Running Locally

Start development server.

npm run dev

Visit:

http://localhost:3000

---

Project Structure

zipgit
│
├─ app
├─ components
├─ lib
├─ public
├─ styles
│
├─ package.json
├─ next.config.js
└─ README.md

---

Security

- OAuth tokens are never written to disk
- ZIP files are processed entirely in memory
- GitHub API operations use official Octokit client

---

Contributing

Contributions are welcome.

Fork the repository and create a branch.

git checkout -b feature-name

Commit changes.

git commit -m "Add feature"

Push branch.

git push origin feature-name

Open a Pull Request.

---

License

MIT License

---

<div align="center"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=400&size=12&duration=4000&pause=2000&color=555555&center=true&vCenter=true&repeat=true&width=300&height=20&lines=made+by+lazyekansh" /></div>
