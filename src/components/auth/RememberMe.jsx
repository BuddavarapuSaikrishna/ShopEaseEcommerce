
function RememberMe({
  checked,
  onChange,
  onForgotPassword,
}) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <label className="flex items-center gap-2 text-gray-600">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="h-4 w-4 accent-black"
        />

        Remember me
      </label>

      <button
        type="button"
        onClick={onForgotPassword}
        className="text-black underline underline-offset-4 hover:text-gray-600"
      >
        Forgot password?
      </button>
    </div>
  );
}

export default RememberMe;
