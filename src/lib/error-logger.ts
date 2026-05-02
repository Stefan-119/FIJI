/**
 * Safe error logger for development and production
 * Handles network errors, CORS issues, and runtime errors gracefully
 */

interface ErrorLog {
  message: string;
  type: "network" | "cors" | "runtime" | "unknown";
  source?: string;
  timestamp: string;
  environment: string;
  details?: Record<string, unknown>;
}

class ErrorLogger {
  private logs: ErrorLog[] = [];
  private maxLogs = 50;

  /**
   * Log an error with context
   */
  log(error: Error | string, type: ErrorLog["type"] = "runtime", details?: Record<string, unknown>) {
    const message = typeof error === "string" ? error : error.message;
    const stack = typeof error === "string" ? undefined : error.stack;

    const errorLog: ErrorLog = {
      message,
      type,
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || "unknown",
      details: {
        ...details,
        stack: stack && process.env.NODE_ENV === "development" ? stack : undefined,
      },
    };

    this.logs.push(errorLog);

    // Keep logs manageable
    if (this.logs.length > this.maxLogs) {
      this.logs.shift();
    }

    // Console output for development
    if (process.env.NODE_ENV === "development") {
      console.error(
        `[FIJI Error Logger - ${type.toUpperCase()}]`,
        message,
        details || ""
      );
    }

    return errorLog;
  }

  /**
   * Log network errors specifically
   */
  logNetworkError(url: string, error: Error, statusCode?: number) {
    return this.log(error, "network", {
      url,
      statusCode,
      type: "Failed to fetch external resource",
    });
  }

  /**
   * Log CORS errors
   */
  logCorsError(url: string, origin?: string) {
    return this.log(
      `CORS policy blocked request to ${url}`,
      "cors",
      {
        url,
        origin: origin || window.location.origin,
        message: "Consider using an API proxy or backend endpoint",
      }
    );
  }

  /**
   * Get all logged errors
   */
  getLogs() {
    return this.logs;
  }

  /**
   * Clear logs
   */
  clear() {
    this.logs = [];
  }
}

export const errorLogger = new ErrorLogger();
