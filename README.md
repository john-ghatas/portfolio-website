# Portfolio

This portfolio is crafted using [Next.js](https://nextjs.org/)

## Running the Project

The project can be run in multiple ways — either locally on your machine or using Docker for development and production. Make sure Docker is installed if you choose the Docker approach.

---

### Local Development (Bare-metal)

To develop directly on your machine:

```bash
# Install PNPM globally if you haven't already
npm install -g pnpm@latest

# Install project dependencies
pnpm install

# Start the development server
npm run dev
```

### Docker development and production

**Start the Development Environment**

```
docker compose -f compose.yml -f compose.dev.yml up --build
```

**Deploy to Production**

```
docker compose up -d
```

## 🖥️ Technologies Used

- [Nextjs.js](https://nextjs.org/) : A React-based, open-source framework for building efficient and scalable web applications.
- [Tailwind CSS](https://tailwindcss.com) : A utility-first CSS framework for rapid UI development.
- [TypeScript](https://www.typescriptlang.org): A typed superset of JavaScript that provides enhanced tooling and developer productivity.
- [Framer motion](https://www.framer.com/motion/): A React animation library that brings motion to your user interfaces.
- [Nodemailer](https://nodemailer.com/): A Node.js library facilitating easy email integration with features like attachment handling, HTML content, and support for various email services.

## 🌐 Credits

The template used to create this website was created by [BUMBAIYA](https://github.com/BUMBAIYA/portfolio-v2)
