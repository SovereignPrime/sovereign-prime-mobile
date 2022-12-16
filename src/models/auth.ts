export interface AuthContextData {
  authData?: AuthData;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}

export interface AuthData {
  token: string;
  email: string;
  name: string;
}
