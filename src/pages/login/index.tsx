import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useMutation } from 'react-query';

import { Alert } from '@/components/Alert';
import Logo from '@/components/atoms/logo';
import AuthPagesLayout from '@/layouts/auth-pages/layout';

import { loginUser } from '../../services/api.service';
import type { TLogin } from '../../services/types';

export default function RegisterPage() {
  const router = useRouter();
  const mutation: any = useMutation((obj: TLogin) => {
    return loginUser(obj);
  });

  const [alert, setAlert] = useState(true);
  const [form, setForm] = useState<TLogin>({
    email: '',
    password: '',
  });

  const handleChange = (e: any) => {
    const { name } = e.target;
    setForm({ ...form, [name]: e.target.value });
  };

  const closeAlert = () => {
    setAlert(false);
  };
  const login = async () => {
    setAlert(true);
    const res = await mutation.mutateAsync(form);
    localStorage.setItem('auth-token', res.accessToken);
    router.push('/');
  };

  return (
    <AuthPagesLayout>
      <div className="flex h-screen items-center justify-center">
        <div className="w-4/12">
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
            Login
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
            <div className="mt-2">
              <input
                type="password"
                value={form.password}
                onChange={handleChange}
                name="password"
                placeholder="Password"
                className="block w-full border border-[#838383] p-2.5 text-xs text-[#838383] focus:border-slate-800 focus:outline-none"
                required
              />
            </div>

            <div className="mt-8">
              <button
                disabled={mutation.isLoading}
                type="button"
                onClick={login}
                className="w-full rounded-3xl bg-red-default p-2.5 text-sm uppercase text-white disabled:bg-[#e45f5f]"
              >
                Login
              </button>
              <p className="mt-2 text-center text-xs text-slate-600">
                Don&apos;t have an account ?
                <span className="text-red-default">
                  <Link className="text-red-default" href={'/register'}>
                    Register
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
