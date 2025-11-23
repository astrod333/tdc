import Link from 'next/link';
import Container from './Container';

export default function Header() {
    return (
        <header className="py-12">
            <Container>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <Link href="/" className="font-bold text-xl tracking-tight text-zinc-800 dark:text-zinc-100">
                        TDC Tanzania
                    </Link>
                    <nav className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        <Link href="/engineers" className="hover:text-teal-500 transition-colors">
                            Engineers
                        </Link>
                        <Link href="/terms" className="hover:text-teal-500 transition-colors">
                            Terms
                        </Link>
                        <Link href="/join" className="hover:text-teal-500 transition-colors">
                            Join
                        </Link>
                    </nav>
                </div>
            </Container>
        </header>
    );
}
