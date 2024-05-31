import axios, { AxiosInstance, AxiosRequestConfig, ResponseType } from "axios";

class AxiosBuilder {
  private baseURL: string = "";
  private headers: Record<any, any> = {};
  private timeout: number = 60000; // Request failed with 60 second
  private withCreds: boolean = false;
  private responseType: ResponseType = "json";
  // Custom Another Props  with Your Position

  withBaseURL(baseURL: string): AxiosBuilder {
    this.baseURL = baseURL;
    return this;
  }

  withHeaders(headers: Record<any, any>): AxiosBuilder {
    this.headers = headers;
    return this;
  }

  withTimeout(timeout: number): AxiosBuilder {
    this.timeout = timeout;
    return this;
  }

  withResponseType(responseType: ResponseType): AxiosBuilder {
    this.responseType = responseType;
    return this;
  }

  build(): AxiosInstance {
    const config: AxiosRequestConfig = {
      baseURL: this.baseURL,
      headers: this.headers,
      timeout: this.timeout,
      responseType: this.responseType,
    };

    return axios.create(config);
  }
}

export default AxiosBuilder;
