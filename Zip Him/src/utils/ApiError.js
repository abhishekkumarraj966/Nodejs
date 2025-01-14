// Define a custom error class to handle API errors
class ApiError extends Error {
    /**
     * Constructor for ApiError
     * @param {number} statusCode - HTTP status code (e.g., 400, 500)
     * @param {string} message - Error message (defaults to "Something went wrong")
     * @param {array} errors - Array of additional error details (optional)
     * @param {string} stack - Optional custom stack trace (defaults to current stack)
     */
    constructor(
        statusCode, // HTTP status code
        message = "Something went wrong", // Error message (default: generic)
        errors = [], // Optional array for multiple error details
        stack = "" // Optional custom stack trace
    ) {
        // Call the parent Error constructor with the message
        super(message);

        this.statusCode = statusCode; // Set the HTTP status code
        this.message = message;       // Set the error message
        this.success = false;         // Indicate failure
        this.errors = errors;         // Set additional error details (if any)
        this.data = null;             // Placeholder for any additional data (optional)

        // Capture the stack trace if not provided
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

// Export the ApiError class for use in other files
export { ApiError };
