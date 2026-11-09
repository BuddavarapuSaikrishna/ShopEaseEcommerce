
import { Link } from "react-router-dom";

function AuthFooter({
  message,
  linkText,
  linkTo,
}) {
  return (
    <div className="mt-8">
      <p className="text-center text-sm text-gray-600">
        {message}{" "}
        <Link
          to={linkTo}
          className="font-semibold text-black underline underline-offset-4"
        >
          {linkText}
        </Link>
      </p>

      <p className="mt-6 text-center text-xs text-gray-400">
        By continuing, you agree to our{" "}
        <Link to="/terms" className="underline">
          Terms
        </Link>{" "}
        and{" "}
        <Link to="/privacy" className="underline">
          Privacy Policy
        </Link>.
      </p>
    </div>
  );
}

export default AuthFooter;
