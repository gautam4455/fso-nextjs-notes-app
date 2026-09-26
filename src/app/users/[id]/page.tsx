import Link from "next/link";
import { notFound } from "next/navigation";

import { getUserWithNotes } from "@/app/services/users";

const UserPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const user = await getUserWithNotes(Number(id));

  if (!user) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">{user.name}</h2>

      <p className="mb-3">
        <strong className="font-bold">Username:</strong>{" "}
        <em>{user.username}</em>
      </p>

      <h3 className="font-bold mb-2">Notes:</h3>
      <ul>
        {user.notes.map((note) => (
          <li key={note.id} className="mt-2 border round p-3 hover:bg-gray-50">
            <Link
              href={`/notes/${note.id}`}
              className="text-blue-600 hover:underline"
            >
              {note.content}
            </Link>

            {note.important && (
              <strong className="ml-2 text-amber-600">(important)</strong>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
