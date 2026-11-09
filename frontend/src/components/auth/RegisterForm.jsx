import PasswordInput from "./PasswordInput";

function RegisterForm({ formData, handleChange, handleRegister, error }) {
  return (
    <form onSubmit={handleRegister} className="mt-8 space-y-5">
      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="mb-2 block text-sm font-medium text-stone-800"
        >
          Full Name
        </label>

        <input
          id="fullName"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          autoComplete="name"
          required
          className="w-full rounded-lg border border-stone-200 bg-stone-50/50 px-4 py-3.5 text-sm outline-none transition-all duration-200 focus:border-stone-900 focus:bg-white focus:ring-4 focus:ring-stone-900/5"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="registerEmail"
          className="mb-2 block text-sm font-medium text-stone-800"
        >
          Email Address
        </label>

        <input
          id="registerEmail"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          autoComplete="email"
          required
          className="w-full rounded-lg border border-stone-200 bg-stone-50/50 px-4 py-3.5 text-sm outline-none transition-all duration-200 focus:border-stone-900 focus:bg-white focus:ring-4 focus:ring-stone-900/5"
        />
      </div>

      {/* Password */}
      <PasswordInput
        name="password"
        label="Password"
        value={formData.password}
        onChange={handleChange}
        autoComplete="new-password"
        placeholder="Create a password"
      />

      {/* Confirm Password */}
      <PasswordInput
        name="confirmPassword"
        label="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
        autoComplete="new-password"
        placeholder="Confirm your password"
      />

      {/* Error */}
      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}

      {/* Register Button */}
      <button
        type="submit"
        className="w-full rounded-lg bg-stone-900 px-4 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-stone-700 hover:shadow-lg active:translate-y-0"
      >
        Create Account
      </button>
    </form>
  );
}

export default RegisterForm;
