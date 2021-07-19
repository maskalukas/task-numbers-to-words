import configure from "../configure";

export abstract class ApiService {
    protected baseUrl =  configure.apiBaseUrl;

    protected GET<T>(url: string): Promise<T> {
        return fetch(this.baseUrl + url, {
            method: "GET",
            headers: {
                "Content-Type": "text/plain"
            },
        })
            .then(res => res.json())
    }

    protected appendUrl(nextPartUrl: string): void {
        this.baseUrl += nextPartUrl;
    }
}
