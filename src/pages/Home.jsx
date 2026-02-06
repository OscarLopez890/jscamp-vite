import { useRouter } from "../hooks/useRouter.jsx";

export function Home() {
    const { navigateTo } = useRouter();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const searchTerm = formData.get("search");

        const url = searchTerm ? `/search?text=${encodeURIComponent(searchTerm)}` : '/search';

        navigateTo(url);
    };

  return (
    <main className="main-index">
        <section>
            <img src="src/ImagenFondo.jpg" width="200" />
            <h1>Encuentra tu próximo trabajo como desarrollador</h1>
            <p>Unete a la comunidad mas grande de desarrolladores y encuentra tu proxima oportunidad.</p>
            <form role="search" onSubmit={handleSubmit}>
                <div>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                    <input 
                        type="text" 
                        required 
                        placeholder="Buscar empleos por titulo habilidad o empresa..." 
                        name="search"
                    />
                    <button type="submit">Buscar</button>
                </div>
            </form>
        </section>

        <section>
            <header>
                <h2>¿Por qué DevJobs?</h2>
                <p>DevJobs es la plataforma líder para encontrar empleos en el sector tecnológico. Con miles de ofertas actualizadas diariamente, te conectamos con las mejores empresas que buscan talento como el tuyo.</p>
            </header>
            <footer>
                <article>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-affiliate"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275" /><path d="M11.683 12.317l5.759 -5.759" /><path d="M5.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" /><path d="M18.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" /><path d="M18.5 18.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" /><path d="M8.5 15.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0" /></svg>
                    <h3>Conecta con las mejores empresas</h3>
                    <p>Trabaja con empresas innovadoras y de renombre en la industria tecnológica. Desde startups hasta grandes corporaciones, DevJobs te ofrece acceso a una amplia gama de oportunidades laborales.</p>
                </article>
                <article>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-users"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg>
                    <h3>Encuentra el trabajo de tus sueños</h3>
                    <p>Explora una amplia variedad de ofertas de empleo en desarrollo web, móvil, backend, frontend y más. Filtra por ubicación, tipo de contrato y nivel de experiencia para encontrar la oportunidad perfecta.</p>
                </article>
                <article>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-cash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 15h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v3" /><path d="M7 9m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" /><path d="M12 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /></svg>
                    <h3>Obtén el salario que te mereces</h3>
                    <p>Obtén el salario que te mereces con nuestra calculadora de salarios</p>
                </article>
            </footer> 
        </section>
    </main>
  )
}