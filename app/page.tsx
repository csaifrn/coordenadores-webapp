import { Button } from "@/components/ui/button";

const PageHome = () => (<Button className="auth-button" >entrar</Button>);
const PageAutenticar = () => (<Button className="auth-button" >autenticar com suap</Button>);
const estaAutenticao = false;
const Page = () => (estaAutenticao ? <PageHome /> : <PageAutenticar />);

export default function Home() {
  return (
   
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-stone-600 text-white p-4">
        <h1 className="text-lg font-semibold">coordenadores</h1>
      </header>
    <div className="flex-grow flex justify-center items-center">
        {/* Quadrado com informações sobre o site */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 h-64">
          <h2 className="text-xl font-semibold mb-4">Sobre o Site</h2>
          <p className="text-gray-700 mb-4">
            O web app de coordenadores do IFRN centraliza e otimiza a gestão acadêmica.
          </p>
    
    <div className="container">
      <Page />
        </div>
      </div>
    </div>
  </div>
 );

}
