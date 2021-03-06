export interface User {
  id: number;
  username: string;
  motto: string;
  credits: number;
  pixels: number;
  online: boolean;
  figure: string;
}

export const exampleUser: User = {
  id: 1,
  username: 'Test',
  motto: 'I am a test!',
  credits: 1,
  pixels: 1,
  online: false,
  figure: 'sh-908-92.hd-180-1015.lg-285-77.hr-828-158640.ch-210-153640',
};
