export const store_data = "store_data";

export function storeTextData(payload) {
console.log("payloaddd",payload)
    return {
        type: store_data,
        payload: payload
    }
}