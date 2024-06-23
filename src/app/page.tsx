import Head from 'next/head';


export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Gaurav Jain's Personal Webpage</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">Gaurav Jain</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#bio" className="text-white hover:text-gray-300">Bio</a></li>
              <li><a href="#blog" className="text-white hover:text-gray-300">Blog</a></li>
              <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <section id="bio" className="bg-white shadow-md rounded-md p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p>Hi, I'm Gaurav Jain. I graduated from IIT Indore in 2024 and currently work as a software engineer.</p>
          <p>I don't have any specific hobbies, or I do I just don't them yet. I am passionate about technology and always eager to learn new things (nah I am not xD!)</p>
        </section>

        <section id="blog" className="bg-white shadow-md rounded-md p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4">Blog</h2>
          <p>Welcome to my blog! I may start out with blogging, so stay tuned for future posts.</p>
        </section>

        <section id="contact" className="bg-white shadow-md rounded-md p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p>You can reach me on LinkedIn: <a href="https://www.linkedin.com/in/gjain7" className="text-blue-600">Gaurav Jain</a></p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center mt-8">
        <p>Gaurav Jain &copy; 2024</p>
      </footer>
    </div>
  );
}
