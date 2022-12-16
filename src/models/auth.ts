export interface AuthContextData {
  authData?: AuthData;
  loading: boolean;
  signIn(_: AuthData): Promise<void>;
  signOut(): void;
}

export interface AuthData {
  token: string;
  email: string;
  name: string;
}
