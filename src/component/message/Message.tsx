import React, { useEffect, useState } from 'react';
import './Message.css';

interface MessageProps {
    type: 'error' | 'success' | 'info' | 'warning';
    message: string;
    visible: boolean;
    onClose: () => void;
}

const Message: React.FC<MessageProps> = ({ type, message, visible, onClose }) => {
    const [isVisible, setIsVisible] = useState(visible);

    useEffect(() => {
        if (visible) {
            setIsVisible(true);
            const timer = setTimeout(() => {
                setIsVisible(false);
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [visible, onClose]);

    if (!isVisible) return null;

    return (
        <div className={`message ${type}`}>
            <p>{message}</p>
        </div>
    );
};

export default Message;