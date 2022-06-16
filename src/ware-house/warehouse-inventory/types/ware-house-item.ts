import { Description } from "./description";
import { Owner } from "./owner";

export class WareHouseItem {
    id: number;
    name: string;
    quantity: number;
    description: Description; 
    isInUse: boolean;
    startedUseAt: Date;
    owner: Owner;
}
