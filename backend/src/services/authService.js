const validator = require("validator");
const argon2 = require("argon2");

const {
  emailExists,
  createUser,
  findUserByEmail,
} = require("../models/userModel");

// Helper to create errors with HTTP status
const createServiceError = (message, statusCode) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

//Validate Login input

const validateLoginInput = (data) => {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    throw createServiceError("Invalid login data", 400);
  }

  const { email, password } = data;

  if (typeof email !== "string" || typeof password !== "string") {
    throw createServiceError("Email and password are required", 400);
  }

  const normalizedEmail = email.trim().toLowerCase();

  if (!validator.isEmail(normalizedEmail)) {
    throw createServiceError("Please provide a valid email address", 400);
  }

  if (password.length === 0) {
    throw createServiceError("Password is required", 400);
  }

  return {
    email: normalizedEmail,
    password,
  };
};

// Validate registration input
const validateRegistrationInput = (data) => {
  // 1. Check request data
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    throw createServiceError("Invalid registration data", 400);
  }

  const { fullName, email, password } = data;

  // 2. Check input data types
  if (
    typeof fullName !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    throw createServiceError("Invalid registration data", 400);
  }

  // 3. Normalize inputs
  const normalizedName = fullName.trim();
  const normalizedEmail = email.trim().toLowerCase();

  // 4. Validate full name
  if (
    !validator.isLength(normalizedName, {
      min: 1,
      max: 100,
    })
  ) {
    throw createServiceError(
      "Full name must be between 1 and 100 characters",
      400,
    );
  }

  // 5. Validate email
  if (!validator.isEmail(normalizedEmail)) {
    throw createServiceError("Please provide a valid email address", 400);
  }

  // 6. Validate password length
  if (
    !validator.isLength(password, {
      min: 8,
      max: 128,
    })
  ) {
    throw createServiceError(
      "Password must be between 8 and 128 characters",
      400,
    );
  }

  // 7. Validate password strength
  if (
    !validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  ) {
    throw createServiceError(
      "Password must contain uppercase, lowercase, number and symbol",
      400,
    );
  }

  return {
    fullName: normalizedName,
    email: normalizedEmail,
    password,
  };
};

// Register customer
const registerUser = async (data) => {
  // 1. Validate customer details
  const validatedData = validateRegistrationInput(data);

  // 2. Check duplicate email
  const alreadyRegistered = await emailExists(validatedData.email);

  if (alreadyRegistered) {
    throw createServiceError("Email is already registered. Please login.", 409);
  }

  // 3. Hash password
  const passwordHash = await argon2.hash(validatedData.password, {
    type: argon2.argon2id,
  });

  // 4. Insert customer into database
  try {
    const userId = await createUser(
      validatedData.fullName,
      validatedData.email,
      passwordHash,
    );

    return {
      id: userId,
      fullName: validatedData.fullName,
      email: validatedData.email,
    };
  } catch (error) {
    // Handle simultaneous duplicate registrations
    if (error.code === "ER_DUP_ENTRY") {
      throw createServiceError(
        "Email is already registered. Please login.",
        409,
      );
    }

    throw error;
  }
};

const loginUser = async (data) => {
  // 1. Validate login details
  const validatedData = validateLoginInput(data);

  // 2. Find customer using email
  const user = await findUserByEmail(validatedData.email);

  // 3. Check whether customer exists
  if (!user) {
    throw createServiceError("Invalid email or password", 401);
  }

  // 4. Verify entered password with stored hash
  const isPasswordValid = await argon2.verify(
    user.password_hash,
    validatedData.password,
  );

  // 5. Reject incorrect password
  if (!isPasswordValid) {
    throw createServiceError("Invalid email or password", 401);
  }

  // 6. Return safe customer information
  return {
    id: user.id,
    fullName: user.full_name,
    email: user.email,
    role: user.role,
    subscription_type: user.subscription_type,
  };
};

module.exports = {
  registerUser,
  loginUser,
};
