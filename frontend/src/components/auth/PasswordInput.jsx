import { useState } from "react";

function PasswordInput({
  label = "Password",
  name = "password",
  value,
  onChange,
  placeholder = "Enter your password",
  autoComplete = "current-password",
  error,
  success = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const borderColor = error
    ? "border-red-500 focus-within:border-red-600 focus-within:ring-4 focus-within:ring-red-500/10"
    : success
      ? "border-green-600 focus-within:border-green-700 focus-within:ring-4 focus-within:ring-green-500/10"
      : "border-stone-200 focus-within:border-stone-900 focus-within:ring-4 focus-within:ring-stone-900/5";

  const buttonColor = error
    ? "text-red-600 hover:text-red-800"
    : success
      ? "text-green-700 hover:text-green-900"
      : "text-stone-500 hover:text-stone-900";

  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className={`mb-2 block text-sm font-medium ${
          error ? "text-red-700" : "text-stone-800"
        }`}
      >
        {label}
      </label>

      <div
        className={`flex rounded-lg border bg-white transition-all duration-200 ${borderColor}`}
      >
        <input
          id={name}
          name={name}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
          className="min-w-0 flex-1 rounded-l-lg bg-transparent px-4 py-3.5 text-sm text-stone-900 outline-none placeholder:text-stone-400"
        />

        <button
          type="button"
          onClick={() => setShowPassword((previous) => !previous)}
          aria-label={showPassword ? "Hide password" : "Show password"}
          className={`rounded-r-lg px-4 text-sm font-medium transition-colors ${buttonColor}`}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      {error && (
        <p
          id={`${name}-error`}
          role="alert"
          className="mt-2 flex items-center gap-2 text-sm text-red-600"
        >
          <span aria-hidden="true">!</span>
          {error}
        </p>
      )}

      {!error && success && (
        <p className="mt-1 text-xs font-medium text-green-700">
          Password entered
        </p>
      )}
    </div>
  );
}

export default PasswordInput;
