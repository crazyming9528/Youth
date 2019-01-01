export interface News {
  author: string;
  authorName: string;
  content: string;
  contentHtml: string;
  createTime: string;
  digest: string;
  discuss: number;
  firstImg: string;
  id: string;
  important: number;
  likeCount: number;
  modifyTime: string;
  status: number;
  title: string;
  type: string;
  typeName: string;
  viewCount: number;
}



export interface Res {
 code: number;
  map: {
    pageInfo: {
      list: any[]
    }
  };
}
