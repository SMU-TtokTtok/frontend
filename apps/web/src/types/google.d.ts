// Google Identity Services(GIS) 전역 타입
// https://developers.google.com/identity/gsi/web/reference/js-reference

interface GoogleCredentialResponse {
  /** 구글이 발급한 ID 토큰(JWT). 백엔드에 idToken으로 그대로 전달한다. */
  credential: string;
  select_by?: string;
}

interface GoogleIdConfiguration {
  client_id: string;
  callback: (response: GoogleCredentialResponse) => void;
  auto_select?: boolean;
  cancel_on_tap_outside?: boolean;
  use_fedcm_for_prompt?: boolean;
  use_fedcm_for_button?: boolean;
  /** 사용자가 인증을 완료하지 않고 중간 iframe/팝업을 닫았을 때 호출된다. */
  intermediate_iframe_close_callback?: () => void;
}

interface GoogleButtonConfiguration {
  type?: 'standard' | 'icon';
  theme?: 'outline' | 'filled_blue' | 'filled_black';
  size?: 'small' | 'medium' | 'large';
  text?: 'signin_with' | 'signup_with' | 'continue_with' | 'signin';
  shape?: 'rectangular' | 'pill' | 'circle' | 'square';
  logo_alignment?: 'left' | 'center';
  width?: number;
  locale?: string;
  click_listener?: () => void;
}

interface GoogleAccountsId {
  initialize: (config: GoogleIdConfiguration) => void;
  renderButton: (parent: HTMLElement, options: GoogleButtonConfiguration) => void;
  prompt: () => void;
  disableAutoSelect: () => void;
}

interface Window {
  google?: {
    accounts: {
      id: GoogleAccountsId;
    };
  };
}
