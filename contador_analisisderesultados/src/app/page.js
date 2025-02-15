import styles from "./page.module.css";
import Contar from "@/components/Contador"
export default function Home() {
 return (
 <main className={styles.main}>
 <div className="App">
 <div>
    <p>
      Este es nuestro contador
    </p>
    <Contar></Contar>
 </div>
 </div>
 </main>
 );
}
