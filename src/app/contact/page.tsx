import React from 'react';

const Contact = () => {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-4 text-gray-600">
        You can reach me at:{' '}
        <a
          href="mailto:laniranjohnpault@gmail.com"
          className="text-blue-500 underline"
        >
          laniranjohnpault@gmail.com
        </a>
      </p>
    </main>
  );
};

export default Contact;
