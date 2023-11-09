export default function CartItem({ item, functions }) {
  const { increaseItem, decreaseItem } = functions;
  return (
    <div key={item.id} className="flex justify-between border p-2">
      <img
        src={item.url}
        alt=""
        className="aspect-square object-contain w-1/2"
      />
      <div className="flex justify-between flex-col">
        <div className="flex gap-4 justify-between">
          <p className="uppercase underline">{item.name}</p>
          <p>${item.price}</p>
        </div>
        <div className="flex justify-between p-2 ">
          <div className="flex justify-between gap-4">
            <button onClick={() => increaseItem(item)} className="px-3 border">
              +
            </button>
            <div>{item.quantity}</div>
            <button onClick={() => decreaseItem(item)} className="px-3 border">
              -
            </button>
          </div>
          <button>delete</button>
        </div>
      </div>
    </div>
  );
}
