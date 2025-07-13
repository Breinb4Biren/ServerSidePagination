const getItems = "SELECT * FROM items ORDER BY id";
const getItemsPaginated = "SELECT * FROM items ORDER BY id LIMIT $1 OFFSET $2";
const countItems = "SELECT COUNT(*) FROM items";

export default {
    getItems,
    getItemsPaginated,
    countItems
};
