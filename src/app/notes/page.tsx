import { NoteList } from "@/app/notes/NoteList";
import { getNotes } from "../services/notes";

const Notes = () => {
  const notes = getNotes();

  return (
    <div>
      <h2>Notes</h2>

      <NoteList notes={notes} />
    </div>
  );
};

export default Notes;
