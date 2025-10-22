import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { motion } from 'framer-motion';
import Content from '../components/Content';
import {
  AiFillHome,
  AiOutlineAppstore,
  AiOutlineControl,
  AiFillSetting,
  AiOutlineDownload,
  AiFillBuild,
  AiFillPlayCircle,
  AiFillQuestionCircle,
} from 'react-icons/ai';

const menuItems = [
    { text: 'Oversikt', icon: <AiFillHome />, route: 'oversikt' },
    { text: 'Oppretting av Ubuntu VM', icon: <AiOutlineAppstore />, route: 'oppretting' },
    { text: 'Nettverks konfigurasjon', icon: <AiOutlineControl />, route: 'nettverk' },
    { text: 'Installasjon av moduler', icon: <AiFillSetting />, route: 'installasjon' },
    { text: 'Nedlasting av server', icon: <AiOutlineDownload />, route: 'nedlasting' },
    { text: 'Build konfigurasjon', icon: <AiFillBuild />, route: 'build-konfigurasjon' },
    { text: 'Build serveren', icon: <AiFillBuild />, route: 'build-serveren' },
    { text: 'Server konfigurasjon', icon: <AiFillSetting />, route: 'server-konfigurasjon' },
    { text: 'Start serveren', icon: <AiFillPlayCircle />, route: 'start-serveren' },
    { text: 'Hvordan koble seg til', icon: <AiFillQuestionCircle />, route: 'kobling' },
];

const IRCPage: React.FC = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-50 overflow-hidden">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
        >
            <Header />
        </motion.div>
        
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            viewport={{ once: true }}
        >
            <div className="h-[85vh] w-screen mt-[5vh] flex flex-row items-center justify-center">
                <Sidebar menuItems={menuItems} />
                <Content />
            </div>
        </motion.div>
    </div>
  );
};

export default IRCPage;
