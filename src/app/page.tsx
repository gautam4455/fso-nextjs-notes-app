import Link from "next/link";

const Home = () => {
  console.log("hello next.js");

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Notes app</h2>
        An example app for{" "}
        <Link
          href="https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-nextjs"
          target="_blank"
          referrerPolicy="no-referrer"
          className="text-blue-600 hover:underline"
        >
          Full Stack Open Next.js
        </Link>
      </div>

      <div>
        See{" "}
        <Link
          href="https://github.com/gautam4455/fso-nextjs-notes-app"
          referrerPolicy="no-referrer"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          https://github.com/gautam4455/fso-nextjs-notes-app
        </Link>{" "}
        for the source code
      </div>
    </div>
  );
};

export default Home;
