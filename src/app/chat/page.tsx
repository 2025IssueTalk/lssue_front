'use client';
import { useState } from 'react';
import Chat from './components/Chat';
import SummaryPanel from './components/SummaryPanel';
import styled from 'styled-components';



export default function ChatPage() {
  const [proSummary, setProSummary] = useState('');
  const [conSummary, setConSummary] = useState('');
  const [proVerify, setProVerify] = useState('');
  const [conVerify, setConVerify] = useState('');

  const hasProContent = proSummary || proVerify;
  const hasConContent = conSummary || conVerify;

  return (
    <Main>
      <Sidebar side="pro">
        <SideTitle tone="pro">찬성 측</SideTitle>
        {hasProContent && (
          <>
            {proSummary && (
              <SummaryPanel title="찬성 주장 요약" body={proSummary} tone="pro" />
            )}
            {proVerify && (
              <SummaryPanel title="찬성 주장 검증" body={proVerify} tone="pro" variant="outline" />
            )}
          </>
        )}
      </Sidebar>
      <ChatContainer>
        <Chat
          onProSummary={(t) => {
            setProSummary(t);
            setProVerify('팩트체크 중입니다...');
          }}
          onConSummary={(t) => {
            setConSummary(t);
            setConVerify('팩트체크 중입니다...');
          }}
        />
      </ChatContainer>
      <Sidebar side="con">
        <SideTitle tone="con">반대 측</SideTitle>
        {hasConContent && (
          <>
            {conSummary && (
              <SummaryPanel title="반대 주장 요약" body={conSummary} tone="con" />
            )}
            {conVerify && (
              <SummaryPanel title="반대 주장 검증" body={conVerify} tone="con" variant="outline" />
            )}
          </>
        )}
      </Sidebar>
    </Main>
  );
}

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 24px;
  padding: 24px;
  background-color: #ffffff;
  min-height: 100vh;
  margin-top: 8vh;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.aside<{ side: 'pro' | 'con' }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${({ side }) =>
    side === 'pro'
      ? `border-left: 4px solid #3b82f6;`
      : `border-left: 4px solid #ef4444;`}
  padding-left: 12px;
`;

const ChatContainer = styled.section`
  display: flex;
  justify-content: center;
`;

const SideTitle = styled.h1<{ tone: 'pro' | 'con' }>`
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 6px;
  ${({ tone }) =>
    tone === 'pro'
      ? `color: #1d4ed8;`
      : `color: #b91c1c;`}
`;
