export interface ILinkModel {
  rel: string; href: string; operations: string[]; linkedEntities: IAPIModel[]; linkedEntityServerSide: IAPIModel[];
}
export class LinkModel implements ILinkModel {
  constructor(public rel: string, public href: string, public operations: string[], public linkedEntities: IAPIModel[],
    public linkedEntityServerSide: IAPIModel[]) {}
}
export interface IFieldModel {
id: number; field: string; instance: number; value: any; override: number;
}
export class FieldModel implements IFieldModel {
  constructor(public id: number, public field: string, public instance: number,
     public value: any, public override: number) {}
}
export class UserDataModel {
  active: FieldModel;
  firstName: FieldModel;
  lastName: FieldModel;
  userName: FieldModel;
  userDescription: FieldModel;
}
export interface IAPIModel {
  id: number; key: string; site: string; data: UserDataModel; links: LinkModel[];
}
export interface ILoginToken {
  token: string; user: IAPIModel; expiration: Date;
}
export class LoginToken implements ILoginToken {
  constructor(public token: string, public user: IAPIModel, public expiration: Date) {}
}
