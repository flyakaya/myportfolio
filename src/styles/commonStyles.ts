import { media } from '@/styles/mediaQueries';
import styled from 'styled-components';

export const FooterContent = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  padding: 0 15%;
  background: linear-gradient(rgb(0 0 0 / 50%), rgb(0 0 0 / 100%) 75%);
`;

export const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0 0;
  font-size: 1.2rem;
  opacity: 0.8;

  li {
    margin: 1rem 0;
  }
`;

export const SectionContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  padding: 0 15%;
  background: linear-gradient(to right, rgb(0 0 0 / 100%), rgb(0 0 0 / 50%));
  width: 100%;
  min-height: var(--app-height);
  display: flex;
  flex-direction: column;
`;

export const FooterContainer = styled.footer`
  position: relative;
  overflow: hidden;
  align-items: center;

  display: flex;
`;

export const ParallaxImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


export const P = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
  margin: 2px;;
  font-weight: 500;

   ${media.up('md')`
  font-size: 1.4rem;
  line-height: 1.6;
  margin: 5px;
  opacity: 0.8;
  `}
`;

export const H2 = styled.h2`
  font-size: 2.0rem;
    font-size: 5.4vw;  
  margin: 0;
  font-weight: 600;

  ${media.up('md')`
  font-size: 3.5rem;
  margin: 0;
  font-weight: 600;
  `}
`;

export const H3 = styled.h3`
  font-size: 1.5remx;
  margin: 0;
  font-weight: 600;
  margin-top: 16px;

  ${media.up('md')`
  font-size: 1.8rem;
  margin: 1rem 0 0;
  font-weight: 400;
  opacity: 0.8;
  margin-top: 24px;
  `}
`;

export const H4 = styled.h4`
  font-size: 14px;
  font-weight: 400;
  margin: 0.5rem 0 0;
  opacity: 0.8;

    ${media.up('md')`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0.5rem 0 0;
  opacity: 0.8;
  `}
`;
