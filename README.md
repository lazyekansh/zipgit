<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=28&duration=3000&pause=1000&color=FFFFFF&center=true&vCenter=true&multiline=true&repeat=true&width=500&height=80&lines=zipgit;Drop+a+ZIP%2C+get+a+repo." alt="zipgit" />

<br/>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=400&size=14&duration=2500&pause=800&color=888888&center=true&vCenter=true&repeat=true&width=460&height=30&lines=No+CLI.+No+manual+commits.+Just+upload+and+push." alt="tagline" />

<br/><br/>

[![Star this repo](https://img.shields.io/github/stars/lazyekansh/zipgit?style=for-the-badge&logo=github&logoColor=white&label=Star%20this%20repo&color=blue)](https://github.com/lazyekansh/zipgit)
&nbsp;&nbsp;
[![Follow lazyekansh](https://img.shields.io/github/followers/lazyekansh?style=for-the-badge&logo=github&logoColor=white&label=Follow&color=black)](https://github.com/lazyekansh)

<br/>

---

</div>

### What is this

A web app that takes a ZIP file and pushes its contents straight to a GitHub repository. You authenticate with GitHub, pick a repo name, upload your archive, and everything gets committed automatically. No git commands required.

### How it works

```
Upload ZIP  ->  Extract in memory  ->  Create repo (if needed)  ->  Push all files as a single commit
```

Smart enough to strip junk like `.DS_Store` and `__MACOSX`, and automatically flattens unnecessary root folders that archivers love to create.

### Built with

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![NextAuth.js](https://img.shields.io/badge/NextAuth.js-000000?style=flat-square&logo=next.js&logoColor=white)
![Octokit](https://img.shields.io/badge/Octokit-181717?style=flat-square&logo=github&logoColor=white)

</div>

### Getting started

```bash
git clone https://github.com/lazyekansh/zipgit.git
cd zipgit
npm install
```

Create a `.env.local` with your GitHub OAuth credentials:

```
GITHUB_CLIENT_ID=your_client_id
GITHUB_CLIENT_SECRET=your_client_secret
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
```

Then run it:

```bash
npm run dev
```

### Features

- In-memory ZIP extraction, nothing touches disk  
- Automatic repo creation if it does not exist  
- Parallel blob upload with atomic commits  
- OAuth login, tokens are never stored on disk  
- Dark animated UI  

### License

MIT

<div align="center">

<br/>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=400&size=12&duration=4000&pause=2000&color=555555&center=true&vCenter=true&repeat=true&width=300&height=20&lines=made+by+lazyekansh" alt="footer" />

</div>
