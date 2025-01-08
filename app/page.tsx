import { Button } from "@/components/ui/button";

const PageHome = () => (<h1>bem vindo de volta</h1>);
const PageAutenticar = () => (<Button>autenticar com suap</Button>);
const estaAutenticao = false;
const Page = () => (estaAutenticao ? <PageHome /> : <PageAutenticar />);

export default function Home() {
  return (
    <div>
      <Page />
    </div>
  );
}
