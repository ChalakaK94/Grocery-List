import SingleItem from "./SIngleItem";

export default function ItemsList({items}){
    return(
        <div >
            <h3>Item List</h3>
            {items.map(item=>(
                <SingleItem item={item} key={item.id}/>
            ))}
           

        </div>
    )
}