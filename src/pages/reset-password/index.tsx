import Logo from '@/components/atoms/logo';
import AuthPagesLayout from '@/layouts/auth-pages/layout';

export default function ResetPasswordPage() {
  return (
    <AuthPagesLayout>
      <div className="flex h-screen items-center justify-center">
        <div>
          <div className="flex justify-center">
            <Logo withText={false} width={125} height={125} />
          </div>
          <h4 className="mb-5 mt-8 text-center font-medium uppercase text-red-default">
            Reset Password
          </h4>
          <p className="text-center text-xs font-light">
            Enter the activation token sent to your email and set your new
            password and re-type to confirm it.
          </p>
          <div className="px-8 md:px-0">
            <div className="mt-10">
              <input
                type="search"
                id="search-dropdown"
                placeholder="Enter token"
                className="block w-full border border-[#838383] p-2.5 text-xs text-[#838383] focus:border-slate-800 focus:outline-none"
                required
              />
            </div>
            <div className="mt-2 flex">
              <input
                type="password"
                id="search-dropdown"
                placeholder="New Password"
                className="mr-5 block w-72 border border-[#838383] p-2.5 text-xs text-[#838383] focus:border-slate-800 focus:outline-none"
                required
              />

              <input
                type="password"
                id="search-dropdown"
                placeholder="Confirm Password"
                className="block w-72 border border-[#838383] p-2.5 text-xs text-[#838383] focus:border-slate-800 focus:outline-none"
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
