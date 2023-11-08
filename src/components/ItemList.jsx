import SingleItem from "./SIngleItem";

export default function ItemsList({items}){
    if(!items.length) return <h3 style={{textAlign: 'center'}}>Please add items</h3>

    const totalPrice = items.reduce((acc,item)=> {
        return (acc = acc+ item.price * item.quantity)
    },0)

    return(
        <div >
            <h3>Item List</h3>
            {items.map(item=>(
                <SingleItem item={item} key={item.id}/>
            ))}

            <div className="total">Total Price:${totalPrice}</div>
           

        </div>
    )
}