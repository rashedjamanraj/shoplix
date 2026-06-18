import Banner from "@/components/Banner";
import Header from "@/components/header/Header";
import { getData } from "@/helpers";

  

export default async function Home() {
  const endpoint = 'https://dummyjson.com/products'
  const products = await getData(endpoint);
  

  return (
    <main>
      <Banner />
    </main>
  );
}
