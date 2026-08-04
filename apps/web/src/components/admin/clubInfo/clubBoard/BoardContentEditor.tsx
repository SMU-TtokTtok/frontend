'use client';

import { useEffect } from 'react';
import { EditorContent, useEditor, useEditorState } from '@tiptap/react';
import type { Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import * as S from './boardContentEditor.css';

interface BoardContentEditorProps {
  value: string;
  onChange: (html: string) => void;
  onTextChange: (text: string) => void;
}

interface MenuButton {
  label: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
  variant?: 'text' | 'icon';
}

function CompactMenuBar({ editor }: { editor: Editor }) {
  const activeStates = useEditorState({
    editor,
    selector: ({ editor: currentEditor }) => ({
      heading1: currentEditor.isActive('heading', { level: 1 }),
      heading2: currentEditor.isActive('heading', { level: 2 }),
      heading3: currentEditor.isActive('heading', { level: 3 }),
      paragraph: currentEditor.isActive('paragraph'),
      bold: currentEditor.isActive('bold'),
      italic: currentEditor.isActive('italic'),
      strike: currentEditor.isActive('strike'),
      link: currentEditor.isActive('link'),
    }),
  });

  const handleLinkClick = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('링크 URL을 입력하세요.', previousUrl || 'https://');

    if (url === null) return;

    if (url === '') {
      editor.chain().focus().unsetLink().run();
      return;
    }

    editor.chain().focus().setLink({ href: url, target: '_blank' }).run();
  };

  const menuButtons: MenuButton[] = [
    {
      label: 'H1',
      title: '제목 1',
      isActive: activeStates.heading1,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      variant: 'text',
    },
    {
      label: 'H2',
      title: '제목 2',
      isActive: activeStates.heading2,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      variant: 'text',
    },
    {
      label: 'H3',
      title: '제목 3',
      isActive: activeStates.heading3,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      variant: 'text',
    },
    {
      label: '본문',
      title: '본문',
      isActive: activeStates.paragraph,
      onClick: () => editor.chain().focus().setParagraph().run(),
      variant: 'text',
    },
    {
      label: 'B',
      title: '굵게',
      isActive: activeStates.bold,
      onClick: () => editor.chain().focus().toggleBold().run(),
      variant: 'icon',
    },
    {
      label: 'I',
      title: '기울임',
      isActive: activeStates.italic,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      variant: 'icon',
    },
    {
      label: 'S',
      title: '취소선',
      isActive: activeStates.strike,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      variant: 'icon',
    },
    {
      label: '링크',
      title: '링크',
      isActive: activeStates.link,
      onClick: handleLinkClick,
      variant: 'text',
    },
  ];

  return (
    <div className={S.menuBar} aria-label="본문 서식 도구">
      {menuButtons.map((button) => (
        <button
          key={button.title}
          type="button"
          className={[
            S.menuButton,
            button.variant === 'icon' ? S.iconButton : S.textButton,
            button.isActive ? S.menuButtonActive : '',
          ].join(' ')}
          title={button.title}
          onClick={button.onClick}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}

function BoardContentEditor({ value, onChange, onTextChange }: BoardContentEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { target: '_blank', rel: 'noopener noreferrer' },
      }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class: 'custom-tiptap-editor',
      },
    },
    immediatelyRender: false,
  });

  useEffect(() => {
    if (!editor) return;

    const handleUpdate = () => {
      onChange(editor.getHTML());
      onTextChange(editor.getText());
    };

    editor.on('update', handleUpdate);
    return () => {
      editor.off('update', handleUpdate);
    };
  }, [editor, onChange, onTextChange]);

  useEffect(() => {
    if (!editor || !value) return;
    if (editor.getHTML() === value) return;

    editor.commands.setContent(value);
    onTextChange(editor.getText());
  }, [editor, value, onTextChange]);

  if (!editor) return null;

  return (
    <div className={S.wrapper}>
      <CompactMenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}

export default BoardContentEditor;
