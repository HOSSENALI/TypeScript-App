

export type Country={
    name:{common:string},
    flag:string,
    population:number,
    region:string,
    languages:MyLanguage
}
export type MyCountry = {
    countries: Country[];
  };
export type MyLanguage={
    [key:string]:string
}