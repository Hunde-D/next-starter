import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col pt-10 items-center font-[family-name:var(--font-geist-mono)]">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <ol className="list-decimal m-5 mb-0 ">
            <li>
              <span className="font-semibold">Template Name :</span> Blank
        </li>
        <li>
              <span className="font-semibold">Release :</span> 1.0.0
            </li>
            <li>
              <span className="font-semibold">Next.js :</span> 15.0.3
            </li>
            <li>
              <span className="font-semibold">React :</span> ^18.3.1
            </li>
            
          </ol>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 md:px-12 w-full p-10">
          
        <div className="flex flex-col  items-center">

            <p className="underline font-mono font-bold m-2">Project Structure</p>
            <ul className="list-disc pl-6">
  <li><code className="bg-gray-600 p-1 rounded">/app</code> - For routing and pages</li>
  <li><code className="bg-gray-600 p-1 rounded">/components</code> - Shared UI components</li>
  <li><code className="bg-gray-600 p-1 rounded">/styles</code> - Global and component-specific styles</li>
  <li><code className="bg-gray-600 p-1 rounded">/services</code> - API calls and service functions</li>
  <li><code className="bg-gray-600 p-1 rounded">/utils</code> - Utility functions and helpers</li>
  <li><code className="bg-gray-600 p-1 rounded">/context</code> - React context providers</li>
  <li><code className="bg-gray-600 p-1 rounded">/types</code> - TypeScript type definitions</li>
  <li><code className="bg-gray-600 p-1 rounded">/actions</code> - For defining actions that manage state or trigger side effects</li>
  <li><code className="bg-gray-600 p-1 rounded">/json</code> - For mocking data or storing mock JSON files</li>
</ul>


          </div>
        <div className=" flex flex-col  items-center">

          <p className=" underline font-mono font-bold m-2">Features Enabled</p>
          <ul className="list-disc pl-6">
            <li>App Router: <code>true</code></li>
            <li>Turbopack: <code>true</code></li>
            <li>ESLint: <code>true</code></li>
            <li>TypeScript: <code>true</code></li>
          </ul>
        </div>
        <div className="flex flex-col  items-center ">
          <p className=" underline font-mono font-bold m-2">Tools and Libraries</p>
          <ul className="list-disc pl-6">
  <li><code className="bg-gray-600 p-1 rounded">Tailwindcss</code> - Utility-first CSS</li>
  <li><code className="bg-gray-600 p-1 rounded">prettier</code> - Code formatter</li>
</ul>

        </div>
      </section>
    </main>
  );
}
