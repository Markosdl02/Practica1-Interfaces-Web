import { Handlers, PageProps } from "$fresh/src/server/types.ts";
import { FreshContext } from "$fresh/server.ts";
import Axios from "npm:axios";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext) => {
    const { id } = ctx.params;
    const llamada = await Axios.get(
      `https://filmquotes.deno.dev/${id}`,
    );
    const citasPelicula = llamada.data;
    return ctx.render(citasPelicula);
  },
};

const Page = (props: PageProps) => {
  const citasPelicula = props.data;
  return (
    <div className="container">
      <h1 className="welcome-title">Bienvenidos</h1>
      <img src="planeta1.gif" alt="Planet 1" className="planet-img planet1" />
      <img src="planeta2.gif" alt="Planet 2" className="planet-img planet2" />
      <img src="planeta3.webp" alt="Planet 3" className="planet-img planet3" />
      <img src="estrella.gif" alt="Estrella" className="estrella-estrella1" />
      
      <div className="animated-box">
        <p className="centered-text">{citasPelicula}</p>
        <button>Mas color!!!</button>
      </div>
      <a className="reload-button" href="/">
        <span className="planet"></span>
        NUEVA FRASE
      </a>
      <div className="rocket-container top-left">
        <img src="Cohete.gif" alt="Rocket" className="rocket" />
      </div>
      <div className="rocket-container top-right">
        <img src="Cohete.gif" alt="Rocket" className="rocket" />
      </div>
      <div className="rocket-container bottom-left">
        <img src="Cohete.gif" alt="Rocket" className="rocket" />
      </div>
      <div className="rocket-container bottom-right">
        <img src="Cohete.gif" alt="Rocket" className="rocket" />
      </div>
      <a class="rotate-button"  href="https://www.fotogramas.es/noticias-cine/g538280/las-frases-de-cine-mas-populares-de-la-historia/">
        Mas frases historicas del cine
      </a>
      <a class="publicidad-button"  href="/publicidad">
        Spam!!!
      </a>
      
    </div>
  );
};

export default Page;
