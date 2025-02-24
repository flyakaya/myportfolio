import { Link, IconButton } from '@mui/material';
import styled from 'styled-components';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import SpotifyIcon from '@mui/icons-material/MusicNote';

import { useTone } from '@/hooks';
import { media } from '@/styles/mediaQueries';



const socialLinks = [
  {
    icon: EmailIcon,
    href: 'mailto:flyakaya@gmail.com',
    label: 'Email'
  },
  {
    icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/fulya-kaya-3a66909b/',
    label: 'LinkedIn'
  },
  {
    icon: GitHubIcon,
    href: 'https://github.com/flyakaya',
    label: 'GitHub'
  },
  {
    icon: ArticleIcon,
    href: 'https://medium.com/@flyakaya',
    label: 'Medium'
  },
  {
    icon: SpotifyIcon,
    href: 'https://open.spotify.com/user/fulyakaya?si=a9e6186065e1460c',
    label: 'Spotify'
  }
];

const SocialLinks = () => {
  const { isFunMode } = useTone();
  const mappedSocialLinks = isFunMode() ? socialLinks: socialLinks.filter((link) => link.label !== 'Spotify');

  return (
    <Container>
      {mappedSocialLinks.map((link) => (
        <StyledLink
          key={link.label}
          href={link.href}
          target={link.href.startsWith('mailto') ? '_self' : '_blank'}
          rel="noopener noreferrer"
        >
          <StyledIconButton>
            <link.icon />
          </StyledIconButton>
          <LinkText>{link.label}</LinkText>
        </StyledLink>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 24px 0;

  ${media.down('sm')`
    gap: 16px;
    margin-top: 0;
  `}
`;

const StyledLink = styled(Link)`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    text-decoration: none;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const StyledIconButton = styled(IconButton)`
  && {
    color: white;
    font-size: 2rem;
    
    ${media.down('sm')`
      font-size: 1.5rem;
    `}
  }
`;

const LinkText = styled.span`
  margin-top: 8px;
  font-size: 0.9rem;
  opacity: 0.8;

  ${media.down('sm')`
    font-size: 0.8rem;
  `}
`;

export default SocialLinks; 