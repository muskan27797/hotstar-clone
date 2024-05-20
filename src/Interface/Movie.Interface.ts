export interface MovieInterface {
    backgroundImg: string,
    cardImg: string,
    description: string,
    subTitle: string,
    title:string,
    titleImg:string,
    type:string,
    id:string
};

export interface MovieDataInterface {
    backgroundImg: string,
    cardImg: string,
    description: string,
    subTitle: string,
    title:string,
    titleImg:string,
    type:string,
};



export interface UserDetail {
    name: string | null,
    email: string| null,
    photo: string| null
}

export interface MovieCategory {
    recommend: MovieInterface[],
    original: MovieInterface[],
    newDisney: MovieInterface[],
    trending: MovieInterface[]
}

