export default function AddItem(){
    return(
        <div>
            <form  className="add-item">
                <div>
                    <label htmlFor="">Item Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Quantity</label>
                    <select >
                        <option >1</option>
                        <option >2</option>
                        <option >3</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Price</label>
                    <input type="number" />
                </div>
                <div>
                    <button className="btn">Add Item</button>
                </div>
            </form>

        </div>
    )
}