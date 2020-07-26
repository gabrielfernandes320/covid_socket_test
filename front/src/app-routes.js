import { withNavigationWatcher } from "./contexts/navigation";
import { HomePage, DisplayDataPage, ProfilePage } from "./pages";

const routes = [
  {
    path: "/chat",
    component: ProfilePage,
  },
];

export default routes.map((route) => {
  return {
    ...route,
    component: withNavigationWatcher(route.component),
  };
});
