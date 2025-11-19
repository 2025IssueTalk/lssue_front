'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

type Msg = { id: string; role: 'user' | 'system' | 'pro' | 'con'; text: string };
type Incoming = {
  type: 'chat' | 'summary' | 'participants' | 'joinedDebate';
  role?: 'pro' | 'con' | 'user' | 'system';
  text?: string;
  participants?: string[];
  roomId?: string;
};

const WS_URL = 'ws://localhost:8080';
const API_URL = 'http://localhost:8080';

export default function Chat({
  onProSummary, //찬성 메시지
  onConSummary, //반대 메세지
  roomId,   // 방 ID를 전달받도록 추가
}: {
  onProSummary: (t: string) => void;
  onConSummary: (t: string) => void;
  roomId: string;
}) {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [participants, setParticipants] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const listRef = useRef<HTMLDivElement>(null);

  const ws = useMemo(() => {
    if (typeof window === 'undefined') return null as any;
    const s = new WebSocket(WS_URL);
    s.addEventListener('open', () => {
      console.log('[WS] connected');

      // 방 입장 요청
      s.send(JSON.stringify({ event: 'joinDebate', roomId }));
    });

    s.addEventListener('close', () => {
      console.log('[WS] closed');

      // 방 퇴장 요청
      s.send(JSON.stringify({ event: 'leaveDebate', roomId }));
    });
    return s;
  }, [roomId]);

  // WebSocket 메시지 처리
  useEffect(() => {
    if (!ws) return;

    const onMessage = (ev: MessageEvent) => {
      const data: Incoming = JSON.parse(ev.data);

      // 참여자 목록 업데이트
      if (data.type === 'participants' && data.participants) {
        setParticipants(data.participants);
        return;
      }

      // 방 참여 성공 메시지
      if (data.type === 'joinedDebate') {
        console.log(`방 입장 완료: ${data.roomId}`);
        setParticipants(data.participants ?? []);
        return;
      }

      // summary 반응 처리
      if (data.type === 'summary') {
        if (data.role === 'pro') onProSummary(data.text!);
        if (data.role === 'con') onConSummary(data.text!);
        return;
      }

      // 수신 채팅 메시지
      if (data.type === 'chat') {
        setMessages((prev) => [
          ...prev,
          { id: crypto.randomUUID(), role: data.role as Msg['role'], text: data.text! },
        ]);
      }
    };

    ws.addEventListener('message', onMessage);
    return () => ws.removeEventListener('message', onMessage);
  }, [ws, onProSummary, onConSummary]);

  // 채팅 보내기
  const send = () => {
    if (!input.trim() || !ws || ws.readyState !== WebSocket.OPEN) return;

    const text = input.trim();

    ws.send(
      JSON.stringify({ type: 'chat', role: 'user', text, roomId })
    );

    if (text.includes('찬성')) onProSummary(text);
    if (text.includes('반대')) onConSummary(text);

    setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: 'user', text }]);
    setInput('');
  };

  return (
    <ChatWrapper>
      <Header>
        <small>오늘의 주제</small>  {/* 주제 나중에 받는거 만들어야함 */}
        <h2>윤석열 탄핵</h2>
        <p>참여자 {participants.length}명</p>
      </Header>

      <Messages ref={listRef}>
        {messages.length === 0 && <Empty>대화를 시작해 보세요…</Empty>}
        {messages.map((m) => (
          <Bubble key={m.id} role={m.role}>
            <span>
              {m.role === 'user'
                ? '나'
                : m.role === 'pro'
                ? '찬성'
                : m.role === 'con'
                ? '반대'
                : 'AI'}
            </span>
            {m.text}
          </Bubble>
        ))}
      </Messages>

      <InputBox>
        <Input
          placeholder="메시지를 입력하세요"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
        />
        <SendButton onClick={send} disabled={!input.trim()}>
          보내기
        </SendButton>
      </InputBox>
    </ChatWrapper>
  );
}



const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 85vh;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  width: 100%;
  background: white;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(108, 105, 105, 0.05);
`;

const Header = styled.div`
  background: #67847F;
  color: white;
  text-align: center;
  padding: 16px;
  line-height: 1.4;
  h2 {
    font-size: 1.1rem;
    font-weight: 700;
  }
  small {
    opacity: 0.8;
  }
  p {
    font-size: 0.8rem;
    opacity: 0.75;
  }
`;

const Messages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #f8fafc;
`;

const Empty = styled.div`
  color: #94a3b8;
  text-align: center;
  margin-top: 100px;
`;

const Bubble = styled.div<{ role: Msg['role'] }>`
  max-width: 70%;
  padding: 12px 16px;
  border-radius: 16px;
  font-size: 0.9rem;
  white-space: pre-wrap;
  align-self: ${({ role }) =>
    role === 'user' ? 'flex-end' : 'flex-start'};

  ${({ role }) =>
    role === 'user' &&
    css`
      background: #d1fae5;
      color: #065f46;
    `}
  ${({ role }) =>
    role === 'pro' &&
    css`
      background: #dbeafe;
      color: #1e40af;
    `}
  ${({ role }) =>
    role === 'con' &&
    css`
      background: #fee2e2;
      color: #7f1d1d;
    `}
  ${({ role }) =>
    role === 'system' &&
    css`
      background: #e2e8f0;
      color: #1e293b;
    `}

  span {
    display: block;
    font-size: 0.75rem;
    opacity: 0.7;
    margin-bottom: 4px;
  }
`;

const InputBox = styled.div`
  display: flex;
  padding: 16px;
  background: #f1f5f9;
  gap: 8px;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  font-size: 0.9rem;
  &:focus {
    outline: 2px solid #34d399;
    border-color: #34d399;
  }
`;

const SendButton = styled.button`
  padding: 12px 24px;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #059669;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
