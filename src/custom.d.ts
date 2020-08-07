
type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createdAt?: Date; //可以写Date类
};

type Tag={
    id: string;
    name: string;
}
type TagListModel={
    data: Tag[];
    fetch: () => Tag[];
    update: (id: string,name: string) => 'success'|'not found'|'duplicated';
    create: (name: string) => 'success' | 'duplicated';  //success表示成功，duplicated表示重复
    save: () => void;
    remove: (id: string) => boolean;
}

interface Window{    //用来声明window上面有一个属性叫做tagList
    tagList: Tag[];
}