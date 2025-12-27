export type FetchRetryOptions = {
  timeoutMs?: number;
  retries?: number;
  retryDelayMs?: number;
};

export class FetchTimeoutError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "FetchTimeoutError";
  }
}

export const fetchWithTimeout = async (
  input: RequestInfo | URL,
  init: RequestInit = {},
  timeoutMs = 5000
): Promise<Response> => {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => {
    controller.abort();
  }, timeoutMs);

  try {
    const response = await fetch(input, {
      ...init,
      signal: controller.signal,
    });
    return response;
  } catch (error) {
    if (controller.signal.aborted) {
      throw new FetchTimeoutError(
        `Request timed out after ${timeoutMs}ms for ${String(input)}`
      );
    }
    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
};

export const fetchWithRetry = async (
  input: RequestInfo | URL,
  init: RequestInit = {},
  options: FetchRetryOptions = {}
): Promise<Response> => {
  const { timeoutMs = 5000, retries = 1, retryDelayMs = 500 } = options;
  let attempt = 0;
  let lastError: unknown;

  while (attempt <= retries) {
    try {
      return await fetchWithTimeout(input, init, timeoutMs);
    } catch (error) {
      lastError = error;
      if (attempt >= retries) {
        break;
      }
      await new Promise((resolve) => window.setTimeout(resolve, retryDelayMs));
    }
    attempt += 1;
  }

  throw lastError;
};
