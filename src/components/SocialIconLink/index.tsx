import { Link } from '@chakra-ui/react';

interface SocialIconLinkProps {
  name: 'youtube' | 'instagram' | 'facebook' | 'twitter' | 'telegram';
  size: number;
}

const socialLinks = {
  youtube: {
    href: 'https://www.youtube.com/watch?v=ti6ZpNqz0Wg&t=3128s',
    icon: '/images/icons/youtube.svg',
    alt: 'link para site do youtube',
  },
  instagram: {
    href: 'https://bit.ly/ig-criptomaniacos-site',
    icon: '/images/icons/instagram.svg',
    alt: 'link para Instagram',
  },
  facebook: {
    href: 'https://bit.ly/fb-criptomaniacos-site',
    icon: '/images/icons/facebook.svg',
    alt: 'link para Facebook',
  },
  twitter: {
    href: 'https://bit.ly/fb-criptomaniacos-site',
    icon: '/images/icons/twitter.svg',
    alt: 'link para twitter',
  },
  telegram: {
    href: 'https://bit.ly/tg-criptomaniacos-site',
    icon: '/images/icons/telegram.svg',
    alt: 'link para Telegram',
  },
};

export function SocialIconLink({ name, size }: SocialIconLinkProps) {
  const { href, icon, alt } = socialLinks[name];
  return (
    <Link href={href} target="_blank">
      <img src={icon} alt={alt} width={size} height={size} />
    </Link>
  );
}
