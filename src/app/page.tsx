// pages/index.tsx
import { Quiz1 } from '../components/Quiz1';
import Quiz2 from '../components/Quiz2';
import Quiz3 from '../components/Quiz3';
import Quiz4 from '../components/Quiz4';
import ProductTable from "../components/ProductTable";


export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {/* <Quiz1 />
      <Quiz2 />
      <Quiz3 />
      <Quiz4 /> */}
      <ProductTable />
    </div>
  );
}
