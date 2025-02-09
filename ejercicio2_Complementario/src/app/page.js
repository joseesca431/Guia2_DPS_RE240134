import styles from "./page.module.css";

const Equipos = ({ equipos }) => {
  return (
    <div className={styles.container__list}>
      <h2 className={styles.title}>Equipos de Fútbol</h2>

      {equipos.map((equipo) => (

        <div key={equipo.id}>
          <h3 className={styles.nameclub}>{equipo.nombre}</h3>
          <div className={styles.cardContainer}>
            {equipo.plantilla.map((jugador) => (
              <div className={styles.card} key={jugador.id}>
                <img src={jugador.imagen} alt={jugador.nombre} className={styles.image} />
                <div className={styles.cardContent}>
                  <strong>{jugador.nombre}</strong>
                  <p>Altura: {jugador.altura}m</p>
                  <p>Peso: {jugador.peso}Kg</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      ))}
    </div>
  );
};

export default function Home() {
  // Datos de los equipos con imágenes agregadas
  const equiposData = [
    {
      id: 1,
      nombre: "Real Madrid",
      plantilla: [
        { id: 101, nombre: "Eden Hazard", altura: 1.75, peso: 74, imagen: "/edenhazard.jpg" },
        { id: 102, nombre: "Gonzalo García", altura: 1.82, peso: 74, imagen: "/gonzalo.jpg" },
        { id: 103, nombre: "Karim Benzema", altura: 1.85, peso: 81, imagen: "/karim.jpg" },
      ],
    },
    {
      id: 2,
      nombre: "Barcelona",
      plantilla: [
        { id: 201, nombre: "Marc-André ter Stegen", altura: 1.75, peso: 74, imagen: "/terstegen.jpg" },
        { id: 202, nombre: "Iñigo Martínez", altura: 1.82, peso: 74, imagen: "/martinez.jpg" },
        { id: 203, nombre: "Gavi", altura: 1.85, peso: 81, imagen: "/gaby.jpg" },
      ],
    },
    {
      id: 3,
      nombre: "Atletico de Madrid",
      plantilla: [
        { id: 301, nombre: "Antoine Griezmann", altura: 1.76, peso: 74, imagen: "/griezmann.jpg" },
        { id: 302, nombre: "Alexander Sorloth", altura: 1.95, peso: 80, imagen: "/alexander.jpg" },
        { id: 303, nombre: "Jan Oblak", altura: 1.88, peso: 79, imagen: "/janoblak.jpg" },
      ],
    },
    {
      id: 4,
      nombre: "Paris Saint German",
      plantilla: [
        { id: 201, nombre: "Ousmane Dembele", altura: 1.78, peso: 79, imagen: "/dmbl.jpg" },
        { id: 202, nombre: "Marquinhosx", altura: 1.83, peso: 80, imagen: "/marquinhos.jpg" },
        { id: 203, nombre: "Gianluigi Donnarumma", altura: 1.96, peso: 86, imagen: "/gia.jpg" },
      ],
    },
  ];

  return (
    <main className={styles.main}>
      <div>
        <h1>Mi Aplicación de Fútbol</h1>
        <Equipos equipos={equiposData} />
      </div>
    </main>
  );
}
