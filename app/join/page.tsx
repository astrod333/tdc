import Container from "@/components/Container";
import Link from "next/link";

export default function Join() {
    return (
        <Container className="mt-16 sm:mt-32">
            <header className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    Join the Community
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    Connect with other developers, share your knowledge, and grow your career.
                </p>
            </header>
            <div className="mt-16 sm:mt-20">
                <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                    <h2 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                        Ready to dive in?
                    </h2>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        We use WhatsApp for our daily communications. Click the button below to join our group.
                    </p>
                    <div className="mt-6">
                        <Link
                            href="https://chat.whatsapp.com/Cdm3XPRadGx1SaLlRJ3cDD"
                            className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70"
                        >
                            Join
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
}
