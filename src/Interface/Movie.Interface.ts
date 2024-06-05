import { CONSTANTS } from "../CONSTANTS"

export interface MovieInterface {
    backgroundImg: string,
    cardImg: string,
    description: string,
    subTitle: string,
    title:string,
    titleImg:string,
    type:string,
    id:string,
    category:string,
    is_watchlisted: boolean
};


export interface UserDetail {
    name: string | null,
    email: string| null,
    photo: string | null
}

export interface MovieCategory {
    recommend: MovieInterface[],
    original: MovieInterface[],
    newDisney: MovieInterface[],
    trending: MovieInterface[],
}

export interface MovieType {
    movie:MovieInterface[],
    series:MovieInterface[]
}

export interface IWatchListContext {
    watchList: MovieInterface[],
    setWatchList: React.Dispatch<React.SetStateAction<MovieInterface[]>>
  }

  export interface IUserLoginContext {
    userDetail: UserDetail,
    isUserLoggedIn: boolean,
    handleAuth: () => void
  }
  

  export interface RootState {
    user: UserState;
  }

  export interface UserState {
    userDetail: UserDetail;
  }

  interface SetUserDetailAction {
    type: typeof CONSTANTS.SET_USER_DETAIL;
    payload: UserDetail;
  }

  export type UserActionTypes = SetUserDetailAction;
  

