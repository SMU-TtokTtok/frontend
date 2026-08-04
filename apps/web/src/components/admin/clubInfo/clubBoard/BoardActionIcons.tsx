import * as S from './clubBoard.css';

export function EditIcon() {
  return (
    <svg className={S.actionIcon} viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M13.86 3.62a1.9 1.9 0 0 1 2.69 2.69l-8.9 8.9-3.58.9.9-3.58 8.89-8.91Zm1.63 1.07a.4.4 0 0 0-.56 0l-.77.77.56.56.77-.77a.4.4 0 0 0 0-.56ZM6.32 13.33l-.24.94.94-.24 6.64-6.64-.7-.7-6.64 6.64Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function DeleteIcon() {
  return (
    <svg className={S.actionIcon} viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M7.5 3.25A1.75 1.75 0 0 1 9.25 1.5h1.5a1.75 1.75 0 0 1 1.75 1.75V4h3.25a.75.75 0 0 1 0 1.5h-.55l-.78 10.16A3.05 3.05 0 0 1 11.38 18H8.62a3.05 3.05 0 0 1-3.04-2.34L4.8 5.5h-.55a.75.75 0 0 1 0-1.5H7.5v-.75Zm1.5.75h2v-.75a.25.25 0 0 0-.25-.25h-1.5a.25.25 0 0 0-.25.25V4Zm-2.7 1.5.77 9.94c.08.62.61 1.06 1.24 1.06h3.38c.63 0 1.16-.44 1.24-1.06l.77-9.94H6.3Zm2.45 2.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Zm2.5 0a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Z"
        fill="currentColor"
      />
    </svg>
  );
}
