import styles from "./ProfileCard.module.css";

const ProfileCard = ({}) => {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.img} src="./assests/profile.png" alt="" />
        <h1 className={styles.userName}>Meena S</h1>
        <div className={styles.userCard}>
          <text className={styles.text}>Bio: Mobile App Developer </text>
          <text className={styles.text}>Contact info: xxxyyyyzz</text>
          <text className={styles.text}>Experience: 6 months</text>
          <text className={styles.text}>Inspirations: virat kholi</text>
        </div>
        <button className={styles.viewMoreBtn} onClick={()=>{}}>View Profile</button>
      </div>
    </>
  );
};
export default ProfileCard;
