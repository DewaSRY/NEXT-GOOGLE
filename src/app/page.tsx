/* eslint-disable @next/next/no-img-element */
import HomeHeader from "@/Component/HomeHeader";
import styles from "./page.module.scss";
import HomeSearch from "@/Component/HomeSearch";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main className={styles.body}>
        <img
          width="300"
          height="100"
          src="https://th.bing.com/th/id/R.38aabe0613c4f17945cee40327ac367e?rik=mt2VM9zlD1xy%2bg&riu=http%3a%2f%2forig10.deviantart.net%2f6d95%2ff%2f2015%2f247%2fb%2f9%2fgoogle_2015_logo_high_resolution_png_by_jovicasmileski-d98chn1.png&ehk=lG6D9pljW2Xelus7LJtZjwHHjImg8kBuSVK6TAdwRhk%3d&risl=&pid=ImgRaw&r=0"
          alt="google"
        />
        <HomeSearch />
      </main>
    </>
  );
}
