import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill's default theme styles

const TextEditor = ({ initialEditorValue, onEditorChange }) => {
  const [editorValue, setEditorValue] = useState(initialEditorValue || "");

  useEffect(() => {
    setEditorValue(initialEditorValue || "");
  }, [initialEditorValue]);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }], // No font dropdown
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  const handleChange = (content) => {
    setEditorValue(content);
    if (onEditorChange) {
      onEditorChange(content);
    }
  };

  return (
    <div>
      <ReactQuill
        value={editorValue}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        placeholder="Write Travel Description..."
      />
    </div>
  );
};

export default TextEditor;
