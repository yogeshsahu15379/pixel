import React, { useState } from 'react';
import Button from '../button/Button';
import Input from '../input/input';

const Form: React.FC = () => {
    const [formData, setFormData] = useState({
        domain: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                name="domain"
                value={formData?.domain}
                onChange={handleChange}
                placeholder="Type you dream domain."
            />
            <Button type="submit" text={'search'}/>
        </form>
    );
};

export default Form;