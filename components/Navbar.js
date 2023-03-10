import Image from "next/image";
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>JE COMMANDE</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Accueil</li>
          <li className={styles.listItem}>Pizzas</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/logo.jpg" alt="" width="110" height="70" border="5" />
          <li className={styles.listItem}>Evénéments</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width="30" height="30" />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  )
}
