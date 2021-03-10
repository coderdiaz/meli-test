import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import axios from 'axios';

const SearchPage = ({ items }) => {
  return <Layout>
    <section className="container mx-auto px-6 md:px-8 lg:px-4 xl:px-0 max-w-screen-lg">
      <div className="flex flex-col space-y-4">
        {items.map((item: any, index: number) => <div key={index} className="bg-white shadow-sm p-4 flex justify-between">
          <Link href={`/items/${item.id}`}>
          <a className="relative flex-shrink-0 mr-4 w-45">
            <Image
              width={180}
              height={180}
              className="absolute object-cover"
              src={item.thumbnail} />
          </a>
          </Link>
          <div className="flex flex-col flex-auto py-4">
            <span className="inline-block text-2xl mb-8">${item.price.toString().replace(/(.)(?=(\d{3})+$)/g,'$1,')}</span>
            <p className="w-3/6 leading-relaxed">{item.title}</p>
          </div>
          <div className="w-45 py-6 text-xs">{item?.address?.city_name}</div>
        </div>)}
      </div>
    </section>
  </Layout>;
}

export async function getServerSideProps({ query }) {
  const { q } = query; 
  const search = await axios.get<any, any>(`http://localhost:3001/api/items?q=${q}`);

  return {
    props: {
      items: search?.data?.data?.results
    },
  };
}

export default SearchPage;