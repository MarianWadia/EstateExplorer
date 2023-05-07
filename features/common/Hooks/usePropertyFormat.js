export const usePropertyFormat = (property) =>{
    const address = property.location.map((item)=>item.name).join(", ");
    const coverPhoto = property.coverPhoto.url;
    const propertyType = `${property.category[0].name} ${property.category[1].name}`;
    // *if property.price is 12345.6789, the resulting price string will be "$12,346".
    const price = property.price.toLocaleString("en-Us", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    });
    const rooms = property.rooms;
    const title = property.title;
    const baths = property.baths;
    const purpose = property.purpose;
    const sqSize = property.area.toFixed(2);
    const externalID = property.externalID
    return{
        address,
        coverPhoto,
        propertyType, 
        price,
        title,
        rooms,
        baths,
        purpose,
        sqSize,
        externalID,
    }
}