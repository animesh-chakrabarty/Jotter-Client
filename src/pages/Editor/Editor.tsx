import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "@/components/Editor/Toolbar";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Placeholder from "@tiptap/extension-placeholder";

import "./Editor.css";

const Editor: React.FC = () => {
  const [content, setContent] = useState<string | null>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight.configure({ multicolor: true }),
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Placeholder.configure({
        placeholder: "Write your blogpost here...",
      }),
    ],
    content: "",
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  console.log(content);

  return (
    <main className="h-full bg-[#F5F4F4] pt-10">
      <div className="max-w-5xl max-h-[95%] mx-auto p-4 border border-gray-300 rounded-lg shadow-md">
        {editor && <Toolbar editor={editor} />}
        <EditorContent
          editor={editor}
          className="editor-content min-h-[300px] max-h-[75vh] overflow-y-auto p-4 border border-gray-200 rounded bg-white"
        />
      </div>
    </main>
  );
};

export default Editor;
