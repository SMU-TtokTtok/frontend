const useDownloadFile = () => {
  const handleDownload = async (blob: Blob, filePath: string, fileName?: string) => {
    try {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;

      const splitAnswerValue = filePath.split('.');
      const extension = splitAnswerValue[splitAnswerValue.length - 1].split('?')[0];
      link.download = `${fileName || 'download'}.${extension}`;

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('파일 다운로드 실패:', error);
    }
  };

  return { handleDownload };
};

export default useDownloadFile;
