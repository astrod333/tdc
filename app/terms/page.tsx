import Container from "@/components/Container";
import { rules } from "@/data/rules";

export default function Terms() {
    return (
        <Container className="mt-16 sm:mt-32">
            <header className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    Community Rules
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    To ensure a healthy and productive community, we ask all members to adhere to the following rules.
                </p>
            </header>
            <div className="mt-16 sm:mt-20">
                <ul role="list" className="space-y-8">
                    {rules.map((rule) => (
                        <li key={rule.title} className="flex flex-col gap-2">
                            <h3 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 flex items-center gap-2">
                                <span>{rule.emoji}</span>
                                {rule.title}
                            </h3>
                            <p className="text-base text-zinc-600 dark:text-zinc-400">
                                {rule.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    );
}
