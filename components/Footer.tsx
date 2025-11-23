import Container from './Container';

export default function Footer() {
    return (
        <footer className="py-16">
            <Container>
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <p className="text-sm text-zinc-400 dark:text-zinc-500">
                        &copy; {new Date().getFullYear()} Tanzania Developers Community. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
