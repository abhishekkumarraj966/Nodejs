// Utility function to handle async route handlers and errors
const asyncHandler = (requestHandler) => {
  // Return a function that wraps the async route handler
  return (req, res, next) => {
    // Use Promise.resolve to catch any rejected promises from the handler
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

/*
Alternative Implementation:
The following version uses async/await syntax directly:

const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next); // Execute the async route handler
  } catch (error) {
    // Catch errors and pass them to the error handler middleware
    res.status(error.code || 500).json({
      success: false,
      message: error.message,
    });
  }
};
*/

// Export the asyncHandler function for reuse
export { asyncHandler };
