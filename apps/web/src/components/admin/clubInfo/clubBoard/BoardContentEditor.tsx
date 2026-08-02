'use client';

import { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import { CustomMenuBar } from '../MDEditor';
import '../mdEditor.custom.css';
import * as S from './boardContentEditor.css';

interface BoardContentEditorProps {
  /** 수정 모드에서 서버에서 받아온 기존 HTML */
  value: string;
  onChange: (html: string) => void;
  /** 비어 있는지 판단할 때 쓰도록 순수 텍스트도 함께 넘긴다 */
  onTextChange: (text: string) => void;
}

/** 소개글 에디터와 동일한 확장/툴바를 쓰고, 모달에 맞게 크기만 조절한다 */
function BoardContentEditor({ value, onChange, onTextChange }: BoardContentEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      // 첨부 버튼은 없지만, 기존 내용에 이미지가 있으면 수정 중 사라지지 않도록 확장은 유지한다
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

  // 수정 모드에서 기존 내용이 뒤늦게 도착하면 한 번 채워준다
  useEffect(() => {
    if (!editor || !value) return;
    if (editor.getHTML() === value) return;

    editor.commands.setContent(value);
    onTextChange(editor.getText());
  }, [editor, value, onTextChange]);

  if (!editor) return null;

  return (
    <div className={S.wrapper}>
      {/* 대표 이미지를 따로 등록하므로 본문 이미지 첨부는 제외 */}
      <CustomMenuBar editor={editor} showImageButton={false} />
      <EditorContent editor={editor} />
    </div>
  );
}

export default BoardContentEditor;
