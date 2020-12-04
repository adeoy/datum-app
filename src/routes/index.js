import Home from "../containers/Home";
import Tasks from "../containers/Tasks";
import ScrapedResults from "../containers/ScrapedResults";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
    title: "Home",
  },
  {
    path: "/tasks",
    component: Tasks,
    exact: true,
    title: "Tareas",
  },
  {
    path: "/scraped-results/:_id_task",
    component: ScrapedResults,
    exact: true,
    title: "Resultados",
    isNotInHeader: true,
  },
];

export default routes;
