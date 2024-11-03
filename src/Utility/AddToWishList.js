const getStoreWishList = ()=>{
    // wish-list
    const wishListStr = localStorage.getItem('wish-list');
    if(wishListStr){
        const wishList = JSON.parse(wishListStr);
        return wishList;
    }
    else{
        return [];
    }
}

const addToWishList = (id)=>{
    const wishList = getStoreWishList();
    if(wishList.includes(id)){
        // already exist. do not add it
        console.log(id, 'already exist in the wishList');
    }
    else{
        wishList.push(id);
        const wishListStr = JSON.stringify(wishList);
        localStorage.setItem('wish-list', wishListStr);
    }
}

export {addToWishList, getStoreWishList};