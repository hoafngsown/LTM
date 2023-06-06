export type AdminInfo = {
  birthday: string;
  id: number;
  name: string;
  role: number;
  userName: string;
  password?: string;
  passwordDecode?: string;
};

export type User = {
  accountId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  profileImage: string;
  profileImageUrl: string;
  coverImage: string | null;
  coverImageUrl: string | null;
  about: string | null;
  role: string;
  isSale: boolean;
};
