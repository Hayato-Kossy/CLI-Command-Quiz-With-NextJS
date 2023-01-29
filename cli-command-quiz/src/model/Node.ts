import { LinkedList } from "./LinkedList"; 
export class Node{
    private next:Node|null;
    private list:LinkedList|null;

    constructor(private name:string, private attribute:string, private parent:Node|null, private content = "No data"){
        this.name = name;
        this.attribute = attribute;
        this.parent = parent;
        this.content = content;
        this.next = null;
        this.list = new LinkedList();
    }

    public get getName():string{
        return this.name;
    }

    public set setName(name:string){
        this.name = name;
    }

    public get getAttribute():string{
        return this.attribute;
    }

    public set setAttribute(attribute:string){
        this.attribute = attribute;
    }

    public get getParent():Node|null{
        return this.parent;
    }

    public set setParent(parent:Node|null){
        this.parent = parent;
    }

    public get getContent():string{
        return this.content;
    }

    public set setContent(content:string){
        this.content = content;
    }  

    public get getNext():Node|null{
        return this.next;
    }

    public set setNext(next:Node|null){
        this.next = next;
    }  

    public get getList():LinkedList | null{
        return this.list;
    }

    public set setList(list:LinkedList | null){
        this.list = list;
    }
}