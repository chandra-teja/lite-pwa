import Item from "./Item";

const Dummy_Items = [
    {
      itemId: "1",
      title: "Goat - Boneless",
      description:
        "Chunky, even pieces of fat-trimmed, boneless meat from hind legs",
      wt: "500gms",
      cost: " 779 Rs",
      image : "https://images.pexels.com/photos/7330297/pexels-photo-7330297.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      itemId: "2",
      title: "Chicken - Boneless cubes",
      description: "Skinless and boneless cut chicken",
      wt: "450gms",
      cost: " 225 Rs",
      image : "https://images.pexels.com/photos/6763662/pexels-photo-6763662.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      itemId: "3",
      title: "Tender Spring Chicken",
      description: "A Whole spring chicken is cut into meaty pieces",
      wt: "800gms",
      cost: " 214 Rs",
      image : "https://images.pexels.com/photos/3688/food-dinner-lunch-chicken.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
  ];
function ItemList() {
  
  return (
    <div>
        <h1>Items</h1>
      {Dummy_Items.map((item) => (
          //<h1>map</h1>
        <Item
          key={item.itemId}
          title={item.title}
          description={item.description}
          wt={item.wt}
          cost={item.cost}
          image = {item.image}
        />
      ))}
    </div>
  );
}
export default ItemList;
