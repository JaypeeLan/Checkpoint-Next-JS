import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <Image
        src="/profile.jpg"
        alt="Profile picture"
        width={150}
        height={150}
        className="rounded-full shadow-lg"
      />
      <h1 className="text-4xl font-bold mt-4">Hi, I'm JohnPaul</h1>
      <p className="mt-2 text-gray-600">
        Frontend Engineer | React | Next.js | TypeScript
      </p>
    </main>
  );
}
