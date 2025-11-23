import Container from "@/components/Container";
import { developers } from "@/data/developers";
import Link from "next/link";
import Image from "next/image";

export default function Engineers() {
    return (
        <Container className="mt-16 sm:mt-32">
            <header className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    Engineers
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    Meet the talented developers who are part of our community.
                </p>
            </header>
            <div className="mt-16 sm:mt-20">
                <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                    {developers.map((developer) => (
                        <li key={developer.name} className="group relative flex flex-col items-start">
                            <div className="relative z-10 mb-4 h-12 w-12 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800 shadow-sm ring-1 ring-zinc-100 dark:ring-zinc-800">
                                {developer.avatar ? (
                                    <Image
                                        src={developer.avatar}
                                        alt={developer.name}
                                        width={48}
                                        height={48}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center text-zinc-400">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
                                <Link href={developer.portfolio} target="_blank" rel="noopener noreferrer">
                                    <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                                    <span className="relative z-10">{developer.name}</span>
                                </Link>
                            </h2>
                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                {developer.github ? (
                                    <span className="flex items-center gap-2">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.475 2 2 6.475 2 12c0 4.418 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.525-4.475-10-10-10z" />
                                        </svg>
                                        {developer.github}
                                    </span>
                                ) : (
                                    <span className="italic">No GitHub</span>
                                )}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    );
}
