export class Item {
    private id: number = 0;
    private name: string = "";
    private price: number = 0;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public get Id(): number {
        return this.id;
    }

    public set Id(id: number) {
        this.id = id;
    }

    public get Name(): string {
        return this.name;
    }

    public set Name(name: string) {
        this.name = name;
    }

    public get Price(): number {
        return this.price;
    }

    public set Price(price: number) {
        this.price = price;
    }

} 