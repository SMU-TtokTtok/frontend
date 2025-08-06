'use client';

import * as S from '@/components/admin/clubInfo/mdEditor.css';
import Button from '@/common/ui/button/index';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import type { Editor } from '@tiptap/react';
import './mdEditor.custom.css';
import { useEffect, useState, useRef } from 'react';
import { postImage } from './api/postImage';
// import { getImageUrl } from './api/getUrl';
import { useAuthStore } from '@/common/store/adminAuthStore';

const icons = {
  h1: (
    <svg width="44" height="24" viewBox="0 0 54 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.973 0.887999H20.021V23.112H16.973V0.887999ZM9.65303 8.496H13.349V11.088H9.65303V8.496ZM12.485 1.248H15.461V22.104H12.485V1.248ZM4.87703 4.512H7.27703V6.792C7.27703 8.04 7.18103 9.272 6.98903 10.488C6.81303 11.704 6.53303 12.856 6.14903 13.944C5.76503 15.016 5.26103 15.984 4.63703 16.848C4.01303 17.712 3.26103 18.424 2.38103 18.984L0.485031 16.632C1.57303 15.944 2.43703 15.08 3.07703 14.04C3.71703 12.984 4.17303 11.832 4.44503 10.584C4.73303 9.32 4.87703 8.056 4.87703 6.792V4.512ZM5.59703 4.512H7.97303V6.792C7.97303 8.024 8.10903 9.24 8.38103 10.44C8.65303 11.64 9.10103 12.736 9.72503 13.728C10.349 14.704 11.197 15.504 12.269 16.128L10.421 18.432C9.23703 17.728 8.29303 16.776 7.58903 15.576C6.88503 14.376 6.37303 13.024 6.05303 11.52C5.74903 10 5.59703 8.424 5.59703 6.792V4.512ZM1.30103 3.12H11.213V5.688H1.30103V3.12ZM25.4672 1.776H40.5632V9.624H25.4672V1.776ZM37.4192 4.272H28.6112V7.128H37.4192V4.272ZM22.9952 11.736H43.1072V14.256H22.9952V11.736ZM31.4432 9.072H34.6112V12.432H31.4432V9.072ZM25.2272 15.864H40.6832V23.136H37.4912V18.36H25.2272V15.864ZM53.4712 3.54545V21H49.261V7.48295H49.1587L45.2553 9.86932V6.22159L49.5593 3.54545H53.4712Z"
        fill="#5A6379"
      />
    </svg>
  ),
  h2: (
    <svg width="49" height="24" viewBox="0 0 59 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.2855 0.887999H20.3335V23.112H17.2855V0.887999ZM9.96553 8.496H13.6615V11.088H9.96553V8.496ZM12.7975 1.248H15.7735V22.104H12.7975V1.248ZM5.18953 4.512H7.58953V6.792C7.58953 8.04 7.49353 9.272 7.30153 10.488C7.12553 11.704 6.84553 12.856 6.46153 13.944C6.07753 15.016 5.57353 15.984 4.94953 16.848C4.32553 17.712 3.57353 18.424 2.69353 18.984L0.797531 16.632C1.88553 15.944 2.74953 15.08 3.38953 14.04C4.02953 12.984 4.48553 11.832 4.75753 10.584C5.04553 9.32 5.18953 8.056 5.18953 6.792V4.512ZM5.90953 4.512H8.28553V6.792C8.28553 8.024 8.42153 9.24 8.69353 10.44C8.96553 11.64 9.41353 12.736 10.0375 13.728C10.6615 14.704 11.5095 15.504 12.5815 16.128L10.7335 18.432C9.54953 17.728 8.60553 16.776 7.90153 15.576C7.19753 14.376 6.68553 13.024 6.36553 11.52C6.06153 10 5.90953 8.424 5.90953 6.792V4.512ZM1.61353 3.12H11.5255V5.688H1.61353V3.12ZM25.7797 1.776H40.8757V9.624H25.7797V1.776ZM37.7317 4.272H28.9237V7.128H37.7317V4.272ZM23.3077 11.736H43.4197V14.256H23.3077V11.736ZM31.7557 9.072H34.9237V12.432H31.7557V9.072ZM25.5397 15.864H40.9957V23.136H37.8037V18.36H25.5397V15.864ZM45.7127 21V17.9659L52.0792 12.392C52.5565 11.9602 52.9627 11.5653 53.2979 11.2074C53.6332 10.8437 53.8888 10.4801 54.065 10.1165C54.2411 9.74716 54.3292 9.34659 54.3292 8.91477C54.3292 8.43182 54.2241 8.01989 54.0138 7.67898C53.8036 7.33239 53.5138 7.06534 53.1445 6.87784C52.7752 6.69034 52.3519 6.59659 51.8746 6.59659C51.3917 6.59659 50.9684 6.69602 50.6048 6.89489C50.2411 7.08807 49.957 7.36932 49.7525 7.73864C49.5536 8.10795 49.4542 8.55682 49.4542 9.08523H45.457C45.457 7.89773 45.7241 6.87216 46.2582 6.00852C46.7923 5.14489 47.5423 4.48011 48.5082 4.0142C49.4798 3.54261 50.6076 3.30682 51.8917 3.30682C53.2156 3.30682 54.3661 3.52841 55.3434 3.97159C56.3207 4.41477 57.0763 5.03409 57.6104 5.82954C58.1502 6.61932 58.4201 7.53693 58.4201 8.58239C58.4201 9.24716 58.2866 9.90625 58.0195 10.5597C57.7525 11.2131 57.2724 11.9347 56.5792 12.7244C55.8917 13.5142 54.9144 14.4602 53.6474 15.5625L51.5593 17.4886V17.5994H58.6332V21H45.7127Z"
        fill="#5A6379"
      />
    </svg>
  ),
  h3: (
    <svg width="49" height="24" viewBox="0 0 59 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.934 0.887999H19.982V23.112H16.934V0.887999ZM9.61397 8.496H13.31V11.088H9.61397V8.496ZM12.446 1.248H15.422V22.104H12.446V1.248ZM4.83797 4.512H7.23797V6.792C7.23797 8.04 7.14197 9.272 6.94997 10.488C6.77397 11.704 6.49397 12.856 6.10997 13.944C5.72597 15.016 5.22197 15.984 4.59797 16.848C3.97397 17.712 3.22197 18.424 2.34197 18.984L0.445969 16.632C1.53397 15.944 2.39797 15.08 3.03797 14.04C3.67797 12.984 4.13397 11.832 4.40597 10.584C4.69397 9.32 4.83797 8.056 4.83797 6.792V4.512ZM5.55797 4.512H7.93397V6.792C7.93397 8.024 8.06997 9.24 8.34197 10.44C8.61397 11.64 9.06197 12.736 9.68597 13.728C10.31 14.704 11.158 15.504 12.23 16.128L10.382 18.432C9.19797 17.728 8.25397 16.776 7.54997 15.576C6.84597 14.376 6.33397 13.024 6.01397 11.52C5.70997 10 5.55797 8.424 5.55797 6.792V4.512ZM1.26197 3.12H11.174V5.688H1.26197V3.12ZM25.4281 1.776H40.5241V9.624H25.4281V1.776ZM37.3801 4.272H28.5721V7.128H37.3801V4.272ZM22.9561 11.736H43.0681V14.256H22.9561V11.736ZM31.4041 9.072H34.5721V12.432H31.4041V9.072ZM25.1881 15.864H40.6441V23.136H37.4521V18.36H25.1881V15.864ZM52.0004 21.2386C50.6708 21.2386 49.4918 21.0114 48.4634 20.5568C47.4407 20.0966 46.6339 19.4631 46.043 18.6562C45.4521 17.8494 45.1509 16.9205 45.1396 15.8693H49.3839C49.4009 16.25 49.5231 16.5881 49.7504 16.8835C49.9776 17.1733 50.2873 17.4006 50.6793 17.5653C51.0714 17.7301 51.5174 17.8125 52.0174 17.8125C52.5174 17.8125 52.9577 17.7244 53.3384 17.5483C53.7248 17.3665 54.0259 17.1193 54.2418 16.8068C54.4577 16.4886 54.5629 16.125 54.5572 15.7159C54.5629 15.3068 54.4464 14.9432 54.2077 14.625C53.9691 14.3068 53.631 14.0597 53.1935 13.8835C52.7617 13.7074 52.2504 13.6193 51.6594 13.6193H49.9634V10.6193H51.6594C52.1765 10.6193 52.631 10.5341 53.0231 10.3636C53.4208 10.1932 53.7305 9.95455 53.9521 9.64773C54.1737 9.33523 54.2816 8.97727 54.2759 8.57386C54.2816 8.18182 54.1879 7.83807 53.9947 7.54261C53.8072 7.24148 53.543 7.00852 53.2021 6.84375C52.8668 6.67898 52.4776 6.59659 52.0344 6.59659C51.5685 6.59659 51.1452 6.67898 50.7646 6.84375C50.3896 7.00852 50.0913 7.24148 49.8697 7.54261C49.6481 7.84375 49.5316 8.19318 49.5202 8.59091H45.489C45.5004 7.55114 45.7901 6.63636 46.3583 5.84659C46.9265 5.05114 47.6992 4.42898 48.6765 3.98011C49.6594 3.53125 50.7788 3.30682 52.0344 3.30682C53.2844 3.30682 54.3839 3.52557 55.3327 3.96307C56.2816 4.40057 57.0202 4.99716 57.5487 5.75284C58.0771 6.50284 58.3413 7.35227 58.3413 8.30114C58.3469 9.28409 58.0259 10.0937 57.3782 10.7301C56.7362 11.3665 55.9094 11.7585 54.8981 11.9062V12.0426C56.2504 12.2017 57.2702 12.6392 57.9577 13.3551C58.6509 14.071 58.9947 14.9659 58.989 16.0398C58.989 17.0511 58.6907 17.9489 58.0941 18.733C57.5032 19.5114 56.6793 20.125 55.6225 20.5739C54.5714 21.017 53.364 21.2386 52.0004 21.2386Z"
        fill="#5A6379"
      />
    </svg>
  ),
  h4: (
    <svg width="50" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.6644 0.887999H19.7124V23.112H16.6644V0.887999ZM9.34444 8.496H13.0404V11.088H9.34444V8.496ZM12.1764 1.248H15.1524V22.104H12.1764V1.248ZM4.56844 4.512H6.96844V6.792C6.96844 8.04 6.87244 9.272 6.68044 10.488C6.50444 11.704 6.22444 12.856 5.84044 13.944C5.45644 15.016 4.95244 15.984 4.32844 16.848C3.70444 17.712 2.95244 18.424 2.07244 18.984L0.176438 16.632C1.26444 15.944 2.12844 15.08 2.76844 14.04C3.40844 12.984 3.86444 11.832 4.13644 10.584C4.42444 9.32 4.56844 8.056 4.56844 6.792V4.512ZM5.28844 4.512H7.66444V6.792C7.66444 8.024 7.80044 9.24 8.07244 10.44C8.34444 11.64 8.79244 12.736 9.41644 13.728C10.0404 14.704 10.8884 15.504 11.9604 16.128L10.1124 18.432C8.92844 17.728 7.98444 16.776 7.28044 15.576C6.57644 14.376 6.06444 13.024 5.74444 11.52C5.44044 10 5.28844 8.424 5.28844 6.792V4.512ZM0.992438 3.12H10.9044V5.688H0.992438V3.12ZM25.1586 1.776H40.2546V9.624H25.1586V1.776ZM37.1106 4.272H28.3026V7.128H37.1106V4.272ZM22.6866 11.736H42.7986V14.256H22.6866V11.736ZM31.1346 9.072H34.3026V12.432H31.1346V9.072ZM24.9186 15.864H40.3746V23.136H37.1826V18.36H24.9186V15.864ZM44.8786 18.1023V14.8125L52.0291 3.54545H54.9524V8.01136H53.2564L49.0717 14.642V14.7784H59.4268V18.1023H44.8786ZM53.3075 21V17.0966L53.3928 15.6562V3.54545H57.3388V21H53.3075Z"
        fill="#5A6379"
      />
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
  const { profile } = useAuthStore();
  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && editor) {
      try {
        // 1. 임시 이미지 표시 (사용자 경험 향상)
        const placeholderUrl = URL.createObjectURL(file);
        editor.chain().focus().setImage({ src: placeholderUrl }).run();

        // 2. 이미지 파일을 서버에 업로드
        const response = await postImage(file, profile!.clubId);

        // 3. 업로드된 이미지의 실제 URL 가져오기
        // const response2 = await getImageUrl(response.imgKey);

        // 4. 임시 URL을 실제 URL로 교체
        editor.chain().focus().setImage({ src: response.imgKey }).run();

        // 5. 메모리 누수 방지를 위한 임시 URL 정리
        URL.revokeObjectURL(placeholderUrl);
      } catch (error) {
        console.error('이미지 업로드 실패:', error);
        alert('이미지 업로드에 실패했습니다.');
      } finally {
        // 로딩 상태 해제 등의 정리 작업
      }
    }
  };

  if (!editor) return null;
  return (
    <div className="custom-tiptap-toolbar">
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className="toolbar-btn-title"
        title="H1"
      >
        {icons.h1}
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className="toolbar-btn-title"
        title="H2"
      >
        {icons.h2}
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className="toolbar-btn-title"
        title="H3"
      >
        {icons.h3}
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className="toolbar-btn-title"
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

export default function MDEditor({
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
        {/* <Button variant="secondary" className={S.buttonNotice}>
          게시판
        </Button> */}
      </div>
      {isEditing ? (
        <>
          <CustomMenuBar editor={editor} />
          <EditorContent editor={editor} />
        </>
      ) : (
        <>
          <div className="custom-tiptap-editor" dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </>
      )}
    </div>
  );
}
