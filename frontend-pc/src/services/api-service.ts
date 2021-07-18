import configure from "../configure";

export abstract class ApiService {
    protected baseUrl =  configure.apiBaseUrl;

    protected api<T>(url: string): Promise<T> {
        return fetch(this.baseUrl + "/" + url)
            .then(res => res.json())
    }
}
