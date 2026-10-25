import { Home, ArrowLeft, SearchX } from "lucide-react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl text-center">
        {/* Illustration */}
        <div className="relative mb-8">
          <div className="absolute inset-0 mx-auto h-52 w-52 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="relative">
            <p className="text-[120px] sm:text-[180px] font-black leading-none tracking-tighter bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              404
            </p>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md rotate-12">
                <SearchX className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 shadow-2xl backdrop-blur-xl sm:p-12">
          <span className="inline-block rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-1.5 text-sm font-medium text-indigo-300">
            Page not found
          </span>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Oops! You’re lost in space.
          </h1>

          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-400">
            The page you’re looking for doesn’t exist or may have been moved.
            Let’s get you back on the right path.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5 hover:bg-indigo-400"
            >
              <Home size={19} />
              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-slate-200 transition hover:bg-white/10"
            >
              <ArrowLeft size={19} />
              Go Back
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-8 text-sm text-slate-500">
          Error code: 404 · Nothing to see here
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
