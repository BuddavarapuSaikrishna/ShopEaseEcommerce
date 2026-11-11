import PasswordInput from "./PasswordInput";
import RememberMe from "./RememberMe";

function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
  rememberMe,
  setRememberMe,
  error,
  handleLogin,
  handleForgotPassword,
}) {
  return (
    <form onSubmit={handleLogin} className="mt-8 space-y-5">
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-800"
        >
          Email address
        </label>

        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="w-full rounded-lg border border-stone-200 bg-stone-50/50 px-4 py-3.5 text-sm text-stone-900 outline-none transition-all duration-200 placeholder:text-stone-400 hover:border-stone-400 focus:border-stone-900 focus:bg-white focus:ring-4 focus:ring-stone-900/5"
        />
      </div>

      {/* Password */}
      <PasswordInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Remember Me */}
      <RememberMe
        checked={rememberMe}
        onChange={setRememberMe}
        onForgotPassword={handleForgotPassword}
      />

      {/* Error message */}
      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}

      {/* Login button */}
      <button
        type="submit"
        className="w-full rounded-md bg-black px-4 py-3.5 text-sm font-semibold tracking-wide text-white transition duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
      >
        Sign in
      </button>
    </form>
  );
}

export default LoginForm;
