import QueryLink from '@/common/components/queryLink';
import Button from '@/common/ui/button';
import * as S from '../filter.css';
function ResetButton() {
  return (
    <QueryLink preserveQuery={false}>
      <Button variant="tertiary" className={S.ButtonStyle({ style: 'reset' })}>
        초기화
      </Button>
    </QueryLink>
  );
}

export default ResetButton;
