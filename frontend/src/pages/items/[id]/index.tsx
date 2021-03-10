import Image from "next/image";
import Layout from "@/components/Layout"
import axios from "axios";

const Item = ({ item }) => {
  console.log(item);
  return <Layout>
    <section className="container mx-auto px-6 md:px-8 lg:px-4 xl:px-0 max-w-screen-lg">
      <div className="grid grid-cols-10 space-x-4 space-y-4 bg-white rounded shadow-sm">
        <div className="col-span-6">
          <Image
            width={900}
            height={900}
            className="absolute object-cover"
            src={item.thumbnail} />
        </div>
        <div className="col-span-4 flex flex-col">
          <span className="inline-block text-sm mb-4">Nuevo ⋅ {item.sold_quantity} vendidos</span>
          <h1 className="text-2xl mb-6 mr-6">{item.title}</h1>
          <span className="inline-block text-4xl mb-6">${item.price.toString().replace(/(.)(?=(\d{3})+$)/g,'$1,')}</span>
          <button className="px-4 py-2 bg-blue text-white w-60 rounded">Comprar</button>
        </div>
        <div className="col-span-6 pb-10">
          <h2 className="text-2xl mb-4">Description</h2>
          <p dangerouslySetInnerHTML={{ __html: item.description.plain_text }}></p>
        </div>
      </div>
    </section>
  </Layout> 
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const item = await axios.get<any, any>(`http://localhost:3001/api/items/${id}`);
  
  return {
    props: {
      item: item?.data?.item,
    },
  };
}

export default Item;