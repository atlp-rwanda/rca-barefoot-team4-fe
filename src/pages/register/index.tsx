import Link from 'next/link';
import { useState } from 'react';

import { Alert } from '@/components/Alert';
import Logo from '@/components/atoms/logo';
import AuthPagesLayout from '@/layouts/auth-pages/layout';
import { registerUser } from '@/services/api.service';
import type { TRegisterUser } from '@/services/types';

export default function ResetPasswordPage() {
  const [response, setResponse] = useState<any>(null);
  const [alert, setAlert] = useState(true);
  const [loading, setLoading] = useState(false);
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
    setResponse(null);
  };
  const register = async () => {
    setLoading(true);
    try {
      const res = await registerUser(form);
      console.log(res);
      setLoading(false);
      if (!res.success) {
        setAlert(true);
        res.message = `${res?.message}: ${res?.error}`;
        setResponse(res);
      } else {
        console.log(res);
        res.message = `Token bought: ${res.data.token}`;
        setAlert(true);
        setResponse(res);
      }
    } catch (e) {
      setLoading(false);
      setAlert(true);
      console.log(e);
      setResponse(e);
    }
  };

  return (
    <AuthPagesLayout>
      <div className="flex h-screen items-center justify-center">
        <div>
          <div className="flex justify-center">
            <Logo withText={false} width={125} height={125} />
          </div>
          {alert ? (
            <Alert
              success={response?.success}
              handleClose={closeAlert}
              message={`${response?.message}`}
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
                disabled={loading}
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
