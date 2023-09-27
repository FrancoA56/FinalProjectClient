import style from './banner.module.css'

const Banner = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Logotipe</h1>
            <i class="fa-solid fa-rectangle-list"></i>
        </div>
    )
}

export default Banner