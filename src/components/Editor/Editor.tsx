import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";

const Editor: React.FC = () => {
  const [content, setContent] = useState<string | null>(null);

  const editor = useEditor({
    extensions: [StarterKit, Highlight.configure({ multicolor: true })],
    content: "<p>Write your blogpost here...</p>",
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  console.log(content);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 border border-gray-300 rounded-lg shadow-md">
      {editor && <Toolbar editor={editor} />}
      <EditorContent
        editor={editor}
        className="custom min-h-[300px] p-4 border border-gray-200 rounded bg-white"
      />
    </div>
  );
};

export default Editor;
