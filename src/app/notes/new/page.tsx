"use client";

import { useActionState, useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { createNote } from "@/app/actions/notes";
import { useNotification } from "@/app/components/NotificationContext";

const NewNote = () => {
  const [state, formAction] = useActionState(createNote, {
    error: "",
    success: false,
  });

  const { data: session } = useSession();

  if (!session) {
    redirect("/");
  }

  const { showNotification } = useNotification();

  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      showNotification("Note created successfully");
      router.push("/notes");
    }
  }, [state, showNotification, router]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Create a new note</h2>

      <form action={formAction}>
        <div className="grid grid-container gap-2">
          <div className="grid-item">
            <label className="font-bold">Content:</label>

            <input
              type="text"
              name="content"
              placeholder="Enter your note content"
              required
              className="ml-1 p-1 border rounded"
            />
          </div>

          <div className="grid-item">
            <input type="checkbox" name="important" id="important" />
            <label htmlFor="important" className="ml-1">
              Important
            </label>
          </div>

          <div className="grid-item mt-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded cursor-pointer"
            >
              Create
            </button>

            {state.error && <p style={{ color: "red" }}>{state.error}</p>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewNote;
