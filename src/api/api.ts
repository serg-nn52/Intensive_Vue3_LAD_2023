export class Api {
  protected readonly baseUrl = import.meta.env.VITE_BASE_URL;

  protected getEntity = async function <T>(url: string, id: number | string = ''): Promise<T> {
    const response = await fetch(`${url}/${id}`);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data;
  };

  protected sendEntity = async function <T>(url: string, data: T = {} as T): Promise<boolean> {
    const response = await fetch(url, { method: 'POST', body: JSON.stringify(data) });
    if (!response.ok) throw new Error(response.statusText);
    return response.ok;
  };
}
