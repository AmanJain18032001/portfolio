
const API_BASE_URL = "/api";

/**
 * Reusable function for making API requests.
 * @param {string} path - API endpoint
 * @param {object} options - Fetch options
 */
export async function fetchJSON(path, options = {}) {
    const headers = new Headers(options.headers || {});

    headers.set("Accept", "application/json");

    // Set JSON content type when sending a JSON body.
    if (
        options.body &&
        !(options.body instanceof FormData) &&
        !headers.has("Content-Type")
    ) {
        headers.set("Content-Type", "application/json");
    }

    const response = await fetch(`${API_BASE_URL}${path}`, {
        ...options,
        headers
    });

    if (!response.ok) {
        throw new Error(
            `API request failed: ${response.status} ${response.statusText}`
        );
    }

    return response.json();
}
