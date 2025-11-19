'use client';
import styled, { css } from 'styled-components';

interface Props {
  title: string;
  body: string;
  tone: 'pro' | 'con';
  variant?: 'filled' | 'outline';
}

export default function SummaryPanel({ title, body, tone, variant = 'filled' }: Props) {
  return (
    <Panel tone={tone} variant={variant}>
      <Title tone={tone}>{title}</Title>
      <Body>{body}</Body>
    </Panel>
  );
}

const toneStyles = {
  pro: {
    filled: css`
      background: #eff6ff;
      border-color: #93c5fd;
      color: #1e40af;
    `,
    outline: css`
      background: #fff;
      border-color: #93c5fd;
      color: #1e3a8a;
    `,
  },
  con: {
    filled: css`
      background: #fef2f2;
      border-color: #fca5a5;
      color: #7f1d1d;
    `,
    outline: css`
      background: #fff;
      border-color: #fca5a5;
      color: #991b1b;
    `,
  },
};

const Panel = styled.div<{ tone: 'pro' | 'con'; variant: 'filled' | 'outline' }>`
  border: 1px solid transparent;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;

  ${({ tone, variant }) => toneStyles[tone][variant]}
`;

const Title = styled.h2<{ tone: 'pro' | 'con' }>`
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 10px;
  border-bottom: 1px solid
    ${({ tone }) => (tone === 'pro' ? '#bfdbfe' : '#fecaca')};
  padding-bottom: 6px;
`;

const Body = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  white-space: pre-wrap;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(4px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
