import style from "./banner.module.css";

const Banner = () => {
  return (
    <div className={style.container}>

      <div className={style.img}> image </div>

      <h1 className={style.title}>Brand</h1>
      <i class="fa-brands fa-lastfm"></i>
    </div>
  );
};

export default Banner;
