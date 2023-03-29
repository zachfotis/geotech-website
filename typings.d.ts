interface HeroButton {
  exists: boolean;
  text: string;
  variant?: 'underlined' | 'bordered' | 'arrow';
  url: string;
}

type Button = {
  text: string;
  variant?: 'underlined' | 'bordered' | 'arrow';
  onClick?: () => void;
  url?: string;
  size?: 'sm' | 'md' | 'lg';
};
