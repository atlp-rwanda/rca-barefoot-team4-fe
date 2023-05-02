import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useMutation } from 'react-query';

import { Alert } from '@/components/Alert';
import Logo from '@/components/atoms/logo';
import AuthPagesLayout from '@/layouts/auth-pages/layout';
import { registerUser } from '@/services/api.service';

import type { TRegisterUser } from '../../services/types';

export default function LoginPage() {
  const router = useRouter();
  const mutation: any = useMutation((obj: TRegisterUser) => {
    return registerUser(obj);
  }, {});

  const [alert, setAlert] = useState(true);
  const [form, setForm] = useState<TRegisterUser>({
    firstName: '',
    lastName: '',
    role: 'USER',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleChange = (e: any) => {
    const { name } = e.target;
    setForm({ ...form, [name]: e.target.value });
  };

  const closeAlert = () => {
    setAlert(false);
  };
  const register = async () => {
    setAlert(true);
    try {
      await mutation.mutateAsync(form);
      router.push('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthPagesLayout>
      <div className="flex h-screen items-center justify-center">
        <div>
          <div className="flex justify-center">
            <Logo withText={false} width={125} height={125} />
          </div>
          {mutation.isError && alert ? (
            <Alert
              success={!mutation.isError}
              handleClose={closeAlert}
              message={
                mutation.isError
                  ? `${mutation.error.response.data.errors[0].message}`
                  : ''
              }
            />
          ) : null}
          <h4 className="mb-5 mt-8 text-center font-medium uppercase text-red-default">
            Register
          </h4>
          <form className="px-8 md:px-0">
            <div className="mt-2">
              <input
                type="email"
                value={form.email}
                onChange={handleChange}
                name="email"
                placeholder="Email"
                className="block w-full border border-[#838383] p-2.5 text-xs text-[#838383] focus:border-slate-800 focus:outline-none"
                required
              />
            </div>

            <div className="mt-2 flex">
              <input
                type="text"
                value={form.firstName}
                onChange={handleChange}
                name="firstName"
                placeholder="First name"
                className="mr-5 block w-72 border border-[#838383] p-2.5 text-xs text-[#838383] focus:border-slate-800 focus:outline-none"
                required
              />

              <input
                type="text"
                value={form.lastName}
                onChange={handleChange}
                name="lastName"
                placeholder="Last name"
                className="block w-72 border border-[#838383] p-2.5 text-xs text-[#838383] focus:border-slate-800 focus:outline-none"
                required
              />
            </div>

            <div className="mt-2 flex">
              <input
                type="password"
                value={form.password}
                onChange={handleChange}
                name="password"
                placeholder="Password"
                className="mr-5 block w-72 border border-[#838383] p-2.5 text-xs text-[#838383] focus:border-slate-800 focus:outline-none"
                required
              />

              <input
                type="password"
                value={form.passwordConfirm}
                onChange={handleChange}
                name="passwordConfirm"
                placeholder="Confirm Password"
                className="block w-72 border border-[#838383] p-2.5 text-xs text-[#838383] focus:border-slate-800 focus:outline-none"
                required
              />
            </div>
            <div className="mt-8">
              <button
                disabled={mutation.isLoading}
                type="button"
                onClick={register}
                className="w-full rounded-3xl bg-red-default p-2.5 text-sm uppercase text-white disabled:bg-[#e45f5f]"
              >
                Register
              </button>
              <p className="mt-2 text-center text-xs text-slate-600">
                Already Have an account?{' '}
                <span className="text-red-default">
                  <Link className="text-red-default" href={'/login'}>
                    Login
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </AuthPagesLayout>
  );
}
