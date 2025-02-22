import React, { useEffect, useState } from 'react';

interface MessageProps {
    msgType: 'success' | 'error' | 'info' | 'warning';
    text: string;
    dismissible: boolean;
    dismissDuration?: number;
}

const Message: React.FC<MessageProps> = ({ msgType, text, dismissible, dismissDuration }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (dismissible && dismissDuration) {
            const timer = setTimeout(() => {
                setVisible(false);
            }, dismissDuration);

            return () => clearTimeout(timer);
        }
    }, [dismissible, dismissDuration]);

    if (!visible) return null;

    return (
        <div className={`message ${msgType}`}>
           <p> <strong>{msgType.toUpperCase()}: </strong>{text}</p>
            {dismissible && <button onClick={() => setVisible(false)} style={{ marginLeft: '10px' }}>Dismiss</button>}
        </div>
    );
};

export default Message;