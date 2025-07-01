'use client';

import * as S from '@/components/admin/clubInfo/clubQuill.css';
import Button from '@/common/ui/button/index';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import type { Editor } from '@tiptap/react';
import './clubQuill.custom.css';
import { useEffect, useState, useRef } from 'react';

const icons = {
  h1: (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
      <mask id="mask0_559_19523" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
        <rect width="30" height="30" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_559_19523)">
        <path
          d="M6.25098 21.25V8.75H8.75098V13.75H13.751V8.75H16.251V21.25H13.751V16.25H8.75098V21.25H6.25098ZM21.251 21.25V11.25H18.751V8.75H23.751V21.25H21.251Z"
          fill="#5A6379"
        />
      </g>
    </svg>
  ),
  h2: (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
      <mask id="mask0_559_19524" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
        <rect width="30" height="30" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_559_19524)">
        <path
          d="M3.75 21.25V8.75H6.25V13.75H11.25V8.75H13.75V21.25H11.25V16.25H6.25V21.25H3.75ZM16.25 21.25V16.25C16.25 15.5625 16.4948 14.974 16.9844 14.4844C17.474 13.9948 18.0625 13.75 18.75 13.75H23.75V11.25H16.25V8.75H23.75C24.4375 8.75 25.026 8.99479 25.5156 9.48438C26.0052 9.97396 26.25 10.5625 26.25 11.25V13.75C26.25 14.4375 26.0052 15.026 25.5156 15.5156C25.026 16.0052 24.4375 16.25 23.75 16.25H18.75V18.75H26.25V21.25H16.25Z"
          fill="#5A6379"
        />
      </g>
    </svg>
  ),
  h3: (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
      <mask id="mask0_559_19525" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
        <rect width="30" height="30" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_559_19525)">
        <path
          d="M3.75 21.25V8.75H6.25V13.75H11.25V8.75H13.75V21.25H11.25V16.25H6.25V21.25H3.75ZM16.25 21.25V18.75H23.75V16.25H18.75V13.75H23.75V11.25H16.25V8.75H23.75C24.4375 8.75 25.026 8.99479 25.5156 9.48438C26.0052 9.97396 26.25 10.5625 26.25 11.25V18.75C26.25 19.4375 26.0052 20.026 25.5156 20.5156C25.026 21.0052 24.4375 21.25 23.75 21.25H16.25Z"
          fill="#5A6379"
        />
      </g>
    </svg>
  ),
  h4: (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
      <mask id="mask0_559_19526" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
        <rect width="30" height="30" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_559_19526)">
        <path
          d="M3.75 21.25V8.75H6.25V13.75H11.25V8.75H13.75V21.25H11.25V16.25H6.25V21.25H3.75ZM22.5 21.25V17.5H16.25V8.75H18.75V15H22.5V8.75H25V15H27.5V17.5H25V21.25H22.5Z"
          fill="#5A6379"
        />
      </g>
    </svg>
  ),
  bold: (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
      <mask id="mask0_559_19528" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
        <rect width="30" height="30" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_559_19528)">
        <path
          d="M8.5 23.75V6.25H15.4063C16.7604 6.25 18.0104 6.66667 19.1563 7.5C20.3021 8.33333 20.875 9.48958 20.875 10.9688C20.875 12.0312 20.6354 12.849 20.1563 13.4219C19.6771 13.9948 19.2292 14.4062 18.8125 14.6562C19.3333 14.8854 19.9115 15.3125 20.5469 15.9375C21.1823 16.5625 21.5 17.5 21.5 18.75C21.5 20.6042 20.8229 21.901 19.4688 22.6406C18.1146 23.3802 16.8438 23.75 15.6563 23.75H8.5ZM12.2813 20.25H15.5313C16.5313 20.25 17.1406 19.9948 17.3594 19.4844C17.5781 18.974 17.6875 18.6042 17.6875 18.375C17.6875 18.1458 17.5781 17.776 17.3594 17.2656C17.1406 16.7552 16.5 16.5 15.4375 16.5H12.2813V20.25ZM12.2813 13.125H15.1875C15.875 13.125 16.375 12.9479 16.6875 12.5938C17 12.2396 17.1563 11.8438 17.1563 11.4062C17.1563 10.9062 16.9792 10.5 16.625 10.1875C16.2708 9.875 15.8125 9.71875 15.25 9.71875H12.2813V13.125Z"
          fill="#5A6379"
        />
      </g>
    </svg>
  ),
  italic: (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
      <mask id="mask0_559_19529" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
        <rect width="30" height="30" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_559_19529)">
        <path
          d="M6.25098 23.75V20.625H11.251L15.001 9.375H10.001V6.25H22.501V9.375H18.126L14.376 20.625H18.751V23.75H6.25098Z"
          fill="#5A6379"
        />
      </g>
    </svg>
  ),
  strike: (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
      <mask id="mask0_559_19530" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
        <rect width="30" height="30" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_559_19530)">
        <path
          d="M2.50098 17.5V15H27.501V17.5H2.50098ZM13.126 12.5V8.75H6.25098V5H23.751V8.75H16.876V12.5H13.126ZM13.126 25V20H16.876V25H13.126Z"
          fill="#5A6379"
        />
      </g>
    </svg>
  ),
  image: (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
      <mask id="mask0_559_19532" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
        <rect width="30" height="30" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_559_19532)">
        <path
          d="M6.25 26.25C5.5625 26.25 4.97396 26.0052 4.48438 25.5156C3.99479 25.026 3.75 24.4375 3.75 23.75V6.25C3.75 5.5625 3.99479 4.97396 4.48438 4.48438C4.97396 3.99479 5.5625 3.75 6.25 3.75H23.75C24.4375 3.75 25.026 3.99479 25.5156 4.48438C26.0052 4.97396 26.25 5.5625 26.25 6.25V23.75C26.25 24.4375 26.0052 25.026 25.5156 25.5156C25.026 26.0052 24.4375 26.25 23.75 26.25H6.25ZM6.25 23.75H23.75V6.25H6.25V23.75ZM7.5 21.25H22.5L17.8125 15L14.0625 20L11.25 16.25L7.5 21.25Z"
          fill="#5A6379"
        />
      </g>
    </svg>
  ),
};

const CustomMenuBar = ({ editor }: { editor: Editor | null }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && editor) {
      const url = URL.createObjectURL(file);
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  if (!editor) return null;
  return (
    <div className="custom-tiptap-toolbar">
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className="toolbar-btn"
        title="H1"
      >
        {icons.h1}
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className="toolbar-btn"
        title="H2"
      >
        {icons.h2}
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className="toolbar-btn"
        title="H3"
      >
        {icons.h3}
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className="toolbar-btn"
        title="H4"
      >
        {icons.h4}
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className="toolbar-btn"
        title="Bold"
      >
        {icons.bold}
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className="toolbar-btn"
        title="Italic"
      >
        {icons.italic}
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className="toolbar-btn"
        title="Strikethrough"
      >
        {icons.strike}
      </button>
      <button onClick={handleImageClick} className="toolbar-btn" title="이미지" type="button">
        {icons.image}
      </button>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default function ClubQuill({
  isEditing,
  introduction,
  onChange,
}: {
  isEditing: boolean;
  introduction: string;
  onChange?: (introduction: string) => void;
}) {
  const [htmlContent, setHtmlContent] = useState(introduction);

  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: introduction,
    editorProps: {
      attributes: {
        class: 'custom-tiptap-editor',
        placeholder: '동아리 소개를 입력하세요.',
      },
    },
    immediatelyRender: false,
  });

  useEffect(() => {
    setHtmlContent(introduction);
    if (editor) {
      editor.commands.setContent(introduction);
    }
  }, [introduction, editor]);

  useEffect(() => {
    if (isEditing && editor) {
      editor.commands.setContent(htmlContent);
    }
  }, [isEditing, editor, htmlContent]);

  useEffect(() => {
    if (onChange && editor) {
      const updateHandler = () => {
        onChange(editor.getHTML());
      };
      editor.on('update', updateHandler);
      return () => {
        editor.off('update', updateHandler);
      };
    }
  }, [onChange, editor]);

  return (
    <div className={S.container}>
      <div className={S.buttonContainer}>
        <Button variant="secondary" className={S.buttonIntro}>
          소개
        </Button>
        <Button variant="secondary" className={S.buttonNotice}>
          게시판
        </Button>
      </div>
      {isEditing ? (
        <>
          <CustomMenuBar editor={editor} />
          <EditorContent editor={editor} />
        </>
      ) : (
        <>
          <div
            className="custom-tiptap-editor"
            style={{ minHeight: 300, background: '#f8f8f9', borderRadius: 6, padding: 24 }}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </>
      )}
    </div>
  );
}
