import { ApiUrls } from "../constant";

export class HomeActions {
    public static Branches = ApiUrls.HomeApi + '/Branches';
    public static Statistics = ApiUrls.HomeApi + '/Statistics';
    public static Country = ApiUrls.HomeApi + '/Country';
    public static GetShipmentTracking = ApiUrls.HomeApi + '/GetShipmentTracking';
    public static ReserveMailBox = ApiUrls.HomeApi + '/ReserveMailBox';
    public static ClientMessages = ApiUrls.HomeApi + '/ClientMessages';
    public static CreateClientMessages = ApiUrls.HomeApi + '/CreateClientMessages';
    public static RequestExternalShipment = ApiUrls.HomeApi + '/RequestExternalShipment';
    public static JoinToTeam = ApiUrls.HomeApi + '/JoinToTeam';
    public static Market = ApiUrls.HomeApi + '/Market';
}