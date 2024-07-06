export interface UserRequiredBody {
  email: string
  password: string
  username?: string
  collegeID?: number
}


export interface UserDecodeBody {
  userName: string,
  email: string,
  role: 'ADMIN' | 'STUDENT' | 'COLLEGE',
  collegeID: number
}