import React, { useState } from 'react';
import Button from '../button/Button';
import Input from '../input/input';
import generateDomainData from '../../utils/generateDomainData';
import "./Form.css";
interface FormProps {
    setSuggestedData: (data: any) => void;
}

const Form: React.FC<FormProps> = ({ setSuggestedData }) => {
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
        setSuggestedData(generateDomainData(formData.domain));

};

    return (
        <form onSubmit={handleSubmit} className='form-container card-conatiner'>
            <Input
                type="text"
                name="domain"
                value={formData?.domain}
                onChange={handleChange}
                placeholder="Type you dream domain."
            />
                <button><span>Search</span> </button>

        </form>
    );
};

export default Form;