import Container from "@/components/Container";
import Link from "next/link";

export default function Home() {
  return (
    <Container className="mt-9">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Tanzania Developers Community
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          We are a community of developers, designers, and tech enthusiasts from Tanzania. We share everything we know about making awesome software through our meetups, conferences, and online discussions.
        </p>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Our goal is to help other developers build better software and connect with like-minded individuals.
        </p>
        <div className="mt-6 flex gap-6">
          <Link href="https://twitter.com/tdc" className="group flex items-center gap-2 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-zinc-500 group-hover:fill-zinc-800 dark:group-hover:fill-zinc-200 transition-colors">
              <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z" />
            </svg>
            <span className="sr-only">Follow on X</span>
          </Link>
          <Link href="https://github.com/tdc" className="group flex items-center gap-2 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-zinc-500 group-hover:fill-zinc-800 dark:group-hover:fill-zinc-200 transition-colors">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.475 2 2 6.475 2 12c0 4.418 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.525-4.475-10-10-10z" />
            </svg>
            <span className="sr-only">Follow on GitHub</span>
          </Link>
        </div>
      </div>
    </Container>
  );
}
