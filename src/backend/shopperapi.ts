import { ShopItemResource, ShopListItemsResource, ShopListResource, ShopperResource } from "../Resources";
import { fetchWithErrorHandling } from "./validation";

const HOST = process.env.REACT_APP_API_SERVER_URL;

/**
 * Ergänzen Sie hier die Anbindung an den Server
 */


export async function getShopper(): Promise<ShopperResource> {
    const url = `${HOST}/api/shopper`;
        const res: ShopperResource = await fetchWithErrorHandling(url)
        return res
}

export async function getShopItems(shopListId: string): Promise<ShopListItemsResource> {
    const url = `${HOST}/api/shoplist/${shopListId}/shopitems`
        const res: ShopListItemsResource = await fetchWithErrorHandling(url)
        return res
}

export async function getShopList(shopListId: string): Promise<ShopListResource> {
    const url = `${HOST}/api/shoplist/${shopListId}`
        const res: ShopListResource = await fetchWithErrorHandling(url)
        return res
}

export async function getShopItem(shopItemId: string): Promise<ShopItemResource> {
    const url = `${HOST}/api/shopitem/${shopItemId}`
        const res: ShopItemResource = await fetchWithErrorHandling(url)
        return res
}