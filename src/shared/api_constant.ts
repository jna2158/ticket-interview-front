export const HOME_URL = process.env.NODE_ENV === "development" ? "http://localhost:8080" : "https://ticket-interview.com";
export const API_HOST = process.env.NODE_ENV === "development" ? "http://localhost:8000" : "https://ticket-interview.com";
export const LOGIN_URL = process.env.NODE_ENV === "development" ? "http://localhost:8000" : "https://ticket-interview.com";
export const WS_URL = process.env.NODE_ENV === "development" ? "ws://localhost:8000" : "wss://ticket-interview.com";