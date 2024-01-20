import { toast } from 'sonner';
import { Button, Row } from 'antd';
import { FieldValues } from 'react-hook-form';
import PHForm from '../components/form/PHForm';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/hooks';
import PHInput from '../components/form/PHInput';
import { verifyToken } from '../utils/verifyToken';
import { TUser, setUser } from '../redux/features/auth/authSlice';
import { useLoginMutation } from '../redux/features/auth/authApi';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading('Logging in...');
    try {
      const res = await login(data).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;

      dispatch(setUser({ user, token: res.data.accessToken }));
      navigate(`/${user.role}/dashboard`);
      toast.success('Logged in', { id: toastId, duration: 2000 });
    } catch (err) {
      toast.error('Something went wrong', { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <PHForm
        onSubmit={onSubmit}
        defaultValues={{ id: 'A-0001', password: 'admin123' }}
      >
        <PHInput name="id" type="text" label="ID" />

        <PHInput name="password" type="text" label="Password" />

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </PHForm>
    </Row>
  );
};

export default Login;
