import { Input } from 'antd';
import { Controller } from 'react-hook-form';

type TInput = {
  name: string;
  type: string;
  label?: string;
};

const PHInput = ({ name, type, label }: TInput) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={name}>{label}: </label>
      <Controller
        name={name}
        render={({ field }) => (
          <Input {...field} type={type} id={name} placeholder={name} />
        )}
      />
    </div>
  );
};

export default PHInput;
