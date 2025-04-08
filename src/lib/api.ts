const API_BASE_URL = "https://api.globalwaterpolo.com/api";
// const API_BASE_URL = "https://gwpapi.kontic.xyz/api";
// const API_BASE_URL = "http://localhost:4000/api";

export const api = {
    // POST Request
    post: async (endpoint: string, data: any) => {
        const headers: Record<string, string> = {
            "Content-Type": "application/json",
        };

        const res = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: "POST",
            headers,
            body: JSON.stringify(data),
        });

        console.log(res);

        if (!res.ok) {
            const errorData = await res.json();
            const error = new Error(errorData.message || "POST request failed");
            (error as any).status = res.status;
            throw error;
        }

        return res.json();
    },

    // GET Request
    get: async (endpoint: string) => {
        const headers: Record<string, string> = {
            "Content-Type": "application/json",
        };

        const res = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: "GET",
            headers,
            cache:"no-cache"
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.log(errorData);
            throw new Error(errorData.message || "GET request failed");
        }

        return res.json();
    },

    // PATCH Request
    patch: async (endpoint: string, data: any) => {
        const headers: Record<string, string> = {
            "Content-Type": "application/json",
        };

        const res = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: "PATCH",
            headers,
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            const errorData = await res.json();
            const error = new Error(errorData.message || "PATCH request failed");
            (error as any).status = res.status;
            throw error;
        }

        return res.json();
    },

    // PUT Request
    put: async (endpoint: string, data: any) => {
        const headers: Record<string, string> = {
            "Content-Type": "application/json",
        };

        const res = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: "PUT",
            headers,
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            const errorData = await res.json();
            const error = new Error(errorData.message || "PUT request failed");
            (error as any).status = res.status;
            throw error;
        }

        return res.json();
    },

    // DELETE Request
    delete: async (endpoint: string) => {
        const headers: Record<string, string> = {
            "Content-Type": "application/json",
        };

        const res = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: "DELETE",
            headers,
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || "DELETE request failed");
        }

        return res.json();
    },
};
