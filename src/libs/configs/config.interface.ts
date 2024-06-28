export interface JwtConfig {
  secret: string;
  accessTokenExpiresIn: number;
  refreshTokenExpiresIn: number;
}

export interface AppConfig {
  projectName: string;
  version: string;
  environment: string;
  port: number;
  cors: string[];
}

export interface FirebaseConfig {
  type: string;
  projectId: string;
  privateKeyId: string;
  privateKey: string;
  clientEmail: string;
  clientId: string;
  authUri: string;
  tokenUri: string;
  authProviderCertUrl: string;
  clientCertUrl: string;
  universeDomain: string;
}
