import { Home, Products, Recipes } from "@/pages";
import {SiHungryjacks } from 'react-icons/si'
import {ImHome} from 'react-icons/im'
import {VscLibrary} from 'react-icons/vsc'

export const routes = [
  {
    icon: ImHome,
    name: "Inicio",
    path: "/home",
    element: <Home />,
  },
  {
    icon: SiHungryjacks,
    name: "Produtos",
    path: "/products",
    element: <Products />,
  },
  {
    icon: VscLibrary,
    name: "Receitas",
    path: "/recipes",
    element: <Recipes />,
  },
  
];

export default routes;
