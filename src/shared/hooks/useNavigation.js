import { useNavigate } from "react-router-dom";

export function useNavigation() {
  const navigate = useNavigate();

  const navigateTo = (page) => {
    // Map existing page keys to routes if necessary, or just expect paths
    const routes = {
      home: "/",
      about: "/about",
      solutions: "/solutions",
      impact: "/impact",
      community: "/community",
      contact: "/contact",
    };

    const path = routes[page] || page;
    navigate(path);
  };

  return { navigateTo };
}
