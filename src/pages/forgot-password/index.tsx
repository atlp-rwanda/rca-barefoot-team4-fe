import Logo from '@/components/atoms/logo';
import AuthPagesLayout from '@/layouts/auth-pages/layout';

export default function ForgotPasswordPage() {
  return (
    <AuthPagesLayout>
      <div className="flex h-screen items-center justify-center">
        <div className="px-8 md:px-0">
          <div className="flex justify-center">
            <Logo withText={false} width={125} height={125} />
          </div>
          <h4 className="mb-5 mt-8 text-center font-medium uppercase text-red-default">
            Forgot Password
          </h4>
          <p className="text-center text-xs font-light">
            Enter your email here to get the verification code for recovering
            your password.
          </p>
          <div>
            <div className="mt-10">
              <input
                type="search"
                id="search-dropdown"
                placeholder="Enter your email"
                className="block w-full border border-[#838383] p-2.5 text-xs text-[#838383] focus:border-slate-800 focus:outline-none"
                required
              />
            </div>
            <div className="mt-8">
              <button className="w-full rounded-3xl bg-red-default p-2.5 text-sm uppercase text-white">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </AuthPagesLayout>
  );
}
