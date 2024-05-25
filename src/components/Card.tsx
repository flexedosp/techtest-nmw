
interface Props {
  SKU: string;
  dimension: [];
  name: string;
  product: string;
  size: string;
  createdAt: string;
  updatedAt: string;
  weight: string;
}

const Card = (prop: Props) => {
  // https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg
// console.log(prop.product)
const dateUpdate = new Date(prop.updatedAt);
const year = dateUpdate.getFullYear();
const month = String(dateUpdate.getMonth() + 1).padStart(2, "0"); // Bulan dimulai dari 0
const day = String(dateUpdate.getDate()).padStart(2, "0");

const dateString = `${year}-${month}-${day}`;
  return (
    <>
     <div className="card flex justify-center w-96 bg-base-100 shadow-xl">
  <figure><img src={prop.product} alt="Produk NMW" /></figure>
  <div className="card-body">
    <h2 className="text-2xl font-semibold">{prop.name}</h2>
    <p>SKU : {prop.SKU}</p>
    <p>Dimensi : {prop.dimension.length} cm x {prop.dimension.width} cm x {prop.dimension.height} cm </p>
    <p>Ukuran : {prop.size}</p>
    <p className="mt-2 text-xs">Data telah diperbaharui : {dateString}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Beli</button>
    </div>
  </div>
</div>
    </>
  );
};

export default Card;
