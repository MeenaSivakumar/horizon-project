import styles from './HeroComponent.module.css'
export const HeroComponent = ({})=>{

    return(
        
        <section className={styles.hero}>
            <h2 className={styles.herotitle}>Landing page Hero Section</h2>
            <text className={styles.herosubtitle}>The Landing Page hero section with Typography Scaling for responsive design</text>
            <button className={styles.btn}>Click to get more info</button>
        </section>
      
    )
}