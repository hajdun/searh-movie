export interface WikiApiResult {
    [key: string]: IWikiResult;
}

export interface IWikiResult {
  pageid: number;
  ns: number;
  title: string;
  extract: string;
}
