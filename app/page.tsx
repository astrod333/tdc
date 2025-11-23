import Folder from "@/components/folder";

export default function Home() {
  return (
    <main
      className="flex min-h-screen w-full items-center justify-center bg-[url('/mobile-background.webp')] md:bg-[url('/folder-background.jpeg')] bg-cover bg-center"
      aria-label="Tanzania Developer Community Homepage"
    >
      <h1 className="sr-only">Tanzania Developers Community - Connect, Learn, and Grow</h1>
      <Folder />
    </main>
  );
}
