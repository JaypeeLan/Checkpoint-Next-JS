import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I’m Johnpaul </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">
          I’m a Frontend Engineer specializing in React, Next.js, and modern web
          technologies. I love building performant, user-friendly apps.
        </p>
        <Image
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
          alt="Portfolio banner"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg"
        />
      </div>
    </main>
  );
}
