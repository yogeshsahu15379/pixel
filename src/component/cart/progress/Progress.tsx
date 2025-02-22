import React from 'react';

interface ProgressProps {
    limit: number;
    current: number;
}

const Progress: React.FC<ProgressProps> = ({ limit, current }) => {
    const percentage = Math.min((current / limit) * 100, 100);

    return (
        <div style={{
            marginTop: "10px", border: '1px solid #ccc', borderRadius: '4px', padding: '2px', width: '100%'
        }}>
            <div
                style={{
                    width: `${percentage}%`,
                    backgroundColor: '#ccc',
                    height: '4px',
                    borderRadius: '4px',
                    textAlign: 'center',
                    color: 'white',
                    lineHeight: '24px',
                }}
            >
            </div>
        </div>
    );
};

export default Progress;