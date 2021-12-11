import Link from "next/link";
import Layout from "../components/layout/Layout";

const custom404 = () => (
  <Layout title="Page Not Found">
    <div className="text-center">
      <h1 className="display-1">404</h1>
      <p>
        Esta pagina no existee. Por favor retornar a{" "}
        <Link href="/">
          <a>Inicio</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default custom404;