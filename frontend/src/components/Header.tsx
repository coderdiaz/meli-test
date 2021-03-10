import { useRouter } from "next/router";
import Image from "next/image";
import { useForm } from "react-hook-form";

const Header = () => {
  const router = useRouter();
  const { register, setValue, handleSubmit } = useForm();

  const onSubmit = (data) => {
    router.push({
      pathname: "/items",
      query: { q: data.search }
    });
  }

  setValue('search', router.query.q);

  return <header className="bg-yellow py-3">
    <div className="container mx-auto px-6 md:px-8 lg:px-4 xl:px-0 max-w-screen-lg">
      <div className="flex justify-between items-center">
        <div className="inline-flex flex-shrink-0 mr-5">
          <Image width={58} height={36} src="/images/logotype.png" />
        </div>
        <form className="flex-auto" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex rounded-md">
            <input
              ref={register}
              name="search"
              type="text"
              className="w-full py-2 px-3 rounded-none rounded-l-md outline-none"
              placeholder="Nunca dejes de buscar" />
            <span className="inline-flex items-center px-3 rounded-r-md border-gray-300 bg-gray-200 text-gray-400 text-sm">
              <svg width={18} height={18} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>
        </form>
      </div>
    </div>
  </header>;
}

export default Header;
