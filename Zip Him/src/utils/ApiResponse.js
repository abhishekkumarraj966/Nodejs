// Define a reusable class for API responses
class ApiResponse {
    /**
     * Constructor for ApiResponse
     * @param {number} statusCode - HTTP status code (e.g., 200, 400, 500)
     * @param {any} data - The data or payload to send in the response
     * @param {string} message - A descriptive message (defaults to "Success")
     */
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCode; // The HTTP status code
        this.data = data;             // Response payload or data
        this.message = message;       // Optional response message
        this.success = statusCode < 400; // Boolean flag: true for success, false for error
    }
}

// Export the ApiResponse class for use in other files
export { ApiResponse };
