import { useEffect, useState, useRef } from 'react';
import { ChatInput, ChatMessage } from '../../ui';
import './style.css';

const chatMessages = [
  {
    id: 8,
    user: { userName: 'silenttiger', avatarUrl: 'https://i.pravatar.cc/150?u=5' },
    text: { content: 'Who else is watching from Europe? 🌍', isSpecial: false },
  },
  {
    id: 9,
    user: { userName: 'firefox_dev', avatarUrl: null },
    text: { content: "Check out the new bidding system, it's wild!", isSpecial: true },
    color: '#e67e22',
  },
  {
    id: 10,
    user: { userName: 'pixelwizard', avatarUrl: 'https://i.pravatar.cc/150?u=6' },
    text: { content: 'How do I participate in the giveaway?', isSpecial: false },
  },
  {
    id: 11,
    user: { userName: 'neon_rider', avatarUrl: null },
    text: { content: 'Just joined! What did I miss?', isSpecial: false },
    color: '#00d2d3',
  },
  {
    id: 12,
    user: { userName: 'shadow_walker', avatarUrl: 'https://i.pravatar.cc/150?u=7' },
    text: { content: 'The UI of this app is so clean.', isSpecial: false },
  },
  {
    id: 13,
    user: { userName: 'matrix_reloaded', avatarUrl: 'https://i.pravatar.cc/150?u=8' },
    text: { content: 'Can someone explain the auction rules again?', isSpecial: false },
  },
  {
    id: 14,
    user: { userName: 'crypto_king', avatarUrl: null },
    text: { content: 'HODL everyone! Wait for the drop.', isSpecial: true },
    color: '#2ecc71',
  },
  {
    id: 15,
    user: { userName: 'morning_star', avatarUrl: 'https://i.pravatar.cc/150?u=9' },
    text: { content: 'Good morning from Tokyo! 🗼', isSpecial: false },
  },
  {
    id: 16,
    user: { userName: 'tech_guru', avatarUrl: null },
    text: { content: 'React 19 is going to be a game changer.', isSpecial: false },
    color: '#341f97',
  },
  {
    id: 17,
    user: { userName: 'coffee_lover', avatarUrl: 'https://i.pravatar.cc/150?u=10' },
    text: { content: 'Just made some fresh espresso for the stream ☕', isSpecial: false },
  },
  {
    id: 18,
    user: { userName: 'urban_explorer', avatarUrl: 'https://i.pravatar.cc/150?u=11' },
    text: { content: 'Where was this video filmed?', isSpecial: false },
  },
  {
    id: 19,
    user: { userName: 'night_owl', avatarUrl: null },
    text: { content: 'Late night vibes are the best.', isSpecial: false },
    color: '#10ac84',
  },
  {
    id: 20,
    user: { userName: 'speed_demon', avatarUrl: 'https://i.pravatar.cc/150?u=12' },
    text: { content: "VROOOOM! Let's goooo! 🏎️", isSpecial: true },
  },
  {
    id: 21,
    user: { userName: 'data_scientist', avatarUrl: null },
    text: { content: 'Analyzing the bid patterns right now...', isSpecial: false },
    color: '#54a0ff',
  },
  {
    id: 22,
    user: { userName: 'mountain_climber', avatarUrl: 'https://i.pravatar.cc/150?u=13' },
    text: { content: 'This stream is the peak of entertainment!', isSpecial: false },
  },
  {
    id: 23,
    user: { userName: 'art_deco', avatarUrl: null },
    text: { content: 'The color palette here is beautiful.', isSpecial: false },
    color: '#ff9ff3',
  },
  {
    id: 24,
    user: { userName: 'gamer_girl_96', avatarUrl: 'https://i.pravatar.cc/150?u=14' },
    text: { content: 'Anyone up for a match after the stream?', isSpecial: false },
  },
  {
    id: 25,
    user: { userName: 'mystery_guest', avatarUrl: null },
    text: { content: 'I have a surprise for the chat at the end!', isSpecial: true },
    color: '#222f3e',
  },
];

export const ChatSidebar = () => {
  const [message, setMessage] = useState([
    {
      id: 1,
      user: { userName: 'tinyanda866', avatarUrl: null },
      text: {
        content: 'Lorem ipsum dolor sit amet consectetur. Viverra donec pellentesque nulla amet.',
        isSpecial: false,
      },
      color: '#6c5ce7',
    },
    {
      id: 2,
      user: { userName: 'beautifulbutterfly101', avatarUrl: 'https://i.pravatar.cc/150?u=1' },
      text: {
        content: 'Lorem ipsum dolor sit amet consectetur. Tortor id sit a nec.',
        isSpecial: false,
      },
    },
    {
      id: 3,
      user: { userName: 'whiterabbit554', avatarUrl: 'https://i.pravatar.cc/150?u=2' },
      text: {
        content:
          'Lorem ipsum dolor sit 😊 amet consectetur. At fringilla aenean quis mattis ut aliquet. 😊',
        isSpecial: false,
      },
    },
    {
      id: 4,
      user: { userName: 'brownbear646', avatarUrl: 'https://i.pravatar.cc/150?u=3' },
      text: {
        content:
          'Lorem ipsum dolor sit amet consectetur. Hac at velit odio aliquam sapien ullamcorper ✔️',
        isSpecial: true,
      },
    },
    {
      id: 5,
      user: { userName: 'lazymeercat616', avatarUrl: null },
      text: {
        content: 'Lorem ipsum dolor sit amet consectetur. Eget nunc odio mollis sed vitae posuere.',
        isSpecial: false,
      },
      color: '#d63031',
    },
    {
      id: 6,
      user: { userName: 'coolshark22', avatarUrl: 'https://i.pravatar.cc/150?u=4' },
      text: { content: "Is the stream starting soon? Can't wait! 🚀", isSpecial: false },
    },
    {
      id: 7,
      user: { userName: 'goldeneagle99', avatarUrl: null },
      text: { content: 'The quality looks amazing today.', isSpecial: false },
      color: '#f1c40f',
    },
  ]);
  const [valueMess, setValueMess] = useState('');

  const scrollContainerRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setValueMess(value);
  };

  const handleKeyDown = (e) => {
    const newMessage = {
      id: new Date(),
      user: { userName: 'Visitor', avatarUrl: null },
      text: {
        content: valueMess,
        isSpecial: false,
      },
      color: '#6c5ce7',
    };

    if (e.key === 'Enter') {
      setMessage((prev) => [...prev, newMessage]);
      setValueMess('');
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  }, [message]);

  useEffect(() => {
    const addMessage = async () => {
      while (true) {
        for (let i = 0; i < chatMessages.length; i++) {
          await new Promise((res) => setTimeout(res, 60000));

          setMessage((prev) => [...prev, chatMessages[i]]);

          if (i === chatMessages.length - 1) {
            await new Promise((res) => setTimeout(res, 2000));
            setMessage([]);
          }
        }
      }
    };

    addMessage();
  }, []);

  return (
    <div className="chat-container">
      <div className="chat-messages" ref={scrollContainerRef}>
        {message.map((msg, i) => (
          <ChatMessage key={i} user={msg.user} text={msg.text} color={msg.color} />
        ))}
      </div>
      <ChatInput value={valueMess} onChange={handleChange} handleKeyDown={handleKeyDown} />
    </div>
  );
};
